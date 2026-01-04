import { navLinks } from "../constants/dummydata";
import headerLogo from "../assets/HeaderLogo.svg";
import { useState } from "react";
import Hamburger from "../assets/navbar/Hamburger.svg";
import { useLocation, Link } from "react-router-dom";
// import NavBtn from "./NavBtn";
import { RouteNavs } from "../constants/route-nav-enum";
import NavBtn from "./NavBtn";

const Navbar = () => {
  const [navbarBgColor, setNavbarBgColor] = useState(false);

  const nav = useLocation().pathname;

  const changeBgColor = () => {
    if (window.scrollY >= 80) {
      setNavbarBgColor(true);
    } else {
      setNavbarBgColor(false);
    }
  };

  window.addEventListener("scroll", changeBgColor);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`${
          navbarBgColor ? "shadow-xl" : ""
        } bg-[rgba(0,0,0,0.7)] backdrop-blur-[10px] fixed top-0 left-0 w-full z-[20]`}>
        <div className="max-w-[1512px] mx-auto py-4 px-4 lg:px-10">
          <nav className="flex flex-wrap justify-between items-center text-white">
            <Link to="/">
              <img src={headerLogo} alt="logo" />
            </Link>
            <ul className="lg:flex items-center gap-[45px] hidden">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className={`${
                    nav === item.href ? "text-pink" : ""
                  } font-normal text-[16px] hover:text-pink transition-all `}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}

              <NavBtn href={RouteNavs.Register} text="Register Now" />
              {/* <Link to={RouteNavs.Register}>Register Now</Link> */}
            </ul>

            {/* Mobile */}
            <button
              className="lg:hidden text-2xl font-semibold tracking-widest transition-all duration-500"
              onClick={toggleNavbar}>
              {isOpen ? "X" : <img src={Hamburger} alt="mobile menu" />}
            </button>
            {isOpen && (
              <div className="flex flex-col basis-full gap-4">
                <ul className="flex flex-col gap-[1rem] items-center mt-8">
                  {navLinks.map((item) => (
                    <li
                      key={item.label}
                      className={`${
                        nav === item.href ? "text-pink" : "text-white"
                      } font-normal text-[16px]`}>
                      <Link to={item.href}>{item.label}</Link>
                    </li>
                  ))}
                  <NavBtn href={RouteNavs.Register} text="Register Now" />
                  {/* <Link to={RouteNavs.Register}>Register Now</Link> */}
                </ul>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
