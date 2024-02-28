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
        <div onMouseMove={(e) => { manageMouseMove(e) }} className={cn(styles.container, 'overflow-hidden')}>
            <div ref={plane} className={styles.body}>
                <Text3d primary={"TURN"} secondary={"Turning"} />
                <Text3d primary={"Space"} secondary={"Space"} />
                <Text3d primary={"Into"} secondary={"Into"} />
                <Text3d primary={"Shapes"} secondary={"Shapes"} />
            </div>
        </div>
    )
}