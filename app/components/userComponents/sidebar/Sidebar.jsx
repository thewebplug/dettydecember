"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import { navItems } from "./sidebarList";
import arrowUp from "/public/assets/DD/arrowUp.svg";
import arrowDown from "/public/assets/DD/arrowDown.svg";
import img from "/public/assets/DD/person-2.jpg";
import Link from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useStatus } from "../../context/contexApi";

export const Sidebar = () => {
  const [animationParent] = useAutoAnimate();
  const parent = useRef(null);
  useEffect(() => {
    parent.current && animationParent(parent.current);
  }, [parent]);
  return (
    <div className=" font-inter font-medium ">
      <div className="flex flex-col rounded-lg  bg-[#FFFFFF] border-[1px] shadow-sm border-[#EAEBEA] ">
        <div className="flex flex-col gap-4 px-6 py-12 rounded-t-lg  bg-[#000]">
          <Image src={img} alt="" className="w-[40px] h-[40px] rounded-full" />
          <h1 className="text-[20px] text-[#F4F5F4] font-semibold">
            Wande Adams
          </h1>
          <p className="text-[#ACAFAC] text-[16px]">Good afternoon!😎</p>
        </div>
        <div>
          <div className="  w-full   px-4 py-4">
            <div className=" flex flex-col text-xl font-bold  text-[#13162D]  gap-2 transition-all">
              {navItems.map((d, i) => (
                <SingleNavItem
                  key={i}
                  label={d.label}
                  link={d.link}
                  icon={d.icon}
                >
                  {d.children}
                </SingleNavItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function SingleNavItem(d) {
  const { Status } = useStatus();
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  // const params = useParams();
  // const currentPath = params["*"];
  // const router = useRouter();
  // const currentPath = router.asPath;
  // const subpath = currentPath?.split("/")[0];
  // const isActive = useMemo(
  //   () => (paths) => {
  //     if (!paths) return false;
  //     return paths.includes(subpath);
  //   },
  //   [subpath]
  // );

  return (
    <div
      ref={animationParent}
      onClick={toggleItem}
      className="relative   px-2 py-5 transition-all "
    >
      <Link
        href={d.link ?? "#"}
        className="flex  cursor-pointer items-center justify-between gap-2 text-[#13162D]  group-hover:text-black "
      >
        <p className="flex gap-4 items-center">
          <Image src={d.icon} />
          <span className="text-[16px] text-textPrimary font-medium">
            {d.label}
          </span>
        </p>
        {d.children && (
          // rotate-180
          <Image
            src={arrowUp}
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </Link>

      {/* dropdown */}
      {isItemOpen && d.children && (
        //     <Link
        //       key={i}
        //       href={ch.link ?? "#"}
        //       // target="_blank"
        //       // className={`sidebar flex flex-row justify-start w-full h-ful bg-[#EEFCF5] rounded-lg l gap-2 items-center ${
        //       //   isActive(d.paths) ? "active" : ""
        //       // }`}

        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 text-[#7A7C79] text-[14px] transition-all flex">
          {d.children.map((ch, i) => (
            <Link key={i} href={ch.link ?? "#"} passHref>
              <div
                className={`flex flex-row items-center ${
                  ch.label === Status ? "bg-[#EEFCF5]" : ""
                }  rounded-lg py-4  w-full gap-4 pl-3 relative`}
              >
                <span className={`w-4 h-4 rounded-full z-[3] ${ch.label === Status? "bg-[#02A056]":""}  bg-[#EFF0EF] `}></span>
                <span className="whitespace-nowrap ml-2">{ch.label}</span>
                {i !== d.children.length - 1 && (
                  <div className="absolute z-[2] top-[14px] left-[11px] h-[50px] w-[2px] bg-[#EFF0EF] border-[#000] "></div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
