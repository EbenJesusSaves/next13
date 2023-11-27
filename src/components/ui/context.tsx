import React, { ReactNode, createContext, useContext, useReducer } from "react";

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

type Action = { type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR" };

const uiReducer = (state: StateValues, action: Action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      return { ...state, isSidebarOpen: true };
    }
    case "CLOSE_SIDEBAR": {
      return { ...state, isSidebarOpen: false };
    }
  }
};
const UIProvider = ({ children }: UIProviderTypes) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  const { isSidebarOpen } = state;
  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });

  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });

  const value = {
    openSidebar,
    closeSidebar,
    isSidebarOpen,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIProvider;

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
