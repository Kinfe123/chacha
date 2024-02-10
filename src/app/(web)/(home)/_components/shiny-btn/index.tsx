import Link from "next/link"

import styles from "./shiny.module.css"

const Shiny = () => {
  return (
    <button className={styles.btn}>
      <Link href='/streams'>Start Now</Link>
    </button>
  )
}

export default Shiny
