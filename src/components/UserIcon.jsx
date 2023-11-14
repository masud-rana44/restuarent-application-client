import { UserCircle } from "lucide-react"
import { Link } from "react-router-dom"

export const UserIcon = () => {
  return (
    <div  className="cursor-pointer flex items-center space-x-2">
            <Link to="/login">Login</Link>
          <UserCircle className="w-6 h-6" />
    </div>
  )
}
