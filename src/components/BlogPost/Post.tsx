import coverage from "../../assets/Press/covergae3.webp";
import BlogCards from "../BlogCards";
import Tag from "../Tag";

const test = [
  {
    id: 1,
    img: coverage,
    title: "Etherium Blockchain",
    date: "24 Jun 2024",
    description:
      "sky venture got you , relax and get the best sky venture got you , relax and get the best",
    link: "Read post",
  },
  {
    id: 2,
    img: coverage,
    title: "Etherium Blockchain",
    date: "24 Jun 2024",
    description:
      "sky venture got you , relax and get the best sky venture got you , relax and get the best",
    link: "Read post",
  },
  {
    id: 3,
    img: coverage,
    title: "Etherium Blockchain",
    date: "24 Jun 2024",
    description:
      "sky venture got you , relax and get the best sky venture got you , relax and get the best",
    link: "Read post",
  },
];

export default function Post() {
  return (
    <section className="bg-sub-hero bg-no-repeat bg-cover bg-center text-white px-4 mt-[8rem] mb-[2.59rem] md:px-[4rem] xl:pt-[4rem] xl:mb-[5.59rem] xl:px-[6.13rem]">
      <div className="max-w-[81rem] mx-auto">
        <BlogCards {...test[0]}>
          <Tag text="News" />
          <Tag text="Blockchain" />
        </BlogCards>
      </div>
    </section>
  );
}
