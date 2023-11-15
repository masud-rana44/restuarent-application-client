import { PageBanner } from "../../components/PageBanner"

import bannerImg from '../../assets/shop/banner2.jpg'
import { PageTitle } from "../../components/PageTitle"
import { ShopTabs } from "./ShopTabs"

const ShopPage = () => {
  return (
    <div>
      <PageTitle title='Shop | Bistro Boss'/>
      <PageBanner title='OUR SHOP' description='Would you like to try a dish?' bgImg={bannerImg}/>
      <ShopTabs/>
    </div>
  )
}

export default ShopPage