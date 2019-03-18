// Implements the context like the Class but with hooks !
import React, { useState } from "react";
import { navigate } from "@reach/router";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [callback, setCallback] = useState("");

  const login = (username, password) => {
    if (username === "Hooks" && password === "Awesome") {
      setIsAuth(true);
      navigate("/dashboard");
    } else {
      setCallback("Mauvais login/mot de passe");
    }
  };

  const logout = () => {
    setIsAuth(false);
    setCallback("Vous avez été déconnecté");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        login: login,
        logout: logout,
        callback: callback
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
