"use client";
import React, { useState, useRef } from "react";
import { TextField } from "../TextField";
import Select from "react-select";
import countryList from "react-select-country-list";
import Image from "next/image";
import deleteIcon from "/public/assets/DD/delete.svg";
import userIcon from "/public/assets/DD/userIcon.svg";

export const Account = () => {
  const [value, setValue] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const hiddenFileInput = useRef(null);
  const options = countryList().getData();
  console.log(options)

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setSelectedImage(null);
  };

  const customStyles = {
    option: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
  };

  const formatOptionLabel = ({ value, label }) => (
    <div className="flex gap-2 items-center">
      <div className="relative w-[20px] h-[20px] rounded-full">
        <Image
          src={`https://flagcdn.com/16x12/${value.toLowerCase()}.png`}
          alt={`Flag of ${label}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {label}
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <main className="flex justify-between items-center border-b-[1px] py-6 border-b-[#EAEBEA] font-inter">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-[20px] text-textPrimary">
            Account
          </h2>
          <p className="text-[14px] text-textTertiary">
            View and update your account details
          </p>
        </div>
        <div>
          <button className="button-green">Save Changes</button>
        </div>
      </main>
      <form action="#">
        <main className="flex border-b-[1px] py-6 justify-between gap-24 border-b-[#EAEBEA] font-inter">
          <div className="w-1/3 flex flex-col gap-4">
            <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
              Name
            </h2>
            <p className="text-[14px] text-textTertiary leading-[20px]">
              Will appear on receipts, invoices, and other communication.
            </p>
          </div>
          <div className="w-2/3 flex gap-6">
            <div className="w-1/2">
              <TextField
                id="firstname"
                label="First Name"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <TextField
                id="lastname"
                label="Last Name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
        </main>
        <main className="flex border-b-[1px] py-6 justify-between gap-24 items-center border-b-[#EAEBEA] font-inter">
          <div className="w-1/3 flex flex-col gap-4">
            <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
              Email address
            </h2>
            <p className="text-[14px] text-textTertiary leading-[20px]">
              Used to sign in, for email receipts and updates.
            </p>
          </div>
          <div className="w-2/3">
            <TextField
              id="email"
              type="email"
              placeholder="adams@dettydecember.xyz"
            />
          </div>
        </main>
        <main className="flex border-b-[1px] py-6 justify-between gap-24 items-center border-b-[#EAEBEA] font-inter">
          <div className="w-1/3 flex flex-col gap-4">
            <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
              Phone Number
            </h2>
            <p className="text-[14px] text-textTertiary leading-[20px]">
              Used for email receipts and other communication.
            </p>
          </div>
          <div className="w-2/3">
            <TextField
              id="telephone"
              type="tel"
              placeholder="E.g +234 812 345 6789"
            />
          </div>
        </main>
        <main className="flex border-b-[1px] py-6 justify-between gap-24 items-center border-b-[#EAEBEA] font-inter">
          <div className="w-1/3 flex flex-col gap-4">
            <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
              Avatar
            </h2>
            <p className="text-[14px] text-textTertiary leading-[20px]">
              This will be displayed on your account.
            </p>
          </div>
          <div className="w-2/3">
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="bg-[#00000014] w-[48px] h-[48px] flex justify-center items-center rounded-full">
                  {selectedImage ? (
                    <Image
                      src={selectedImage}
                      alt="Selected avatar"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <Image
                      src={userIcon}
                      alt="Default user icon"
                      width={30}
                      height={30}
                    />
                  )}
                </div>
                <button
                  className="button-upload bg-[#F9FAFA] border-[1px] border-borderPrimary py-2 px-4 rounded-full text-[14px]"
                  onClick={handleClick}
                >
                  Choose
                </button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={hiddenFileInput}
                  style={{ display: "none" }}
                />
                <div className="text-[14px] text-[#929692]">
                  <h2>JPG, GIF or PNG. 1MB Max.</h2>
                </div>
              </div>
              {selectedImage && (
                <div className="pointer" onClick={handleDelete}>
                  <Image src={deleteIcon} alt="Delete icon" />
                </div>
              )}
            </div>
          </div>
        </main>
        <main className="flex border-b-[1px] py-6 justify-between gap-24 items-center border-b-[#EAEBEA] font-inter">
          <div className="w-1/3 flex flex-col gap-4">
            <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
              Password
            </h2>
            <p className="text-[14px] text-textTertiary leading-[20px]">
              Confirm your current password before setting a new one.
            </p>
          </div>
          <div className="w-2/3">
            <TextField
              id="password"
              type="password"
              obscured
              placeholder="Current password"
            />
            <TextField
              id="new-password"
              type="password"
              obscured
              placeholder="New password"
            />
          </div>
        </main>
        <main className="flex border-b-[1px] py-6 justify-between gap-24 items-center border-b-[#EAEBEA] font-inter">
          <div className="w-1/3 flex flex-col gap-4">
            <h2 className="font-semibold text-[14px] text-textSecondary leading-[20px]">
              Location
            </h2>
            <p className="text-[14px] text-textTertiary leading-[20px]">
              This will be used to suggest events.
            </p>
          </div>
          <div className="w-2/3">
            <Select
              options={options}
              value={value}
              onChange={setValue}
              styles={customStyles}
              formatOptionLabel={formatOptionLabel}
            />
          </div>
        </main>
      </form>
    </div>
  );
};
