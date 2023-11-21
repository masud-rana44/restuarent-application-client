import { Button } from "@mui/material"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import Swal from "sweetalert2"
import { useCart } from "../../../hooks/useCart"
import { PageLoader } from "../../../components/PageLoader"
import { useEffect, useState } from "react"
import { useAxios } from "../../../hooks/useAxios"
import { useAuth } from "../../../contexts/authContext"
import { useNavigate } from "react-router-dom"

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [clientSecret, setClientSecret] = useState('')
  const { user } = useAuth()
  const { cart, isPending, error, cartDataRefetch } = useCart()
  const axiosSecure = useAxios()
  const navigate = useNavigate()

  const totalPayable = cart?.reduce((total, item) => total + parseFloat(item.price), 0)

  useEffect(()  => {
    const fetchClientSecret = async () => {
      const response = await axiosSecure.post('/create-payment-intend', { total: totalPayable}) 
      setClientSecret(response.data.clientSecret)
    }

    fetchClientSecret()
  }, [totalPayable, axiosSecure])

    // handle stripe payment
  const handleSubmit = async (event) => {
    event.preventDefault()

    // If, no stipe or elements, return
    if (!stripe || !elements) return;

    // get the card information
    const card = elements.getElement(CardElement)

    // if card is not valid, return
    if (!card) return;

    // create a payment method
    const { error} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if(error) {
      console.log('Payment Error: ', error)

      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.message || "Something went wrong!",
      });
    } 

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user?.displayName || 'Anonymous',
          email: user?.email || 'Anonymous'
        }
      },

    })

    if(confirmError) {
      console.log('Confirm Payment Error: ', confirmError)

      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: confirmError?.message || "Something went wrong!",
      });
    }
    
    if(paymentIntent.status === 'succeeded') {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${totalPayable}$ is successfully paid!`,
            showConfirmButton: false,
            timer: 1500
          });

          // save the order in database
          const order = {
            userId: user?.uid,
            email: user?.email,
            cartIds: cart.map(item => item._id),
            menuIds: cart.map(item => item.menuId),
            total: totalPayable,
            paymentId: paymentIntent.id,
            status: 'pending',
            createdAt: new Date().toISOString(),
          }

          

          try {
            const res = await axiosSecure.post('/orders', order)

            if(res.data.resultOrder.acknowledged) {
              cartDataRefetch()
              navigate('/dashboard/payment-history')
            }
          }catch (error) {
            console.log(error)
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: confirmError?.message || "Something went wrong!",
            });
          }
    }
  }

  if(isPending) return <PageLoader/>
  if(error) return <p className="text-red-500">{error?.message || "Something went wrong"}</p>

  return (
    <form onSubmit={handleSubmit} >
      <CardElement options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9d2b2b'
          }
        }
      }}/>

      <div className="mt-8">
        <Button disabled={ !clientSecret} type="submit" variant="contained" >
          Pay {totalPayable}$
        </Button>
      </div>
    </form>
  )
}

export default CheckoutForm