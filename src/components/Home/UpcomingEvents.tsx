import { Link } from "react-router-dom";
import Whitearrow from "../../assets/Home/whiteArrowRight.svg";
import { RouteNavs } from "../../constants/route-nav-enum";
import EventsCards from "../EventsCards";
import Heading from "../Heading";

const UpcomingEvents = () => {
  return (
    <>
      <section className="px-4 md:px-6 lg:px-10 xl:px-[6.19rem] py-6 lg:py-10 xl:py-[7.34rem] font-normal text-white">
        <div className="max-w-[82.125rem] mx-auto ">
          <div className="mb-[3.12rem] flex flex-col md:flex-row items-start justify-between">
            <div className="mb-[1.06rem] ">
              <Heading title="Upcoming events" />
              <p
                className="text-base lg:text-[1.44rem] lg:leading-[1.725rem]"
                data-aos="fade-up"
                data-aos-delay="300">
                sky venture got you , relax and get the best
              </p>
            </div>
            <Link
              data-aos="fade-up"
              to={RouteNavs.Register}
              className="flex items-center transition hover:text-pink">
              <span>View all events</span>
              <img
                className="text-base text-[1.4375rem] font-medium"
                src={Whitearrow}
                alt="arrow pointing right"
              />
            </Link>
          </div>

          {/* Cards */}
          <EventsCards />
        </div>
      </section>
    </>
  );
};

export default UpcomingEvents;
