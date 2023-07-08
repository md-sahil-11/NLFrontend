import React from "react";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import Dashboard from "../Dashboard";
import routes from "../../routes"

const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", "");
  const location = useLocation();

  return <>{!!token ? <Dashboard>{ children }</Dashboard> : <Navigate to={routes.signIn.path} />}</>;
};

export const wrapProtectRoute = (Element) => (
  <ProtectedRoute>
    {Element}
  </ProtectedRoute>
)

export default ProtectedRoute;
