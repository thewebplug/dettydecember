"use client";
import React, { useState } from "react";
import arrowIcon from "/public/assets/DD/arrowDown.svg";
import Image from "next/image";
import { PicksItems } from "@/app/components/userComponents/picksForMe/PicksItems";
import { picksData } from "@/app/components/userComponents/picksForMe/picksData";

function PickForMe() {
  const [list, setList] = useState(6);
  const slicedData = picksData.slice(0, list);

  const showMore = () => {
    setList((prev) => prev + 6);
  };
  return (
    <div className="bg-[#fff] px-12 py-12 w-full rounded-lg border-[1px shadow-sm font-inter border-[#EAEBEA]">
      <div className="flex justify-between">
      <h1 className="text-[36px] text-[#13162D] syne">Picks For Me</h1>
      <button className="text-[14px] font-medium text-[#02A056] border-[1px] border-[#51C891] p-4 rounded-full ">Change preference</button>
      </div>
      <main className="grid md:grid-cols-3 grid-cols-1 gap-12 mt-24">
        {slicedData.map((data) => {
          return <PicksItems key={data.id} {...data} />;
        })}
      </main>
      <div className="text-center flex justify-center pt-6">
        {list < picksData.length && (
          <button
            className=" text-center justify-center flex items-center gap-2 button-gray"
            onClick={showMore}
          >
            see more
            <Image src={arrowIcon} alt="arrow" />
          </button>
        )}
      </div>
    </div>
  );
}
export default PickForMe
