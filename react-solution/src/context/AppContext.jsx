import { createContext, useContext, useState, useEffect } from "react";
import defaultOptionsJson from "./defaultOptions.json";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState("");
  const [textBlocks, setTextBlocks] = useState();
  const [textOptions, setTextOptions] = useState();
  const [optionsRadioValue, setOptionsRadioValue] = useState("first");

  useEffect(() => {
    const textBlocksJson = localStorage.getItem("textBlocks");
    const textBlocks = textBlocksJson ? JSON.parse(textBlocksJson) : [];
    setTextBlocks(textBlocks);

    const textOptionsJson = localStorage.getItem("textOptions");
    const textOptions = textOptionsJson ? JSON.parse(textOptionsJson) : defaultOptionsJson;
    setTextOptions(textOptions);
  }, [])

  useEffect(() => {
    if (textBlocks) {
      localStorage.setItem("textBlocks", JSON.stringify(textBlocks));
    }
  }, [textBlocks])

  useEffect(() => {
    if (textOptions && textOptions.length > 0) {
      localStorage.setItem("textOptions", JSON.stringify(textOptions));
    }
  }, [textOptions])



  return (
    <AppContext.Provider
      value={{
        personalData,
        setPersonalData,
        textBlocks,
        setTextBlocks,
        textOptions,
        setTextOptions,
        optionsRadioValue,
        setOptionsRadioValue
      }}>
      {children}
    </AppContext.Provider>
  );
};
