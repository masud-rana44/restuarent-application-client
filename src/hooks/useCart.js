import { useQuery } from "@tanstack/react-query"
import { useAxios } from "./useAxios"

export const useCart = () => {
  const axiosSecure = useAxios()

  const { data: cart, error, isPending, refetch: cartDataRefetch} = useQuery({
    queryKey: ["cart"],
    queryFn: async() => {
      const res = await axiosSecure.get("/cart")
      return res.data || []
    }
  })

  return { cart, error, isPending, cartDataRefetch}
}
