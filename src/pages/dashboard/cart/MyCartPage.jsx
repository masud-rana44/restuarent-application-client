import Button from '@mui/material/Button';
import { PageLoader } from "../../../components/PageLoader"
import { SectionHeading } from "../../../components/SectionHeading"
import { useCart } from "../../../hooks/useCart"
import CartTable from "./CartTable"

const MyCartPage = () => {
  const { cart, isPending } = useCart()

  if(isPending) return <PageLoader/>

  const totalPrice = cart?.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="mx-16 py-6">
      <SectionHeading title='WANNA ADD MORE?' subtitle='---My Cart---'/>
      
      <div className="mt-10 bg-white p-10">
        <div className="text-2xl font-bold font-cinzel mb-10 flex justify-between uppercase">
          <p>Total Orders: {cart.length}</p>
          <p>Total Price: ${totalPrice}</p>
          <Button variant="contained" >PAY</Button>
        </div>

        <CartTable rows={cart}/>
      </div>
    </div>
  )
}

export default MyCartPage