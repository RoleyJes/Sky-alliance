import Footer from "../components/Footer";
import Blogs from "../components/Home/Blogs";
import Hero from "../components/Home/Hero";
import LiveFeeds from "../components/Home/LiveFeeds";
import Newsletter from "../components/Home/Newsletter";
import SubHero from "../components/SubHero";
import Testimonials from "../components/Home/Testimonials";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import Navbar from "../components/Navbar";
import rocket from "../assets/Home/rocket.svg";

const subHeroContent = {
  title: "Our amazing features for gaming",
  subtitle:
    "sky venture got fill page is not easy Lorem ipsum is just doing lorem ipsum things here. get the",
  title2: "About us",
  description:
    "we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you",
  img: rocket,
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="bg-sub-hero bg-center bg-cover bg-no-repeat text-white px-4 py-[4.3125rem] md:px-[4rem] xl:py-[9.31rem] xl:px-[6.13rem]">
        <div className="max-w-[82.125rem] mx-auto">
          <SubHero
            title={subHeroContent.title}
            subtitle={subHeroContent.subtitle}
            title2={subHeroContent.title2}
            description={subHeroContent.description}
            img={subHeroContent.img}
          />
        </div>
      </section>
      <UpcomingEvents />
      <Testimonials />
      <Blogs />
      <Newsletter />
      <LiveFeeds />
      <Footer />
    </main>
  );
}
