import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useAxios } from "../hooks/useAxios";
import { Button } from "./Button";
import Swal from "sweetalert2";

export const FoodCard = ({ item }) => {
  const { _id, name, image, recipe, price} = item;
  const { user } = useAuth()
  const axiosSecure = useAxios()
  const navigate = useNavigate()
  const location = useLocation()

  const handleAddToCart = async() => {
    console.log('Add to cart')
    if(user && user?.email)  {

    const res = await  axiosSecure.post('/cart', {
        email: user.email,
        menuId: _id,
        name,
        image,
        price
      })
    
      if(res.data.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Successfully added!",
          showConfirmButton: false,
          timer: 1500
        });
      }

    } else {
          Swal.fire({
          title: "Login First?",
          text: "You won't be able to add this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', { state: { from: location } })
          }
        })
    }
  }

  return (
    <div className="bg-gray1">
      <div className="relative">
        <img src={image} alt={`Image of ${name}`} className="w-full object-cover"/>
        <div className="absolute top-3 right-3 bg-dark2 text-white font-semibold px-2 py-1">${price}</div>
      </div>
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
