import React from "react";
import Image from "next/image";
import cancelIcon from "/public/assets/DD/cancel.svg";
export const EventManagementViewModal = ({
  OpenViewModal,
  setOpenViewModal,
  data,
  fees,
  tax,
  payoutTotal
}) => {
  // format amount
  const formatAmount = (value) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };
  return (
    <div className=" font-inter w-full h-screen  bg-[#0F0F0F]/80 backdrop-blur-sm fixed top-0 left-0 z-10">
      <div className="h-screen flex justify-end">
        <div className="flex  w-[30%]  flex-col  h-screen gap-6 py-8  bg-[#ffff]   ">
          <div className="w-full flex flex-col justify-between h-full">
            <div className="flex flex-col gap-12">
              <main className="flex justify-between gap-24 pb-6 w-full border-b-[1px] px-8 border-b-borderSecondary">
                <div className="flex flex-col gap-4">
                  <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
                    View evevnt
                  </h2>
                  <p className="text-[14px] text-textTertiary leading-[20px]">
                  Get a full preview of your event here.
                  </p>
                </div>
                <Image
                  src={cancelIcon}
                  alt=""
                  onClick={() => setOpenViewModal(!OpenViewModal)}
                  className="cursor-pointer"
                />
              </main>
              {data && (
                <main className="flex flex-col px-8">
                 
                </main>
              )}
            </div>
            <div className="flex justify-end p-8 border-t-[1px] border-borderSecondary">
              <button onClick={() => setOpenViewModal(false)} className="add-btn border-[1px] border-textSecondary">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
