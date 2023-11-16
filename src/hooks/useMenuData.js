import { useEffect, useState } from "react"

export const useMenuData = () => {
      const [ menu, setMenu] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await fetch('http://localhost:5000/menus')
      const data = await res.json()
      setMenu(data)
    }
    fetchMenu()
  }, [])

  return { menu }
}
