import Hero from "../components/AboutUs/Hero";
import Navbar from "../components/Navbar";
import rocket from "../assets/Home/rocket.svg";
import glasses from "../assets/AboutUs/glasses.svg";
import SubHero from "../components/SubHero";
import Team from "../components/AboutUs/Team";
import ImagesFromLastEvent from "../components/AboutUs/ImagesFromLastEvent";
import Footer from "../components/Footer";

const subHeroContent = [
  {
    id: 1,
    title: "What we stand for",
    subtitle: "sky venture got you, relax and get the best",
    title2: "Mission",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
    img: rocket,
  },
  {
    id: 2,
    title2: "Vision",
    description:
      "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
    img: glasses,
    orderFirst: true,
  },
];

export default function AboutUS() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <section className="text-white px-4 py-[4.3125rem] md:px-[4rem] xl:pt-[9.31rem] xl:pb-[5.59rem] xl:px-[6.13rem]">
          <div className="max-w-[82.125rem] mx-auto">
            <div className="flex flex-col gap-y-[2.91rem] md:gap-y-[3.12rem]">
              {subHeroContent.map((item) => (
                <SubHero
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  title2={item.title2}
                  description={item.description}
                  img={item.img}
                  orderFirst={item.orderFirst}
                />
              ))}
            </div>
          </div>
        </section>
        <Team />
        <div className="hidden xl:block">
          <ImagesFromLastEvent />
        </div>
      </main>
      <Footer />
    </>
  );
}
