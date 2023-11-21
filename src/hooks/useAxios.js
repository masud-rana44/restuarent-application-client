import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const axiosSecure = new axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})

export const useAxios = () => {
  const { logoutUser } = useAuth()
  const navigate = useNavigate()

  // Add a request interceptor
  axiosSecure.interceptors.request.use(config => {
    const token = localStorage.getItem('bistro-token')
    config.headers.authorization = `Bearer ${token}`
    return config
  }, error => {
    return Promise.reject(error)
  })

  // Add a response interceptor (401, 403)
  axiosSecure.interceptors.response.use(response => {
    return response
  }, async error => {
    const status = error?.response?.status
    if(status === 401 || status === 403)  {
      await logoutUser()
      navigate('/login')
    }
    return Promise.reject(error)
  })

  return axiosSecure;
}
