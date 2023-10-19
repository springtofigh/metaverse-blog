'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handlemenuClick = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
    dir='ltr'
    >
      <div className="absolute w-[70%] inset-0 gradient-01"/>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img className="w-[24px] h-[24px] object-contain" src="/images/search.svg" alt="search"/>
        <h2 className="font-extrabold text-[20px] text-white leading-[30px] sm:text-[24px]">
          متاورس فارسی
        </h2>
        <button onClick={handlemenuClick}>
          <img className="w-[24px] h-[24px] object-contain" src="/images/menu.svg" alt="menu"/>
        </button>
      </div>
    </motion.nav> 
    { showSidebar && <Sidebar handlemenuClick={handlemenuClick} /> }
</>
  )
}

export default Navbar;
