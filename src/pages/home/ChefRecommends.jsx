import { Container } from "../../components/Container"
import { FoodCard } from "../../components/FoodCard"
import { SectionHeading } from "../../components/SectionHeading"
import { useMenuData } from "../../hooks/useMenuData"

export const ChefRecommends = () => {
  const { menu } = useMenuData()

  return (
    <Container className='mt-20'>
      <SectionHeading title='CHEF RECOMMENDS' subtitle='---Should Try---'/>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {menu.slice(2, 5).map(item => <FoodCard key={item._id} item={item}/>)}
      </div>
    </Container>
  )
}
