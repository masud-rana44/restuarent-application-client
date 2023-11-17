import { useQuery } from "@tanstack/react-query"
import { useAxios } from "./useAxios"
import { useAuth } from "../contexts/authContext"

export const useCart = () => {
  const axiosSecure = useAxios()
  const { user } = useAuth()

  const { data: cart = [], error, isPending, refetch: cartDataRefetch} = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async() => {
      const res = await axiosSecure.get(`/cart?email=${user?.email}`)
      return res.data || []
    }
  })

  return { cart, error, isPending, cartDataRefetch}
}
