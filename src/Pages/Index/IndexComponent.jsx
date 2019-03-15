// Get the Auth Consumer
import React from "react";
import { AuthConsumer } from "../../Common/Context/Auth/AuthContextClass";
const IndexComponentClass = () => (
  <AuthConsumer>
    {({ login, callback }) => (
      <div>
        <p>Test</p>
        <p>{callback}</p>
        <button onClick={login}>Login !</button>
      </div>
    )}
  </AuthConsumer>
);

const IndexComponentHooks = (props) => (
  <div>
    <p>Test</p>
    <p>{props.callback}</p>
    <button onClick={props.login}>Login !</button>
  </div>
);

export { IndexComponentClass, IndexComponentHooks };
