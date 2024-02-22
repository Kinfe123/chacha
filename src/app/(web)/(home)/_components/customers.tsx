"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinte-scrol";
import { motion } from 'framer-motion'
import { slideIn, staggerContainer } from "@/lib/utils";
export function Customers() {
    return (

        <motion.div
            // @ts-ignore
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="overflow-hidden mx-auto flex-col"
        >
            <div>
                <motion.h1 variants={slideIn('right', 'tween', 0.2, 1)} className="bg-gradient-to-tr from-purple-400 to-red-200 bg-clip-text text-transparent font-bold lg:text-[160px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-center   "><span className="font-heading">We</span> <span className='font-heading'>Supports</span> </motion.h1>
            </div>
            {/* <p >We really do have rich support for a various softwares</p> */}
            <div className="h-[40rem] rounded-md flex flex-col  antialiased bg-white dark:bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,100,210,0.001),rgba(255,255,255,0))] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="normal"
                />
            </div>
        </motion.div>
    );
}

export function Customers2() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col  antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={rest}
                direction="left"
                speed="slow"
            />
        </div>
    );
}



const testimonials = [
    {
        img: '/broad1.png'
    },
    {
        img: '/stream.png'
    },
    {
        img: '/light-1.png'
    },
    {
        img: '/vmix-1.png'
    },
    // {
    //     img: '/obs-3.png'
    // },
];


const rest = [
    {
        img: '/broad1.png'
    },

    {
        img: '/wire.png'
    },

]