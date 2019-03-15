import React from "react";
import { AuthConsumer } from "../../Common/Context/Auth/AuthContextClass";
// Do not modify these files
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

// Use it when you've create the Dashboard Container Hooks
const DashboardComponentHooks = (props) => (
  <div>
    <p>DashBoard pages</p>
    <button onClick={props.logout}>Logout !</button>
  </div>
);

export { DashboardComponent, DashboardComponentHooks };
