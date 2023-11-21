import Button from '@mui/material/Button';
import { PageLoader } from "../../../components/PageLoader"
import { SectionHeading } from "../../../components/SectionHeading"
import { useCart } from "../../../hooks/useCart"
import CartTable from "./CartTable"
import { Link } from 'react-router-dom';

const MyCartPage = () => {
  const { cart, isPending } = useCart()

  if(isPending) return <PageLoader/>
  
  if(cart.length === 0) return <p className="text-center text-xl font-bold font-cinzel text-dark h-96 flex items-center justify-center">No Items Found</p>

  const totalPrice = cart?.reduce((acc, item) => acc + parseFloat(item.price), 0)

  return (
    <div className="mx-16 py-6">
      <SectionHeading title='WANNA ADD MORE?' subtitle='---My Cart---'/>
      
      <div className="mt-10 bg-white p-10">
        <div className="text-2xl font-bold font-cinzel mb-10 flex justify-between uppercase">
          <p>Total Orders: {cart.length}</p>
          <p>Total Price: ${totalPrice}</p>
          <Link to='/dashboard/payment'>
            <Button disabled={totalPrice === 0} variant="contained" >PAY</Button>
          </Link>
        </div>

        <CartTable rows={cart}/>
      </div>
    </div>
  )
}

export default MyCartPage