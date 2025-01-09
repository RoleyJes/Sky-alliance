import { Link } from "react-router-dom";
import { RouteNavs } from "../../constants/route-nav-enum";

export default function Hero() {
  return (
    <section className="px-4 mt-[90px] bg-primary min-h-[calc(100vh-90px)] relative flex items-center justify-center">
      <iframe
        className="absolute w-full h-full object-cover object-center mix-blend-overlay"
        src="https://www.youtube.com/embed/Lxy1oEnC9I0?autoplay=1&mute=1&loop=1&modestbranding=1&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1&playlist=Lxy1oEnC9I0"></iframe>

      <div className="max-w-[77.625rem] mx-auto z-10 text-center flex flex-col items-center">
        <h1 className="font-abhaya bg-gradient-to-r from-[#fff] from-[-4.79%] via-[#6825D7] via-[20.65%] to-[#fefefe] to-[82.41%] bg-clip-text text-transparent inline-block font-extrabold text-center text-[2rem] leading-[2.44rem] md:text-[4rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[6.1rem] mb-[1.69rem]">
          Shape the Future of Blockchain and Crypto with Sky Alliance
        </h1>

        <Link
          to={RouteNavs.Register}
          className="bg-pink w-fit rounded-[1.875rem] flex justify-center items-center py-[0.88rem] px-[3rem] text-white text-[1.5rem] hover:outline hover:bg-[#001940] transition-all duration-300 mx-auto lg:mx-0">
          Register Now
        </Link>
      </div>
    </section>
  );
}
