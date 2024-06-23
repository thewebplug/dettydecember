"use client";
import React, {useState} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Sidebar } from "../components/userComponents/sidebar/Sidebar";
import { StatusProvider } from "../components/context/contexApi";
StatusProvider

const UserLayout = ({ children }) => {
  

  return (
<StatusProvider>
<div className=" bg-slate-200">
      {/* <Header /> */}
      <div className="flex items-start gap-12 w-full max-w-[1440px]  md:px-[64px] lg:px-[96px] m-auto md:py-12 ">
        <aside className="md:min-w-[280px] ">
          <Sidebar />
        </aside>
        <div className="w-full ">{children}</div>
      </div>
      <Footer />
    </div>
</StatusProvider>
  );
};

export default UserLayout;
