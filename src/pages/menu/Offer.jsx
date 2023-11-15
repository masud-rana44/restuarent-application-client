import { SectionHeading } from "../../components/SectionHeading"
import { useMenuData } from "../../hooks/useMenuData"
import { Container } from "../../components/Container"
import { MenuItems } from "../../components/MenuItems"
import { Button } from "../../components/Button"

export const Offer = () => {
  const { menu } = useMenuData()
  const offeredMenu = menu.filter(item => item.category === 'offered')

  return (
    <Container className='mt-20'>
     <SectionHeading title='Today&apos;s Offer' subtitle='Don&apos;t miss'/>
     <MenuItems items={offeredMenu}/>
     <div className='text-center mt-8' >
      <Button label='ORDER YOUR FAVORITE FOOD' />
     </div>
    </Container>
  )
}
