'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import styles from '../styles';


const Explore = () => {
  return (
    <div className={`${styles.paddings}`} id="explore">
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount:0.25}}
      className={`${styles.innerWidth} flex flex-col mx-auto`}
      >
        <TypingText title="| جهان ها" textStyles="text-center" />
        <TitleText
          title={<>انتخاب دنیایی که میخواهی در آن <br className="hidden md:block" /> کاوش کنی</>}
          textStyles="text-center"/>
      </motion.div>
    </div>
  )
}

export default Explore