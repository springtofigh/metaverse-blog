'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
  variants={navVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01"/>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
    <img className="w-[24px] h-[24px] object-contain cursor-pointer" src="/images/menu.svg" alt="menu"/>
      <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
        متاورس فارسی
      </h2>
      <img className="w-[24px] h-[24px] object-contain" src="/images/search.svg" alt="search"/>
    </div>
  </motion.nav>
);

export default Navbar;
