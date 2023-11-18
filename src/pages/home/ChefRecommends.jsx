import { Loader2 } from "lucide-react"
import { Container } from "../../components/Container"
import { FoodCard } from "../../components/FoodCard"
import { SectionHeading } from "../../components/SectionHeading"
import { useMenu } from "../../hooks/useMenu"

export const ChefRecommends = () => {
  const { menus, isPending } = useMenu()

  if(isPending) return <div className="w-full my-28 flex items-center justify-center">
    <Loader2 className="animate-spin text-primary"/>
  </div>

  return (
    <Container className='mt-20'>
      <SectionHeading title='CHEF RECOMMENDS' subtitle='---Should Try---'/>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {menus.slice(2, 5).map(item => <FoodCard key={item._id} item={item}/>)}
      </div>
    </Container>
  )
}
