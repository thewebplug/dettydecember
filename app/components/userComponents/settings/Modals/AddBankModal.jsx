import React from "react";
import Image from "next/image";
import checksIcon from "/public/assets/DD/checks.svg";
import cancelIcon from "/public/assets/DD/cancel.svg";
export const AddBankModal = ({ OpenBankModal, setOpenBankModal }) => {
    return (
        <div className=" font-inter w-full h-screen  bg-[#0F0F0F]/80 backdrop-blur-sm fixed top-0 left-0 z-10">
            <div className="h-screen flex justify-end">
                <div className="flex flex-col  h-screen gap-6 py-8  bg-[#ffff]   ">
                    <main className="flex justify-between gap-24 pb-6 w-full border-b-[1px] px-8 border-b-borderSecondary">
                        <div className="flex flex-col gap-4">
                            <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
                                Add bank card
                            </h2>
                            <p className="text-[14px] text-textTertiary leading-[20px]">
                                Set your default payment method by adding your credit/debit card details.
                            </p>
                        </div>
                        <Image src={cancelIcon} alt="" onClick={() => setOpenBankModal(!OpenBankModal)} className="cursor-pointer" />
                    </main>
                    <form>
                    <main className="flex flex-col gap-4 w-full px-8">
                        <div className="w-full flex gap-4">
                          <div className="flex flex-col gap-4  w-[80%]">
                            <label htmlFor="card-name" className="text-[14px] font-normal text-textSecondary ">Name on card</label>
                          <input type="text" className="border-[1px] rounded-lg h-[40px]"  />
                          </div>
                           <div className="flex flex-col gap-4  w-[20%]">
                            <label htmlFor="Expiry" className="text-[14px] font-normal text-textSecondary">Expiry</label>
                           <input type="text" name="" id="" className="border-[1px] rounded-lg h-[40px]" />
                           </div>
                           
                        </div>
                    </main>
                    </form>
                </div>
            </div>
        </div>
    );
};
