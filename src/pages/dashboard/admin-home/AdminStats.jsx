import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../../../hooks/useAxios"
import { StatsBox } from "../StatsBox"

export const AdminStats = () => {
  const axiosSecure = useAxios()

  const {data, isPending} = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async() => {
      const res = await axiosSecure.get('/admin-stats')
      return res.data
    }
  })

  if(isPending) return <div>Loading...</div>  
  const statsData = Object.entries(data)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {statsData?.map((stats, index) => <StatsBox key={index} item={stats}/>)}
    </div>
  )
}
