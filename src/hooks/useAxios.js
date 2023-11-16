import axios from 'axios'

const axiosSecure = new axios.create({
  baseURL: 'http://localhost:5000'
})

export const useAxios = () => {
  return axiosSecure;
}
