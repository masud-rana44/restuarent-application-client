import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"

export const DashboardLayout = () => {
  return (
    <div>
      <Sidebar/>
      <div className="pl-[260px]">
        <Outlet/>
      </div>
    </div>
  )
}
