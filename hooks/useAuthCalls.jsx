import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchFail, fetchStart, loginSuccess, registerSuccess, logoutSuccess } from "../features/authSlice";




const useAuthCalls = () => {
  const dispatch = useDispatch();
  const BASE_URL =  "https://backend-restaurantapi.vercel.app"

  const login = async (values) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login/`, values);
      dispatch(loginSuccess(data));
    
      
    //   console.log(data);
    } catch (error) {
    //   console.log(error.message);
      dispatch(fetchFail());
    
    }
  };

  const register = async (values) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/register/`, values);
      dispatch(registerSuccess(data));
      
      
    //   console.log(data);
    } catch (error) {
    //   console.log(error);
      dispatch(fetchFail());
      
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}/auth/logout/`);
      dispatch(logoutSuccess());
    
     
    } catch (error) {
      // console.log(error.message);
      dispatch(fetchFail());
     
    }
  };

  return { login, register, logout };
};

export default useAuthCalls;