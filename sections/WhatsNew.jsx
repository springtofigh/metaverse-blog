'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';


const WhatsNew = () => {
  return (
    <sction className={`${styles.paddings} relative z-10`}>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: "false", amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
      >
        <motion.div
        variants={planetVariants("right")}
        className={`${styles.flexCenter} flex-1`}
        >
        <img
          src="/images/whats-new.png"
          alt="اخبار جدید"
          className="w-[90%] h-[90%] object-contain"
        />
        </motion.div>
        <motion.div
        variants={fadeIn("right", "tween", 0.2 ,1)}
        className="flex flex-col justify-center flex-[0.95]"
        >
        <TypingText title="| تازه ترین ها چیست؟" />
        <TitleText title={<>چه چیزی درباره متاورس تازه است؟</>} />
        <div className="flex justify-start items-center flex-wrap mt-[48px] gap-[24px]">
          {
            newFeatures.map((feature) => (
              <NewFeatures
              key={feature.title}
              {...feature}
              />
            ))
          }
        </div>
        </motion.div>
      </motion.div>
    </sction>
  )
}

export default WhatsNew;
