"use client";
import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import me from "../assets/timi.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInFromBottom } from "../components/FadeInFromBottom";
import { FadeInFromRight } from "../components/FadeInFromRight";
import { FadeInFromLeft } from "../components/FadeInFromLeft";
import { TextGenerateEffect } from "@/app/components/TextGenerateEffect";
import Link from "next/link";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { HoverEffect } from "../components/HoverEffect";
// import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SchoolIcon, ToolsIcon, Wrench01Icon } from "hugeicons-react";
import techstack from "@/app/helpers/helper";
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { NoLinkHoverEffect } from "../components/NoLinkHoverEffect";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const words = `I am a dedicated web developer, I bring a wealth of experience and expertise to every project I work on. I am skilled at creating engaging, responsive web applications that are both functional and visually appealing using technologies like NextJs, ReactJs, TypeScript, ExpressJs, NodeJs, TailwindCSS and more.
`;

const words2 = `My passion for programming and attention to detail allows me to craft intuitive user interfaces that enhance the user experience. In addition to my technical skills, I am also a strong communicator and collaborator, able to work effectively with both technical and non-technical team members. Whether working independently or as part of a team, I am committed to delivering high-quality work that meets and exceeds project requirements.`;

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can include the weights you need
  variable: "--font-inter", // Define a custom variable for Tailwind or inline CSS usage
});

// export const metadata: Metadata = {
//     title: "Oluwatimilehin Rotimi | Frontend Developer",
//     description: "Oluwatimilehin Rotimi is a frontend developer with a unique talent of creating innovative, aesthetic solutions in a short amount of time.",
//     keywords: 'Oluwatimilehin Rotimi, Rotimi Oluwatimilehin, rotimi oluwatimilehin, oluwatimilehin rotimi, oluwatimilehin portfolio, oluwatimilehin rotimi eportfolio'
// };

