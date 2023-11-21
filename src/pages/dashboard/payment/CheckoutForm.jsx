import { Button } from "@mui/material"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import Swal from "sweetalert2"

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

    // handle stripe payment
  const handleSubmit = async (event) => {
    event.preventDefault()

    // If, no stipe or elements, return
    if (!stripe || !elements) return;

    // get the card information
    const card = elements.getElement(CardElement)
    console.log(card)

    // if card is not valid, return
    if (!card) return;

    // create a payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if(error) {
      console.log('Payment Error: ', error)

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.message || "Something went wrong!",
      });
    } else {
      console.log('Payment Success: ', paymentMethod)
    }
  }

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
        <Button type="submit" variant="contained" >
          Pay
        </Button>
      </div>
    </form>
  )
}

export default CheckoutForm