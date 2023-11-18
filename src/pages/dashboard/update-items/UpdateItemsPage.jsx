import { useParams } from "react-router-dom"
import { SectionHeading } from "../../../components/SectionHeading"
import { AddOrUpdateItemForm } from "../AddOrUpdateItemForm"
import { useQuery } from "@tanstack/react-query"
import { useAxiosPublic } from "../../../hooks/useAxiosPublic"
import { PageLoader } from "../../../components/PageLoader"
import ErrorPage from "../../ErrorPage"

const UpdateItemsPage = () => {
  const {id} = useParams()
  const axiosPublic = useAxiosPublic()

  const { data: menu, isPending } = useQuery({
    queryKey: ['item', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/menus/${id}`)
      return res.data 
    }
  })

  if(isPending) return <PageLoader/>
  if(!menu) return <ErrorPage/>

  return (
        <div className="px-16 py-6 bg-white min-h-screen">
      <SectionHeading title='UPDATE AN ITEM' subtitle="---Something new?---"/>
      <AddOrUpdateItemForm item={menu}/>
    </div>
  )
}

export default UpdateItemsPage