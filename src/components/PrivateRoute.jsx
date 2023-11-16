import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/authContext"
import { PageLoader } from "./PageLoader"

export const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) return <PageLoader/>

  if (!user) return <Navigate to="/login" state={{ from: location }}/>
  
  return children;
}
