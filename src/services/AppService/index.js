import Api from "./api";

const AppService = () => {
  const AppApi = Api();

  const getCategoriesService = () => {
    return new Promise((resolve, reject) => {
      AppApi.getCategories()
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data);
            resolve(res);
          } else reject("Something went wrong!!!");
        })
        .catch((err) => {
          console.log(err.message);
          reject(err);
        });
    });
  };

  const addAppService = (data) => {
    return new Promise((resolve, reject) => {
      AppApi.addApp(data)
        .then((res) => {
          if (res) resolve(res);
          else reject("Something went wrong!!");
        })
        .catch((err) => {
          console.log(err.message);
          reject(err);
        });
    });
  };

  const listAppsService = () => {
    return new Promise((resolve, reject) => {
      AppApi.listApps()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err.message);
          reject(err);
        });
    });
  };

  const getAppService = (id) => {
    return new Promise((resolve, reject) => {
      AppApi.getApp(id)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const getTasksService = (data) => {
    return new Promise((resolve, reject) => {
      AppApi.getTasks(data)
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data);
            resolve(res);
          } else reject("Something went wrong!!!");
        })
        .catch((err) => {
          console.log(err.message);
          reject(err);
        });
    });
  };

  const addTaskService = (data) => {
    return new Promise((resolve, reject) => {
      AppApi.addTask(data)
        .then((res) => {
          if (res) resolve(res);
          else reject("Something went wrong!!");
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const addCategoryService = (data) => {
    return new Promise((resolve, reject) => {
      AppApi.addCategory(data)
        .then((res) => {
          if (res) resolve(res);
          else reject("Something went wrong!!");
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const services = {
    getCategoriesService,
    addAppService,
    listAppsService,
    getAppService,
    getTasksService,
    addTaskService,
    addCategoryService
  };

  return services;
};

export default AppService;
