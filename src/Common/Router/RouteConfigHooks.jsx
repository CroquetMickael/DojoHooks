// Do not touch this file
import React, { useContext } from "react";
import { Redirect } from "@reach/router";
import { AuthContext } from "../Context/Auth/AuthContextHooks";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  return authContext.isAuth ? (
    <Component {...rest} />
  ) : (
    <Redirect from="" to="/" noThrow />
  );
};

const PublicRoute = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

export { ProtectedRoute, PublicRoute };
