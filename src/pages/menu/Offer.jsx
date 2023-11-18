import { SectionHeading } from "../../components/SectionHeading"
import { Container } from "../../components/Container"
import { MenuItems } from "../../components/MenuItems"
import { Button } from "../../components/Button"
import { useMenu } from "../../hooks/useMenu"
import { Loader2 } from "lucide-react"

export const Offer = () => {
  const { menus, isPending } = useMenu()


    if(isPending) return <div className="w-full my-28 flex items-center justify-center">
    <Loader2 className="animate-spin text-primary"/>
  </div>


  const offeredMenu = menus.filter(item => item.category === 'offered')

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
