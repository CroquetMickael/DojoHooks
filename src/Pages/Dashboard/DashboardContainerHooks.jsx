// Implements the IndexContainerClass with the Hooks here
import React, { useContext } from "react";
import { DashboardComponentHooks } from "./DashboardComponent";
import { AuthContext } from "../../Common/Context/Auth/AuthContextHooks";
const DashboardContainerHooks = () => {
  const authConsumer = useContext(AuthContext);
  return <DashboardComponentHooks {...authConsumer} />;
};

export default DashboardContainerHooks;
