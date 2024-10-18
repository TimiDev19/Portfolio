"use client";
import me from '../assets/timi.jpg'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // You can include the weights you need
    variable: '--font-inter', // Define a custom variable for Tailwind or inline CSS usage
});

const Sidebar = () => {
    const [isDropdown, setIsDropdown] = useState(false)

    return (
        <div className={`${inter.className} z-[300] fixed w-full scroll-smooth font-bold uppercase`}>
            <div className={` bg-transparent  h-[100px] p-2 flex w-full items-center justify-between`}>
                <div className=' flex items-center justify-center h-full'>

                    <Image src={me} width={70} alt="" className=' rounded-full border-2 border-[#fb4566] mr-2' />

                    <div>
                        <h1 className=' text-white'>Oluwatimilehin Rotimi</h1>
                        <h1 className=' text-[#fb4566]'>Software Engineer</h1>
                    </div>
                </div>

                <div className=' hidden md:flex items-center'>
                    <Link href='/home' className=' cursor-pointer'><li className=' py-1 mb-1 px-4 hover:text-[#fb4566] text-white duration-500 flex items-center font-bold cursor-pointer tracking-[0.1em]'>Home</li></Link>
                    <Link href='/about' className=' cursor-pointer'><li className=' py-1 mb-1 px-4 hover:text-[#fb4566] text-white duration-500 flex items-center font-bold cursor-pointer tracking-[0.1em]'>About</li></Link>
                    <Link href='/projects' className=' cursor-pointer'><li className=' py-1 mb-1 px-4 hover:text-[#fb4566] text-white duration-500 flex items-center font-bold cursor-pointer tracking-[0.1em]'>Projects</li></Link>
                </div>

                <div onClick={() => setIsDropdown(!isDropdown)} className=' md:hidden'>
                    {
                        isDropdown ? (<CloseOutlinedIcon className=' cursor-pointer text-white hover:text-[#fb4566]' />) : (<MenuOutlinedIcon className=' cursor-pointer text-white hover:text-[#fb4566]' />)
                    }
                </div>
            </div>
            {
                isDropdown && <div className=' bg-[#0e090d] border-b-[#fb4566] border-b'>
                    <ul >
                        <a href='/home' className=' cursor-pointer'><li className=' py-1 mb-1 px-4 hover:text-[#fb4566] text-white duration-500 flex items-center font-bold cursor-pointer tracking-[0.1em]'>Home</li></a>
                        <a href='/about' className=' cursor-pointer'><li className=' py-1 mb-1 px-4 hover:text-[#fb4566] text-white duration-500 flex items-center font-bold cursor-pointer tracking-[0.1em]'>About</li></a>
                        <a href='/projects' className=' cursor-pointer'><li className=' py-1 mb-1 px-4 hover:text-[#fb4566] text-white duration-500 flex items-center font-bold cursor-pointer tracking-[0.1em]'>Projects</li></a>
                    </ul>
                </div>
            }

        </div>
    )
}

export default Sidebar
