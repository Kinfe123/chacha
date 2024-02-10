// @ts-npcheck
"use client"

import { motion } from "framer-motion"

import { fadeIn, planetVariants, staggerContainer } from "@/lib/utils"

import { TitleText } from "./custome-text"
import StartSteps from "./steps"
import styles from "./styles"

const GetStarted = () => (
  <section
    className={`${styles.paddings}  relative z-10  mx-10 rounded-t-3xl bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(90,90,100,0.5),rgba(255,255,255,0))] `}
  >
    <motion.div
      //   variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="h-[90%] w-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-[0.75] flex-col justify-center"
      >
        {/* <TypingText title="| How Metaversus Works" /> */}
        <TitleText title={<>START ON CHACHA</>} />
        <div className="mt-[31px] flex max-w-[500px] flex-col gap-[10px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default GetStarted

export const startingFeatures = [
  "Go to the streams page",
  "Go to creator dashboard nd generate the key",
  "Put the key on your fav streaming software",
  "And Yeah , Smash start stream and spark live",
]
