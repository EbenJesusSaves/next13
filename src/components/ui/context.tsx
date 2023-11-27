import React, { ReactNode, createContext, useContext, useState } from "react";

interface UIProviderTypes {
  children: ReactNode;
}

export interface StateValues {
  isSidebarOpen: boolean;
}
export interface stateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};
const initialState = { isSidebarOpen: false };

type State = StateValues & stateModifiers;

const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

const UIProvider = ({ children }: UIProviderTypes) => {
  const openSidebar = () => {};
  const closeSidebar = () => {};

  const value = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: false,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIProvider;

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
