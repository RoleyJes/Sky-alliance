type TeamCardPropType = {
  img: string;
  name: string;
  role: string;
};

export default function TeamCard({ img, name, role }: TeamCardPropType) {
  return (
    <li className="relative">
      <figure className="w-[20.68rem] h-[18.79rem] md:w-[19rem] lg:w-[25.31rem] lg:h-[23rem] rounded-[1.02rem] lg:rounded-[1.25rem] overflow-hidden">
        <img src={img} className="size-full object-cover" alt="" />
      </figure>
      <div className="absolute bg-black left-[0.71rem] lg:left-[0.88rem] bottom-[-2.77rem] lg:bottom-[-3.31rem] flex flex-col gap-[0.88rem] w-[21.35rem] md:w-[20rem] lg:w-[26.125rem] py-[0.82rem] ps-[1.02rem] lg:py-4 lg:ps-5 border-[3.269px] lg:border-4 border-[rgba(194,8,241,0.71)] ">
        <p className="font-bold text-lg lg:text-2xl">{name}</p>
        <p className="text-[0.97rem] leading-[1.79rem] lg:text-[1.1875rem] lg:leading-[2.19rem]">
          {role}
        </p>
      </div>
    </li>
  );
}
