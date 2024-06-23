import React, { createContext, useContext, useState } from "react";

const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [Status, setStatus] = useState("All Tickets");


  return (
    <StatusContext.Provider value={{ Status, setStatus,  }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => {
  return useContext(StatusContext);
};
