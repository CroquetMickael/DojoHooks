// Implements the IndexContainerClass with the Hooks here
import React, { useContext } from "react";
import { IndexComponentHooks } from "./IndexComponent";
import { AuthContext } from "../../Common/Context/Auth/AuthContextHooks";
const IndexContainerHooks = () => {
  const authConsumer = useContext(AuthContext);
  return <IndexComponentHooks {...authConsumer} />;
};

export default IndexContainerHooks;
