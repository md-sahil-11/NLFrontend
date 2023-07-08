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
    const path = `tasks?completed=${data}`
    return api.get(path)
  }

  const editTask = async (id, data) => {
    console.log("======Edit tasks======");
    const path = `tasks/${id}`
    return api.put(path, data)
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
    editTask,
    addCategory,
  };

  return apis;
};

export default AppApi;
