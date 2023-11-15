import { Cover } from "../../components/Cover"
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import { MenuItems } from "../../components/MenuItems"
import { Button } from "../../components/Button"

export const Pizza = ({ items }) => {
  return (
     <div>
      <Cover bgImg={pizzaBg} bgColor='#000000a2' textColor='#fff'
        className='mt-10 py-32' title='PIZZA' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
      <MenuItems items={items}/>
      <div className="text-center mt-8">
      <Button label='ORDER YOUR FAVORITE FOOD'/>
      </div>
    </div>
  )
}
