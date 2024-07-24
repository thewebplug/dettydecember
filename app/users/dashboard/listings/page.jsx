"use client";
import React from "react";
import illustrator from "/public/assets/DD/illustration.png";
import SearchIcon from "/public/assets/DD/search.svg";
import { useState } from "react";
import { useStatus } from "@/app/components/context/contexApi";
import { ListingCard } from "@/app/components/userComponents/picksForMe/listing/ListingCard";
import { listingsData } from "@/app/components/userComponents/picksForMe/listing/listingData";
import Image from "next/image";
listingsData;
import { PaginationSection } from "@/app/components/userComponents/Pagination/PaginationSection";




export default function MyListings() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = listingsData.slice(firstPostIndex, lastPostIndex);
  const statuses = ["All Listings", "Active", "Sold", "Unsold"];
  const { Status, setStatus, listStatus } = useStatus();

  return (
    <div className="bg-[#fff] p-[24px] w-full rounded-lg border-[1px] shadow-sm font-inter  border-[#EAEBEA]">
      <main className=" border-b-[1px] border-b-[#EAEBEA]">
        <h1 className="text-[36px] text-[#13162D] syne">My Listings</h1>
        <div className="flex pt-[32px] font-semibold items-center text-[16px] font-inter">
          {listStatus.map((status, index) => (
            <button
              onClick={() => setStatus(status)}
              className={`cart-btn capitalize ${
                status === Status ? "active-cart-btn" : ""
              }`}
              key={index}
            >
              {status}
            </button>
          ))}
        </div>
      </main>
      <div className="flex flex-col mt-10 gap-12">
        {currentPosts.map((listData) => {
          return <ListingCard key={listData.id} {...listData} />;
        })}
      </div>
    
        <PaginationSection      totalPosts={listingsData.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
    </div>
  );
}

