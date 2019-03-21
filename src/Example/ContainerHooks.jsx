import React, { useState, useEffect, useContext } from "react";
import Component from "./Component";

const ContainerHooks = () => {
  // First array : [NameOfObjectYouWant, NameOfTheSetterFunctionYouWant] = useState(Initial Value)
  const [records, setRecords] = useState([]);

  // UseEffect(Callback, Array)
  // It's like using ComponentDidMount / ComponentDidUpdate
  // Callback is a function that you want to use
  // Array is the value you want to watch see below
  // [] => ComponentDidMount
  // [Value,Value,Value] => ComponentDidUpdate for each value declare that have been changed
  useEffect(() => {
    fetch("API URL", {
      method: "GET"
    }).then((promise) => promise.json().then((data) => setRecords(data.data)));
  }, []);

  // UseContext just use the Context given, it will search for the nearest in the virtual DOM
  const ConsumerOfContext = useContext(Context);

  const props = {
    ...ConsumerOfContext,
    records
  };
  return <Component {...props} />;
};
