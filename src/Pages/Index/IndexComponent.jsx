// Get the Auth Consumer
import React from "react";
import { AuthConsumer } from "../../Common/Context/Auth/AuthContextClass";
const IndexComponent = () => (
  <AuthConsumer>
    {({ login }) => (
      <div>
        <p>Test</p>
        <button onClick={login}>Login !</button>
      </div>
    )}
  </AuthConsumer>
);

export default IndexComponent;
