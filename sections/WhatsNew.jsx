'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';


const WhatsNew = () => {
    return (
        <section className={`${styles.paddings} relative z-10`} id="newest">
        <div className='newest-gradient'/>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once:false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
        >
            <motion.div
            variants={planetVariants("left")}
            className={`${styles.flexCenter} flex-1`}
            >
            <img
            src="/images/whats-new.png"
            alt="شروع کن"
            className="w-[90%] h-[90%] object-contain"
            />
            </motion.div>
            <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex flex-col flex-[0.75] justify-center"
            >
        <TypingText title="| تازه ترین ها چیست؟" />
        <TitleText title={<>چه چیزی درباره متاورس تازه است؟</>} />
            <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
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
        </section>
    )
}

export default WhatsNew;