import GetStarted from "./_components/get-started"
import Hero from "./_components/hero"

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="relative">
        <GetStarted />
      </div>
    </div>
  )
}

export default LandingPage
