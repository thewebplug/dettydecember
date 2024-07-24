"use client";
import React from "react";
import { useState } from "react";

export default function MyTickets() {
  const [openModal, setopenModal] = useState(false);
  const statuses = ["All Tickets", "Upcomming Events", "Past Events"];

  return (
    <div className="bg-[#fff] p-6 w-full rounded-lg border-[1px] shadow-sm font-inter  border-[#EAEBEA]">
      <main className="pt-4 pb-0 px-2 border-b-[1px] border-b-[#EAEBEA]">
        <h1 className="text-[36px] text-[#13162D] syne">Support</h1>
        <div className="flex pt-24 font-semibold items-center text-[16px] font-inter">
         
        </div>
      </main>
    

    </div>
  );
}

