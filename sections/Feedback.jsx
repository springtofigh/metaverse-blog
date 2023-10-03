'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';
import styles from '../styles';


const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-6 lg:flex-row`}
      >
      
    <motion.div
    variants={fadeIn("left", "tween", 0.2, 1)}
    className='relative flex justify-center items-center flex-1'
    >
      <img
      src='/images/planet-09.png'
      alt='بازخور'
      className='w-full h-auto min-h-[210px] object-cover rounded-[40px] lg:h-[610px]'
      />
      <motion.div
      variants={zoomIn(0.4, 1)}
      className='hidden absolute top-[3%] -left-[10%] z-20 lg:block'
      >
        <img 
        src="/images/stamp.png" 
        alt="stamp" 
        className='w-[138px] h-[138px] object-contain'
        />
      </motion.div>
    </motion.div>

    <motion.div
      variants={fadeIn("right", "tween", 0.2, 1)}
      className='relative flex flex-col justify-end p-6 flex-[0.5] border-[1px] border-[#6A6A6A] rounded-[32px] sm:p-8 lg:max-w-[370px]'
      >
        <div className='feedback-gradient'/>
        <div>
          <h4 className='font-bold text-[26px] text-white leading-[36px] sm:text-[32px] sm:leading-[40px]'>
            سمانه پاکدل
          </h4>
          <p className='mt-2 font-normal text-[12px] text-white leading-[12px] sm:text-[18px] sm:leading-[23px]'>
            موسس متاورس فارسی
          </p>
        </div>
        <p className='mt-6 font-normal text-[18px] text-white leading-[40px] sm:text-[24px] sm:leading-[45px]'>
        “با پیشرفت تکنولوژی امروز، متاورس برای کارهای امروزی بسیار مفید است یا می توان آن را وب ۳.۰ نامید. با استفاده از متاورس می توانید از آن برای هر چیزی استفاده کنید”
        </p>
      </motion.div>

    </motion.div>
    </section>
  )
}

export default Feedback;