"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/DD/dd-log.png";
import { EventCategory } from "../event-management/EditSteps/EventCategory";
import { EventDetails } from "../event-management/EditSteps/EventDetails";
import { TicketInfo } from "../event-management/EditSteps/TicketInfo";
import { PreviewPublish } from "../event-management/EditSteps/PreviewPublish";
import { SelectImage } from "../event-management/EditSteps/SelectImage";
import { AdditionalDetails } from "../event-management/EditSteps/AdditionalDetails";

export const EditModal = ({ isOpenEdit, setIsOpenEdit }) => {
  const [step, setStep] = useState(1); // Tracks the current step
  const totalSteps = 6; // Define total steps in the onboarding flow
  const [formData, setFormData] = useState({
    answer1: "",
    inputField: "",
  });

  const handleNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1); // Move to the next step
    } else {
      // Handle form submission
      alert("Form submitted: " + JSON.stringify(formData));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Calculate the progress bar width
  const progress = (step / totalSteps) * 100;

  const statuses = [
    "Event category",
    "Event details",
    "Ticket information",
    "Image",
    "Additional details",
    "Preview and publish",
  ];
  return (
    <div className=" font-inter w-full h-screen overflow-auto   bg-white fixed top-0 left-0  z-10">
      <div className="flex flex-col w-full justify-between h-full py-4">
        <header className="border-b-[1px] border-borderSecondary  px-24 flex justify-between">
          <Image
            src={logo}
            alt="Detty-december logo"
            className="w-[134px] h-[32px]"
          />
          <button className="button-gray">Save & exit</button>
        </header>
        <main className="flex justify-center gap-24 w-full px-96">
          <section className="flex flex-col gap-12">
            {statuses.map((item) => (
              <div
                className="flex gap-6 items-center font-semibold md:text-[14px] text-textSecondary"
                key={item}
              >
                <span className="w-[24px] h-[24px] rounded-full bg-borderSecondary"></span>
                <h2>{item}</h2>
              </div>
            ))}
          </section>
          {/* steps */}
          <section className="w-[70%]">
            {step === 1 && (
              <EventCategory formData={formData} setFormData={setFormData} />
            )}
            {step === 2 && (
              <EventDetails formData={formData} setFormData={setFormData} />
            )}
            {step === 3 && (
              <TicketInfo formData={formData} setFormData={setFormData} />
            )}
            {step === 4 && (
              <SelectImage formData={formData} setFormData={setFormData} />
            )}
            {step === 5 && (
              <AdditionalDetails formData={formData} setFormData={setFormData} />
            )}
            {step === 6 && (
              <PreviewPublish formData={formData} setFormData={setFormData} />
            )}
          </section>
        </main>
        <footer className="flex flex-col gap-6">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200  h-2">
            <div
              className="bg-[#028C4B] h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center px-24">
            <button className="button-gray">Cancel</button>
            <button className="button-green" onClick={handleNextStep}>
              {step < totalSteps ? "Next" : "Publish"}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
