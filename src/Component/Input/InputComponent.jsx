import React from "react";

const inputComponent = (props) => (
  <input
    type="text"
    name={props.name}
    // eslint-disable-next-line no-restricted-globals
    onChange={(event) => props.handler(event.target.value)}
    value={props.value}
    required
  />
);

export default inputComponent;
