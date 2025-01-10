import coverage1 from "../../assets/Press/coverage1.webp";
import coverage2 from "../../assets/Press/coverage2.webp";
import coverage3 from "../../assets/Press/covergae3.webp";
import BlogCards from "../BlogCards";
import Heading from "../Heading";

const cardSections = [
  {
    id: 1,
    img: coverage1,
    date: "24 Jun 2024",
    title: "Etherium Blockchain",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
    link: "Read now",
  },
  {
    id: 2,
    img: coverage2,
    date: "24 Jun 2024",
    title: "Etherium Blockchain",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
    link: "Read now",
  },
  {
    id: 3,
    img: coverage3,
    date: "24 Jun 2024",
    title: "Etherium Blockchain",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
    link: "Read now",
  },
];
export default function MediaCoverage() {
  return (
    <section className=" text-white p-4 md:px-[4rem] md:py-[4.31rem]">
      <div className="bg-sub-hero bg-center bg-cover bg-no-repeat max-w-[82.125rem] mx-auto">
        <div className="mb-[3.12rem]">
          <Heading title="Media coverage" />
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base md:text-[1.44rem] md:leading-[1.725rem]">
            sky venture got you , relax and get the best
          </p>
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
