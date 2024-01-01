/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */
import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "../reducer/sidebarReducer";

const initialState = {
  isSidebarOpen: false,
};

export const SidebarContext = createContext({});
export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  return (
    <SidebarContext.Provider
      value={{
        ...state,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
