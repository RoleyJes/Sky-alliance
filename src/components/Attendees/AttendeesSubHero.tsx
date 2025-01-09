import rocket from "../../assets/Home/rocket.svg";

const steps = [
  {
    id: 1,
    step: "we have several amazing things to show you all and believe me we would do",
  },
  {
    id: 2,
    step: "we have several amazing things to show you all and believe ",
  },
  {
    id: 3,
    step: "we have several amazing all and believe me we would do",
  },
  {
    id: 4,
    step: "we have several amazing things to show you all and believe me we would do",
  },
  {
    id: 5,
    step: "we have severa to show you all and believe me we would do",
  },
  {
    id: 6,
    step: "we hd believe me we would do",
  },
  {
    id: 7,
    step: "ing things to show you all and believe me we would do",
  },
  {
    id: 8,
    step: "o show you all and believe me we would do",
  },
  {
    id: 9,
    step: "we have several amazing things to show you all and believe me we would do",
  },
];

export default function AttendeesSubHero() {
  return (
    <section className="bg-sub-hero bg-center bg-cover bg-no-repeat text-white px-4 mt-[5.625rem] py-[2.59rem] md:px-[4rem] xl:pt-[9.31rem] xl:pb-[5.59rem] xl:px-[6.13rem]">
      <div className="max-w-[82.125rem] mx-auto">
        <div className="lg:max-w-[50rem] mb-10">
          <h2
            data-aos="fade-up"
            className="mb-[1.06rem] bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]">
            How to register
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base md:text-[1.44rem] md:leading-[1.725rem] max-w-[50rem]">
            sky venture got fill page is not easy Lorem ipsum is just doing
            lorem ipsum things here. get the
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-[3.75rem] justify-between ">
          <img
            data-aos="fade-up"
            data-aos-delay="500"
            loading="lazy"
            src={rocket}
            alt="SubHeroImage"
          />

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className={`flex flex-col gap-4 md:gap-[1.65rem]`}>
            <h2 className="text-3xl md:text-[3rem] md:leading-[3.6rem] relative w-fit after:w-[85%] after:h-[0.1875rem] after:absolute after:left-0 after:-bottom-1 after:bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%]">
              Steps
            </h2>
            <ol className="list-decimal list-insid space-y-2 ms-6">
              {steps.map((item) => (
                <li
                  key={item.id}
                  className="text-base md:text-xl lg:text-[1.4375rem] lg:leading-[1.725rem] xl:w-[37.8125rem]">
                  {item.step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
