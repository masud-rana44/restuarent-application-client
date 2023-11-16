import { Button } from "./Button";

export const FoodCard = ({ item }) => {
  const { name, image, recipe} = item;

  const handleAddToCart = () => {
    console.log('Add to cart')
  }

  return (
    <div className="bg-gray1">
      <img src={image} alt={`Image of ${name}`} className="w-full object-cover"/>
      <div className="p-4">
        <h4 className="text-center font-semibold text-xl text-dark1 mb-2">{name}</h4>
        <p className="text-dark text-sm mb-6">{recipe}</p>
        <div className="text-center">
          <Button onClick={handleAddToCart} className='text-sm text-[#BB8506] bg-[#E8E8E8] border-[#BB8506] hover:bg-[#111827] hover:text-[#E8E8E8] hover:border-[#111827] transition' label='Add to Cart'/>
        </div>
      </div>
    </div>
  )
}
