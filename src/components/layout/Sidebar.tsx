"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { MdSpaceDashboard } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";
import { TbMoneybag } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = () => {
  const pathname = usePathname();
  const sidebarItems = [
    {
      title: "Home",
      href: "/home",
      icon: GoHomeFill,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: MdSpaceDashboard,
    },
    {
      title: "Expenses Track",
      href: "/expenses",
      icon: TbMoneybag,
    },
    {
      title: "AI Advisor",
      href: "/ai-advisor",
      icon: HiSparkles,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: IoSettingsSharp,
    },
  ];

  return (
    <div className="flex h-[100vh] flex-col justify-between bg-main p-6 px-10">
      <div className="flex flex-col gap-y-8">
        <Link href={"/home"}>
          <Image
            src="/fiscaiwhitelogo.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </Link>
        <div className="relative z-50">
          {sidebarItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <div
                className={`z-20 flex items-center gap-x-4 rounded-md p-2 text-xl transition-all hover:translate-x-1 ${
                  pathname === item.href ? "text-second" : "text-[#D9D9D9]"
                }`}
              >
                {<item.icon size={20} />}
                <span className="whitespace-nowrap">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="animate-blur-ellipse fixed left-0 top-1/2 z-10">
          <Image src={"/blurellipse.png"} alt="blur" width={250} height={250} />
        </div>
        <div className="animate-blur-ellipse fixed left-8 top-0 z-10 rotate-180">
          <Image src={"/blurellipse.png"} alt="blur" width={250} height={250} />
        </div>
      </div>
      <div className="relative z-50">
        <Link href={"/"}>
          <div
            className={`z-20 flex items-center gap-x-4 rounded-md p-2 text-xl transition-all hover:translate-x-1 ${
              pathname === "/" ? "text-second" : "text-[#D9D9D9]"
            }`}
          >
            <TbLogout2 size={20} />
            <span className="whitespace-nowrap">Sign out</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
