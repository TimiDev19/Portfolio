import Image from 'next/image'
import React from 'react'
import techstack from '@/app/helpers/helper'
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const page = () => {
    const ecommerce_projects = techstack.projects.filter((project) => {
        return project.category === "ecommerce"
    })
    const management_projects = techstack.projects.filter((project) => {
        return project.category === "management"
    })
    const portfolio_projects = techstack.projects.filter((project) => {
        return project.category === "portfolio"
    })
    return (
        <div className=' text-white pt-[100px] px-5'>
            <div id='ecommerce' className=' mb-[40px]'>
                <h1 className=' font-bold text-5xl mb-6'>eCommerce</h1>
                <div className=" w-full">
                    {
                        ecommerce_projects.map((project, index) => (
                            <div key={index} className=" border-2 border-[#fb4566] w-[95%] mx-auto mb-4 duration-500 flex flex-col lg:flex-row items-center justify-center cursor-pointer">
                                <Image
                                    src={project.image}
                                    alt=""
                                    className=' h-auto w-full lg:w-[50%]'
                                />
                                <div className=' w-full lg:w-[50%] p-4'>
                                    <h1 className=" font-bold text-xl capitalize"> {project.title}</h1>
                                    <p className=" font-light">{project.description}</p>
                                    <h1 className=" font-bold mt-4 italic"> {project.tech}</h1>
                                    <div className=" w-full flex items-center justify-center mt-5">
                                        <Link target="blank" href={project.liveLink} className=" mx-3 px-6 py-2 rounded-md hover:bg-[#fb4566] border-[#fb4566] border-2 text-[#fb4566] hover:text-[#fff] hover:border-2 hover:border-[#fb4566] bg-transparent duration-500 font-semibold flex items-center justify-center"><OpenInNewOutlinedIcon className="mr-3" /> Live Site</Link>
                                        <Link target="blank" href={project.github} className=" mx-3 px-6 py-2 rounded-md hover:bg-[#fb4566] border-[#fb4566] border-2 text-[#fb4566] hover:text-[#fff] hover:border-2 hover:border-[#fb4566] bg-transparent duration-500 font-semibold flex items-center justify-center"><GitHubIcon className="mr-3" /> GitHub</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div id='management' className=' mb-[40px]'>
                <h1 className=' font-bold text-5xl mb-6'>Management Systems</h1>
                <div className=" w-full">
                    {
                        management_projects.map((project, index) => (
                            <div key={index} className=" border-2 border-[#fb4566] w-[95%] mx-auto mb-4 duration-500 flex flex-col lg:flex-row items-center justify-center cursor-pointer">
                                <Image
                                    src={project.image}
                                    alt=""
                                    className=' h-auto w-full lg:w-[50%]'
                                />
                                <div className=' w-full lg:w-[50%] p-4'>
                                    <h1 className=" font-bold text-xl capitalize"> {project.title}</h1>
                                    <p className=" font-light">{project.description}</p>
                                    <h1 className=" font-bold mt-4 italic"> {project.tech}</h1>
                                    <div className=" w-full flex items-center justify-center mt-5">
                                        <Link target="blank" href={project.liveLink} className=" mx-3 px-6 py-2 rounded-md hover:bg-[#fb4566] border-[#fb4566] border-2 text-[#fb4566] hover:text-[#fff] hover:border-2 hover:border-[#fb4566] bg-transparent duration-500 font-semibold flex items-center justify-center"><OpenInNewOutlinedIcon className="mr-3" /> Live Site</Link>
                                        <Link target="blank" href={project.github} className=" mx-3 px-6 py-2 rounded-md hover:bg-[#fb4566] border-[#fb4566] border-2 text-[#fb4566] hover:text-[#fff] hover:border-2 hover:border-[#fb4566] bg-transparent duration-500 font-semibold flex items-center justify-center"><GitHubIcon className="mr-3" /> GitHub</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div id='portfolio' className=' mb-[40px]'>
                <h1 className=' font-bold text-5xl mb-6'>Company Portfolio</h1>
                <div className=" w-full">
                    {
                        portfolio_projects.map((project, index) => (
                            <div key={index} className=" border-2 border-[#fb4566] w-[95%] mx-auto mb-4 duration-500 flex flex-col lg:flex-row items-center justify-center cursor-pointer">
                                <Image
                                    src={project.image}
                                    alt=""
                                    className=' h-auto w-full lg:w-[50%]'
                                />
                                <div className=' w-full lg:w-[50%] p-4'>
                                    <h1 className=" font-bold text-xl capitalize"> {project.title}</h1>
                                    <p className=" font-light">{project.description}</p>
                                    <h1 className=" font-bold mt-4 italic"> {project.tech}</h1>
                                    <div className=" w-full flex items-center justify-center mt-5">
                                        <Link target="blank" href={project.liveLink} className=" mx-3 px-6 py-2 rounded-md hover:bg-[#fb4566] border-[#fb4566] border-2 text-[#fb4566] hover:text-[#fff] hover:border-2 hover:border-[#fb4566] bg-transparent duration-500 font-semibold flex items-center justify-center"><OpenInNewOutlinedIcon className="mr-3" /> Live Site</Link>
                                        <Link target="blank" href={project.github} className=" mx-3 px-6 py-2 rounded-md hover:bg-[#fb4566] border-[#fb4566] border-2 text-[#fb4566] hover:text-[#fff] hover:border-2 hover:border-[#fb4566] bg-transparent duration-500 font-semibold flex items-center justify-center"><GitHubIcon className="mr-3" /> GitHub</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default page