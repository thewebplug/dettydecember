import React from "react";
import Image from "next/image";
import checksIcon from "/public/assets/DD/checks.svg";
import cancelIcon from "/public/assets/DD/cancel.svg";
import deleteIcon from "/public/assets/DD/deleteIcon.svg";
export const DeleteModal = ({ isOpen, setIsOpen }) => {
  return (
    <div className=" font-inter w-full h-screen  bg-[#0F0F0F]/80 backdrop-blur-sm fixed top-0 left-0 flex justify-center z-10">
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col  h-fit gap-6 items-center py-8 px-8 bg-[#ffff] rounded-lg  ">
          <div className="flex justify-between gap-6 items-center w-full">
           <div className="p-4 bg-red-200 rounded-full">
           <Image
              src={deleteIcon}
              alt=""
              
            />
           </div>
            <Image src={cancelIcon} alt=""  className="cursor-pointer" onClick={()=> setIsOpen(false)} />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-[20px] leading-[28px] text-textPrimary font-semibold">
              Delete event
            </h1>
            <p className="text-[14px] leading-[20px] font-normal text-textTertiary">
            Are you sure you want to delete this event? This action cannot be undone.
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <button className="button-gray">No,Cancel</button>
            <button className="button-red">Yes, delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
