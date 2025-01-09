import PinkBtn from "../PinkBtn";
import Levels from "./Levels";

interface OpportunityMainProps {
  onOpen: () => void;
}

export default function OpportunityMain({ onOpen }: OpportunityMainProps) {
  return (
    <section className="text-white px-4 mt-[5.625rem] py-[2.59rem] md:px-[4rem] xl:pt-[9.31rem] xl:pb-[5.59rem] xl:px-[6.13rem]">
      <div className="bg-sub-hero max-w-[82.125rem] mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="mb-[2.19rem] lg:mb-[3.12rem] bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]">
          Sponsorship Opportunity
        </h2>

        <section className="flex overflow-x-scroll gap-8  flex-col md:flex-row items-stretch justify-between mb-[3.12rem]">
          <Levels />
        </section>

        <PinkBtn text={"Register now"} onOpen={onOpen} />
      </div>
    </section>
  );
}
