import React, { createContext, useState } from 'react';

// 1. Create context
export const AppContext = createContext();

// 2. Create provider component
export const AppProvider = ({ children }) => {
  const [webName, setWebName] = useState(""); 
  

  return (
    <AppContext.Provider
      value={{
        webName,
        setWebName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
