import axios from 'axios'

const axiosSecure = new axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})

export const useAxios = () => {
  return axiosSecure;
}
