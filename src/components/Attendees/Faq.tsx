import { useState } from "react";
const general = [
  {
    id: 1,
    title: "What is?",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you",
  },
  {
    id: 2,
    title: "What is?",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you",
  },
  {
    id: 3,
    title: "What is?",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you",
  },
  {
    id: 4,
    title: "What is?",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you",
  },
];
const events = [
  {
    id: 1,
    title: "What is?",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you",
  },
  {
    id: 2,
    title: "What is?",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you",
  },
];
const sponsorship = [
  {
    id: 1,
    title: "What is?",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you",
  },
  {
    id: 2,
    title: "What is?",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you",
  },
  {
    id: 3,
    title: "What is?",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you",
  },
];
const speaker = [
  {
    id: 1,
    title: "What is?",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you",
  },
];

export default function Faq() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <>
      <section className=" px-[2.03rem] lg:px-[6.19rem] py-6 md:py-9 lg:py-[9.81rem] text-white">
        <div className="  max-w-[61.4375rem] mx-auto">
          <div className="max-w-[52.625rem] mx-auto text-center">
            <h2
              className="mb-[1.81rem] lg:mb-[3.12rem] bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]"
              data-aos="fade-up">
              FAQ
            </h2>
            <p
              className="text-base md:text-[1.437rem] leading-[26.56px] md:leading-[1.725rem] text-center"
              data-aos="fade-up"
              data-aos-delay="300">
              we have several amazing things to show you all and believe me we
              would do our best to work this for you and also work on many other
            </p>
          </div>

          {/* Tabs */}
          <div
            data-aos="fade-up"
            className="flex justify-center items-center gap-x-[0.75rem] lg:gap-x- mt-[1.81rem] mb-[2.25rem] lg:mt-[5.75rem] lg:mb-[2.25rem]">
            <p
              className={`${
                toggleState === 1
                  ? "bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block"
                  : ""
              } text-lg sm:text-xl cursor-pointer hover:text-pink transition`}
              onClick={() => toggleTab(1)}>
              General
            </p>
            <p
              className={`${
                toggleState === 2
                  ? "bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block"
                  : ""
              } text-lg sm:text-xl cursor-pointer hover:text-pink transition`}
              onClick={() => setToggleState(2)}>
              Events
            </p>
            <p
              className={`${
                toggleState === 3
                  ? "bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block"
                  : ""
              } text-lg sm:text-xl cursor-pointer hover:text-pink transition`}
              onClick={() => toggleTab(3)}>
              Sponsorship
            </p>
            <p
              className={`${
                toggleState === 4
                  ? "bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block"
                  : ""
              } tetext-lg sm:text-xl cursor-pointer hover:text-pink transition`}
              onClick={() => toggleTab(4)}>
              Speaker
            </p>
          </div>

          {/* General tab content */}
          <div data-aos="fade-up">
            <div
              className={`hidden ${
                toggleState === 1 ? "activeFeedContent" : ""
              } max-w-[61.4375rem] mx-auto`}>
              <Accordion data={general} />
            </div>
            {/* Events tab content */}
            <div
              className={`hidden ${
                toggleState === 2 ? "activeFeedContent" : ""
              } max-w-[61.4375rem] mx-auto`}>
              <Accordion data={events} />
            </div>
            {/* Sponsorship tab content */}
            <div
              className={`hidden ${
                toggleState === 3 ? "activeFeedContent" : ""
              } max-w-[61.4375rem] mx-auto`}>
              <Accordion data={sponsorship} />
            </div>
            {/* Speaker tab content */}
            <div
              className={`hidden ${
                toggleState === 4 ? "activeFeedContent" : ""
              } max-w-[61.4375rem] mx-auto`}>
              <Accordion data={speaker} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface Items {
  id: number;
  title: string;
  description: string;
}

interface Mcp {
  data: Items[];
}

function Accordion({ data }: Mcp) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <section className="flex flex-col gap-5">
      {data.map((tab) => (
        <AccordionItem
          key={tab.id}
          title={tab.title}
          id={tab.id}
          description={tab.description}
          curOpen={curOpen}
          onOpen={setCurOpen}
        />
      ))}
    </section>
  );
}

interface AccordionType {
  title: string;
  description: string;
  id: number;
  curOpen: null;
  onOpen: Function;
}

function AccordionItem({
  title,
  description,
  id,
  curOpen,
  onOpen,
}: AccordionType) {
  const isOpen = id === curOpen;

  function handleIsOpen() {
    onOpen(isOpen ? null : id);
  }

  return (
    <section
      className={`${
        isOpen
          ? "bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%]"
          : ""
      } p-px transition-all duration-300`}>
      <div
        className={`px-4 lg:px-[3.12rem] py-[1.12rem] lg:py-[1.38rem] bg-black border border-[#504f4f] text-neutral100`}>
        <button
          className="flex items-center justify-between w-full"
          onClick={handleIsOpen}>
          <span className="text-[1.1875rem] leading-[2.196rem] lg:leading-[1.725rem] lg:text-[1.4375rem] lg:font-semibold ">
            {title}
          </span>

          <span className="text-2xl lg:text-[2.5rem] leading-[30px]">
            {isOpen ? "-" : "+"}
          </span>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-4"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}>
          <p className=" overflow-hidden text-base lg:text-[1.1875rem]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
