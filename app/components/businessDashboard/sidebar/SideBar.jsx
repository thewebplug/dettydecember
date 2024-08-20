import React from "react";
import { CiGrid41 } from "react-icons/ci";
// import { Link, useLocation, useParams } from "react-router-dom";

import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { BsTicketPerforated } from "react-icons/bs";
import { LuRocket } from "react-icons/lu";
import { MdOutlineEventRepeat } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import Logo from "@/public/assets/DD/Logo.svg";
import Image from "next/image";

export const Sidebar = () => {
    const routes = [
        {
            title: "Dashboard",
            link: "/",
            icon: RxDashboard,
            paths: ["/"],
        },
        {
            title: "Event management",
            link: "/event-management",
            icon: MdOutlineEventRepeat,
            paths: ["event-management"],
        },
        {
            title: "Tickets",
            link: "",
            icon: BsTicketPerforated,
            paths: [""],
        },
        {
            title: "Boost",
            link: "",
            icon: LuRocket,
            paths: [""],
        },
    ];

    const dRoutes = [
        {
            title: "Support",
            link: "",
            icon: TiMessages,
            paths: [""],
        },
        {
            title: "Settings",
            link: "",
            icon: FiSettings,
            paths: [""],
        },
    ];

    //   const { pathname } = useLocation();

    //   const params = useParams();
    //   const currentPath = params["*"];
    //   const subpath = currentPath?.split("/")[0];
    //   const isActive = (paths: string[]) => paths.includes(subpath!);

    return (
        <main className="flex flex-col justify-between gap-10 h-full    md:py-12 font-inter">
            <section className="flex flex-col gap-4 ">
                <div className="">
                    <img src={Logo} alt="" />
                </div>
                <ul className="nav-items flex items-start w-full text-textPrimary px-6 text-[16px] font-medium gap-5 flex-col ">
                    {routes.map((route, index) => (
                        <Link href={route.link} className="w-full" key={index}>
                            <li
                                className={`sidebar flex flex-row justify-start w-full h-full gap-4 items-center `}
                                id={route.title}
                                key={route.title}
                            >
                                <route.icon className="text-textTertiary" />
                                <h2 className="">{route.title}</h2>
                            </li>
                        </Link>
                    ))}
                </ul>
            </section>


            <section className="flex flex-col">
                <ul className="nav-items flex items-start w-full text-textPrimary px-6 text-[16px] font-medium gap-5 flex-col ">
                    {dRoutes.map((route, index) => (
                        <Link href={route.link} className="w-full" key={index}>
                            <li
                                className={`sidebar flex flex-row justify-start w-full h-full gap-4 items-center `}
                                id={route.title}
                                key={route.title}
                            >
                                <route.icon className="text-textTertiary" />
                                <h2 className="">{route.title}</h2>
                            </li>
                        </Link>
                    ))}
                </ul>
                <main className="flex pt-12 border-t-[1px] border-borderSecondary ">
                    
                </main>

            </section>

        </main>
    );
};
