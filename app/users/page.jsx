"use client";
import React from "react";
import Image from "next/image";
import illustrator from "/public/assets/DD/illustration.png";
import SearchIcon from "/public/assets/DD/search.svg";
import image from "/public/assets/DD/ticket.png";
import { Modal } from "../components/userComponents/Modal/Modal";
import { useState } from "react";
import { useStatus } from "../components/context/contexApi";

export default function MyTickets() {
  const [openModal, setopenModal] = useState(false);
  const statuses = ["All Tickets", "Upcomming Events", "Past Events"];
  const { Status, setStatus } = useStatus();

  return (
    <div className="bg-[#fff] p-6 w-full rounded-lg border-[1px] shadow-sm font-inter  border-[#EAEBEA]">
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
      <main className="border-[1px] relative border-borderSecondary  rounded-lg mt-10 py-6 px-4  ">
        <div className="circle absolute left-[-10px]"></div>
        <section className="flex justify-between px-6 ">
          <div className="flex gap-6 text-center text-textPrimary ">
            <div className="flex flex-col justify-between bg-[#F9FAFA] p-2">
              <span className="text-[#028C4B] bg-[#ECFDF3] p-2 text-[10px]">
                2 days to go
              </span>
              <p className="text-md">AUG</p>
              <h1 className="text-[32px]">10</h1>
            </div>
            <div className="flex gap-6 ">
              <div className="w-[80px] h-[80px]">
                <Image src={image} alt="Description" />
              </div>

              <section className="flex  flex-col justify-between  ">
                <div className="flex gap-4 items-center text-[#929692] text-[16px] ">
                  <h1 className="">Wed Aug 10, 2024</h1>
                  <span className="w-[5px] h-[5px] rounded-lg bg-[#929692]"></span>
                  <h1 className="">8:00 PM</h1>
                </div>
                <div className="flex items-center text-[14px] font-bold gap-4">
                  <h1 className="text-[20px] leading-[28px]">
                    Davido Live In Concert
                  </h1>
                </div>
                <div className="flex items-center  gap-6 text-[16px] font-normal text-textSecondary">
                  <div className="flex gap-2 items-center">
                    <h1 className="">Eko Atlantic</h1>
                    <span className="w-[5px] h-[5px] rounded-lg bg-[#E4E4E7]"></span>
                    <h1 className="">Lagos</h1>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="flex flex-col justify-between  items-end">
            <h1 className="text-[20px] text-textPrimary">₦5,000,000</h1>
            <p className="text-[16px] text-[#565856]">
              Order ID: #39-52879/WDC
            </p>
            <button
              onClick={() => setopenModal(!openModal)}
              className="bg-[#F9FAFA] text-sm px-6 leading-[20px] py-2 rounded-full text-buttonSecondary"
            >
              Resell ticket
            </button>
          </div>
        </section>
        -
      </main>

      {/* <FindEvent /> */}
      {openModal && <Modal openModal={openModal} setopenModal={setopenModal} />}
    </div>
  );
}

export const FindEvent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 p-56">
      <Image src={illustrator} alt="Illustration" width="152" height="118" />
      <div className="flex flex-col items-center gap-2">
        <p>
          Tickets you buy will automatically appear here. Find events to buy
          tickets.
        </p>
      </div>
      <div className="button-green flex items-center justify-center gap-2">
        <Image src={SearchIcon} alt="Search Icon" />
        <button>Find Events</button>
      </div>
    </div>
  );
};
