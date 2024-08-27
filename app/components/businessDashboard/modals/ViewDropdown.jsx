"use client";
import React, { useState } from "react";
import Image from "next/image";
import editIcon from "@/public/assets/DD/editIcon.svg";
import duplicateIcon from "@/public/assets/DD/duplicateIcon.svg";
import shareIcon from "@/public/assets/DD/shareIcon.svg";
import deleteIcon from "@/public/assets/DD/deleteIcon.svg";
import { DeleteModal } from "./DeleteModal";

export const ViewDropdown = ({setViewOpen, setShareOpen}) => {

  const handleShareOpen = () => {
    setViewOpen(false)
    setShareOpen(true)
  }
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  return (
    <div className="flex flex-col bg-white  text-[14px] text-textSecondary py-12 gap-8 shadow-lg  z-[999999] transition-all">
      <div className="px-6 flex flex-col gap-8">
        <p className="pointer flex gap-6" >
          <Image src={editIcon} /> Edit event
        </p>
        <p className="pointer flex gap-6">
          <Image src={duplicateIcon} /> duplicate event
        </p>
        <p className="pointer flex gap-6"
        onClick={handleShareOpen}
        >
          <Image src={shareIcon} /> share event
        </p>
      </div>
      <main
        className="flex items-start border-t-[1px] px-6  border-borderSecondary"
        onClick={() => setDeleteModalOpen(true)}
      >
        <p className="pointer text-errorPrimary flex gap-6 pt-6  ">
          <Image src={deleteIcon} /> delete event
        </p>
      </main>
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          setIsOpen={setDeleteModalOpen}
          // data={selectedData}
        />
      )}
     
    </div>
  );
};
