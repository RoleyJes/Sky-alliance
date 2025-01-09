import logo from "../assets/HeaderLogo.svg";
import logoMobile from "../assets/logoMobile.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {" "}
      <section className="bg-primary px-[1.75rem] md:px-8">
        <div className="max-w-[81.59375rem] py-[2.25rem] md:py-12 lg:py-[1.61rem] mx-auto flex flex-col items-center justify-center text-center gap-[0.5rem]">
          <picture>
            <source media="(min-width:768px)" srcSet={logo} />
            <img src={logoMobile} alt="sky alliance logo" />
          </picture>

          <p className="text-[rgba(255,255,255,0.87)] text-[0.5rem] lg:text-[0.6875rem] leading-[0.97rem]">
            © {year} sky Alliance partner | All Rights Reserved 
          </p>
        </div>
      </section>
    </>
  );
}
