import coverage from "../../assets/Press/coverage2.webp";
import BlogCards from "../BlogCards";
import Tag from "../Tag";

const test = [
  {
    id: 1,
    img: coverage,
    title: "Etherium Blockchain",
    date: "24 Jun 2024",
    description: "sky venture got youelax and get the best sky ve",
    link: "Read now",
  },
  {
    id: 2,
    img: coverage,
    title: "Etherium Blockchain",
    date: "24 Jun 2024",
    description: "sky venture got youelax and get the best sky ve",
    link: "Read now",
  },
  {
    id: 3,
    img: coverage,
    title: "Etherium Blockchain",
    date: "24 Jun 2024",
    description: "sky venture got youelax and get the best sky ve",
    link: "Read now",
  },
];

export default function RightBlogsDisplay() {
  return (
    <ul className="flex flex-col gap-[0.88rem]">
      {test.map((item) => (
        <BlogCards
          {...item}
          listStyleClass="flex gap-3"
          figureClass="basis-[17.6rem] h-[13.4rem] mb-0">
          <div className="flex gap-1 mb-1">
            <Tag text="News" />
            <Tag text="Blockchain" />
          </div>
        </BlogCards>
      ))}
    </ul>
  );
}
