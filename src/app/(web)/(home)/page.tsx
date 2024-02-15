import ForFree from "./_components/for-free"
import GetStarted from "./_components/get-started"
import Hero from "./_components/hero"
import { HorizontalScrollCarousel } from "./_components/horizontal-crsl"
import World from "./_components/people-around"

const LandingPage = () => {
  return (
    <div className="">
      <Hero />
      <div className="relative">
        <GetStarted />
      </div>

      <div className=" grid grid-cols-2 gap-1 rounded-t-2xl bg-neutral-950/50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,176,225,0.12),rgba(255,255,255,0))]">
        <div className="mt-[-500x] flex   justify-center items-center bg-transparent px-10">
          <p className="md:text-4xl mt-[-700px] font-heading lg:text-6xl xl:text-[12rem] font-medium bg-gradient-to-tr from-purple-400 to-red-200  bg-clip-text text-transparent">
            We help <br />  you grow from beginning.
          </p>
        </div>
        <div className="overflow-clip">
          <HorizontalScrollCarousel />
        </div>
      </div>
      <div className="relative">
        <World />
      </div>
      <div className="mb-0">
        <ForFree />
      </div>
    </div>
  )
}

export default LandingPage
