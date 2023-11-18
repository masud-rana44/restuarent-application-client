import { useQuery } from "@tanstack/react-query"
import { useAxiosPublic } from "./useAxiosPublic"

export const useMenu = () => {
  const axiosPublic = useAxiosPublic()

  const { data: menus = [], isPending, refetch: refetchMenus } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menus")
      return res.data
    }
  })

  return { menus, isPending, refetchMenus }
}
