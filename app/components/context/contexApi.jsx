import React, { createContext, useContext, useState } from "react";

const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const listStatus = ["All Listings", "Active", "Sold", "Unsold"];
  const settingStatus = ["Account","Billing Information","Credit Balance","Gift Vouchers","Notifications","Preferences"]
  const [setting, setSetting] = useState(settingStatus[0]);
  const [Status, setStatus] = useState("All Tickets");


  return (
    <StatusContext.Provider value={{ Status, setStatus, listStatus, setting,setSetting,settingStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => {
  return useContext(StatusContext);
};
