import decrypt from "../../assets/Sponsors/decrypt.webp";
import businessInsider from "../../assets/Sponsors/businessInsider.webp";
import nasdaq from "../../assets/Sponsors/nasdaq.webp";
import cointelegraph from "../../assets/Sponsors/cointelegraph.webp";
import insiderMonkey from "../../assets/Sponsors/insiderMonkey.webp";
import invezz from "../../assets/Sponsors/invezz.webp";
import cryptonomics from "../../assets/Sponsors/cryptonomics.webp";
import coingape from "../../assets/Sponsors/coingape.webp";
import cryptowisser from "../../assets/Sponsors/cryptowisser.webp";
import valuework from "../../assets/Sponsors/valuework.webp";
import utb from "../../assets/Sponsors/utb.webp";
import c from "../../assets/Sponsors/c.webp";
import ImagesAnimation from "./ImagesAnimation";

const imgsRow1 = [
  {
    id: 1,
    src: businessInsider,
  },
  {
    id: 2,
    src: nasdaq,
  },
  {
    id: 3,
    src: cointelegraph,
  },
  {
    id: 4,
    src: decrypt,
  },
];
const imgsRow2 = [
  {
    id: 1,
    src: insiderMonkey,
  },
  {
    id: 2,
    src: invezz,
  },
  {
    id: 3,
    src: cryptonomics,
  },
];
const imgsRow3 = [
  {
    id: 1,
    src: coingape,
  },
  {
    id: 2,
    src: cryptowisser,
  },
  {
    id: 3,
    src: valuework,
  },
  {
    id: 4,
    src: utb,
  },
  {
    id: 5,
    src: c,
  },
];

export default function PastSponsors() {
  return (
    <section className="">
      <div className="py-[4.91rem] lg:pt-[6.81rem] lg:pb-[3.61rem]">
        <div className="text-center max-w-[37.81rem] mx-auto mb-[3.12rem]">
          <h2
            data-aos="fade-up"
            className="mb-[2.19rem] lg:mb-[3.12rem] bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]">
            Past sponsors
          </h2>
        </div>

        {/* Row 1 */}
        <ImagesAnimation slideDirection="rightSlide" imgsArray={imgsRow1} />

        {/* Row 2 */}
        <ImagesAnimation slideDirection="leftSlide" imgsArray={imgsRow2} />

        {/* Row 3 */}
        <ImagesAnimation slideDirection="rightSlide" imgsArray={imgsRow3} />
      </div>
    </section>
  );
}
