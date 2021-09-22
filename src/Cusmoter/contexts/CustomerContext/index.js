import React, { createContext, useContext, useReducer } from 'react';
import {  reducer } from './reducer';

const initialState = {
  selectedCustomer: null
};

export const CustomerContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const CustomerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CustomerContext.Provider
      value={{
        state: {
          ...state,
        },
        dispatch,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('CustomerContext must be used within a CustomerContextProvider');
  }
  return context;
};
