"use client";
import React from "react";
import illustrator from "/public/assets/DD/illustration.png";
import SearchIcon from "/public/assets/DD/search.svg";
import { useState } from "react";
import { useStatus } from "@/app/components/context/contexApi";
import { ListingCard } from "@/app/components/userComponents/picksForMe/listing/ListingCard";
import { listingsData } from "@/app/components/userComponents/picksForMe/listing/listingData";
listingsData

export default function MyListings() {

  const statuses = ["All Listings", "Active", "Sold", "Unsold"];
  const {Status, setStatus} = useStatus()

  return (
    <div className="bg-[#fff] py-6 px-12 w-full rounded-lg border-[1px] shadow-sm font-inter  border-[#EAEBEA]">
      <main className="pt-4 pb-0 px-2 border-b-[1px] border-b-[#EAEBEA]">
        <h1 className="text-[36px] text-[#13162D] syne">My Tickets</h1>
        <div className="flex pt-24 font-semibold items-center text-[16px]">
          {statuses.map((status) => (
            <button
              onClick={() => setStatus(status)}
              className={`cart-btn capitalize ${
                status === Status ? "active-cart-btn" : ""
              }`}
              key={status}
            >
              {status}
            </button>
          ))}
        </div>
      </main>
     <div className="flex flex-col mt-10 gap-12">
          {
            listingsData.map((listData)=>{
                return(
                    <ListingCard key={listData.id} {...listData} />
                )
            })
          }
     </div>
    </div>
  );
}
