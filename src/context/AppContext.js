import React, { useState } from "react";

export const Context = React.createContext({});

const AppContext = ({ children }) => {
  const [state, setState] = useState("hello");
  return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};

export default AppContext;
