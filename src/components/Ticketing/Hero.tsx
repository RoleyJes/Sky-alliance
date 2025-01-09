import calendar from "../../assets/Home/caalendar.svg";
import location from "../../assets/Home/location.svg";
import Heading from "../Heading";
import PinkBtn from "../PinkBtn";
import CounterNumbers from "./CounterNumbers";

interface HeroProps {
  onOpen: () => void;
}

export default function Hero({ onOpen }: HeroProps) {
  return (
    <section className="bg-sub-hero bg-no-repeat bg-cover bg-center text-white px-4 mt-[8rem] mb-[2.59rem] md:px-[4rem] xl:pt-[9.31rem] xl:mb-[5.59rem] xl:px-[6.13rem]">
      <div className="max-w-[82.125rem] mx-auto">
        <div className="max-w-[50rem] space-y-5 md:space-y-10">
          <div>
            <Heading title="BTC Halving" />
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-base md:text-[1.44rem] md:leading-[1.725rem] font-inter">
              sky venture got fill page is not easy Lorem ipsum is just doing
              lorem ipsum things here. get the
            </p>
          </div>

          <div
            className="flex items-center justify-between text-[#e4e3e6] max-w-[45rem] text-xl md:text-[2.6rem] font-bold"
            data-aos="fade-up">
            <p>$ 80</p>
            <div className="flex items-center">
              <img
                className="size-[1.6rem] md:size-[3.15rem]"
                src={location}
                alt=""
              />
              <p>India</p>
            </div>
            <div className="flex items-center">
              <img
                className="size-[1.6rem] md:size-[3.15rem]"
                src={calendar}
                alt=""
              />
              <p>13th May</p>
            </div>
          </div>

          <div
            className="flex gap-3 font-inter text-base md:text-2xl"
            data-aos="fade-up">
            <p>Status:</p>
            <p className="text-success">Open</p>
          </div>

          <div data-aos="fade-up">
            <PinkBtn text="Register now" onOpen={onOpen} />
          </div>
        </div>
      </div>

      <CounterNumbers />
    </section>
  );
}
