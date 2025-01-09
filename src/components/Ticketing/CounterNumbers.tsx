const data = [
  {
    id: 1,
    number: 14,
    thousand: "K",
    title: "Attendees",
    text: "Lorem ipsum is just doing lorem Lorem ipsum is just doim  ",
  },
  {
    id: 2,
    number: 5,
    title: "Cities",
    text: "Lorem ipsum is just doing lorem Lorem ipsum is just doim  ",
  },
  {
    id: 3,
    number: 32,
    title: "Speakers",
    text: "Lorem ipsum is just doing lorem Lorem ipsum is just doim  ",
  },
];

export default function CounterNumbers() {
  return (
    <section className="text-neutral100 mt-[3rem] md:mt-20 font-inter">
      <ul className="flex flex-col gap-10 lg:flex-row justify-center lg:justify-between items-center text-center">
        {data.map((item) => (
          <li key={item.id} data-aos="fade-up">
            <p className="text-pink font-bold text-4xl md:text-[5rem] leading-10 md:leading-[6.1rem]">
              {item.number}
              {item.thousand}+
            </p>
            <p className=" mb-2 mt-[0.88rem] md:mb-1 text-base md:text-2xl font-semibold">
              {item.title}
            </p>
            <p className="max-w-[18.25rem] text-base leading-[1.66rem] md:leading-[2.2rem] md:text-xl">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
