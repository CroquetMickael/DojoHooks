// Do not touch this file
import React from "react";
import { Redirect } from "@reach/router";
import { AuthConsumer } from "../Context/Auth/AuthContextClass";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) =>
      isAuth ? <Component {...rest} /> : <Redirect from="" to="/" noThrow />
    }
  </AuthConsumer>
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

export { ProtectedRoute, PublicRoute };
