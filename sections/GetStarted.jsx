'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once:"false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >
        <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-col flex-[0.75] justify-center"
        >
          <TypingText title="| متاورس چگونه کار می کند؟" />
          <TitleText title={<>شروع به کار با چند کلیک ساده</>} />
          <div className="flex flex-col mt-[31px] max-w-[370px] gap-[24px]">
            {
              startingFeatures.map((feature, index) => (
                <StartSteps
                key={feature}
                number={index + 1}
                text={feature}
                />
              ))
            }
          </div>
        </motion.div>
        <motion.div
        variants={planetVariants("left")}
        className={`${styles.flexCenter} flex-1`}
        >
        <img
          src="/images/get-started.png"
          alt="شروع کن"
          className="w-[90%] h-[90%] object-contain"
        />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GetStarted;