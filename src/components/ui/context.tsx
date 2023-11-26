import React, { ReactNode, createContext, useContext } from "react";

interface UIProviderTypes {
  children: ReactNode;
}

const UIContext = createContext<{ [key: string]: string }>({
  uiState: "defaultState",
});

const UIProvider = ({ children }: UIProviderTypes) => {
  return (
    <UIContext.Provider value={{ uiState: "just testing" }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
