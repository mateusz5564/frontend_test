import { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState("");

  return (
    <AppContext.Provider value={{personalData, setPersonalData}}>{children}</AppContext.Provider>
  );
};
