import { Outlet} from "react-router-dom"
import { Sidebar } from "./Sidebar"

export const DashboardLayout = () => {

  return (
    <div> 
      <Sidebar/>
      <div className="pl-[260px] bg-gray-100 min-h-screen">
        <Outlet/>
      </div>
    </div>
  )
}
