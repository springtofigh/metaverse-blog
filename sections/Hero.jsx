'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';


const Hero = () => {
  return (
    <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col z-10 relative">
          <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
          >
          METAVERSE
          </motion.h1>
          <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
          >
          <h1 className={styles.heroHeading}>MA</h1>
          <div className={styles.heroDText}/>
          <h1 className={styles.heroHeading}>NESS</h1> 
          </motion.div>
        </div>

        <motion.div
        variants={slideIn("right", "tween", 0.3, 1)}
        className=" w-full relative -mt-[12px] md:-mt-[20px]"
        >
          <div className=" w-full absolute -top-[30px] h-[300px] rounded-tl-[140px] hero-gradient z-[0]">
          <img
            className="w-full h-[350px] object-cover rounded-tl-[140px] relative z-10 sm:h-[500px]"
            src="/images/cover.png"
            alt="تصویر فضایی"
          />

          <a href="#explore">
            <div className="flex justify-start w-full pr-[40px] -mt-[-50px] relative z-10 sm:-mt-[70px]">
              <img className="w-[100px] h-[100px] sm:w-[155px] sm:h-[155px]" src="/images/stamp.png" alt="تمبر"/>
            </div>
          </a>
          </div>

        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero;