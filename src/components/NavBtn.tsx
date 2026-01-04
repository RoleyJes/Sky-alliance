import { NavLink } from "react-router-dom";

export default function NavBtn({ href, text }: { href: string; text: string }) {
  return (
    <NavLink
      to={href}
      className="bg-pink w-fit rounded-[1.875rem] flex justify-center items-center py-[0.44rem] px-[1.88rem] text-white lg:text-[1.25rem] hover:outline hover:bg-[#001940] transition-all duration-300 mx-auto lg:mx-0">
      {text}
    </NavLink>
  );
}
