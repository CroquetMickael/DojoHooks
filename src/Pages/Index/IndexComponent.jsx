// Get the Auth Consumer
import React from "react";
import InputText from "../../Component/Input/InputComponent";

const IndexComponent = (props) => (
  <div className="container">
    <h1>Login Page</h1>
    <blockquote>
      <p>
        <em>Login: Hooks</em>
        <br />
        <em>Password: Awesome</em>
      </p>
    </blockquote>
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
    <button
      className="button-outline"
      onClick={() => props.login(props.username, props.password)}
    >
      Login !
    </button>
  </div>
);

export default IndexComponent;
