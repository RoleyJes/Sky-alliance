import travel1 from "../../assets/Attendees/travel1.svg";
import travel2 from "../../assets/Attendees/travel2.svg";
import travel3 from "../../assets/Attendees/travel3.svg";
import travel4 from "../../assets/Attendees/travel4.svg";

const travels = [
  {
    id: 1,
    step: "Alert your credit cards and financial institutions that you will be traveling and let them know your destination. This prevents any card cancellations by your bank after making an unexpected purchase far from home. Also, inquire about details on fees and charges made overseas if traveling abroad.",
    img: travel1,
  },
  {
    id: 2,
    step: "Alert your credit cards and financial institutions that you will be traveling and let them know your destination. This prevents any card cancellations by your bank after making an unexpected purchase far from home. Also, inquire about details on fees and charges made overseas if traveling abroad.",
    img: travel2,
  },
  {
    id: 3,
    step: "Alert your credit cards and financial institutions that you will be traveling and let them know your destination. This prevents any card cancellations by your bank after making an unexpected purchase far from home. Also, inquire about details on fees and charges made overseas if traveling abroad.",
    img: travel3,
  },
  {
    id: 4,
    step: "Alert your credit cards and financial institutions that you will be traveling and let them know your destination. This prevents any card cancellations by your bank after making an unexpected purchase far from home. Also, inquire about details on fees and charges made overseas if traveling abroad.",
    img: travel4,
  },
];

export default function TravelTips() {
  return (
    <section className="text-white px-4 py-8 md:py-[4.3125rem] md:px-[4rem] xl:pt-[9.31rem] xl:pb-[5.59rem] xl:px-[6.13rem]">
      <div className="max-w-[82.125rem] mx-auto">
        <div className="lg:max-w-[50rem] mb-10">
          <h2
            data-aos="fade-up"
            className="mb-[1.06rem] bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]">
            Travel tips
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-base md:text-[1.44rem] md:leading-[1.725rem] max-w-[50rem]">
            sky venture got you , relax and get the best
          </p>
        </div>

        <div className="flex flex-col gap-[3.12rem]">
          {travels.map((travel) => (
            <div
              key={travel.id}
              className="flex flex-col xl:flex-row items-center gap-8 xl:gap-[3.75rem] justify-between ">
              <img
                data-aos="fade-up"
                loading="lazy"
                src={travel.img}
                alt=""
                className={`${
                  travel.id % 2 === 0 ? "lg:order-last" : "lg:order-first"
                }`}
              />

              <div
                data-aos="fade-up"
                className={`flex flex-col gap-4 md:gap-[1.65rem]`}>
                <ol className="list-decimal list-insid space-y-2 ms-6">
                  <li
                    key={travel.id}
                    className="text-[1.4375rem] leading-[2.6rem] xl:w-[37.8125rem]">
                    {travel.step}
                  </li>
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
