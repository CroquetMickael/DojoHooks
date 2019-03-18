import React from "react";
// Do not modify these files
const DashboardComponent = (props) => (
  <div className="container">
    <h1>Dashboard Page</h1>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>firstName</th>
          <th>lastName</th>
        </tr>
      </thead>
      <tbody>
        {props.records.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <button className="button-outline" onClick={props.logout}>
      Logout !
    </button>
  </div>
);

export default DashboardComponent;
