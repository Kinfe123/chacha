// @ts-nocheck

"use client"

import { motion } from "framer-motion"

import {
  cn,
  slideIn,
  slideInForHero,
  staggerContainer,
  textVariant,
} from "@/lib/utils"
import Skewed from "@/components/skewed-txt"

import styles from "./styles"
import Shiny from "./shiny-btn"

const Hero = () => (
  <section className={`${styles.yPaddings} mx-2 pl-6 sm:pl-16`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="t relative z-10 mx-auto flex h-screen flex-col items-center justify-start">
        <Skewed />
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          {/* <span className="bg-gradient-to-tr from-purple-400 to-red-200 bg-clip-text text-transparent ">
            CHACHA&apos;
          </span>{" "} */}
          {/* s */}
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="mt-[-400px] flex items-center justify-center text-red-900"
        >
          <h1
            className={cn(
              styles.heroHeading,
              "bg-gradient-to-tr from-purple-400 to-red-200 bg-clip-text text-transparent"
            )}
          >
            MA
          </h1>
          <div className={styles.heroDText} />
          <h1
            className={cn(
              styles.heroHeading,
              "bg-gradient-to-tr from-purple-400 to-red-200 bg-clip-text text-transparent"
            )}
          >
            NESS
          </h1>
        </motion.div>
        <div className="flex justify-center items-center mr-7">
          <Shiny />

        </div>
      </div>

      <motion.div
        variants={slideInForHero("right", "tween", 0.2, 1)}
        className="relative -mt-[12px] w-full md:-mt-[40px]"
      >
        <div className=" absolute -top-[5px] z-0 h-full w-screen rounded-tl-[140px] bg-purple-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(180,100,210,0.3),rgba(255,255,255,0))] blur-md backdrop-blur-xl" />
        {/* <img
          src="/cover2.png"
          alt="cover"
          className="relative z-10 h-full w-screen rounded-tl-[140px] object-cover sm:h-full sm:w-screen"
        /> */}

      </motion.div>
    </motion.div>

  </section>
)

export default Hero
