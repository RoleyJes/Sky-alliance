import event1 from "../assets/Home/event1.svg";
import event2 from "../assets/Home/event2.svg";
import event3 from "../assets/Home/event3.svg";
import event4 from "../assets/Home/event4.svg";
import event5 from "../assets/Home/event5.svg";
import event6 from "../assets/Home/event6.svg";
import arrow from "../assets/Home/Arrow_Right_LG.svg";
import calendar from "../assets/Home/caalendar.svg";
import location from "../assets/Home/location.svg";
import { RouteNavs } from "../constants/route-nav-enum";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    img: event1,
    location,
    calendar,
    amount: 80,
    date: "13th May",
    country: "India",
    title: "ZK EVM Meet up.",
    description:
      "we have several amazing things to show you all and believe me.",
  },
  {
    id: 2,
    img: event2,
    location,
    calendar,
    amount: 80,
    date: "13th May",
    country: "India",
    title: "ZK EVM Meet up.",
    description:
      "we have several amazing things to show you all and believe me.",
  },
  {
    id: 3,
    img: event3,
    location,
    calendar,
    amount: 80,
    date: "13th May",
    country: "India",
    title: "ZK EVM Meet up.",
    description:
      "we have several amazing things to show you all and believe me.",
  },
  {
    id: 4,
    img: event4,
    location,
    calendar,
    amount: 80,
    date: "13th May",
    country: "India",
    title: "ZK EVM Meet up.",
    description:
      "we have several amazing things to show you all and believe me.",
  },
  {
    id: 5,
    img: event5,
    location,
    calendar,
    amount: 80,
    date: "13th May",
    country: "India",
    title: "ZK EVM Meet up.",
    description:
      "we have several amazing things to show you all and believe me.",
  },
  {
    id: 6,
    img: event6,
    location,
    calendar,
    amount: 80,
    date: "13th May",
    country: "India",
    title: "ZK EVM Meet up.",
    description:
      "we have several amazing things to show you all and believe me.",
  },
];

export default function EventsCards() {
  return (
    <div className="max-w-[1314px]">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[50px]">
        {cards.map((item) => (
          <div data-aos="fade-up" key={item.id}>
            <li className="bg-[rgba(255,255,255,0.06)] rounded-[1.25rem] backdrop-blur-[200px py-[1.62rem] transition-all duration-300 hover:shadow-md hover:shadow-pink">
              <div className="px-[1.18rem] mb-4">
                <figure className="">
                  <img src={item.img} alt="BodyImageCardOne" />
                </figure>
              </div>

              <div className="px-[1.25rem]">
                <h3 className="text-xl md:text-[1.4375rem] font-bold mb-[0.88rem]">
                  {item.title}
                </h3>
                <p className="text-base md:text-[1.1875rem] mb-[2.53rem]">
                  {item.description}
                </p>
                <div className="mb-[1.59rem] flex items-center justify-between text-[#e4e3e6]">
                  <p className="text-xl md:text-[1.5rem]">$ {item.amount}</p>
                  <div className="flex items-center">
                    <img src={item.location} alt="" />
                    <p className="text-base text-[1.25rem]">{item.country}</p>
                  </div>
                  <div className="flex items-center">
                    <img src={item.calendar} alt="" />
                    <p className="text-base text-[1.25rem]">{item.date}</p>
                  </div>
                </div>
                <Link
                  to={RouteNavs.Ticketing}
                  className="bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block ml-0 mr-auto text-[19px]">
                  <span>View</span>
                  <img className="inline-block" src={arrow} alt="" />
                </Link>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
