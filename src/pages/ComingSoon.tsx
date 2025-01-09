import Footer from "../components/Footer";
import Hero from "../components/ComingSoonHero";
import logoMobile from "../assets/logoMobile.svg";
import HeaderLogo from "../assets/HeaderLogo.svg";

export default function ComingSoon() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <header className={`fixed w-full top-0 z-[20] transition-all bg-primary`}>
        <div className="max-w-[1512px] mx-auto py-[1.25rem] px-[2.25rem] lg:px-[6.44rem] lg:py-[1.56rem]">
          <nav className="flex justify-between items-center">
            <a href="#">
              <picture>
                <source media="(min-width:768px)" srcSet={HeaderLogo} />
                <img src={logoMobile} alt="logo" />
              </picture>
            </a>
          </nav>
        </div>
      </header>
      <Hero />
      <Footer />

      {/* <Routes>
        <Route path={RouteNavs.Navigation} element={<Navbar />} />
      </Routes> */}
    </div>
  );
}
