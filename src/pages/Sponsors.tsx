import { useState } from "react";
import Navbar from "../components/Navbar";
import Opportunity from "../components/Sponsors/Opportunity";
import PastSponsors from "../components/Sponsors/PastSponsors";
import WhyBecomeSponsor from "../components/Sponsors/WhyBecomeSponsor";
import ContactUs from "../components/Sponsors/ContactUs";
import Footer from "../components/Footer";

export default function Sponsors() {
  const [modal, setModal] = useState(false);

  function handleOpen() {
    setModal(true);
  }

  function handleClose() {
    setModal(false);
  }
  return (
    <>
      <Navbar />

      <main>
        <Opportunity modal={modal} onOpen={handleOpen} onClose={handleClose} />
        <PastSponsors />
        <WhyBecomeSponsor />
        <ContactUs />
      </main>

      <Footer />
    </>
  );
}
