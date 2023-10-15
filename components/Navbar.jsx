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
    >
      <div className="absolute w-[50%] inset-0 gradient-01"/>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <button className="relative" onClick={handlemenuClick}>
        <img className="w-[24px] h-[24px] object-contain" src="/images/menu.svg" alt="menu"/>
      </button>
        <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
          متاورس فارسی
        </h2>
        <img className="w-[24px] h-[24px] object-contain" src="/images/search.svg" alt="search"/>
      </div>
    </motion.nav> 
    { showSidebar && <Sidebar handlemenuClick={handlemenuClick} /> }
</>
  )
}

export default Navbar;
