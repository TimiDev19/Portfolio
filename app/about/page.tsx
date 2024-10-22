"use client";
import React, { useState } from 'react'
import { FadeInFromBottom } from '../components/FadeInFromBottom'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import me from '../assets/timi.jpg'
import Link from 'next/link';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { HoverEffect } from '../components/HoverEffect';
import { NoLinkHoverEffect } from '../components/NoLinkHoverEffect';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // You can include the weights you need
    variable: '--font-inter', // Define a custom variable for Tailwind or inline CSS usage
});


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
        <div className={`${inter.className} pt-[100px]`}>
            <div className='h-[100vh] w-[100vw] flex items-center justify-center px-2'>
                <div className=' mb-[100px] h-[90%] w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between py-[70px]'>
                    <div className=' w-full lg:w-[30%] h-full flex items-start justify-center'>
                        <div className=' max-w-[70%] z-50 flex items-center justify-center p-2 border-2 border-[#fb4566] rounded-full mb-[30px]'>
                            <FadeInFromBottom><Image src={me} alt="" className=' w-full rounded-full border-2 border-[#fb4566]' /></FadeInFromBottom>
                        </div>
                    </div>
                    <div className=' lg:w-[65%] h-full text-left'>
                        <h1 className=' text-white font-extrabold text-3xl lg:text-6xl mb-3 lg:mb-[70px]'>I craft digital solutions combining creativity and efficiency</h1>
                        <p className=' text-white lg:text-4xl lg:w-[80%] mb-[30px]'>
                            My creative journey started in 2020 when I decided to learn not just learn to code as a skill but to make it my entire career.
                            I discovered a burining desire to create aesthetically pleasing websites that create ground breaking solutions.
                            Since then I've never looked back and as hard as it is to beleive my laptop is basically my child, following me everywhere because I find coding very relaxing.
                        </p>

                        <div className=' w-full flex items-start justify-start'>
                            <Link href={"/about"} className='text-[#fb4566] text-center text-2xl mb-6 duration-500 hover:text-white'><FileDownloadOutlinedIcon className=' mr-4' />Download CV</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' w-full'>
                <div className="flex items-center justify-center mb-4 w-[90%] mx-auto">
                    {/* <div className="border-t border-[#fb4566] flex-grow"></div> */}
                    <div className="px-4 text-3xl font-bold uppercase text-white">Skills 👨‍🔧</div>
                    <div className="border-t border-[#fb4566] flex-grow"></div>
                </div>

                <NoLinkHoverEffect items={skills} />

                <div className="flex items-center justify-center mb-4 w-[90%] mx-auto">
                    {/* <div className="border-t border-[#fb4566] flex-grow"></div> */}
                    <div className="px-4 text-3xl font-bold uppercase text-white">Techstack ⚙️</div>
                    <div className="border-t border-[#fb4566] flex-grow"></div>
                </div>

                <NoLinkHoverEffect items={techstack} />

            </div>

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
                            <Link href={"/about"} className='text-white m-auto text-center text-sm lg:text-2xl mb-6 duration-500 hover:text-[#fb4566]'><LinkedInIcon /> LinkedIn</Link>
                        </div>

                    </div>
                    <div className=' w-fit'>

                        <div className=' w-full flex items-center justify-center'>
                            <Link href={"/about"} className='text-white m-auto text-center text-sm lg:text-2xl mb-6 duration-500 hover:text-[#fb4566]'><FileDownloadOutlinedIcon /> Download CV</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default page


const skills = [
    {
        title: "Frontend Development 👨🏽‍💻",
        description:
            "With a strong foundation in modern frontend technologies, I specialize in building intuitive, responsive, and dynamic user interfaces. I focus on delivering pixel-perfect designs with a deep understanding of HTML, CSS, and JavaScript frameworks like React, TailwindCSS and Next.js. My expertise lies in creating seamless user experiences by leveraging cutting-edge tools, ensuring performance optimization, and maintaining accessibility standards across devices and browsers. From concept to deployment, I bring designs to life through clean, maintainable, and scalable code."
    },
    {
        title: "Backend Devlopment 🧩",
        description:
            "As a fullstack developer, I bring together both frontend and backend expertise to build comprehensive web applications. I am proficient in designing robust server-side architectures using Node.js, Express, and databases like MongoDB, while ensuring seamless integration with modern frontend frameworks like React and Next.js. My approach emphasizes scalability, performance, and security, creating efficient APIs and interactive UIs that provide smooth user experiences. From database design to deploying cloud-ready applications, I manage the entire development cycle with a focus on clean, maintainable code."
    },
    {
        title: "Speed 🏎️",
        description:
            "In today’s fast-paced digital landscape, speed is essential for delivering exceptional user experiences. I prioritize performance optimization in every project I undertake, from the initial design phase to deployment. By employing best practices such as code splitting, lazy loading, and efficient asset management, I ensure that applications load quickly and respond seamlessly. I leverage tools like Lighthouse and WebPageTest to analyze and enhance performance metrics, making data-driven decisions to reduce load times and improve overall efficiency. My commitment to speed not only enhances user satisfaction but also contributes to better search engine rankings and higher engagement rates."
    },
];

const techstack = [
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
]

const projects = [
    {
        title: "E-commerce Projects",
        description:
            "View a catalogue of all the e-commerce projects I have built. E-commerce websites are websites that enable users to view and purchase products.",
        link: "/projetcs/#ecommerce",
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