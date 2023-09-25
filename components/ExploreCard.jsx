'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  return (
    <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "flex-[10] lg:flex-[3.5]" : 
      "flex items-center justify-center flex-[2] min-w-[170px] h-[700px] transition-[flex] duration-[0.75] ease-out-flex cursor-pointer lg:flex-[0.5]"
    }`}
    onClick={() => handleClick(id)}
    >
      <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full rounded-[24px] object-cover"
      />
      {
        active !== id ? (
          <h3 className="font-semibold text-[18px] text-white absolute z-0 sm:text-[26px] lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">{title}</h3>
        ) : (
          <div className='absolute bottom-0 p-8 w-full flex flex-col justify-start'>
            <div className={`${styles.flexCenter} mb-[16px] w-[60px] h-[60px] rounded-[24px] glassmorphism`}>
              <img 
              src="/images/headset.svg" 
              alt="logo"
              className="w-1/2 h-1/2 object-contain"/>
            </div>
            <p className="font-normal text-[16px] leading-[20.16px] text-white">
              وارد متاورس شو
            </p>
            <h2 className="mt-[24px] font-semibold text-white text-[24px] sm:text-[32px]">
            {title}
            </h2>
          </div>
        )
      }
    </motion.div>
  )
}

export default ExploreCard;