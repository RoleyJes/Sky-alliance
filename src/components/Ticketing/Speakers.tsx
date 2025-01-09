import Heading from "../Heading";
import speaker from "../../assets/Ticketing/speaker.webp";
import SpeakerCard from "./SpeakerCard";

const speakerData = [
  {
    id: 1,
    img: speaker,
    name: "Wang Tu",
    role: "PR Consultant",
  },
  {
    id: 2,
    img: speaker,
    name: "Wang Tu",
    role: "PR Consultant",
  },
  {
    id: 3,
    img: speaker,
    name: "Wang Tu",
    role: "PR Consultant",
  },
  {
    id: 4,
    img: speaker,
    name: "Wang Tu",
    role: "PR Consultant",
  },
  {
    id: 5,
    img: speaker,
    name: "Wang Tu",
    role: "PR Consultant",
  },
  {
    id: 6,
    img: speaker,
    name: "Wang Tu",
    role: "PR Consultant",
  },
];

export default function Speakers() {
  return (
    <section className="text-white px-4 py-6 lg:py-[5.25rem]">
      <div className="max-w-[82.125rem] mx-auto">
        <div className="mb-[2.19rem] md:mb-[3.12rem]">
          <Heading title="Speakers" />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-9 lg:gap-12">
          {speakerData.map((speaker) => (
            <SpeakerCard {...speaker} />
          ))}
        </ul>
      </div>
    </section>
  );
}
