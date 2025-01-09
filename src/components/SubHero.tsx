type SubHeroType = {
  title?: string;
  subtitle?: string;
  title2: string;
  description: string;
  img: string;
  orderFirst?: boolean;
};

const SubHero = ({
  title,
  subtitle,
  title2,
  description,
  img,
  orderFirst,
}: SubHeroType) => {
  return (
    <>
      {title && subtitle && (
        <div className="lg:max-w-[50rem] mb-10">
          <h2 className="mb-[1.06rem] bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]">
            {title}
          </h2>
          <p className="text-base md:text-[1.44rem] md:leading-[1.725rem]">
            {subtitle}
          </p>
        </div>
      )}
      <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-[3.75rem] justify-between ">
        <img loading="lazy" src={img} alt="SubHeroImage" />

        <div
          className={`${
            orderFirst ? "xl:order-first" : ""
          } flex flex-col gap-4 md:gap-[1.65rem]`}>
          <h2 className="text-3xl md:text-[3rem] md:leading-[3.6rem] relative w-fit after:w-[85%] after:h-[0.1875rem] after:absolute after:left-0 after:-bottom-1 after:bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%]">
            {title2}
          </h2>
          <p className="text-base md:text-xl lg:text-[1.4375rem] lg:leading-[1.725rem] xl:w-[37.8125rem]">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default SubHero;
