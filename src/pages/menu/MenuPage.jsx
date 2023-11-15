import { PageBanner } from "../../components/PageBanner"
import bannerImg from '../../assets/menu/banner3.jpg'
import { Offer } from "./Offer"

const MenuPage = () => {
  return (
    <div>
      <PageBanner title='OUR MENU' description='Would you like to try a dish?' bgImg={bannerImg}/>
      <Offer/>
    </div>
  )
}

export default MenuPage