import { AxiosInstance } from "../base";

const AuthApi = () => {
  const api = AxiosInstance("users")

  const getUser = async () => {
    console.log("======Get user======");
    const path = `account/get-user`
    return api.get(path);
  };

  const registerUser = async (data) => {
    console.log("======Register/Sign-up new user======");
    return api.post("account/register", data);
  };

  const loginUser = async (data) => {
    console.log("======Login user======");
    return api.post("account/login", data);
  };

  const logoutUser = async () => {
    console.log("======Logout user======");
    return api.post("account/logout");
  };

  const apis = {
    getUser,
    registerUser,
    loginUser,
    logoutUser,
  };

  return apis;
};

export default AuthApi;
