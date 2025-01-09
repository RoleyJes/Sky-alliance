import { useState } from "react";
import ReactPlayer from "react-player";

export default function LiveFeeds() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="px-[18.65px] md:px-8 lg:px-10 py-9 lg:py-[5.88rem] bg-primary">
        <div className="max-w-[64.5625rem] mx-auto ">
          <div className="mx-auto mb-[3.12rem] text-center">
            <h2
              className="bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent font-bold text-[2rem] leading-[2.44rem] lg:text-[3rem] lg:leading-[3.66rem] mb-[1.06rem]"
              data-aos="fade-up">
              Live feeds
            </h2>
            <div
              className="bg-[#1c1e24] rounded-[1.875rem] p-[0.5rem] flex justify-between text-center gap-[1.25rem] max-w-[19.3125rem] mx-auto items-center text-white"
              data-aos="fade-up"
              data-aos-delay="300">
              <p
                className={`py-[7.07px] px-[14.14px] lg:py-[8px] lg:px-4 text-sm lg:text-base cursor-pointer transition-all duration-75 w-full ${
                  toggleState === 1 ? "activeFeed" : ""
                }`}
                onClick={() => toggleTab(1)}>
                Instagram
              </p>
              <p
                className={`py-[7.07px] px-[14.14px] lg:py-[8px] lg:px-4 text-sm lg:text-base cursor-pointer transition-all duration-300 w-full ${
                  toggleState === 2 ? "activeFeed" : ""
                }`}
                onClick={() => toggleTab(2)}>
                Twitter
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            {/* First tab video */}
            <div
              className={`hidden ${
                toggleState === 1 ? "activeFeedContent" : ""
              }`}>
              <div className="w-full h-[11.3rem] md:h-[33.4375rem] border-[5px] border-black rounded-[0.625rem] bg-[rgba(0, 0, 0, 0.20)] overflow-hidden relative">
                <ReactPlayer
                  url="https://youtu.be/y8I8rEBpLls"
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>

            {/* Second tab video */}
            <div
              className={`hidden ${
                toggleState === 2 ? "activeFeedContent" : ""
              }`}>
              <div className="w-full h-[11.3rem] md:h-[33.4375rem] border-[5px] border-black rounded-[0.625rem] bg-[rgba(0, 0, 0, 0.20)] overflow-hidden">
                <ReactPlayer
                  url="https://youtu.be/Lxy1oEnC9I0"
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
