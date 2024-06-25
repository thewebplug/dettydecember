import React, { createContext, useContext, useState } from "react";

const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const listStatus = ["All Listings", "Active", "Sold", "Unsold"];
  const [Status, setStatus] = useState("All Tickets");


  return (
    <StatusContext.Provider value={{ Status, setStatus, listStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => {
  return useContext(StatusContext);
};
