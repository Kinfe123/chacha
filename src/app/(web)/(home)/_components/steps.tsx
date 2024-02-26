import styles from "./styles"

const StartSteps = ({ number, text }: { number: string; text: string }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] border-[1.4px] border-white/5 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(192,132,210,0.8),rgba(255,255,255,0.1))]`}
    >
      <p className="text-[20px] font-bold text-white">{number}</p>
    </div>
    <p className="ml-[30px] flex-1 text-[18px] font-normal leading-[32.4px] text-[#B0B0B0]">
      {text}
    </p>
  </div>
)

export default StartSteps
