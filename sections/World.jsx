'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| مردم در همه جای دنیا" textStyles="text-center" />
        <TitleText 
        title={(<>دوستان اطراف خود را دنبال کنید و از آنها دعوت کنید تا در یک دنیا با هم بازی کنند</>)}
        textStyles="text-center"
        />

      <motion.div
      variants={fadeIn("up", "tween", 0.3, 1)}
      initial="hidden"
      whileInView="show"
      className='relative mt-[70px] w-full h-[526px] flex'
      >
        <img
        src='/images/map.png'
        alt='نقشه'
        className='w-full h-full object-contain'
        />

        <div className='absolute bottom-40 right-5 p-[4px] w-[40px] h-[40px] bg-slate-500 rounded-full lg:bottom-20 lg:right-20 sm:w-[70px] sm:h-[70px] sm:p-[6px]'>
          <img src='/images/people-01.png' alt='people-1' className='w-full h-full' />
        </div>
        <div className='absolute bottom-60 right-5 w-[70px] h-[60px] p-[6px] bg-slate-500 rounded-[24px] sm:top-5 sm:right-40 lg:w-[180px] lg:h-[136px]'>
          <img src='/images/map-poster2.png' alt='map-poster-2' className='w-full h-full' />
        </div>
        <div className='absolute top-[35%] left-2 p-[4px] w-[40px] h-[40px] bg-slate-500 rounded-full lg:top-5 lg:left-20 sm:w-[70px] sm:h-[70px] sm:p-[6px]'>
          <img src='/images/people-02.png' alt='people-2' className='w-full h-full' />
        </div>
        <div className='absolute top-[45%] left-[15%] w-[70px] h-[60px] p-[6px] bg-slate-500 rounded-[24px] sm:top-[35%] sm:left-[20%] lg:w-[180px] lg:h-[136px]'>
          <img src='/images/map-poster1.png' alt='map-poster-1' className='w-full h-full' />
        </div>
        <div className='absolute top-[45%] left-[45%] p-[4px] w-[40px] h-[40px] bg-slate-500 rounded-full lg:top-1/2 lg:left-[48%] sm:w-[70px] sm:h-[70px] sm:p-[6px]'>
          <img src='/images/people-03.png' alt='people-3' className='w-full h-full' />
        </div>
      </motion.div>
    </motion.div>
    </section>
  )
}

export default World;