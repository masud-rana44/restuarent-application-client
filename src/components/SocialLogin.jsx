import { Button } from "@mui/material"
import { useAuth } from "../contexts/authContext"
import Swal from "sweetalert2"
import { useLocation, useNavigate } from "react-router-dom"
import { useAxiosPublic } from "../hooks/useAxiosPublic"

export const SocialLogin = () => {
  const { signInWithGoogle } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()

  const to = location.state?.from?.pathname || '/'

  const handleGoogleSignIn = async () => {
    try {
      const userCred = await signInWithGoogle()
      if (userCred.user) {
        const user = userCred.user

        await axiosPublic.post('/users', {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          uid: user.uid,
          createdAt: new Date().toISOString()
        })


          Swal.fire({
              icon: "success",
              title: "You are successfully login!",
              showConfirmButton: false,
              timer: 1500
            });
            navigate(to)
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.message || "Something went wrong!",
      });
    }
  }

  return (
    <div className="mb-2 w-full text-center">
      <div>or</div>
      <Button onClick={handleGoogleSignIn} variant="contained" color="primary" className="w-full"> Google</Button>
    </div>
  )
}
