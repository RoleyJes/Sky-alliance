import BlogCards from "../BlogCards";
import Heading from "../Heading";
import coverage from "../../assets/Press/coverage1.webp";
import Tag from "../Tag";
import RightBlogsDisplay from "./RightBlogsDisplay";

const test = {
  id: 1,
  img: coverage,
  title: "Etherium Blockchain",
  date: "24 Jun 2024",
  description:
    "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
  link: "Read now",
};

export default function RecentPosts() {
  return (
    <section className="bg-sub-hero bg-no-repeat bg-cover bg-center text-white px-4 mt-[8rem] mb-[2.59rem] md:px-[4rem] xl:pt-[4rem] xl:mb-[5.59rem] xl:px-[6.13rem]">
      <div className="max-w-[82.125rem] mx-auto">
        <Heading title="Recent posts" />

        <div className="grid grid-cols-2 gap-x-6 ">
          <div className="overflow-x-hidden">
            <BlogCards
              {...test}
              figureClass="lg:w-[27.25rem] xl:w-[40rem] h-[26.6rem]">
              <div className="flex gap-1 mb-1">
                <Tag text="News" />
                <Tag text="Blockchain" />
              </div>
            </BlogCards>
          </div>

          <RightBlogsDisplay />
        </div>
      </div>
    </section>
  );
}
