import ReactPlayer from "react-player";
import Heading from "../Heading";

export default function LastEventVideos() {
  return (
    <section className="px-4 md:px-[4rem] xl:px-[6.19rem] py-20 font-normal text-white">
      <div className="max-w-[82.125rem] mx-auto">
        <div className="mb-[3.12rem]">
          <Heading title="Watch videos from last events" />
          <p
            className="text-base md:text-[1.44rem] md:leading-[1.725rem]"
            data-aos="fade-up">
            sky venture got you , relax and get the best
          </p>
        </div>

        {/* Video */}
        <div
          className="w-full h-[21.7rem] md:h-[33.43rem] border-[5px] border-black rounded-[0.625rem] bg-[rgba(0, 0, 0, 0.20)] overflow-hidden"
          data-aos="fade-up">
          <ReactPlayer
            url="https://youtu.be/Lxy1oEnC9I0"
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  );
}
