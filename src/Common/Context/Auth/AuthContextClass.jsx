// DO NOT MODIFY THIS FILE DURING THE DOJO, IT WILL HELP YOU
import React from "react";
import { navigate } from "@reach/router";
const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = { isAuth: false, callback: "" };

  login = (username, password) => {
    if (username === "Hooks" && password === "Awesome") {
      this.setState({ isAuth: true });
      navigate("/dashboard");
    } else {
      this.setState({ callback: "Mauvais login/mot de passe" });
    }
  };

  logout = () => {
    this.setState({ isAuth: false, callback: "Vous avez été déconnecté" });
    navigate("/");
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout,
          callback: this.state.callback
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer };
