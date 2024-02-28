

import styles from './contact.module.css'
import Text3d from './text-3d';
import { useRef } from 'react';

export default function Home() {

  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e:any) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2; 
    const rotateY = (maxRotate * y - maxRotate / 2) * - 1;
    // @ts-ignore
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
  }

  return (
    <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.container}>
      <div ref={plane} className={styles.body}>
        <Text3d primary={"Turning"} secondary={"Turning"}/>
        <Text3d primary={"Space"} secondary={"Space"}/>
        <Text3d primary={"Into"} secondary={"Into"}/>
        <Text3d primary={"Shapes"} secondary={"Shapes"}/>
      </div>
    </div>
  )
}