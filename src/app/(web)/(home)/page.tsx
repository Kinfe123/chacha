import Contacts from "../_components/contacts"
import { LaunchText } from "../_components/lauch"
import { Customers } from "./_components/customers"
import ForFree from "./_components/for-free"
import Form from "./_components/forms/form"
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

      <div className=" grid grid-cols-2 gap-1 rounded-t-2xl ">
        <div className="mt-[-500x] flex   justify-center items-center bg-transparent px-10">
          <p className="md:text-4xl mt-[-700px] font-heading lg:text-6xl xl:text-[12rem] font-medium bg-gradient-to-tr from-purple-400 to-red-200  bg-clip-text text-transparent">
            We help <br />  you grow from beginning.
          </p>
        </div>
        <div className="overflow-clip">
          <HorizontalScrollCarousel />
        </div>
      </div>
      <div className="">
        <Customers />
      </div>
      <div className='overflow-hidden'>
        <Contacts />
      </div>
      <div className='relative overflow-hidden'>
        <LaunchText />
      </div>
      <div className="relative mt-20">

        <Form />
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
