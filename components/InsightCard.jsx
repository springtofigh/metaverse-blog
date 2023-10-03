'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ title, subtitle, imgUrl, index }) => (
  <motion.div
  variants={fadeIn("up", "spring", index * 0.5, 1)}
  className='flex flex-col gap-6 md:flex-row'
  >
    <img 
    src={imgUrl} 
    alt=''  
    className='w-full h-[250px] object-cover rounded-[32px] md:w-[270px]'/>

    <div className='flex items-center justify-between w-full'>
      <div className='flex-1 max-w-[646px] flex-col md:mr-[62px]'>
      <h4 className='font-normal text-[26px] text-white lg:text-[42px]'>{title}</h4>
      <p className='font-normal text-[14px] text-secondary-white lg:text-[20px]'>{subtitle}</p>
      </div>

    <div 
    className='hidden w-[100px] h-[100px] items-center justify-center bg-white bg-transparent rounded-full border-[2px] lg:flex'>
      <img 
      src='/images/arrow.svg' 
      alt='arrow' 
      className='w-[48px] h-[48px] object-contain'
      />
    </div>
    </div>
  </motion.div>
);

export default InsightCard;
