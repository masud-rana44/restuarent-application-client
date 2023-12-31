
export const MenuItem = ({ item }) => {
  const { image, name, price,recipe} = item;

  return (
    <div className="flex items-center space-x-6">
      <img src={image} alt={`Image of ${name}`} className="h-20 w-20 object-cover rounded-[0px_200px_200px_200px]"/>
      <div className="space-y-1">
        <div className="flex items-center space-x-6">
          <h4 className="uppercase font-cinzel text-dark1">{name}------------</h4>
          <p className="text-yellow-500 font-medium">${price}</p>
        </div>
        <p className="text-dark">{recipe}</p>
      </div>
    </div>
  )
}
