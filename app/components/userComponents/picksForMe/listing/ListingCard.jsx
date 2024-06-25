import React from "react";
import Image from "next/image";
import image from "/public/assets/DD/ticket.png";

export const ListingCard = ({
  heading,
  id,
  location,
  state,
  date,
  time,
  price,
  order,
  stats,
}) => {
  return (
    <main className="border-[1px] relative border-borderSecondary  rounded-lg    ">
      <section className="flex justify-between p-[24px] ">
        <div className="flex gap-6 text-center text-textPrimary ">
          <div className="flex gap-6 ">
            <div className="w-[100px] h-[100px]">
              <Image src={image} alt="Description" />
            </div>

            <section className="flex  flex-col justify-between font-inter ">
              <div className="flex gap-4 items-center text-[#929692] text-[16px] ">
                <h1 className="">{date}</h1>
                <span className="w-[5px] h-[5px] rounded-lg bg-[#929692]"></span>
                <h1 className="">{time}</h1>
              </div>
              <div className="flex items-center text-[14px] font-bold gap-4">
                <h1 className="text-[20px] leading-[28px]">{heading}</h1>
              </div>
              <div className="flex items-center  gap-6 text-[16px] font-normal inter text-textSecondary">
                <div className="flex gap-2 items-center">
                  <h1 className="">{location}</h1>
                  <span className="w-[5px] h-[5px] rounded-lg bg-[#E4E4E7]"></span>
                  <h1 className=""> {state}</h1>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="flex flex-col justify-between  items-end font-inter">
          <h1 className="text-[20px] text-textPrimary">{price}</h1>
          <p className="text-[16px] text-textSecondary font-normal">Order ID:<span className="text-textPrimary">{order}</span></p>
          <button
            className={`btn-empty  flex gap-2 items-center ${
              stats === "Sold"
                ? "bg-[#ECFDF3] text-[#067647]"
                : stats === "Active"
                ? "bg-[#F4F3FF] text-[#5925DC]"
                : stats === "Unsold"
                ? "bg-[#F4F5F4] text-[#565856]"
                : ""
            } `}
          >
            <span
              className={`w-[6px] h-[6px] bg-[#17B26A] rounded-full ${
                stats === "Sold"
                  ? "bg-[#17B26A]"
                  : stats === "Active"
                  ? "bg-[#7A5AF8]"
                  : stats === "Unsold"
                  ? "bg-[#929692]"
                  : ""
              }`}
            ></span>
            {stats}
          </button>
        </div>
      </section>
    </main>
  );
};
