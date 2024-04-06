import React from 'react'
import { GoBell } from "react-icons/go";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";


const Navbar = () => {
    return (
        <nav className=''>
            <div className="navbar fixed rounded-lg flex justify-between w-full darkgray text-white">
                <ul className="fixed flex justify-start mx-6 my-3 gap-2">
                    <li><button className='bg-black p-3 rounded-full'><MdOutlineArrowBackIos /></button></li>
                    <li><button className='bg-black p-3 rounded-full'><MdOutlineArrowForwardIos /></button></li>
                </ul>
                <ul className='fixed right-0 flex my-4 pe-4 gap-2'>
                    <li><button className='bg-white text-black px-3 py-1 rounded-3xl font-semibold'>Explore Premium</button></li>
                    <li><button className='bg-black font-semibold px-3 py-1 rounded-3xl flex items-center gap-1'><MdOutlineDownloadForOffline />Install App</button></li>
                    <li><button className='bg-black font-semibold px-2 py-2 rounded-full'><GoBell /></button></li>
                    <li><button className='bg-black font-semibold rounded-full'><IoPersonCircle style={{ fontSize: '32px' }}/></button></li>
                </ul>
            </div>

            <div className="category flex justify-start w-full text-white">
                <ul className='fixed top-20 flex mx-6 my-4 gap-2'>
                    <li><button className='bg-white text-black px-3 py-1 rounded-full font-semibold'>All</button></li>
                    <li><button className='lightgray text-white px-3 py-1 rounded-full font-semibold'>Music</button></li>
                    <li><button className='lightgray text-white px-3 py-1 rounded-full font-semibold'>Podcast</button></li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
