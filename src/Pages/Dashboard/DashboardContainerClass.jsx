import React from "react";
import DashboardComponent from "./DashboardComponent";
import { AuthConsumer } from "../../Common/Context/Auth/AuthContextClass";

class DashBoardContainerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users", {
      method: "GET"
    }).then((promise) =>
      promise.json().then((data) => this.setState({ records: data.data }))
    );
  }

  render() {
    return (
      <AuthConsumer>
        {({ logout }) => <DashboardComponent logout={logout} {...this.state} />}
      </AuthConsumer>
    );
  }
}

export default DashBoardContainerClass;
