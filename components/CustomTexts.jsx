'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
  variants={textContainer}
  className={`${textStyles} font-normal text-[14px] text-secondary-white z-30`}
  >
    {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === '' ? '\u00A0' : letter}
        </motion.span>
      ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
  variants={textVariant2}
  initial="hidden"
  whileInView="show"
  className={`${textStyles} mt-[8px] font-bold text-[40px] text-white z-30 md:text-[64px]`}
  >
    {title}
  </motion.h2>
);
