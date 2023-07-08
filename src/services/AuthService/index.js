import Api from "./api";

const AuthService = () => {
  const AuthApi = Api();

  const getUserService = () => {
    return new Promise((resolve, reject) => {
      AuthApi.getUser()
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

  const registerUserService = (data) => {
    return new Promise((resolve, reject) => {
      AuthApi.registerUser(data)
        .then((res) => {
          if (res.status == 201 && res.data.success) {
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

  const loginUserService = (data) => {
    return new Promise((resolve, reject) => {
      AuthApi.loginUser(data)
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data);
            resolve(res);
          } else reject("No Response");
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  const logoutUserService = () => {
    return new Promise((resolve, reject) => {
      AuthApi.logoutUser()
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data);
            resolve(res);
          } else reject("No Response");
        })
        .catch((err) => {
          console.log(err.message);
          reject(err);
        });
    });
  };

  const services = {
    getUserService,
    registerUserService,
    loginUserService,
    logoutUserService,
  };

  return services;
};

export default AuthService;
