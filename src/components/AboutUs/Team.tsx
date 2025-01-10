import teamMember from "../../assets/AboutUs/Frame 2147223305.svg";
import TeamCard from "./TeamCard";

const teams = [
  {
    id: 1,
    img: teamMember,
    name: "Wang tan",
    role: "we have several amazing things to show you all and believe me we would do our best to work this for you and also work.",
  },
  {
    id: 2,
    img: teamMember,
    name: "Wang tan",
    role: "we have several amazing things to show you all and believe me we would do our best to work this for you and also work.",
  },
  {
    id: 3,
    img: teamMember,
    name: "Wang tan",
    role: "we have several amazing things to show you all and believe me we would do our best to work this for you and also work.",
  },
  {
    id: 4,
    img: teamMember,
    name: "Wang tan",
    role: "we have several amazing things to show you all and believe me we would do our best to work this for you and also work.",
  },
  {
    id: 5,
    img: teamMember,
    name: "Wang tan",
    role: "we have several amazing things to show you all and believe me we would do our best to work this for you and also work.",
  },
  {
    id: 6,
    img: teamMember,
    name: "Wang tan",
    role: "we have several amazing things to show you all and believe me we would do our best to work this for you and also work.",
  },
];

export default function Team() {
  return (
    <section className="px-4 md:px-[4rem] xl:px-[6.19rem] font-normal text-white">
      <div className="max-w-[83rem] mx-auto pt-[4.06rem] pb-[5.07rem] lg:py-16 xl:py-[6.34rem]">
        <div className="mb-[7.38rem] lg:mb-[3.12rem] lg:max-w-[50rem]">
          <h2 className="mb-[1.06rem] bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]">
            Meet the team
          </h2>
          <p className="text-base md:text-[1.44rem] md:leading-[1.725rem]">
            sky venture got you , relax and get the best
          </p>
        </div>

        {/* Cards */}
        <ul className="grid place-items-center 2xl:place-items-start grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-[4.6rem] md:gap-y-[6.44rem] md:gap-x-[3.12rem]">
          {teams.map((item) => (
            <TeamCard
              key={item.id}
              img={item.img}
              name={item.name}
              role={item.role}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
