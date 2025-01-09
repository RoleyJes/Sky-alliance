interface HeadingProps {
  title: string;
  className?: string;
}
export default function Heading({ title, className }: HeadingProps) {
  return (
    <h2
      data-aos="fade-up"
      className={`${className} mb-[1.06rem] bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]`}>
      {title}
    </h2>
  );
}
