  // @ts-nocheck

"use client"

import { motion } from "framer-motion"

import {
  slideIn,
  slideInForHero,
  staggerContainer,
  textVariant,
} from "@/lib/utils"

import styles from "./styles"

const Hero = () => (
  <section className={`${styles.yPaddings} mx-2 pl-6 sm:pl-16`}>
    <motion.div
    
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="t relative z-10 ml-auto flex flex-col items-end justify-center">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          <span className="bg-gradient-to-tr from-purple-400 to-red-200 bg-clip-text text-transparent ">
            CHACHA&apos;
          </span>{" "}
          s
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          <h1 className={styles.heroHeading}>MA</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>NESS</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideInForHero("right", "tween", 0.2, 1)}
        className="relative -mt-[12px] w-full md:-mt-[40px]"
      >
        <div className=" absolute -top-[5px] z-0 h-full w-screen rounded-tl-[140px] bg-purple-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(180,100,210,0.3),rgba(255,255,255,0))] blur-md backdrop-blur-xl" />
        <img
          src="/cover2.png"
          alt="cover"
          className="relative z-10 h-full w-screen rounded-tl-[140px] object-cover sm:h-full sm:w-screen"
        />
        <a href="#explore"></a>
      </motion.div>
    </motion.div>
  </section>
)

export default Hero
