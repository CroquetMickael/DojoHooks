// Do not touch this
import React from "react";

const inputComponent = (props) => (
  <input
    type={props.type}
    name={props.name}
    onChange={(event) => props.handler(event.target.value)}
    value={props.value}
    required
  />
);

export default inputComponent;
