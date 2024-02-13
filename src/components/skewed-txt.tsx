import { cn } from "@/lib/utils"

import styles from "./skewed/skew.module.css"

const Skewed = () => {
  return (
    <div className={cn(styles.wrapper, "font-heading")}>
      <div className={styles.bg}> CHACHA</div>
      <div className={styles.fg}> CHACHA </div>
    </div>
  )
}

export default Skewed
