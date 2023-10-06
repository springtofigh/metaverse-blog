'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
  variants={footerVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.paddings} py-8 relative`}
  >
    <div className='footer-gradient'/>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-6'>
        <button type='submit' className='flex items-center justify-between h-fit px-6 py-4 gap-3 bg-[#25618B] rounded-[32px]'>
        <span className='font-normal text-[16px] text-white'>
          وارد متاورس بشو
        </span>
          <img
          src='/images/headset.svg'
          alt='headset'
          className='w-[24px] h-[24px] object-contain'
          />
        </button>
        <h4 className='font-bold text-[44px] text-white md:text-[64px]'>
        وارد متاورس بشو
        </h4>
      </div>

      <div className='mb-[50px] mt-[70px] h-[2px] bg-white opacity-10'/>

      <div className='flex flex-col'>
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <div className='flex gap-7'>
            {
              socials.map((social) => (
                <img 
                key={social.name}
                src={social.url} 
                alt={social.name}
                className='w-[24px] h-[24px] object-contain cursor-pointer'
                />
              ))
            }
          </div>
        <p className='font-normal text-[14px] text-white opacity-70'>
        کلیه حقوق زیر نظر انجمن بلاکچین ایران است.Copyright © 2021 - 2022
        </p>
        <h4 className='font-extrabold text-[24px] text-white'>
        متاورس فارسی
        </h4>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
