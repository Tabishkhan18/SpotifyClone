import React, { useState, useEffect } from 'react';
import { GoBell } from "react-icons/go";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { TfiBolt } from "react-icons/tfi";


const Navbar = () => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const updateGreeting = () => {
            const currentHour = new Date().getHours();

            if (currentHour >= 5 && currentHour < 12) {
                setGreeting('Good Morning');
            } else if (currentHour >= 12 && currentHour < 18) {
                setGreeting('Good Afternoon');
            } else if (currentHour >= 18 && currentHour < 22) {
                setGreeting('Good Evening');
            } else {
                setGreeting('Good Night');
            }
        };

        updateGreeting();

        const intervalId = setInterval(updateGreeting, 60000); // Update greeting every minute

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);
    return (
        <nav className=''>
            <div className="navbar fixed rounded-lg md:flex justify-between w-full darkgray text-white hidden">
                <ul className="fixed flex justify-start mx-6 my-3 gap-2">
                    <li><button className='bg-black p-3 rounded-full'><MdOutlineArrowBackIos /></button></li>
                    <li><button className='bg-black p-3 rounded-full'><MdOutlineArrowForwardIos /></button></li>
                </ul>
                <ul className='fixed right-0 flex my-4 pe-4 gap-2'>
                    <li><button className='bg-white text-black px-3 py-1 rounded-3xl font-semibold'>Explore Premium</button></li>
                    <li><button className='bg-black font-semibold px-3 py-1 rounded-3xl flex items-center gap-1'><MdOutlineDownloadForOffline />Install App</button></li>
                    <li><button className='bg-black font-semibold px-2 py-2 rounded-full'><GoBell /></button></li>
                    <li><button className='bg-black font-semibold rounded-full'><IoPersonCircle style={{ fontSize: '32px' }} /></button></li>
                </ul>
            </div>
            <div className="category md:flex justify-start w-full text-white hidden">
                <ul className='fixed top-20 flex mx-6 my-4 gap-2'>
                    <li><button className='bg-white text-black px-3 py-1 rounded-full font-semibold'>All</button></li>
                    <li><button className='lightgray text-white px-3 py-1 rounded-full font-semibold'>Music</button></li>
                    <li><button className='lightgray text-white px-3 py-1 rounded-full font-semibold'>Podcast</button></li>
                </ul>
            </div>

            <div className="mobilelibraryhead flex justify-between items-center w-full darkgray text-white md:hidden">
                <h1 className='text-white font-bold text-2xl cursor-pointer mx-4' id='time'>{greeting}</h1>
                <div className="icons flex justify-center mx-4 gap-4">
                    <div className="icon flex items-center">
                        <TfiBolt size={30} />
                    </div>
                    <div className="icon flex items-center">
                        <FiSettings size={22} />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
