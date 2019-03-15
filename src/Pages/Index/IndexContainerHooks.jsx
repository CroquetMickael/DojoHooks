// Implements the IndexContainerClass with the Hooks here
import React, { useContext, useState } from "react";
import { IndexComponentHooks } from "./IndexComponent";
import { AuthContext } from "../../Common/Context/Auth/AuthContextHooks";
const IndexContainerHooks = () => {
  const authConsumer = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const props = {
    ...authConsumer,
    username,
    password,
    setUsername,
    setPassword
  };

  return <IndexComponentHooks {...props} />;
};

export default IndexContainerHooks;
