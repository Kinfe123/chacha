import Shiny from "./shiny-btn"
import styles from "./styles"

const ForFree = () => {
  return (
    
    <div className="mx-auto h-[400px] w-[80%] rounded-t-[40px] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,176,225,0.45),rgba(255,255,255,0))] ">
      <div className="flex flex-col items-center justify-center p-10 text-2xl">
        <h1 className={styles.footerheading}>
          Enjoy <span className="mx-[0.20rem]"></span>for{" "}
          <span className="mx-[0.20rem]"></span> Unlimited
        </h1>

        <h1 className="mb-5">Start cooking your contents at easiest.</h1>
        <Shiny />
      </div>
    </div>
  )
}

export default ForFree
