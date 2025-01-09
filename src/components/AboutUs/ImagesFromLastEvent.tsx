import { useState } from "react";
import img1 from "../../assets/AboutUs/imgEvent1.svg";
import img2 from "../../assets/AboutUs/imgEvent2.svg";
import img3 from "../../assets/AboutUs/imgEvent3.svg";
import img4 from "../../assets/AboutUs/imgEvent4.svg";

export default function ImagesFromLastEvent() {
  const [increaseWidth, setIncreaseWidth] = useState(1);

  return (
    <section className="px-4 md:px-[4rem] xl:px-[6.19rem] font-normal text-white">
      <div className="max-w-[82.125rem] mx-auto pb-[4.3rem] lg:py-16 xl:py-[12.84rem]">
        <div className="mb-[3.12rem]">
          <h2 className="mb-[1.06rem] bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]">
            Check out images from the last event
          </h2>
          <p className="text-base md:text-[1.44rem] md:leading-[1.725rem]">
            sky venture got you , relax and get the best
          </p>
        </div>

        {/* Images */}

        <div className="min-w-[20rem] max-w-[82.125rem] flex justify-between gap-4 overflow-hidden">
          <img
            src={img1}
            className={`rounded-[1rem] w-[6.02rem] h-[13.94rem] md:w-[12.85rem] md:h-[29.75rem] block transition-all duration-1000 ease-linear object-cover object-center flex-gro ${
              increaseWidth === 1 ? "flex-grow" : "flex-shrink"
            }`}
            onMouseOver={() => setIncreaseWidth(1)}
            alt=""
          />
          <img
            src={img2}
            className={`rounded-[1rem] w-[6.02rem] h-[13.94rem] md:w-[12.85rem] md:h-[29.75rem] block transition-all duration-1000 ease-linear object-cover object-center ${
              increaseWidth === 2 ? "flex-grow" : "flex-shrink"
            }`}
            onMouseOver={() => setIncreaseWidth(2)}
            alt=""
          />
          <img
            src={img3}
            className={`rounded-[1rem] w-[6.02rem] h-[13.94rem] md:w-[12.85rem] md:h-[29.75rem] block transition-all duration-1000 ease-linear object-cover object-center ${
              increaseWidth === 3 ? "flex-grow" : "flex-shrink"
            }`}
            onMouseOver={() => setIncreaseWidth(3)}
            alt=""
          />
          <img
            src={img4}
            className={`rounded-[1rem] w-[6.02rem] h-[13.94rem] md:w-[12.85rem] md:h-[29.75rem] block transition-all duration-1000 ease-linear object-cover object-center ${
              increaseWidth === 4 ? "flex-grow" : "flex-shrink"
            } `}
            onMouseOver={() => setIncreaseWidth(4)}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
