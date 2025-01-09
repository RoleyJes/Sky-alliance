import { ReactNode } from "react";

interface ContactMainProps {
  itemsCenter?: boolean;
  children: ReactNode;
}

export default function ContactMain({
  itemsCenter,
  children,
}: ContactMainProps) {
  return (
    <section className="bg-newsletter-landing-page bg-no-repeat bg-center bg-cover py-11 px-2 md:py-[8rem] md:px-[6.22rem]">
      <div
        className="bg-primary max-w-[82.0625rem] mx-auto py-[1.87rem] px-[0.88rem] md:px-[4.38rem] md:py-[6.75rem] rounded-[1.25rem]"
        data-aos="zoom-in">
        <div
          className={`grid grid-cols-1 xl:grid-cols-2 gap-[2.5rem] ${
            itemsCenter ? "xl:items-center" : "items-start"
          }  text-white`}>
          {children}
        </div>
        {/* <div
          className={`flex flex-col xl:flex-row gap-[2.5rem] ${
            itemsCenter ? "xl:items-center" : "items-start"
          }  text-white`}>
          {children}
        </div> */}
      </div>
    </section>
  );
}
