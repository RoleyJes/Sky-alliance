import PinkBtn from "../PinkBtn";

const tickets = [
  {
    id: 1,
    price: "$20",
    type: "basic ticket",
    description:
      "The event was amazing i did meet lots of people and learn new things, i look forward to the next event.",
  },
  {
    id: 2,
    price: "$20",
    type: "basic ticket",
    description:
      "The event was amazing i did meet lots of people and learn new things, i look forward to the next event.",
  },
  {
    id: 3,
    price: "$20",
    type: "basic ticket",
    description:
      "The event was amazing i did meet lots of people and learn new things, i look forward to the next event.",
  },
  {
    id: 4,
    price: "$20",
    type: "basic ticket",
    description:
      "The event was amazing i did meet lots of people and learn new things, i look forward to the next event.",
  },
];

interface TicketMainProps {
  onOpen: () => void;
}

export default function TicketMain({ onOpen }: TicketMainProps) {
  return (
    <div className="max-w-[82.125rem] mx-auto ">
      <div className="max-w-[10.3125rem] mx-auto text-center">
        <h2
          className="mb-[1.81rem] lg:mb-[3.12rem]  bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]"
          data-aos="fade-up">
          Tickets
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-[0.88rem]">
        {tickets.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            className="rounded-[1.25rem] border border-[rgba(60,60,60,0.37)] bg-[#1C1E24] shadow-[0px_0px_40px_5px_rgba(0,0,0,0.04)] py-4 px-14 md:px-7 text-neutral100 text-center">
            <p className="font-bold text-[2.5rem] lg:text-5xl">{item.price}</p>
            <p className="text-white text-base font-normal lg:font-semibold lg:text-[1.18rem] lg:leading-[1.43rem] my-[0.88rem]">
              {item.type}
            </p>
            <p className="text-base lg:text-[1.18rem] lg:leading-[2.19rem]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <PinkBtn text="Register now" onOpen={onOpen} className="mx-auto" />
    </div>
  );
}
