import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/authContext"
import { useAdmin } from "../hooks/useAdmin"
import { PageLoader } from "./PageLoader"

export const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth()
  const { isAdmin, isPending: isAdminLoading } = useAdmin()
  const location = useLocation()

  if(isLoading || isAdminLoading) return <PageLoader/>

  if(!user || !isAdmin) return <Navigate to="/" state={{ from: location }} replace/>

  return children;
}
