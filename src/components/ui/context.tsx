import React, { ReactNode, createContext, useContext, useState } from "react";

interface UIProviderTypes {
  children: ReactNode;
}

const UIContext = createContext<{ [key: string]: any }>({
  uiState: "defaultState",
});

const UIProvider = ({ children }: UIProviderTypes) => {
  const [isSideBarOpen, setSidebarOpen] = useState(false);
  const uiState = {
    setSidebarOpen,
    isSideBarOpen,
  };

  return (
    <UIContext.Provider value={{ uiState: uiState }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
