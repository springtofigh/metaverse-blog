'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0"/>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once:false, amount:0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| درباره متاورس" textStyles="text-center" />
        <motion.p 
        variants={fadeIn("up", "tween", 0.2, 1)}
        className='mt-[8px] font-normal text-[20px] text-center text-secondary-white sm:text-[12px]'
        >
        <span className="font-extrabold text-white">متاورس</span> {' '}یک چیز جدید در آینده است، جایی که می توانید از دنیای مجازی با احساس واقعی بودن آن لذت ببرید، می توانید آنچه را که در این دنیای فراجهانی احساس می کنید احساس کنید، زیرا این واقعاً
        <span className="font-extrabold text-white">
        جنون فراجهان
        </span>{' '}
        {' '} امروز فقط با استفاده از
        <span className="font-extrabold text-white">VR</span>{' '}دستگاه‌هایی که می‌توانید به راحتی دنیای فراجهانی را که می‌خواهید کشف کنید، رویاهای خود را به واقعیت تبدیل کنید. اجازه دهید
        <span className="font-extrabold text-white">کاوش کنید</span> در جنون متاورس با اسکرول کردن به سمت پایین 
        </motion.p>
        <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/images/arrow-down.svg" 
        alt='arrow down'
        className='mt-[28px] w-[18px] h-[28px] object-contain'
        />
      </motion.div>
    </section>
  )
}

export default About;
