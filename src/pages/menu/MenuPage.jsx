import { PageBanner } from "../../components/PageBanner"
import bannerImg from '../../assets/menu/banner3.jpg'
import { Offer } from "./Offer"
import { Deserts } from "./Deserts"
import { Pizza } from "./Pizza"
import { Salads } from "./Salads"
import { Soups } from "./Soups"
import { PageTitle } from "../../components/PageTitle"
import { useMenu } from "../../hooks/useMenu"
import { Loader2 } from "lucide-react"

const MenuPage = () => {
  const { menus, isPending } = useMenu()

    if(isPending) return <div className="w-full my-28 flex items-center justify-center">
    <Loader2 className="animate-spin text-primary"/>
  </div>

  const deserts = menus.filter(item => item.category === 'dessert')
  const pizza = menus.filter(item => item.category === 'pizza')
  const salads = menus.filter(item => item.category === 'salad')
  const soups = menus.filter(item => item.category === 'soup')

  return (
    <div>
      <PageTitle title='Menu | Bistro Boss'/>
      <PageBanner title='OUR MENU' description='Would you like to try a dish?' bgImg={bannerImg}/>
      <Offer/>
      <Deserts items={deserts.slice(0, 6)}/>
      <Pizza items={pizza.slice(0, 6)}/>
      <Salads items={salads.slice(0, 6)}/>
      <Soups items={soups.slice(0, 6)}/>
    </div>
  )
}

export default MenuPage