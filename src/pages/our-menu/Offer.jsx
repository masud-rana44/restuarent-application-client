import { useEffect, useState } from "react"
import { SectionHeading } from "../../components/SectionHeading"
import { MenuItem } from "../../components/MenuItem"

export const Offer = () => {
    const [ menu, setMenu] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await fetch('./menu.json')
      const data = await res.json()
      setMenu(data)
    }
    fetchMenu()
  }, [])

  const offeredMenu = menu.filter(item => item.category === 'offered')

  return (
    <>
     <SectionHeading title='Today&apos;s Offer' subtitle='Don&apos;t miss'/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4 mt-8">
          {offeredMenu.map(item => <MenuItem key={item._id} menu={item}/>)}
        </div>
        </>
  )
}
