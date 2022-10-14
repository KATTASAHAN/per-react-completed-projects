import React from 'react'

const BudegetsContext = React.createContext()
 
export function useBudgets() {}

export const BudgetsProvider = ({ children }) => {
  return children;
};
