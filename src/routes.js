import React, { lazy } from "react";
import { lazyload } from "./utils/lazyload";
import { wrapProtectRoute } from "./components/ProtectedRoute";
import AppDetail from "./pages/DetailApp";

const Home = lazyload("pages/Home");
const SignIn = lazyload("pages/Auth/SignIn");
const SignUp = lazyload("pages/Auth/SignUp");
const AddApp = lazyload("pages/AddApp");
const Task = lazyload("pages/Task");
const Profile = lazyload("pages/Profile")

const routes = {
  home: {
    path: "/",
    element: wrapProtectRoute(<Home />)
  },
  signUp: {
    path: "/sign-up",
    element: <SignUp />
  },
  signIn: {
    path: "/sign-in",
    element: <SignIn />
  },
  addApp: {
    path: "/apps/add",
    element: wrapProtectRoute(<AddApp />)
  },
  detailApp: {
    path: "/apps/detail/:id",
    element: wrapProtectRoute(<AppDetail />),
    makePath: (id) => `/apps/detail/${id}`
  },
  task: {
    path: "/tasks",
    element: wrapProtectRoute(<Task />),
  },
  profile: {
    path: "/profile",
    element: wrapProtectRoute(<Profile />),
  },
};

export default routes;
