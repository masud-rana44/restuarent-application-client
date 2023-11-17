import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { Loader2 } from 'lucide-react'

export const ImageUpload = ({  setUrl}) => {
  const [isLoading, setIsLoading]  = useState()

  const handleImageUpload = async (event ) => {
    setIsLoading(true)
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset',  import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET)

    try {
      const res = await axios.post(import.meta.env.VITE_APP_CLOUDINARY_URL, formData)
      setUrl(res.data.secure_url)
    } catch (err) {
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err?.message || "Something went wrong!",
      });
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <div>
      {isLoading ? <Loader2 className="animate-spin"/> : <input disabled={isLoading} type="file" accept="image/*" onChange={handleImageUpload} />}
    </div>
  )
}
