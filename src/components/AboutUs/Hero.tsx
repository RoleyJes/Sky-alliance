import { useState } from "react";
import guests from "../../assets/AboutUs/guests.svg";
import rocket from "../../assets/Home/rocket.svg";
import bgtest from "../../assets/Home/newsletterBg.svg";
import polygon from "../../assets/AboutUs/Polygon9.svg";

const slides = [
  {
    id: 1,
    year: 2018,
    details:
      "things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you.",
    img: guests,
  },
  {
    id: 2,
    year: 2019,
    details:
      "things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you all and believe me we would do our best to work this for you and also work on many others, sky venture got you.",
    img: rocket,
  },
  {
    id: 3,
    year: 2020,
    details:
      "things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show",
    img: bgtest,
  },
  {
    id: 4,
    year: 2021,
    details:
      "things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show  you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you.",
    img: guests,
  },
  {
    id: 5,
    year: 2022,
    details:
      "things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you.",
    img: rocket,
  },
  {
    id: 6,
    year: 2023,
    details:
      "things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and you we have several amazing things to show you all and believe me we would do our best to work.",
    img: bgtest,
  },
  {
    id: 7,
    year: 2024,
    details:
      "show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got youjk you we have several amazing things to show you all and believe me we would do our best to work",
    img: rocket,
  },
];

const yearsList = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

export default function Hero() {
  const [clickedYear, setClickedYear] = useState(2018);

  const handleSlides = (year: number) => {
    setClickedYear(year);
  };

  return (
    <section className="bg-sub-hero bg-center bg-cover bg-no-repeat text-neutral100 mt-[5.625rem] px-[1.88rem] py-[2.59rem] md:p-[4rem] md: lg:py-[7.12rem] lg:px-[6.13rem]">
      <div className="max-w-[80rem] mx-auto">
        <h2 className="bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]">
          Our Story
        </h2>

        <div className={`mt-[1.88rem] `}>
          <div className="relative w-full pb-[22rem] md:pb-[12rem] lg:pb-[17rem] xl:pb-[12rem]">
            {slides.map((item) => (
              <p
                key={item.id}
                className={`absolute size-full top-0 left-0 text-base leading-[1.725rem] lg:text-2xl ${
                  item.year === clickedYear ? "opacity-100" : "opacity-0"
                } transition ease-in duration-300`}>
                {item.details}
              </p>
            ))}
          </div>

          <ul className="flex gap-x-[0.81rem] lg:gap-x-[2.5rem] justify-center items-center text-base lg:text-2xl">
            {yearsList.map((item) => (
              <li
                key={item}
                className={`cursor-pointer relative`}
                onClick={() => handleSlides(item)}>
                {item}{" "}
                {clickedYear === item && (
                  <img
                    className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2"
                    src={polygon}
                    alt=""
                  />
                )}
              </li>
            ))}
            {/* <li
              className={`cursor-pointer relative`}
              onClick={() => handleSlides(2019)}>
              2019
            </li>
            <li
              className={`cursor-pointer relative`}
              onClick={() => handleSlides(2020)}>
              2020
            </li>
            <li
              className={`cursor-pointer relative`}
              onClick={() => handleSlides(2021)}>
              2021
            </li>
            <li
              className={`cursor-pointer relative`}
              onClick={() => handleSlides(2022)}>
              2022
            </li>
            <li
              className={`cursor-pointer relative`}
              onClick={() => handleSlides(2023)}>
              2023
            </li>
            <li
              className={`cursor-pointer relative`}
              onClick={() => handleSlides(2024)}>
              2024
            </li> */}
          </ul>

          <figure className="relative mt-[2.3rem] w-full h-[29rem] mx-auto lg:h-[36rem]">
            {slides.map((item) => (
              <img
                key={item.id}
                src={item.img}
                alt=""
                className={`absolute size-full top-0 left-0 object-center object-cover ${
                  item.year === clickedYear ? "opacity-100" : "opacity-0 "
                } transition ease-in duration-300`}
              />
            ))}
          </figure>
        </div>
      </div>
    </section>
  );
}
