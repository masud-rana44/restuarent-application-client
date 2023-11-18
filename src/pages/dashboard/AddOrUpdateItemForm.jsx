import { FormRow } from "../../components/FormRow"
import {  useForm } from "react-hook-form"
import { FormLayout } from "../../components/FormLayout"
import { Button } from "../../components/Button"
import { Loader2, Utensils } from "lucide-react"
import { useAxiosPublic } from "../../hooks/useAxiosPublic"
import { useAxios } from "../../hooks/useAxios"
import Swal from "sweetalert2"
import { useState } from "react"

const imageBbUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_APP_IMAGEBB_API_KEY}`

export const AddOrUpdateItemForm = () => {
  const { register, handleSubmit, formState: {errors}, reset, } = useForm()
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxios()
  const [ isLoading, setIsLoading ] = useState(false)

  const onSubmit = async (data) => {
    setIsLoading(true)
    const { name, category, price, recipe, image } = data;

    // check all the values are there
    if (!name || !category || !price || !recipe || !image) {
      return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Required fields is missing!",
        });
    }

    // send the image to imageBb
    const formData = new FormData()
    formData.append('image', image[0])
    
    try {
      const res = await axiosPublic.post(imageBbUrl, formData)

      if(res.data?.data?.display_url) {
        //  add the item to the database
        const item = {
          name,
          category,
          price,
          recipe,
          image: res.data?.data?.display_url
        }

        const resMenu = await axiosSecure.post('/menus', item)
        if(resMenu.data.insertedId) {
          reset()
          Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Item added successfully!",
        });
        }
      }
    } catch (error) {
      Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error?.message || "Something went wrong!",
        });
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} >
      <FormRow label='Recipe Name*' error={errors?.name?.message}>
        <input disabled={isLoading} className="input" type="text" id="name" placeholder="Recipe Name" {...register('name', {
          required: 'Recipe name is required'
        })}/>
      </FormRow>

      <div className="flex items-center space-x-6">
        <FormRow label="Category*" error={errors?.category?.message}>
          <select disabled={isLoading} className="input" id="category" {...register('category', {
          required: 'Category is required'
        })}>
            <option value=''>Choose a category?</option>
            <option value="dessert">dessert</option>
            <option value="pizza">pizza</option>
            <option value="salad">salad</option>
            <option value="offered">offered</option>
            <option value="popular">popular</option>
          </select>
        </FormRow>

        <FormRow label="Price*" error={errors?.price?.message}>
          <input disabled={isLoading} className="input" type="number" id="price" placeholder="Price" {...register('price', {
          required: 'Price is required'
          })}/>
        </FormRow>
      </div>

        <FormRow label="Recipe Details*" error={errors?.recipe?.message}>
          <textarea disabled={isLoading}  className="input" rows={6} id="recipeDetails" placeholder="Recipe Details" {...register('recipe', {
          required: 'Recipe details is required'
          })}/>
        </FormRow>

        <FormRow label={`Recipe Image*`} error={errors?.image?.message}>
          <input disabled={isLoading} id="image"  type="file" accept="image/*"  {...register('image', {
          required: 'Recipe image is required'
          })}/>
        </FormRow>
        <Button disabled={isLoading} type='primary'><span>Add Item</span> {isLoading ? <Loader2 size={20} className="animate-spin"/> : <Utensils size={20}/>}</Button>
    </FormLayout>
  )
}
