import { useQuery } from "@tanstack/react-query"
import { useAxios } from "./useAxios"

export const useUser = () => {
  const axiosSecure = useAxios()

  const { data: users = [], error, isPending, refetch: refetchUsersData} = useQuery({
    queryKey: ["users"],
    queryFn: async() => {
      const res = await axiosSecure.get('/users')
      return res.data
    }
  })

  return { users, error, isPending, refetchUsersData}
}
