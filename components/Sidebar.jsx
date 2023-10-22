'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = ({ handlemenuClick }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [bgBlackOverly, setBgBlackOverly] = useState(false);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <>
        {
            isSidebarOpen 
            && 
            <div className='overlay z-30' onClick={() => setBgBlackOverly(true)}>
            <div
            class="fixed top-0 bottom-0 w-[300px] right-0 p-2 text-center bg-gray-900 overflow-y-auto"
            >
                <div class="text-gray-100 text-xl">
                <div class="p-2.5 mt-1 flex items-center justify-between">
                    <h1 class="font-extrabold text-gray-200 text-[24px] ml-3">
                        متاورس فارسی
                    </h1>
                    <button onClick={handlemenuClick}>
                        <img className="w-[24px] h-[24px] bg-white object-contain" src="/images/x-mark.svg" alt="x-mark"/>
                    </button>
                </div>
                <div class="h-[1px] bg-gray-600 my-2"></div>
                </div>
                <div
                class="flex items-center p-2.5 mt-3 px-4 rounded-md duration-300 cursor-pointer text-white hover:bg-violet-800"
                >
                    <Link href="#home" onClick={toggleSidebar}>
                    <span class="font-bold text-[15px] ml-4 text-gray-200">
                        خانه
                    </span>
                    </Link>
                    </div>
                <div
                class="flex items-center p-2.5 mt-3 px-4 rounded-md duration-300 cursor-pointer text-white hover:bg-violet-800"
                >
                    <span class="font-bold text-[15px] ml-4 text-gray-200">
                    <Link href="#about" onClick={toggleSidebar}>
                        درباره متاورس
                    </Link>
                    </span>
                </div>
                <div
                class="flex items-center p-2.5 mt-3 px-4 rounded-md duration-300 cursor-pointer text-white hover:bg-violet-800"
                >
                    <Link href="#explore" onClick={toggleSidebar}>
                    <span class="font-bold text-[15px] ml-4 text-gray-200">
                        جهان ها
                    </span>    
                    </Link>
                </div>
                <div
                class="flex items-center p-2.5 mt-3 px-4 rounded-md duration-300 cursor-pointer text-white hover:bg-violet-800"
                >
                    <Link href="#know-metavers" onClick={toggleSidebar}>
                    <span class="font-bold text-[15px] ml-4 text-gray-200">
                        آشنایی با متاورس
                    </span>
                    </Link>
                </div>
                <div
                class="flex items-center p-2.5 mt-3 px-4 rounded-md duration-300 cursor-pointer text-white hover:bg-violet-800"
                >
                    <Link href="#newest" onClick={toggleSidebar}>
                    <span class="font-bold text-[15px] ml-4 text-gray-200">
                        تازه ترین ها
                    </span>
                    </Link>
                </div>
                <div
                class="flex items-center p-2.5 mt-3 px-4 rounded-md duration-300 cursor-pointer text-white hover:bg-violet-800"
                >
                    <Link href="#articles" onClick={toggleSidebar}>
                    <span class="font-bold text-[15px] ml-4 text-gray-200">
                        مقالات
                    </span>
                    </Link>
                </div>
            </div>
            </div>
        }
    </>
  )
}

export default Sidebar