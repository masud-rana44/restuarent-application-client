import { useQuery } from "@tanstack/react-query"
import { useAxios } from "./useAxios"
import { useAuth } from "../contexts/authContext"

export const useOrderByUser = () => {
  const axiosSecure = useAxios()
  const { user } = useAuth()

  const { data: orders = [], error, isPending, refetch} = useQuery({
    queryKey: ["order", user?.email],
    queryFn: async() => {
      const res = await axiosSecure.get(`/orders/${user?.email}`)
      return res.data;
    }
  })

  return { orders, error, isPending, refetch}
}
