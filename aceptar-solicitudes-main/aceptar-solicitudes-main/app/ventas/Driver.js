import React, { createContext, useState } from 'react';

export const DriverContext = createContext();

export const DriverProvider = ({ children }) => {
  const [preferredDriver, setPreferredDriver] = useState(null);

  return (
    <DriverContext.Provider value={{ preferredDriver, setPreferredDriver }}>
      {children}
    </DriverContext.Provider>
  );
};