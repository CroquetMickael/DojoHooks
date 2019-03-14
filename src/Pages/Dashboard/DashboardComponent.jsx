import React from "react";
import { AuthConsumer } from "../../Common/Context/Auth/AuthContextClass";
const DashboardComponent = () => (
  <AuthConsumer>
    {({ logout }) => (
      <div>
        <p>Dashboard Page</p>
        <button onClick={logout}>Logout !</button>
      </div>
    )}
  </AuthConsumer>
);

const DashboardComponentHooks = (props) => (
  <div>
    <p>DashBoard pages</p>
    <button onClick={props.logout}>Logout !</button>
  </div>
);

export { DashboardComponent, DashboardComponentHooks };
