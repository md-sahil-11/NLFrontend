import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import routes from "../../routes";
import AuthService from "../../services/AuthService";
import AppService from "../../services/AppService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const service = AuthService();
  const appService = AppService();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([])
  const [app, setApp] = useState({})
  const [apps, setApps] = useState([])
  const [tasks, setTasks] = useState([])
  const [token, setToken] = useLocalStorage("token", "");
  const [loading, setLoading] = useState(true);

  // helper function
  const loadDataHelper = (data) => {
    setUser(data);
    setToken(data["token"]);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    if (user === null && token && token !== "") {
      getUser()
    }
    setLoading(false);
    return () => setLoading(true);
  }, [children]);

  const getUser = async () => {
    try {
      const res = await service.getUserService();
      console.log(res.data);
      setUser(res.data);
    } catch (err) {}
  }


  const registerUser = async (data) => {
    setLoading(true);
    try {
      const res = await service.registerUserService(data);
      console.log(res.data);
      loadDataHelper(res.data.data)
      navigate(routes.home.path);
      toast.success("Sign up successful!")
    } catch (err) {
      toast.error("Something went wrong!")
      setLoading(false)
    }
  };

  const loginUser = async (data) => {
    setLoading(true);
    try {
      const res = await service.loginUserService(data);
      loadDataHelper(res.data.data)
      navigate(routes.home.path);
      toast.success("Sign in successful!")
    } catch (err) {
      toast.error("Invalid password or email!")
      setLoading(false)
    }
  };

  const logoutUser = async () => {
    const res = await service.logoutUserService();
    setUser(null);
    setToken("");
    setLoading(false);
    navigate(routes.signIn.path);
  };

  const getCategories = async () => {
    try {
      const res = await appService.getCategoriesService();
      setCategories(res.data.results)
    } catch (err) {}
  }

  const addApp = async (data) => {
    const res = await appService.addAppService(data);
    if (res) {
      toast.success("App added")
      navigate(routes.home.path)
    }
  }

  const listApps = async () => {
    try {
      const res = await appService.listAppsService();
      setApps(res.data.results)
    } catch (err) {setApps([])}
  }

  const getApp = async (id) => {
    try {
      const res = await appService.getAppService(id);
      console.log(res)
      setApp(res.data)
    } catch (err) {return setApp({})}
  }

  const getTasks = async (data) => {
    try {
      const res = await appService.getTasksService(data);
      setTasks(res.data.results)
    } catch (err) {}
  }

  const addTask = async (data) => {
    console.log(data)
    try {
      const res = await appService.addTaskService(data);
      toast.success("Congrats, Task completed!");
    } catch (err) {}
  }

  const addCategory = async (data) => {
    try {
      if (data === "") return 
      const res = await appService.addCategoryService(data);
      if (res) toast.success("Category added")
    } catch (err) {}
  }

  let authContextData = {
    user,
    loading,
    setLoading,
    categories,
    addCategory,
    app,
    apps,
    toast,
    tasks,
    getTasks,
    addTask,
    getUser,
    listApps,
    getApp,
    getTasks,
    getCategories,
    addApp,
    registerUser,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      <>
        {(!loading) ? children : <>Loading</>}
        <ToastContainer />
      </>
    </AuthContext.Provider>
  );
};
