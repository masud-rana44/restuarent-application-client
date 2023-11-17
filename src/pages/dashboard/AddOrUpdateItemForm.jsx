import { FormRow } from "../../components/FormRow"
import { useForm } from "react-hook-form"
import { FormLayout } from "../../components/FormLayout"
import { Button } from "../../components/Button"
import { Utensils } from "lucide-react"

export const AddOrUpdateItemForm = () => {
  const { register, handleSubmit, formState: {errors}, reset} = useForm()

  const onSubmit = (data) => {
    const { name, category, price, recipe, image } = data;
  }

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} >
      <FormRow label='Recipe Name*' error={errors?.name?.message}>
        <input className="input" type="text" id="name" placeholder="Recipe Name" {...register('name', {
          required: 'Recipe name is required'
        })}/>
      </FormRow>

      <div className="flex items-center space-x-6">
        <FormRow label="Category*" error={errors?.category?.message}>
          <select className="input" id="category" {...register('category', {
          required: 'Category is required'
        })}>
            <option value={null}>Choose a category?</option>
            <option value="dessert">dessert</option>
            <option value="pizza">pizza</option>
            <option value="salad">salad</option>
            <option value="offered">offered</option>
            <option value="popular">popular</option>
          </select>
        </FormRow>

        <FormRow label="Price*" error={errors?.price?.message}>
          <input className="input" type="number" id="price" placeholder="Price" {...register('price', {
          required: 'Price is required'
          })}/>
        </FormRow>
      </div>

        <FormRow label="Recipe Details*" error={errors?.recipe?.message}>
          <textarea  className="input" rows={6} id="recipeDetails" placeholder="Recipe Details" {...register('recipe', {
          required: 'Recipe details is required'
          })}/>
        </FormRow>

        <FormRow label={`Recipe Image*`} error={errors?.image?.message}>
          <input id="image"  type="file" accept="image/*"  {...register('image', {
          required: 'Recipe image is required'
          })}/>
        </FormRow>
        <Button type='primary'><span>Add Item</span> <Utensils size={20}/></Button>
    </FormLayout>
  )
}
