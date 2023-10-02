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

        <div className='absolute bottom-20 right-20 p-[6px] w-[70px] h-[70px] bg-slate-500 rounded-full'>
          <img src='/images/people-01.png' alt='people-1' className='w-full h-full' />
        </div>
        <div className='absolute top-5 rigth-20 p-[6px] bg-slate-500 rounded-[24px]'>
          <img src='/images/map-poster2.png' alt='map-poster' className='w-full h-full object-contain' />
        </div>
        <div className='absolute top-5 left-20 p-[6px] w-[70px] h-[70px] bg-slate-500 rounded-full'>
          <img src='/images/people-02.png' alt='people-2' className='w-full h-full' />
        </div>
        <div className='absolute top-[35%] left-[20%] p-[6px] bg-slate-500 rounded-[24px]'>
          <img src='/images/map-poster1.png' alt='people-2' className='w-full h-full object-contain' />
        </div>
        <div className='absolute top-1/2 left-[45%] p-[6px] w-[70px] h-[70px] bg-slate-500 rounded-full'>
          <img src='/images/people-03.png' alt='people-3' className='w-full h-full' />
        </div>
      </motion.div>
    </motion.div>
    </section>
  )
}

export default World;