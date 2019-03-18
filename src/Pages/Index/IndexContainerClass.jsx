// Implements the IndexContainerClass with the Hooks here
import React from "react";
import IndexComponent from "./IndexComponent";
import { AuthConsumer } from "../../Common/Context/Auth/AuthContextClass";

class IndexContainerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      setPassword: this.setPassword,
      setUsername: this.setUsername
    };
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setUsername = (event) => {
    this.setState({ username: event });
  };

  setPassword = (event) => {
    this.setState({ password: event });
  };

  render() {
    return (
      <AuthConsumer>
        {({ login, callback }) => (
          <IndexComponent {...this.state} login={login} callback={callback} />
        )}
      </AuthConsumer>
    );
  }
}

export default IndexContainerClass;
