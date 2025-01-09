import Images from "./Images";

type ImageData = {
  id: number;
  src: string;
};

interface ImagesAnimationProp {
  imgsArray: ImageData[];
  slideDirection: string;
}

export default function ImagesAnimation({
  slideDirection,
  imgsArray,
}: ImagesAnimationProp) {
  return (
    <div className="overflow-hidden whitespace-nowrap mb-[1.88rem] lg:mb-[3.12rem] ">
      {/* Two divs side by side for seamless animation*/}
      <div className={`${slideDirection} inline-block`}>
        {imgsArray.map((i) => (
          <Images key={i.id} src={i.src} alt="dailycoin logo" />
        ))}
      </div>
      <div className={`${slideDirection} inline-block`}>
        {imgsArray.map((i) => (
          <Images key={i.id} src={i.src} alt="dailycoin logo" />
        ))}
      </div>
    </div>
  );
}
