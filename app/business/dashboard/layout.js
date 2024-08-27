"use client";
import React, {useState} from "react";
import { Sidebar } from "../components/businessDashboard/sidebar/SideBar";
import { Header } from "../components/businessDashboard/Header";
import { StatusProvider } from "../components/context/contexApi";
StatusProvider

const UserLayout = ({ children }) => {
  

  return (
<StatusProvider>
<div className=" bg-white w-full h-screen ">
     
      <div className="flex  w-full h-full   ">
        <main className="md:min-w-[15%]  w-[200px] h-full border-r-[1px] border-r-borderSecondary  ">
          <Sidebar />
        </main>
        <div className="w-full h-full  flex flex-col px-12  ">
          <div className="py-12 ">
          <Header />
          </div>
          <div className=" w-full h-full  ">
            {children}
          </div>
        </div>
      </div>
    </div>
</StatusProvider>
  );
};

export default UserLayout;
