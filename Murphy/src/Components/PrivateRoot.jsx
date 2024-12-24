import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoot = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "IsAdMiNAdMiN";

  return isAdmin ? children : <Navigate to="/" />;
};

export default PrivateRoot;
