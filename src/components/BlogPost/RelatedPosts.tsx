import coverage from "../../assets/Press/covergae3.webp";
import BlogCards from "../BlogCards";
import Heading from "../Heading";
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
export default function RelatedPosts() {
  return (
    <section className="px-4 md:px-6 lg:px-10 xl:px-[6.19rem] py-6 lg:py-[3.12rem] font-normal text-white">
      <div className="max-w-[82.125rem] mx-auto ">
        <div className="mb-[3.12rem]">
          <Heading title="Related posts" />
        </div>

        {/* Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[50px]">
          {test.map((item) => (
            <BlogCards {...item} linkClass="md:mt-[0.25rem]">
              <div className="flex gap-1 mb-1">
                <Tag text="News" />
                <Tag text="Blockchain" />
              </div>
            </BlogCards>
          ))}
        </ul>
      </div>
    </section>
  );
}
