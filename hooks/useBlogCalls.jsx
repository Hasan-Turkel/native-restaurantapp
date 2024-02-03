import  axios  from 'axios'
import { useEffect, useState } from 'react'
import useAxios from "./useAxios"
import { useSelector } from 'react-redux'

const useBlogCalls = (navigation) => {
const { axiosWithToken } = useAxios()
const BASE_URL = "https://backend-restaurantapi.vercel.app" 
const { user } = useSelector((state) => state.auth)

const [loading, setLoading] = useState(true)
const [err, setErr] = useState()
const [data, setData] = useState([])

const getRestaurants = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/restaurants`);
    setData(data.data);
    // console.log(data.data);
  } catch (error) {
    // console.log(error);
  }
};
const getReservations = async () => {
  try {
    const { data } = await axiosWithToken(`/reservations`);
    setData(data.data);
    // console.log(data);
  } catch (error) {
    // console.log(error);
  }
};


  return {getRestaurants, data, getReservations }

}

export default useBlogCalls 
