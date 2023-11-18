import { SectionHeading } from "../../../components/SectionHeading"
import { useMenu } from "../../../hooks/useMenu"
import MenuTable from "./MenuTable"
import { PageLoader } from "../../../components/PageLoader"

const ItemsPage = () => {
  const { menus, isPending } = useMenu()

  if(isPending) return <PageLoader/>

  return (
   <div className="mx-16 py-6">
      <SectionHeading title='MANAGE ALL ITEMS' subtitle='---Hurry Up!---'/>
        <div className="mt-10 bg-white p-10">
        <div className="text-2xl font-bold font-cinzel mb-10 flex justify-between uppercase">
          <p>Total Items: {menus.length}</p>
        </div>

        <MenuTable data={menus}/>
      </div>
    </div>
  )
}

export default ItemsPage