import { reviews } from "../../constants/dummydata";

export default function Testimonials() {
  return (
    <>
      <section className="text-white  pt-[3.03rem] pb-[2.97rem]">
        <div className="px-8 lg:px-[6.81rem]">
          <div className="max-w-[84.25rem] mx-auto mb-[4.19rem] ">
            <h2
              className="mb-[1.06rem] bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]"
              data-aos="fade-up">
              Testimonials
            </h2>
            <p
              className="text-base md:text-[1.44rem] md:leading-[1.725rem]"
              data-aos="fade-up"
              data-aos-delay="300">
              testimonials from past attendees, sponsors, and speakers.
            </p>
          </div>
        </div>

        <ul className="flex overflow-x-scroll items-center gap-[1.88rem] ps-0 md:ps-8 lg:ps-[6.81rem] pe-4 testimonial-scrollbar">
          {reviews.map((item) => (
            <li
              data-aos="fade-up"
              data-aos-delay="300"
              key={item.id}
              className="py-4 px-5 bg-[#1c1e24] rounded-[0.625rem] border border-[rgba(60,60,60,0.37)] min-w-[25.29rem]">
              <div className="flex items-center gap-[0.87rem] mb-[0.88rem]">
                <figure>
                  <img src={item.img} alt="" />
                </figure>
                <div className="">
                  <p className="text-base md:text-lg font-semibold mb-[0.25rem]">
                    {item.name}
                  </p>
                  <p className="text-sm md:text-base font-light text-[#e4e3e6]">
                    {item.role}
                  </p>
                </div>
              </div>
              <p className="text-[#e3e4e6] text-base md:text-lg md:leading-[2.196rem]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
