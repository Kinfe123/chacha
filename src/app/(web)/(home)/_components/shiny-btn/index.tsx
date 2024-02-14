import Link from "next/link"

import styles from "./shiny.module.css"

const Shiny = () => {
  return (
    <Link href={'/streams'}>
      <button className={styles.btn}>
        Start Cooking

      </button>
    </Link>

  )
}

export default Shiny
