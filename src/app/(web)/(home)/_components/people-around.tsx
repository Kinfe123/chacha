"use client"

import { motion } from "framer-motion"

import { fadeIn, staggerContainer } from "@/lib/utils"

import { TitleText } from "./custome-text"
import styles from "./styles"

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      //   variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      {/* <TypingText title="| People on the world" textStyles="text-center" /> */}
      {/* <TitleText
        textStyles="text-center max-w-6xl mx-auto text-[120px] "
        title={<>Meet with other people around the world</>}
      /> */}
      <motion.h1 className="mx-auto text-center text-[120px]">
        Meet with people around the world
      </motion.h1>
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex h-[550px] w-full"
      >
        <img src="/map.png" alt="map" className="h-full w-full object-cover" />
        <div className="absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <img src="/people-01.png" className="h-full w-full" />
        </div>
        <div className="absolute left-24 top-10 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <img src="/people-02.png" className="h-full w-full" />
        </div>
        <div className="absolute left-[45%] top-1/2 h-[70px] w-[70px] rounded-full bg-[#5d6680] p-[6px]">
          <img src="/people-03.png" className="h-full w-full" />
        </div>

        <div className="absolute right-[28%] top-[15%] h-[150px] w-[220px] overflow-hidden rounded-[24px] bg-[#09597E] p-[8px]">
          <img src="/people-04.png" className="h-full w-full rounded-[24px]" />
          <div className="absolute bottom-3 left-5 flex flex-col gap-1">
            <div className="flex  items-center">
              <div className="flex ">
                <img
                  src="people-01.png"
                  className="relative left-1 top-0 z-10  h-[24px]  w-[24px]"
                />
                <img
                  src="people-02.png"
                  className="relative -left-1 top-0 z-20 h-[24px] w-[24px] "
                />
                <img
                  src="people-03.png"
                  className="relative -left-3 top-0 z-30 h-[24px] w-[24px] "
                />
              </div>
              <h4 className="-ml-1 text-[12px] font-normal  text-white">
                + 256 has joined
              </h4>
            </div>
            <h3 className="text-center text-[24px] font-bold text-white">
              Grow on ChaCha
            </h3>
          </div>
        </div>

        <div className="absolute  left-[15%] top-[45%] h-[150px] w-[240px] overflow-hidden rounded-[24px] bg-[#09597E] p-[8px]">
          <img src="/people-05.png" className="h-full w-full rounded-[24px]" />
          <div className="absolute bottom-5 left-5 flex flex-col gap-1">
            <div className="flex  items-center">
              <div className="flex ">
                <img
                  src="people-01.png"
                  className="relative left-1 top-0 z-10  h-[24px]  w-[24px]"
                />
                <img
                  src="people-02.png"
                  className="relative -left-1 top-0 z-20 h-[24px] w-[24px] "
                />
                <img
                  src="people-03.png"
                  className="relative -left-3 top-0 z-30 h-[24px] w-[24px] "
                />
              </div>
              <h4 className="-ml-1 text-[12px] font-normal  text-white">
                + 264 has joined
              </h4>
            </div>
            <h3 className="text-center text-[24px] font-bold text-white">
              Live Smarter
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default World
