'use client'


import { cn } from '@/lib/utils';
import styles from './contact.module.css'
import Text3d from './text-3d';
import { useRef } from 'react';

export default function Contacts() {

    const plane = useRef(null);
    const maxRotate = 45;

    const manageMouseMove = (e: any) => {
        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight
        const perspective = window.innerWidth * 4;
        const rotateX = maxRotate * x - maxRotate / 2;
        const rotateY = (maxRotate * y - maxRotate / 2) * - 1;
        // @ts-ignore
        plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
    }

    return (
        <div onMouseMove={(e) => { manageMouseMove(e) }} className={cn(styles.container, 'overflow-hidden relative')}>
            <div className="absolute bottom-10 -z-10 flex w-full justify-center">
                <div className="animate-pulse-slow h-[400px] w-[400px] max-w-full rounded-full bg-gradient-to-tr from-purple-600 to-[#8057e9] opacity-20 blur-[100px]" />
            </div>
            <div className="absolute bottom-0 -z-10 flex w-full justify-center">
                <div className="animate-pulse-slow h-[310px] w-[310px] max-w-full rounded-full bg-[#8678F9] opacity-20 blur-[100px]" />
            </div>
            <div ref={plane} className={styles.body}>

                <Text3d primary={"POLISH"} secondary={"TURNING"} />
                <Text3d primary={"IDEA"} secondary={"IDEA"} />
                <Text3d primary={"Into"} secondary={"Into"} />
                <Text3d primary={"Shapes"} secondary={"Shapes"} />
            </div>
        </div>
    )
}