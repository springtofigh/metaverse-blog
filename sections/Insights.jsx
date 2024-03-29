'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';


const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`} id="articles">
      <div className='insight-gradient'/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| بینش متاورس" textStyles="text-center" />
        <TitleText  title={<>بینش در مورد متاورس</>} textStyles="text-center" />
        <div className='mt-[50px] flex flex-col gap-8 z-10'>
          {
            insights.map((insight, index)=> (
              <InsightCard
              key={`insight-${index}`}
              index={index + 1}
              {...insight}
              />
            ))
          }
        </div>
      </motion.div>
    </section>
  )
}

export default Insights;