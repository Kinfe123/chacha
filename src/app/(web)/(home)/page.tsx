import ForFree from "./_components/for-free"
import GetStarted from "./_components/get-started"
import Hero from "./_components/hero"
import World from "./_components/people-around"

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="relative">
        <GetStarted />
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
