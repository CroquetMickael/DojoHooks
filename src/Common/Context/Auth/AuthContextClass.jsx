// DO NOT MODIFY THIS FILE DURING THE DOJO, IT WILL HELP YOU
import React from "react";
const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = { isAuth: false };

  login = () => this.setState({ isAuth: true });

  logout = () => this.setState({ isAuth: false });

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer };
