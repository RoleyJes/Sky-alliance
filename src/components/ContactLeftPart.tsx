import { ReactNode } from "react";

interface ContactLeftPartProps {
  title: string;
  children: ReactNode;
}

export default function ContactLeftPart({
  title,
  children,
}: ContactLeftPartProps) {
  return (
    <div>
      <h2
        className="bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem] mb-[0.75rem] md:mb-[1.69rem]"
        data-aos="fade-up">
        {title}
      </h2>
      {children}
    </div>
  );
}
