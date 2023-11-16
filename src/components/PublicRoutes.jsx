import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/authContext"
import { PageLoader } from "./PageLoader"

export const PublicRoutes = ({ children }) => {
  const { user, isLoading } = useAuth()

  if (isLoading) return <PageLoader/>

  if(user) <Navigate to="/"/>
  
  return children;
}
