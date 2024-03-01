// @ts-nocheck
'use client'

import React, { useEffect, useRef } from "react";

export const LaunchText = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        resizeText();

        window.addEventListener("resize", resizeText);

        return () => {
            window.removeEventListener("resize", resizeText);
        };
    }, []);

    const resizeText = () => {
        const container = containerRef.current;
        const text = textRef.current;

        if (!container || !text) {
            return;
        }

        const containerWidth = container.offsetWidth;
        let min = 1;
        let max = 2500;

        while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            text.style.fontSize = mid + "px";

            if (text.offsetWidth <= containerWidth) {
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }


        text.style.fontSize = Math.min(max, 175) + "px";
    };

    return (
        <div
            className=" h-screen w-full flex justify-center items-center  overflow-hidden border-b-2 border-white/20 backdrop-blur-md  rounded-t-full  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(192,132,252,0.3),rgba(255,255,255,0))] to-red-200/5"
            ref={containerRef}
        >
            <div className="absolute inset-0 bg-[url(https://snippets.alexandru.so/grid.svg)] bg-fixed w-screen  h-screen overflow-hidden"></div>
            <span
                className="absolute place-items-center  animate-gradient text-center font-heading  bottom-0 left-0 mx-auto whitespace-nowrap   font-bold uppercase "
                ref={textRef}
            >
                JUST TO <span className="bg-gradient-to-tr hover:bg-gradient-to-tr hover:from-purple-400 hover:to-red-200 hover:bg-clip-text  duration-500 transition-color ease-in-out   hover:text-transparent from-purple-500 to-red-300 text-black/90 pt-5 rounded-lg px-2 ">LAUNCH</span> SOON.
            </span>
        </div>
    );
};