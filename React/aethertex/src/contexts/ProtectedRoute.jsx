import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import React, { useContext } from "react";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useContext(AuthContext);

  if (!(user?.type == allowedRoles)) {
    // Logged in but not authorized
    return <Navigate to="/unauthorized" replace />;
  }

  // Allowed → render route
  return <Outlet />;
};

export default ProtectedRoute;
