
export const StatsBox = ({ item }) => {
  const [title, value] = item;

  return (
    <div className="p-10 rounded-md">
      <div></div>
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p>{title}</p>
      </div>
    </div>
  )
}
