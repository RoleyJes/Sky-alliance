const reasonsData = [
  {
    id: 1,
    title: "Lorem ipsum idor",
    text: "and let them know your destination. This prevents any card cancellations by your bank after making an unexpected purchase far from home. Also, inquire about details on fees and charges made overseas if traveling abroad.we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
  },
  {
    id: 2,
    title: "Lorem ipsum idor",
    text: "and let them know your destination. This prevents any card cancellations by your bank after making an unexpected purchase far from home. Also, inquire about details on fees and charges made overseas if traveling abroad.we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
  },
  {
    id: 3,
    title: "Lorem ipsum idor",
    text: "and let them know your destination. This prevents any card cancellations by your bank after making an unexpected purchase far from home. Also, inquire about details on fees and charges made overseas if traveling abroad.we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you we have several amazing things to show you all and believe me we would do our best to work this for you and also work on many others, sky venture got you ",
  },
];

export default function WhyBecomeSponsor() {
  return (
    <section className=" bg-center bg-cover bg-no-repeat text-white px-4 pb-8 md:p-[4rem] xl:py-[7rem] xl:px-[6.19rem]">
      <div className="max-w-[78rem] mx-auto ">
        <div className="text-center mb-[2.5rem]">
          <h2
            data-aos="fade-up"
            className=" bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]">
            Why you should become a sponsor
          </h2>
        </div>

        <ul className="ps-6 space-y-6 lg:space-y-12">
          {reasonsData.map((reason) => (
            <li
              key={reason.id}
              className="list-decimal marker:font-bold marker:text-2xl"
              data-aos="fade-up">
              <p className="font-bold text-2xl mb-3">{reason.title}</p>
              <p className="text-[1.4rem] leading-[2.6rem]">{reason.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
