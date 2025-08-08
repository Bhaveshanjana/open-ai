import { edu, quick } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const NavText = [
    {
      name: "Features",
      href: "#Features",
    },
    {
      name: "Demo",
      href: "#Demo",
    },
    {
      name: "How it Work",
      href: "#How it Work",
    },
    {
      name: "Stats",
      href: "#Stats",
    },
    {
      name: "Contact",
      href: "#Contact",
    },
  ];
  return (
    <div className="flex justify-center">
      <nav className="w-5xl mx-auto  backdrop-blur-md border border-[#ffffff3a] gap-7 rounded-2xl mt-7 z-50  fixed ">
        <div className="flex justify-between p-4 px-2 items-center mx-3">
          {/* Nav logo */}
          <div className="flex items-center gap-2">
            <Image alt="Navlogo" height="30" width="30" src="/navlogo.svg" />
            <h3 className={`${edu} text-2xl tracking-wider`}>Open-ai</h3>
          </div>
          {/* Links */}
          <div className="flex list-none gap-6">
            {NavText.map((data, index) => (
              <li key={index} className={`${quick} cursor-pointer`}>
                <Link
                  href={data.href}
                  className=" hover:text-blue-500  transition-all duration-200  "
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </div>
          {/* Get start button */}
          <div>
            <button>Get Start</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
