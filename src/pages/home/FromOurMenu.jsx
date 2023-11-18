import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { MenuItems } from "../../components/MenuItems"
import { SectionHeading } from "../../components/SectionHeading"
import { useMenu } from "../../hooks/useMenu"
import { Loader2 } from "lucide-react"

export const FromOurMenu = () => {
  const navigate = useNavigate()
  const { menus, isPending }= useMenu()

    if(isPending) return <div className="w-full my-28 flex items-center justify-center">
    <Loader2 className="animate-spin text-primary"/>
  </div>

  return (
    <div className="mt-20">
      <SectionHeading title='FROM OUR MENU' subtitle='---Check it out---'/>
      <MenuItems items={menus.slice(0, 6)}/>
      <div className="text-center mt-8">
        <Button onClick={() => navigate('/menu')} label='View Full  Menu'/>
      </div>
    </div>
  )
}
