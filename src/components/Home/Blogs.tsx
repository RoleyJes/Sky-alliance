import arrow from "../../assets/Home/arrowForward.svg";
import Whitearrow from "../../assets/Home/whiteArrowRight.svg";
import component from "../../assets/Home/Component 92.svg";
import BlogCards from "../BlogCards";
import Heading from "../Heading";
import { RouteNavs } from "../../constants/route-nav-enum";
import { Link } from "react-router-dom";

export default function Blogs() {
  const bodySections = [
    {
      id: 1,
      img: component,
      title: "Etherium Blockchain",
      description:
        "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
      link: "Read blog post",
      arrow,
    },
    {
      id: 2,
      img: component,
      title: "Etherium Blockchain",
      description:
        "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
      link: "Read blog post",
      arrow,
    },
    {
      id: 3,
      img: component,
      title: "Etherium Blockchain",
      description:
        "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
      link: "Read blog post",
      arrow,
    },
  ];

  return (
    <>
      <section className="px-4 md:px-6 lg:px-10 xl:px-[6.19rem] py-6 lg:py-10 xl:py-[7.34rem] font-normal bg-primary text-white">
        <div className="max-w-[82.125rem] mx-auto ">
          <div className="mb-[3.12rem] flex flex-col md:flex-row items-start justify-between">
            <div className="mb-[1.06rem] ">
              <Heading title="Check out some of our blog posts" />

              <p
                className="text-base md:text-[1.44rem] md:leading-[1.725rem]"
                data-aos="fade-up"
                data-aos-delay="300">
                sky venture got you , relax and get the best
              </p>
            </div>
            <Link
              data-aos="fade-up"
              to={RouteNavs.Blogs}
              className="flex items-center transition hover:text-pink">
              <span>Visit blog</span>
              <img
                className="text-base text-[1.4375rem] font-medium"
                src={Whitearrow}
                alt="arrow pointing right"
              />
            </Link>
          </div>

          {/* Cards */}
          <div className="max-w-[1314px]">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3.12rem]">
              {bodySections.map((item) => (
                <BlogCards {...item} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
