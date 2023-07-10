import { AxiosInstance } from "../base";

const AppApi = () => {
  const api = AxiosInstance("applications");

  const getCategories = async () => {
    console.log("======Get categories======");
    const path = "categories"
    return api.get(path);
  };

  const addApp = async (data) => {
    console.log("======Add app======");
    const path = "apps"
    return api.post(path, data);
  }

  const listApps = async () => {
    console.log("======List app======");
    const path = "apps"
    return api.get(path);
  }

  const getApp = async (id) => {
    console.log("======Get app======");
    const path = `apps/${id}`
    return api.get(path);
  }

  const getTasks = async (data) => {
    console.log("======Get tasks======");
    const path = `apps?completed=${data}`
    return api.get(path)
  }

  const addTask = async (data) => {
    console.log("======Add tasks======");
    const path = "tasks"
    return api.post(path, data)
  }
  
  const addCategory = async (data) => {
    console.log("======Add category======");
    const path = "categories"
    return api.post(path, data)
  }

  const apis = {
    getCategories,
    addApp,
    listApps,
    getApp,
    getTasks,
    addTask,
    addCategory,
  };

  return apis;
};

export default AppApi;
