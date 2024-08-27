import React from "react";
import Image from "next/image";
import cancelIcon from "/public/assets/DD/cancel.svg";
export const CreditBalanceViewModal = ({
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
                    Payment Details
                  </h2>
                  <p className="text-[14px] text-textTertiary leading-[20px]">
                    Here's a breakdown of your payment details.
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
                  <div className="flex gap-6 items-center  ">
                    <button
                      className={`flex  items-center gap-2 py-[4px] px-[6px] text-[12px] font-medium border-[1px] border-borderSecondary rounded-lg `}
                    >
                      <span
                        className={`w-2 h-2 rounded-full  ${
                          data.category === "Payout"
                            ? "bg-[#7A5AF8] "
                            : data.category === "Refund"
                            ? "bg-[#EE46BC] "
                            : data.category === "Purchase"
                            ? "bg-[#2E90FA] "
                            : ""
                        }`}
                      ></span>
                      {data.category}
                    </button>
                    <span className="w-2 h-2 bg-borderSecondary rounded-full"></span>
                    <button
                      className={`py-[4px] px-[6px] rounded-lg flex items-center  ${
                        data.status === "Successful"
                          ? "bg-[#ECFDF3] text-[#067647] "
                          : data.status === "Pending"
                          ? "bg-[#FFFAEB] text-[#B54708] "
                          : data.status === "Failed"
                          ? "bg-[#FEF3F2] text-[#B42318] "
                          : ""
                      } text-[12px] font-medium `}
                    >
                      {data.status}
                    </button>
                    <span className="w-2 h-2 bg-borderSecondary rounded-full"></span>
                    <h2 className="text-[14px]">{data.date}</h2>
                  </div>

                  <div className="flex flex-col gap-6 py-8 text-[14px]">
                    <h2 className=" text-textTertiary ">Description:</h2>
                    <p className="text-textPrimary">{data.description}</p>
                  </div>
                  <main className="flex flex-col  gap-4 text-[14px] border-[1px] border-borderSecondary rounded-lg">
                    <h3 className="p-4 rounded-tl-lg rounded-tr-lg bg-[#F9FAFA] text-[12px]">
                      Payment Breakdown
                    </h3>
                    <p className="px-4 py-6 text-textPrimary border-b-[1px]">
                      {data.description}
                    </p>
                    <div className="flex justify-between items-center text-[14px] text-textPrimary px-4 py-6 border-t-[1px] border-borderSecondary">
                      <h2>Amount</h2>
                      <p>{formatAmount(data.amount)}</p>
                    </div>
                    <div className="flex justify-between items-center text-[14px] text-textPrimary py-6 px-4">
                      <h2>Tax</h2>
                      <p>{formatAmount(0)}</p>
                    </div>
                    <div className="flex justify-between items-center text-[14px] text-textPrimary px-4 py-6">
                      <h2>Fees</h2>
                      <p>{formatAmount(0)}</p>
                    </div>
                    <div className="flex justify-between items-center text-[14px] font-semibold text-textPrimary px-4 py-6 border-t-[1px] border-borderSecondary">
                      <h2>Payout Total</h2>
                      <p>{formatAmount(data.amount)}</p>
                    </div>
                  </main>
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
