import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../contexts/authContext"
import { useAxios } from "./useAxios"

export const useAdmin = () => {
  const { user } = useAuth()
  const axiosSecure = useAxios()

  const { data: isAdmin, isPending } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin?email=${user?.email}`)
      return res.data?.isAdmin || false;
    }
  })

  return { isAdmin, isPending }
}
