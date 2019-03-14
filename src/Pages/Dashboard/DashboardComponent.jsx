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

export default DashboardComponent;
