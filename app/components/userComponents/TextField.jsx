"use client"
import { useState } from "react"
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

// import { IconButton } from "@mui/material";

export const TextField = ({id,label,onChange,value,suffixIcon, type = "text", obscured = false,placeholder,...others}) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
    <div className="flex gap-4 flex-col relative">
         <label htmlFor={id} className="font-semibold text-[14px] text-textSecondary leading-[20px]">{label}</label>
              <input
                type={obscured ? (!showPassword ? "password" : "text") : type}
                id={id}
                className="input w-full  py-[8px] px-[12px] text-[16px] leading-[24px] text-textPrimary border-[1px] rounded-lg border-borderPrimary"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...others}
              />
              
        <div className="right-0 top-10 absolute flex items-center justify-center w-[50px] ">
          {obscured ? (
            <span
              className="px-2 text-gray-400"
              onClick={togglePasswordVisibility}
            >
             
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              
            </span>
          ) : suffixIcon ? (
            <span className="px-2 text-gray-400">{suffixIcon}</span>
          ) : type === "email" ? (
            <span className="px-2 text-gray-400">
              <FaEnvelope />
            </span>
          ) : (
            <></>
          )}
        </div>
    </div>
  )
}
