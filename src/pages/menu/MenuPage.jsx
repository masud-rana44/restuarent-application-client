import { PageBanner } from "../../components/PageBanner"
import bannerImg from '../../assets/menu/banner3.jpg'
import { Offer } from "./Offer"
import { useMenuData } from "../../hooks/useMenuData"
import { Deserts } from "./Deserts"
import { Pizza } from "./Pizza"

const MenuPage = () => {
  const { menu } = useMenuData()

  const deserts = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')

  return (
    <div>
      <PageBanner title='OUR MENU' description='Would you like to try a dish?' bgImg={bannerImg}/>
      <Offer/>
      <Deserts items={deserts.slice(0, 6)}/>
      <Pizza items={pizza.slice(0, 6)}/>
    </div>
  )
}

export default MenuPage