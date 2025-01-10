import Heading from "../Heading";
import drinks from "../../assets/Ticketing/drinks.webp";
import networking from "../../assets/Ticketing/networking.webp";
import merch from "../../assets/Ticketing/merch.webp";
import BlogCards from "../BlogCards";

const cardSections = [
  {
    id: 1,
    img: networking,
    title: "Networking",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
  },
  {
    id: 2,
    img: drinks,
    title: "Food and drinks",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
  },
  {
    id: 3,
    img: merch,
    title: "Merch",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
  },
];

export default function WhatToExpect() {
  return (
    <section className=" text-white p-4 md:px-[4rem] md:py-[4.31rem]">
      <div className="max-w-[82.125rem] mx-auto">
        <div className="mb-[3.12rem]">
          <Heading title="What to expect" />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3.12rem]">
          {cardSections.map((card) => (
            <BlogCards key={card.id} {...card} />
          ))}
        </ul>
      </div>
    </section>
  );
}
