"use client";
import React, { useState } from "react";
import Image from "next/image";
import editIcon from "@/public/assets/DD/editIcon.svg";
import duplicateIcon from "@/public/assets/DD/duplicateIcon.svg";
import shareIcon from "@/public/assets/DD/shareIcon.svg";
import deleteIcon from "@/public/assets/DD/deleteIcon.svg";
import FailModal from "@/app/components/failModal";
import { deleteEvent } from "@/app/apis/events";

export const ViewDropdown = ({event, auth, setViewOpen, setShareOpen, handleGetUserEvents}) => {

  const handleShareOpen = () => {
    setViewOpen(false)
    setShareOpen(true)
  }

  const handleDeleteEvent = async () => {
    setLoading(true);
    const response = await deleteEvent(event?._id, auth?.token);
    console.log('response from delete', response);

    if(response?.status === 200) {
      handleGetUserEvents();
      setViewOpen(false);
      setDeleteModalOpen(false);
    }else {
      alert(response?.data?.message)
    }
    setLoading(false);
  }
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col bg-white  text-[14px] text-textSecondary py-12 gap-8 shadow-lg  z-[999999] transition-all">
      <div className="px-6 flex flex-col gap-8">
        <p className="pointer flex gap-6" onClick={() => window.location.href = `/business/dashboard/events/edit/${event?._id}`}>
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
         <FailModal
         open={isDeleteModalOpen}
         setOpen={setDeleteModalOpen}
        //  icon={
        //    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        //    <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#FEE4E2"/>
        //    <path d="M16 27C16 27 17 26 20 26C23 26 25 28 28 28C31 28 32 27 32 27V16C32 16 31 17 28 17C25 17 23 15 20 15C17 15 16 16 16 16M16 34L16 14" stroke="#D92D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        //    </svg>
           
        //  }
         title="Delete event"
         subtitle="Are you sure you want to delete this event? This action cannot be undone."
         buttonText={["No cancel", "Yes, delete"]}
         callback={[() => setDeleteModalOpen(false), () => handleDeleteEvent()]}
         group={true}
         loading={loading}
       />
     
    </div>
  );
};
