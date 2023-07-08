import axios from "axios";
import { getItemFromLocalStorage, removeAllItemFromLocalStorage } from "../utils/localStorageUtil";
import { useNavigate } from "react-router-dom";
import routes from "../routes";

export const AxiosInstance = (service) => {
  const baseURL = `http://127.0.0.1:8000/api/${service}/`;
  const token = getItemFromLocalStorage("token", "");
  const navigate = useNavigate()

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: token ? "Token " + token : null,
      // "Content-Type": "application/json",
      "Content-Type": "multipart/form-data",
      accept: "application/json",
    },
  });

  axiosInstance.interceptors.response.use(
    response => {
      console.log("response-interceptor running")
      return response
    },
    error => {
      console.log("response-interceptor running")
      if (
        error.response.status === 401
      ) {
        removeAllItemFromLocalStorage()
        navigate(routes.signIn.path)
        return Promise.reject(error)
      }
    }
  )

  return axiosInstance;
};
