import { SectionHeading } from "../../../components/SectionHeading"
import { PageLoader } from "../../../components/PageLoader"
import { useOrderByUser } from "../../../hooks/useOrderByUser"
import OrdersTable from "./OrdersTable"

const PaymentHistoryPage = () => {
  const { orders, isPending } = useOrderByUser()

  if(isPending) return <PageLoader/>

  if(orders.length === 0) return <p className="text-center text-xl font-bold font-cinzel text-dark h-96 flex items-center justify-center">No Items Found</p>

  return (
   <div className="mx-16 py-6">
      <SectionHeading title='PAYMENT HISTORY' subtitle='---At a Glance!---'/>
        <div className="mt-10 bg-white p-10">
        <div className="text-2xl font-bold font-cinzel mb-10 flex justify-between uppercase">
          <p>Total Orders: {orders.length}</p>
        </div>

         <OrdersTable data={orders}/>
      </div>
    </div>
  )
}

export default PaymentHistoryPage