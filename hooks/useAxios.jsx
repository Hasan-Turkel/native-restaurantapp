import { useSelector } from "react-redux"
import axios from "axios"

const useAxios = () => {
  const { token } = useSelector((state) => state.auth)
// console.log(token);
  const axiosWithToken = axios.create({
    baseURL: "https://blogapp-fs-backend.vercel.app",
    headers: { Authorization: `Token ${token}` },
  })

  return { axiosWithToken}
}

export default useAxios