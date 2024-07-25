import React from "react";
import Image from "next/image";
import PicksImg from "/public/assets/DD/picks.jpg";
import starIcon from "/public/assets/DD/star.svg";
import stackIcon from "/public/assets/DD/stack.svg";
import locationIcon from "/public/assets/DD/location.svg";
import calenderIcon from "/public/assets/DD/calendar.svg";

export const PicksItems = ({
  id,
  stackText,
  heading,
  location,
  state,
  date,
  time,
  rating,
  numbers,
  sold,
  initialAmount,
  finalAmount,
}) => {
  return (
    <main className=" border-[1px] border-[#EAEBEA] rounded-lg pointer"
    onClick={() => window.location.href ="/users/top-events/1"}
    >
      <div className="relative h-[160px]  ">
        <Image
          src={PicksImg}
          alt="MyWishlist-img"
          className="rounded-t-lg "
          loading="lazy"
          layout="fill"
          objectFit="cover"
        />
        <div className="flex absolute top-[80%] left-4 gap-2 px-4 py-2 items-center border-[1px] border-[#9EE5C4] rounded-full bg-[#EEFCF5]">
          <Image src={stackIcon} alt="stack" />
          <h1 className="text-[#028C4B] md:text-[12px]">{stackText}</h1>
        </div>
      </div>
      <section className="flex justify-between  flex-col h-[200px]">
        <main className="w-full flex flex-col gap-4 p-4 ">
          <h2 className="text-[16px] text-textPrimary font-semibold leading-[24px]">
            {heading}
          </h2>
          <div className="flex gap-4 items-center text-textTertiary">
            <Image src={locationIcon} alt="location-icon" />
            <h1 className="text-[14px] font-normal">{location}</h1>
            <span className="w-2 h-2 rounded-full bg-[#EAEBEA]"></span>
            <h2 className="text-[14px] font-normal">{state}</h2>
          </div>
          <div className="flex gap-4 items-center text-textTertiary">
            <Image src={calenderIcon} alt="calender-icon" />
            <h1 className="text-[14px] font-normal">{date}</h1>
            <span className="w-2 h-2 rounded-full bg-[#EAEBEA]"></span>
            <h2 className="text-[14px] font-normal">{time}</h2>
          </div>
          <div className="flex gap-4 items-center text-textTertiary text-[14px]">
            <Image src={starIcon} alt="rating-icon" />
            <h2 className="text-[#F4AA27] font-medium">{rating}</h2>
            <h1 className="text-[14px] font-normal">{numbers}</h1>
            <span className="w-2 h-2 rounded-full bg-[#EAEBEA]"></span>
            <h2 className="text-[14px] font-normal">{sold} Sold</h2>
          </div>
        </main>
        <div className="flex items-center  gap-4 p-4 text-[16px]   text-textPrimary font-semibold  ">
          <h1>From {initialAmount}</h1>
          <span className="w-[8px] h-[4px] bg-[#EAEBEA]"></span>
          <h2>{finalAmount}</h2>
        </div>
      </section>
    </main>
  );
};
