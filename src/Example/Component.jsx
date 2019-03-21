import React from "react";

const Component = (props) => (
  <div>
    {props.records.map((record, index) => (
      <ul key={index}>
        <li>{record.id}</li>
      </ul>
    ))}
  </div>
);
