import minus from "../../assets/Attendees/minus.svg";
import plus from "../../assets/Attendees/plus.svg";
import ModalBtn from "../ModalBtn";

const ticketDetails = [
  {
    id: 1,
    type: "Basic ticket",
    amt: 100,
    detail: "sky venture got youelax and get the best",
  },
  {
    id: 2,
    type: "Basic ticket",
    amt: 100,
    detail: "sky venture got youelax and get the best",
  },
  {
    id: 3,
    type: "Basic ticket",
    amt: 100,
    detail: "sky venture got youelax and get the best",
  },
  {
    id: 4,
    type: "Basic ticket",
    amt: 100,
    detail: "sky venture got youelax and get the best",
  },
  {
    id: 5,
    type: "Basic ticket",
    amt: 100,
    detail: "sky venture got youelax and get the best",
  },
];

interface ModalFirstDisplayProps {
  ticketFormDisplay: number;
  onTicketFormDisplay: (value: number) => void;
  numberOfTicket: number;
  onTicketDecrease: () => void;
  onTicketIncrease: () => void;
}
export default function ModalFirstDisplay({
  ticketFormDisplay,
  onTicketFormDisplay,
  numberOfTicket,
  onTicketDecrease,
  onTicketIncrease,
}: ModalFirstDisplayProps) {
  return (
    <div className={`${ticketFormDisplay === 1 ? "block" : "hidden"}`}>
      <div className="space-y-5 md:space-y-8 lg:space-y-[4.05rem]">
        {ticketDetails.map((td) => (
          <div key={td.id} className="flex items-center justify-between gap-4">
            <div className="space-y-[0.19rem]">
              <p className="text-neutral200 text-sm">{td.type}</p>
              <p className="text-white font-bold text-lg">${td.amt}</p>
              <p className="text-neutral100 text-sm">
                {td.detail}
                <span className="text-neutral300 text-[0.6rem] ms-2 cursor-pointer transition hover:text-pink">
                  Read more
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="bg-[#1c1e24] rounded-[72.14319rem] text-white w-[10.5rem] flex items-center justify-between p-[0.29rem]">
              <button
                className="bg-pink rounded-full size-[2rem] lg:size-[2.8rem] flex items-center justify-center cursor-pointer transition hover:opacity-80"
                onClick={onTicketDecrease}>
                <img src={minus} className="size-ful" alt="" />
              </button>
              <p className="font-medium text-2xl text-[#fbfbff]">
                {numberOfTicket}
              </p>
              <button
                className="bg-pink rounded-full size-[2rem] lg:size-[2.8rem] flex items-center justify-center cursor-pointer transition hover:opacity-80"
                onClick={onTicketIncrease}>
                <img src={plus} className="size-ful" alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="my-4 md:my-[5.09rem] font-medium text-2xl flex justify-end">
        TOTAL: <span className="font-bold ms-2"> $0</span>
      </p>

      <ModalBtn onClick={() => onTicketFormDisplay(2)}>Buy now</ModalBtn>
    </div>
  );
}
