import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactUs/ContactSection";
import Headquaters from "../components/ContactUs/Headquaters";

export default function ContactUs() {
  return (
    <>
      <Navbar />

      <main>
        <ContactSection />
        <Headquaters />
      </main>

      <Footer />
    </>
  );
}
