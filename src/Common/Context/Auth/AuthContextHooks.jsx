// Implements the context like the Class but with hooks !

import React, { useState } from "react";
import { navigate } from "@reach/router";

const AuthContext = React.createContext();

const AuthContextHooks = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
    navigate("/dashboard");
  };

  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        login: login,
        logout: logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthContextHooks };
