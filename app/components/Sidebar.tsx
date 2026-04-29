"use client";
import me from "../assets/timi.jpg";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can include the weights you need
  variable: "--font-inter", // Define a custom variable for Tailwind or inline CSS usage
});

const Sidebar = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div
      className={`${jakarta.className} z-[300] cursor-pointer h-[100px] fixed w-full scroll-smooth font-bold uppercase h-[100px] flex items-center justify-center`}
    >
      <div
        className={` bg-transparent h-[50px] p-2 px-[2.5%] flex w-[90%] rounded-full items-center justify-between backdrop-blur-sm bg-white/10`}
      >
        <div className=" flex items-center justify-center h-full max-sm:hidden">
          {/* <Image
            src={me}
            width={50}
            alt=""
            className=" rounded-full border-2 border-[#fb4566] mr-2"
          /> */}

          <div>
            <h1 className=" text-[#e6e9ef]">Oluwatimilehin Rotimi</h1>
            <h1 className=" text-[#0a84ff]">Software Engineer</h1>
          </div>
        </div>

        <div className=" flex max-sm:w-full items-center justify-center cursor-pointer">
          <Link href="/#home" className=" cursor-pointer">
            <li className=" py-1 px-4 hover:text-[#0a84ff] text-[#e6e9ef] duration-500 flex items-center font-thin text-[14px] cursor-pointer tracking-[0.1em]">
              Home
            </li>
          </Link>
          <Link href="/#about" className=" cursor-pointer">
            <li className=" py-1 px-4 hover:text-[#0a84ff] text-[#e6e9ef] duration-500 flex items-center font-thin text-[14px] cursor-pointer tracking-[0.1em]">
              About
            </li>
          </Link>
          <Link href="/#skills" className=" cursor-pointer">
            <li className=" py-1 px-4 hover:text-[#0a84ff] text-[#e6e9ef] duration-500 flex items-center font-thin text-[14px] cursor-pointer tracking-[0.1em]">
              Skills
            </li>
          </Link>
          <Link href="/#projects" className=" cursor-pointer">
            <li className=" py-1 px-4 hover:text-[#0a84ff] text-[#e6e9ef] duration-500 flex items-center font-thin text-[14px] cursor-pointer tracking-[0.1em]">
              Projects
            </li>
          </Link>
        </div>

        <Link href={"/#contact"} className=" text-[#e6e9ef] font-[14px] bg-[#0a84ff] p-2 px-[30px] rounded-full max-sm:hidden">
          Hire Me
        </Link>

        <div onClick={() => setIsDropdown(!isDropdown)} className=" hidden">
          {isDropdown ? (
            <CloseOutlinedIcon className=" cursor-pointer text-white hover:text-[#fb4566]" />
          ) : (
            <MenuOutlinedIcon className=" cursor-pointer text-white hover:text-[#fb4566]" />
          )}
        </div>
      </div>
      {isDropdown && (
        <div className=" bg-[#0e090d] border-b-[#fb4566] border-b">
          <ul>
            <a href="/home" className=" cursor-pointer">
              <li className=" py-1 mb-1 px-4 hover:text-[#fb4566] text-white duration-500 flex items-center font-bold cursor-pointer tracking-[0.1em]">
                Home
              </li>
            </a>
            <a href="/about" className=" cursor-pointer">
              <li className=" py-1 mb-1 px-4 hover:text-[#fb4566] text-white duration-500 flex items-center font-bold cursor-pointer tracking-[0.1em]">
                About
              </li>
            </a>
            <a href="/projects" className=" cursor-pointer">
              <li className=" py-1 mb-1 px-4 hover:text-[#fb4566] text-white duration-500 flex items-center font-bold cursor-pointer tracking-[0.1em]">
                Projects
              </li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