const page = () => {
  const [copied, setCopied] = useState(false);

  const textToCopy = `rotimioluwatimilehin19@gmail.com`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <div
      className={`${jakarta.className} scroll-smooth max-sm:min-h-[100vh] h-[100vh] max-w-[100vw] overflow-x-hidden text-[#e6e9ef] pt-[70px]`}
    >
      <div
        id="home"
        className="h-[100vh] w-[100vw] flex items-center justify-center"
      >
        <div className=" h-[90%] w-full lg:w-[90%] flex flex-col lg:flex-row items-center justify-center lg:justify-between py-6">
          <div className=" text-center lg:text-right mb-[30px]">
            <FadeInFromLeft>
              <div className=" flex items-center justify-end max-sm:justify-center text-right mb-4">
                <div className=" backdrop-blur-sm bg-[#0a84ff]/10 border border-[#0a84ff] flex items-center justify-center px-4 py-2 tracking-wider rounded-full uppercase text-[12px] font-bold">
                  <div className=" h-[10px] w-[10px] bg-[#0a84ff] shadow-[#0a84ff] rounded-full mx-2 text-right"></div>
                  <p className=" text-[#0a84ff]">
                    Available for a full-time position
                  </p>
                </div>
              </div>
              <h1 className=" text-3xl font-extrabold text-white uppercase">
                Oluwatimilehin Rotimi
              </h1>
              <p className=" text-white">Based in Nigeria</p>
            </FadeInFromLeft>
          </div>

          <div className=" max-w-[90%] lg:max-w-[40%] z-50 flex items-center justify-center p-2 border-2 border-[#0a84ff] rounded-full mb-[30px]">
            <FadeInFromBottom>
              <Image
                src={me}
                alt=""
                className=" w-full rounded-full border-2 border-[#0a84ff]"
              />
            </FadeInFromBottom>
          </div>

          <div>
            <FadeInFromRight>
              <h1 className=" text-3xl font-bold text-white mb-[30px] uppercase">
                FULL-STACK <br />
                WEB DEVELOPER
              </h1>
            </FadeInFromRight>
          </div>
        </div>
      </div>
      {/* <div className=" min-h-[20vh] w-[100vw] mb-[20vh]">
        <FadeInFromBottom>
          <div className=" min-h-[20vh] w-[100vw] flex max-sm:flex-col items-center justify-between px-[15%]">
            <div className=" flex flex-col items-center justify-center h-full w-fit">
              <h1 className=" text-[80px] font-extrabold">4+</h1>
              <p className=" text-[#0a84ff] uppercase">Years of experience</p>
            </div>

            <div className=" flex flex-col items-center justify-center h-full w-fit">
              <h1 className=" text-[80px] font-extrabold">15+</h1>
              <p className=" text-[#0a84ff] uppercase">Projects built</p>
            </div>

            <div className=" flex flex-col items-center justify-center h-full w-fit">
              <h1 className=" text-[80px] font-extrabold">50+</h1>
              <p className=" text-[#0a84ff] uppercase">Students mentored</p>
            </div>
          </div>
        </FadeInFromBottom>
      </div> */}
      <div
        id="about"
        className=" w-full flex flex-col items-center justify-center pt-[70px]"
      >
        <div className="flex items-center justify-center mb-4 w-[90%] mx-auto">
          {/* <div className="border-t border-[#fb4566] flex-grow"></div> */}
          <div className="px-4 text-3xl font-bold uppercase text-white">
            About Me 🙋🏾‍♂️
          </div>
          <div className="border-t border-[#0a84ff] flex-grow"></div>
        </div>

        <div className=" w-[90%] flex max-sm:flex-col items-center justify-between">
          <div className=" w-[50%] max-sm:w-full">
            <FadeInFromLeft>
              <p
                className={` px-[2.5%] text-white text-[18px] text-justify lg:text-[20px] lg:mb-[30px] m-auto leading-snug mb-[10px] tracking-wide ${jakarta.className}`}
              >
                I am a dedicated web developer, I bring a wealth of experience
                and expertise to every project I work on. I am skilled at
                creating engaging, responsive web applications that are both
                functional and visually appealing using technologies like
                NextJs, ReactJs, TypeScript, ExpressJs, NodeJs, TailwindCSS and
                more.
              </p>
            </FadeInFromLeft>
            <FadeInFromRight>
              <p
                className={` px-[2.5%] text-white text-[18px] text-justify lg:text-[20px] lg:mb-[30px] m-auto mb-[10px] leading-snug tracking-wide ${jakarta.className}`}
              >
                My passion for programming and attention to detail allows me to
                craft intuitive user interfaces that enhance the user
                experience. In addition to my technical skills, I am also a
                strong communicator and collaborator, able to work effectively
                with both technical and non-technical team members. Whether
                working independently or as part of a team, I am committed to
                delivering high-quality work that meets and exceeds project
                requirements.
              </p>
            </FadeInFromRight>
            <FadeInFromBottom>
              <div className=" w-full flex items-center justify-center mb-[40px]">
                <div className=" w-full flex items-center justify-center">
                  <Link
                    target="blank"
                    href={
                      "https://docs.google.com/document/d/1OGuBjtvFO34optYxNDb8zc2robnZaxCqcZjt3Qbgz64/edit?usp=drive_link"
                    }
                    className="text-white m-auto text-center text-[20px] lg:text-2xl mb-6 duration-500 hover:text-[#0a84ff]"
                  >
                    <FileDownloadOutlinedIcon /> Download CV
                  </Link>
                </div>
              </div>
            </FadeInFromBottom>
          </div>

          <div className=" w-[45%] max-sm:w-full flex flex-col items-center justify-center">
            <FadeInFromBottom>
              <div className="w-full mb-5 backdrop-blur-sm bg-[#0a84ff]/10 border border-[#0a84ff] flex items-center gap-3 sm:gap-4 px-4 py-3 rounded-xl font-bold">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-[#0a84ff] rounded-lg flex items-center justify-center shrink-0">
                  <SchoolIcon
                    className="text-white"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>

                <p className="text-sm sm:text-base font-extrabold leading-snug break-words">
                  For over 4 years, I’ve been turning ideas into responsive,
                  user-friendly web experiences.
                </p>
              </div>
            </FadeInFromBottom>

            <FadeInFromBottom>
              <div className="w-full mb-5 backdrop-blur-sm bg-[#0a84ff]/10 border border-[#0a84ff] flex items-center gap-3 sm:gap-4 px-4 py-3 rounded-xl font-bold">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-[#0a84ff] rounded-lg flex items-center justify-center shrink-0">
                  <Wrench01Icon
                    className="text-white"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>

                <p className="text-sm sm:text-base font-extrabold leading-snug break-words">
                  15+ projects built with a focus on performance, scalability,
                  and user experience.
                </p>
              </div>
            </FadeInFromBottom>

            <FadeInFromBottom>
              <div className="w-full mb-5 backdrop-blur-sm bg-[#0a84ff]/10 border border-[#0a84ff] flex items-center gap-3 sm:gap-4 px-4 py-3 rounded-xl font-bold">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-[#0a84ff] rounded-lg flex items-center justify-center shrink-0">
                  <ToolsIcon
                    className="text-white"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>

                <p className="text-sm sm:text-base font-extrabold leading-snug break-words">
                  15+ projects built with a focus on performance, scalability,
                  and user experience.
                </p>
              </div>
            </FadeInFromBottom>
          </div>
        </div>
      </div>

      <div id="skills" className=' w-full pt-[80px]'>
                {/*  */}

                <div className="flex items-center justify-center mb-4 w-[90%] mx-auto">
                    {/* <div className="border-t border-[#fb4566] flex-grow"></div> */}
                    <div className="px-4 text-3xl font-bold uppercase text-white">Skills & Techstack ⚙️</div>
                    <div className="border-t border-[#0a84ff] flex-grow"></div>
                </div>

                <NoLinkHoverEffect items={techstacks} />

            </div>

      <div className=" w-full flex flex-col items-center justify-center pt-[70px]">
        <div id="projects" className=" w-full pt-[70px]">
          <div className="flex items-center justify-center mb-4 w-[90%] mx-auto">
            <div className="border-t border-[#0a84ff] flex-grow"></div>
            <div className="px-4 text-3xl font-bold uppercase text-white">
              Projects 📁
            </div>
            <div className="border-t border-[#0a84ff] flex-grow"></div>
          </div>
        </div>
        <div className=" w-full grid grid-cols-1 lg:grid-cols-3">
          {techstack.projects.map((project, index) => (
            <div
              key={index}
              className=" border-2 border-[#0a84ff] hover:border-[#0a84ff]/50 backdrop-blur-sm bg-[#0a84ff]/10 w-[95%] mx-auto mb-4 duration-500 flex flex-col items-center justify-start cursor-pointer"
            >
              <Image
                src={project.image}
                alt=""
                className=" h-auto w-full"
              />
              <div className=" w-full p-4">
              <div className=" backdrop-blur-sm bg-[#0a84ff]/10 border border-[#0a84ff] flex items-center justify-start px-2 py-1 mb-[10px] tracking-wider rounded-xl uppercase text-[12px] w-fit font-bold">
                  <div className=" h-[10px] w-[10px] bg-[#0a84ff] shadow-[#0a84ff] rounded-full mx-2 text-right"></div>
                  <p className=" text-[#0a84ff]">
                    {project.category}
                  </p>
                </div>
                <h1 className=" font-bold text-xl uppercase">
                  {" "}
                  {project.title}
                </h1>
                <p className=" font-extralight">{project.description}</p>
                <h1 className=" font-bold mt-4 text-[#0a84ff]">{project.tech}</h1>
                <div className=" w-full flex items-center justify-center mt-5">
                  <Link
                    target="blank"
                    href={project.liveLink}
                    className=" mx-3 px-6 py-2 rounded-md hover:bg-[#0a84ff] border-[#0a84ff] border-2 text-[#0a84ff] hover:text-[#fff] hover:border-2 hover:border-[#0a84ff] bg-transparent duration-500 font-semibold flex items-center justify-center"
                  >
                    <OpenInNewOutlinedIcon className="mr-3" /> Live Site
                  </Link>
                  {/* <Link target="blank" href={project.github} className=" mx-3 px-6 py-2 rounded-md hover:bg-[#fb4566] border-[#fb4566] border-2 text-[#fb4566] hover:text-[#fff] hover:border-2 hover:border-[#fb4566] bg-transparent duration-500 font-semibold flex items-center justify-center"><GitHubIcon className="mr-3" /> GitHub</Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <HoverEffect items={projects} /> */}
        <div id="contact" className=" w-[98%] lg:h-[65vh] border rounded-xl py-5 border-[#0a84ff] flex flex-col items-center justify-center my-10">
          <div className=" text-center">
            <h1 className=" text-white text-2xl font-semibold mb-3 p-0">
              Looking for a new talent ?
            </h1>
            <h1 className=" text-white text-lg font-thin mb-3 p-0">
              Click the text below to copy my email
            </h1>
            <div className="p-4 w-full">
              <div className="mb-4 text-lg">
                {/* Render the text to copy */}
                <h1
                  className="cursor-pointer font-extrabold text-white break-words break-all overflow-wrap text-md md:text-xl text-center lg:text-7xl max-w-full"
                  onClick={handleCopy}
                >
                  {textToCopy}
                </h1>
              </div>
              {/* Feedback message */}
              {copied && (
                <span className="text-white">Text copied to clipboard!</span>
              )}
            </div>
          </div>

          <div className=" w-[65%] m-auto lg:w-[40%] flex items-center justify-between">
            <div className=" w-fit">
              <div className=" w-full flex items-center justify-center">
                <Link
                  target="blank"
                  href={
                    "https://www.linkedin.com/in/oluwatimilehin-rotimi-96b248256"
                  }
                  className="text-white m-auto text-center text-sm lg:text-2xl mb-6 duration-500 hover:text-[#0a84ff]"
                >
                  <LinkedInIcon /> LinkedIn
                </Link>
              </div>
            </div>
            <div className=" w-fit">
              <div className=" w-full flex items-center justify-center">
                <Link
                  target="_blank"
                  href={
                    "https://docs.google.com/document/d/1OGuBjtvFO34optYxNDb8zc2robnZaxCqcZjt3Qbgz64/edit?usp=drive_link"
                  }
                  className="text-white m-auto text-center text-sm lg:text-2xl mb-6 duration-500 hover:text-[#0a84ff]"
                >
                  <FileDownloadOutlinedIcon /> Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const projects = [
  {
    title: "E-commerce Projects",
    description:
      "View a catalogue of all the e-commerce projects I have built. E-commerce websites are websites that enable users to view and purchase products.",
    link: "/projects/#ecommerce",
  },
  {
    title: "Company Portfolio Projects",
    description:
      "View a catalogue of all the company portfolio projects I have built. Company portfolio websites are websites that serve as a digital representation of a company giving visitors a little insight into the company.",
    link: "/projects/#portfolio",
  },
  {
    title: "Management System Projects",
    description:
      "View a catalogue of all the management system projects I have built. Management system projects are projects that are used for management of several resources such as staff, tasks or events.",
    link: "/projects/#management",
  },
];

const techstacks = [
  {
      title: "HTML",
      description: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages."
  },
  {
      title: "CSS",
      description: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML."
  },
  {
      title: "Tailwind CSS",
      description: "Tailwind CSS is a utility-first CSS framework for building modern websites without ever leaving your HTML."
  },
  {
      title: "React",
      description: "React is the library for web and native user interfaces."
  },
  {
      title: "Typescript",
      description: "TypeScript extends JavaScript by adding types to the language."
  },
  {
      title: "NextJS",
      description: "Next.js is a React framework that gives you building blocks to create web applications."
  },
  {
      title: "ExpressJs",
      description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs."
  },
  {
      title: "NodeJs",
      description: "Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts."
  },
  {
      title: "Firebase",
      description: "Firebase is a set of backend cloud computing services and application development platforms provided by Google."
  },
  {
      title: "Vite",
      description: "Vite JS is majorly used to set up a development environment for various frameworks like React and Vue etc."
  },
  {
      title: "JavaScript",
      description: "JS is a scripting language that enables you to create dynamically updating content, control multimedia, and so much more."
  },
  {
      title: "Vercel",
      description: "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration."
  },
  {
      title: "Netlify",
      description: "Netlify Connect is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from anywhere around the world."
  },
  {
      title: "Redux",
      description: "Redux helps you write applications that behave consistently, run in different environments and are easy to test."
  },
  {
      title: "Github",
      description: "Git is used to store the source code for a project and track the complete history of all changes to that code."
  },
  {
      title: "Bitbucket",
      description: "Bitbucket Cloud is a Git-based code and CI/CD tool optimized for teams using Jira."
  },
  {
      title: "Stripe",
      description: "Stripe powers online and in person payement processing and financial solutions for buisnesses of all sizes."
  },
  {
      title: "Swagger UI",
      description: "Swagger UI allows development team to visualize and interact with the API's resources without having any of the implementation logic in place."
  },
]