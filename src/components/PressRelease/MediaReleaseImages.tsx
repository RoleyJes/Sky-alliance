import press1 from "../../assets/Press/press1.webp";
import press2 from "../../assets/Press/press2.webp";
import press3 from "../../assets/Press/press3.webp";
import press4 from "../../assets/Press/press4.webp";
import press5 from "../../assets/Press/press5.webp";

export default function MediaReleaseImages() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-[1.56rem]">
        <Image src={press1} />
        <Image src={press2} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Image src={press3} />
        <Image src={press4} />
        <Image src={press5} />
      </div>
    </>
  );
}

interface imgProps {
  src: string;
}
function Image({ src }: imgProps) {
  return (
    <figure
      className="w-[20.75rem] h-[17.62rem] place-self-center md:size-auto"
      data-aos="fade-up">
      <img loading="lazy" src={src} className="size-full" alt="" />
    </figure>
  );
}
