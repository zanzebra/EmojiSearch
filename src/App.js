import React from "react";
import { AppLayout as Layout } from "./layouts";
import { Side, Main } from "./containers";

function App() {
  return (
    <Layout>
      <Main />
      <Side />
    </Layout>
  );
}

export default App;
