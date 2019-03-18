// Implements the IndexContainerClass with the Hooks here
import React, { useContext, useState, useEffect } from "react";
import DashboardComponent from "./DashboardComponent";
import { AuthContext } from "../../Common/Context/Auth/AuthContextHooks";
const DashboardContainerHooks = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users", {
      method: "GET"
    }).then((promise) => promise.json().then((data) => setRecords(data.data)));
  }, []);
  const authConsumer = useContext(AuthContext);

  const props = {
    ...authConsumer,
    records
  };
  return <DashboardComponent {...props} />;
};

export default DashboardContainerHooks;
