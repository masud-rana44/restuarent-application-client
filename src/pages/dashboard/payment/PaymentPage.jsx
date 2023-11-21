import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import CheckoutForm from './CheckoutForm'
import { SectionHeading } from '../../../components/SectionHeading'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const PaymentPage = () => {
  return (
    <div className="mx-16 py-6">
      <SectionHeading title='PAY HERE' subtitle='---Secure Payment---'/>
      <div className='max-w-xl mx-auto mt-20'>
        <Elements stripe={stripePromise}>
        <CheckoutForm/>
      </Elements>
      </div>
    </div>
  )
}

export default PaymentPage