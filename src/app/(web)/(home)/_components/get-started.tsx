// @ts-npcheck
"use client"

import { motion } from "framer-motion"

import { fadeIn, planetVariants, staggerContainer } from "@/lib/utils"

import { TitleText } from "./custome-text"
import StartSteps from "./steps"
import styles from "./styles"

const GetStarted = () => (
  <section
    className={`${styles.paddings}  relative z-10 mx-10  overflow-hidden rounded-t-3xl  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(192,132,252,0.3),rgba(255,255,255,0))]  `}
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
          src="/visions/rockets.svg"
          alt="get-started"
          className="h-[90%] w-[90%] object-contain text-white"
        />
      </motion.div>
      {/* <div className="absolute bottom-10 -z-10 flex w-full justify-center">
        <div className="animate-pulse-slow h-[400px] w-[400px] max-w-full rounded-full bg-gradient-to-tr from-purple-600 to-[#8057e9] opacity-20 blur-[100px]" />
      </div> */}
      {/* <div className="absolute bottom-0 -z-10 flex w-full justify-center">
        <div className="animate-pulse-slow h-[310px] w-[310px] max-w-full rounded-full bg-[#8678F9] opacity-20 blur-[100px]" />
      </div> */}
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
    <motion.div
      //   variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-[0.75]  flex-col justify-center"
      >
        {/* <TypingText title="| How Metaversus Works" /> */}
        {/* <TitleText  title={<>PODCASTS BEING SO EASY</>} /> */}
        <h1 className="text-4xl bg-gradient-to-tr from-zinc-400/50 via-white to-white/60 bg-clip-text text-transparent font-heading  md:text-5xl lg:text-7xl">
          PODCAST BECOMES SO <span className="font-bolder">
            EASY
          </span>
        </h1>
        <div className="mt-[31px] flex max-w-[500px] flex-col gap-[10px]">
          <p className="text-[18px] font-normal leading-[32.4px] text-[#B0B0B0]">
            {" "}
            Reach millions, captivate audiences, and elevate your brand with our
            seamless hosting, distribution, and analytics solutions. Join the
            podcasting revolution today and let your voice be heard!
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/visions/podcast.svg"
          alt="get-started"
          className="h-[90%] w-[90%] object-contain text-white"
        />
      </motion.div>
    </motion.div>
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
          src="/visions/stereo.svg"
          alt="get-started"
          className="h-[90%]  animate-in w-[90%] object-contain text-white"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-[0.75]  flex-col justify-center"
      >
        <h1 className="text-4xl  bg-gradient-to-tr from-zinc-400/50 via-white to-white/60 bg-clip-text text-transparent font-heading  md:text-5xl lg:text-7xl">
          <span className="bg-gradient-to-tr from-zinc-400/50 via-white to-white/60 bg-clip-text text-transparent">
            SUITED FOR SOLO
          </span> <span className="bg-gradient-to-tr from-purple-400 to-red-200  bg-clip-text text-transparent">ARTIST</span>
        </h1>
        <div className=" flex max-w-[500px] flex-col gap-[10px]">
          <p className="text-[18px] font-normal leading-[32.4px] ">
            {" "}
            Amplify your music to new heights with our cutting-edge platform for music producers. Unleash your creativity, connect with fans worldwide, and take your sound to the next level. From production to promotion, our comprehensive toolkit empowers you to shape your musical journey
          </p>
        </div>
      </motion.div>

    </motion.div>
    <motion.div
      //   variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-[0.75]  flex-col justify-center"
      >
        {/* <TypingText title="| How Metaversus Works" /> */}
        {/* <TitleText  title={<>PODCASTS BEING SO EASY</>} /> */}
        <h1 className="text-4xl  bg-gradient-to-tr from-zinc-400/50 via-white to-white/60 bg-clip-text text-transparent font-heading  md:text-5xl lg:text-7xl">
          <span className="bg-gradient-to-tr from-zinc-400/50 via-white to-white/60 bg-clip-text text-transparent">
            EARN WHILE MAKING
          </span> <span className="inline bg-gradient-to-tr from-purple-400 to-red-200  bg-clip-text text-transparent">JOY</span>
        </h1>
        <div className="mt-[31px] flex max-w-[500px] flex-col gap-[10px]">
          <p className="text-[18px] font-normal leading-[32.4px] text-[#B0B0B0]">
            {" "}
            Transform your creativity into a sustainable income stream while indulging in what you love most—content creation. Our innovative platform empowers creators to monetize their talents and passions, offering a plethora of opportunities to earn while enjoying the process.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/visions/richs.svg"
          alt="get-started"
          className="h-[90%] w-[90%] object-contain text-white"
        />
      </motion.div>
    </motion.div>
  </section>
)

export default GetStarted

export const startingFeatures = [
  "Go to the streams page",
  "Go to creator dashboard and generate the key",
  "Put the key on your fav streaming software",
  "And Yeah , Smash start stream and spark live",
]

export const startingFeatures1 = [
  ". Reach millions, captivate audiences, and elevate your brand with our seamless hosting, distribution, and analytics solutions. Join the podcasting revolution today and let your voice be heard!",
]

export const PodCast = ""
