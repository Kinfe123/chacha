import React, { useRef } from 'react'
import styles from './contact.module.css';
import { cn } from '@/lib/utils';


export default function Text3d({ primary, secondary }: { primary: string, secondary: string }) {

    const text1 = useRef(null);
    const text2 = useRef(null);

    return (
        <div className={cn(styles.textContainer, 'font-heading text-[6vw] md:text-[8vw] lg:text-[9vw] py-2')}>
            <p className={cn(styles.primary, 'bg-gradient-to-br from-purple-600 via-purple-500/90 to-white text-transparent bg-clip-text')} ref={text1}>{primary}</p>
            <p className={cn(styles.secondary, 'bg-gradient-to-tr from-purple-400 to-red-200 bg-clip-text text-transparent')} ref={text2}>{secondary}</p>
        </div>
    )
}