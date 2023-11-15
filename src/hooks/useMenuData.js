import { useEffect, useState } from "react"

export const useMenuData = () => {
      const [ menu, setMenu] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await fetch('./menu.json')
      const data = await res.json()
      setMenu(data)
    }
    fetchMenu()
  }, [])

  return { menu }
}
