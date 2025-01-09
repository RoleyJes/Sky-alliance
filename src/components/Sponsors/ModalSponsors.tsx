import ModalBtn from "../ModalBtn";

const ticketDetails = [
  {
    id: 1,
    type: "Basic ticket",
    amt: "10,000",
    detail: "sky venture got youelax and get the best",
  },
  {
    id: 2,
    type: "Basic ticket",
    amt: "30,000",
    detail: "sky venture got youelax and get the best",
  },
  {
    id: 3,
    type: "Basic ticket",
    amt: "50,000",
    detail: "sky venture got youelax and get the best",
  },
];

interface ModalSponsorsProps {
  onSponsorshipSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCheckboxChange: (name: string, checked: boolean) => void;
  isChecked: { [key: string]: boolean };
}

export default function ModalSponsors({
  onSponsorshipSubmit,
  onCheckboxChange,
  isChecked,
}: ModalSponsorsProps) {
  return (
    <div className="">
      <form onSubmit={(e) => onSponsorshipSubmit(e)}>
        <div className="space-y-5 md:space-y-8 lg:space-y-[4.05rem]">
          {ticketDetails.map((td) => (
            <div
              key={td.id}
              className="flex items-center justify-between gap-4">
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

              {/* Checkbox input */}
              <input
                type="checkbox"
                name={`option${td.id}`}
                checked={isChecked[`option${td.id}`]}
                onChange={(e) =>
                  onCheckboxChange(e.target.name, e.target.checked)
                }
                className="size-[2.33rem] rounded-full appearance-none border border-[#504f4f] bg-darkGrey cursor-pointer checked:bg-pink"
              />
            </div>
          ))}
        </div>
        <p className="my-4 md:my-[5.09rem] font-medium text-2xl flex justify-end text-white">
          TOTAL: <span className="font-bold ms-2"> $0</span>
        </p>

        {/* <button
          type="submit"
          className="w-full py-4 text-center bg-pink rounded-[2.33rem] text-lg transition hover:opacity-80 text-white">
          Buy now
        </button> */}

        <ModalBtn type="submit" className="text-white">
          Buy now
        </ModalBtn>
      </form>
    </div>
  );
}
