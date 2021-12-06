import React, { useContext } from "react";
import { Context } from "./context/AppContext";

function App() {
  const { state } = useContext(Context);
  console.log(state);
  return <>Welcome to Emogi Search</>;
}

export default App;
