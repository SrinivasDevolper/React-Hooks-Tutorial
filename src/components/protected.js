import React from "react";
import { useAuth } from "./Auth";
import Login from "./Login";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const { user } = useAuth();
  console.log(user, "user");
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default Protected;
