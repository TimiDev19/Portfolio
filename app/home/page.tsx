"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Inter } from 'next/font/google';
import me from '../assets/timi.jpg'
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FadeInFromBottom } from '../components/FadeInFromBottom';
import { FadeInFromRight } from '../components/FadeInFromRight';
import { FadeInFromLeft } from '../components/FadeInFromLeft';
import { TextGenerateEffect } from "@/app/components/TextGenerateEffect";
import Link from 'next/link';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { HoverEffect } from '../components/HoverEffect';
// import type { Metadata } from "next";

const words = `I am a dedicated front-end developer, I bring a wealth of experience and expertise to every project I work on. I am skilled at creating engaging, responsive web applications that are both functional and visually appealing using technologies like NextJs, ReactJs, TypeScript, Redux, TailwindCSS and more.
`;

const words2 = `My passion for programming and attention to detail allows me to craft intuitive user interfaces that enhance the user experience. In addition to my technical skills, I am also a strong communicator and collaborator, able to work effectively with both technical and non-technical team members. Whether working independently or as part of a team, I am committed to delivering high-quality work that meets and exceeds project requirements.`

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // You can include the weights you need
    variable: '--font-inter', // Define a custom variable for Tailwind or inline CSS usage
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
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    };
    return (
        <div className={`${inter.className} scroll-smooth h-[100vh] max-w-[100vw] overflow-x-hidden`}>
            <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
                <div className=' h-[90%] w-full lg:w-[90%] flex flex-col lg:flex-row items-center justify-center lg:justify-between py-6'>
                    <div className=' text-center lg:text-right mb-[30px]'>
                        <FadeInFromLeft>
                            <h1 className=' text-3xl font-light text-white'>Oluwatimilehin Rotimi</h1>
                            <p className=' text-white'>Based in Nigeria</p>
                            <div className=' flex items-center justify-end text-right'>
                                <div className=' h-[10px] w-[10px] bg-green-400 rounded-full mx-2 text-right'></div>
                                <p className=' text-white'>Available for a full-time position</p>
                            </div>
                        </FadeInFromLeft>
                    </div>



                    <div className=' max-w-[90%] lg:max-w-[40%] z-50 flex items-center justify-center p-2 border-2 border-[#fb4566] rounded-full mb-[30px]'>
                        <FadeInFromBottom><Image src={me} alt="" className=' w-full rounded-full border-2 border-[#fb4566]' /></FadeInFromBottom>
                    </div>

                    <div>
                        <FadeInFromRight>
                            <h1 className=' text-3xl font-bold text-white mb-[30px] uppercase'>WEB DEVELOPER</h1>
                        </FadeInFromRight>
                    </div>
                </div>
            </div>
            <div className=' w-full flex flex-col items-center justify-center'>
                <TextGenerateEffect words={words} />;
                <TextGenerateEffect words={words2} />;

                <FadeInFromBottom>
                    <div className=' w-full flex items-center justify-center mb-[40px]'>
                        <Link href={"/about"} className='text-white m-auto text-center text-2xl mb-6 duration-500 hover:text-[#fb4566]'><ArrowOutwardOutlinedIcon /> Read More</Link>
                    </div>
                </FadeInFromBottom>

                <div className=' w-full'>
                    <div className="flex items-center justify-center mb-4 w-[90%] mx-auto">
                        <div className="border-t border-[#fb4566] flex-grow"></div>
                        <div className="px-4 text-3xl font-bold uppercase text-white">Projects 📁</div>
                        <div className="border-t border-[#fb4566] flex-grow"></div>
                    </div>
                    <h1 className=' text-lg text-white px-3'>Click below to view projects in that category</h1>
                </div>

                <HoverEffect items={projects} />

                <div className=' w-[98%] lg:h-[65vh] border rounded-xl py-5 border-[#fb4566] flex flex-col items-center justify-center my-10'>
                    <div className=' text-center'>
                        <h1 className=' text-white text-2xl font-semibold mb-3 p-0'>Looking for a new talent ?</h1>
                        <h1 className=' text-white text-lg font-thin mb-3 p-0'>Click the text below to copy my email</h1>
                        <div className="p-4 w-full">
                            <div className="mb-4 text-lg">
                                {/* Render the text to copy */}
                                <h1 className="cursor-pointer font-extrabold text-white break-words break-all overflow-wrap text-md md:text-xl text-center lg:text-7xl max-w-full" onClick={handleCopy}>
                                    {textToCopy}
                                </h1>
                            </div>
                            {/* Feedback message */}
                            {copied && <span className="text-white">Text copied to clipboard!</span>}
                        </div>
                    </div>

                    <div className=' w-[65%] m-auto lg:w-[40%] flex items-center justify-between'>
                        <div className=' w-fit'>
                            <div className=' w-full flex items-center justify-center'>
                                <Link target='blank' href={"https://www.linkedin.com/in/oluwatimilehin-rotimi-96b248256"} className='text-white m-auto text-center text-sm lg:text-2xl mb-6 duration-500 hover:text-[#fb4566]'><LinkedInIcon /> LinkedIn</Link>
                            </div>

                        </div>
                        <div className=' w-fit'>

                            <div className=' w-full flex items-center justify-center'>
                                <Link target="_blank" href={"https://docs.google.com/document/d/1OGuBjtvFO34optYxNDb8zc2robnZaxCqcZjt3Qbgz64/edit?usp=drive_link"} className='text-white m-auto text-center text-sm lg:text-2xl mb-6 duration-500 hover:text-[#fb4566]'><FileDownloadOutlinedIcon /> Download CV</Link>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default page


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
            "View a catalogue of all the management system projects I have built. Management system projects are projects that are used for management of several resources such as staff, taska or events.",
        link: "/projects/#management",
    },
];