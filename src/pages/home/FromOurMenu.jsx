import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { MenuItems } from "../../components/MenuItems"
import { SectionHeading } from "../../components/SectionHeading"
import { useMenuData } from "../../hooks/useMenuData"

export const FromOurMenu = () => {
  const navigate = useNavigate()
  const { menu }= useMenuData()

  return (
    <div className="mt-20">
      <SectionHeading title='FROM OUR MENU' subtitle='---Check it out---'/>
      <MenuItems items={menu.slice(0, 6)}/>
      <div className="text-center mt-8">
        <Button onClick={() => navigate('/menu')} label='View Full  Menu'/>
      </div>
    </div>
  )
}
