"use client"

import { motion } from "framer-motion"

import { textContainer, textVariant2 } from "@/lib/utils"

export const TypingText = ({
  title,
  textStyles,
}: {
  title: string
  textStyles: string
}) => (
  <motion.p
    variants={textContainer}
    className={`text-secondary-white text-[14px] font-normal ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
)

export const TitleText = ({
  title,
  textStyles,
}: {
  title: React.ReactElement
  textStyles?: string
}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-heading text-[40px] font-bold text-white md:text-[80px] ${textStyles}`}
  >
    {title}
  </motion.h2>
)
