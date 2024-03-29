import styles from "./styles"
import Link from "next/link";
const StartSteps = ({ number, text }: { number: string; text: string }) => (
  <div className={`${styles.flexCenter} flex-row relative`}>
    <div
      className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] border-[1.4px] border-white/5 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(192,132,210,0.8),rgba(255,255,255,0.1))]`}
    >
      <p className="text-[20px] font-bold text-white">{number}</p>
    </div>
    <p className="relative  ml-[30px] flex-1 text-[18px] font-normal leading-[32.4px] text-[#B0B0B0]">
      {number === '0 1' ? (<div>{text.slice(0, 9)}
        <Link href='/streams' className="cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-1 after:h-[1.2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-200 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-95">{text.slice(9, 17)}</Link>{text.slice(17)}</div>) : text}
    </p>
  </div>
)

export default StartSteps
