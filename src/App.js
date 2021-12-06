import React, { useContext } from "react";
import { Context } from "./context/AppContext";
import { AppLayout as Layout } from "./layouts";
import { Side, Main } from "./containers";

function App() {
  const { state } = useContext(Context);
  console.log(state);
  return (
    <Layout>
      <Main />
      <Side />
    </Layout>
  );
}

export default App;
