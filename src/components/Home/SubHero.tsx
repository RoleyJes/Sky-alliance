import rocket from "../../assets/Home/rocket.webp";

const SubHero = () => {
  return (
    <section className="bg-primary bg-sub-hero text-white px-4 py-[4.3125rem] md:px-[4rem] xl:py-[9.31rem] xl:px-[6.13rem]">
      <div className="max-w-[82.125rem] mx-auto">
        <div className="mb-[2.5rem] lg:max-w-[50rem]">
          <h2
            className="mb-[1.06rem] bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]"
            data-aos="fade-up">
            Our amazing features for gaming
          </h2>
          <p
            className="text-base md:text-[1.44rem] md:leading-[1.725rem]"
            data-aos="fade-up"
            data-aos-delay="300">
            sky venture got fill page is not easy Lorem ipsum is just doing
            lorem ipsum things here. get the
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-[3.75rem] justify-between ">
          <figure className="basis-1/2">
            <img
              loading="lazy"
              className=""
              src={rocket}
              alt="SubHeroImage"
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </figure>

          <div className=" grow">
            <div
              className="flex flex-col gap-4 md:gap-[1.65rem]"
              data-aos="fade-up"
              data-aos-delay="300">
              <h2 className="text-3xl md:text-[3rem] md:leading-[3.6rem] relative w-fit after:w-[85%] after:h-[0.1875rem] after:absolute after:left-0 after:-bottom-1 after:bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%]">
                About us
              </h2>
              <p className="text-base md:text-xl lg:text-[1.4375rem] lg:leading-[1.725rem] xl:w-[37.8125rem]">
                we have several amazing things to show you all and believe me we
                would do our best to work this for you and also work on many
                others, sky venture got you we have several amazing things to
                show you all and believe me we would do our best to work this
                for you and also work on many others, sky venture got you we
                have several amazing things to show you all and believe me we
                would do our best to work this for you and also work on many
                others, sky venture got you
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
