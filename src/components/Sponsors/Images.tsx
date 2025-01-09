interface ImgType {
  src: string;
  alt: string;
}

export default function Images({ src, alt }: ImgType) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="w-[5.5rem] h-[1.7rem] md:w-[10.5rem] md:h-[3rem] lg:w-[17.125rem] lg:h-[5.125rem] inline-block mx-[0.62rem] lg:mx-[3.12rem]"
    />
  );
}
