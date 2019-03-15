// Get the Auth Consumer
import React from "react";
import { AuthConsumer } from "../../Common/Context/Auth/AuthContextClass";
import InputText from "../../Component/Input/InputComponent";
const IndexComponentClass = props => (
  <AuthConsumer>
    {({ login, callback }) => (
      <div>
        <p>Test</p>
        <p>{callback}</p>
        <InputText
          name={"username"}
          value={props.username}
          handler={props.setUsername}
        />
        <InputText
          name={"password"}
          value={props.password}
          handler={props.setPassword}
        />
        <button onClick={login}>Login !</button>
      </div>
    )}
  </AuthConsumer>
);

const IndexComponentHooks = props => (
  <div>
    <p>Test</p>
    <p>{props.callback}</p>
    <InputText
      name={"username"}
      value={props.username}
      handler={props.setUsername}
    />
    <InputText
      name={"password"}
      value={props.password}
      handler={props.setPassword}
    />
    <button onClick={() => props.login(props.username, props.password)}>
      Login !
    </button>
  </div>
);

export { IndexComponentClass, IndexComponentHooks };
