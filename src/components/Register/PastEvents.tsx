import EventsCards from "../EventsCards";
import Heading from "../Heading";

export default function PastEvents() {
  return (
    <section className="px-4 md:px-6 lg:px-10 xl:px-[6.19rem] py-6 lg:py-10 xl:py-[7.34rem] font-normal text-white">
      <div className="max-w-[82.125rem] mx-auto ">
        <div className="mb-[3.12rem]">
          <Heading title="Past events" />
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base md:text-[1.44rem] md:leading-[1.725rem]">
            sky venture got you , relax and get the best
          </p>
        </div>

        {/* Cards */}
        <EventsCards />
      </div>
    </section>
  );
}
