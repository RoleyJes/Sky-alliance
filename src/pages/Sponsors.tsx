import { useState } from "react";
import Opportunity from "../components/Sponsors/Opportunity";
import PastSponsors from "../components/Sponsors/PastSponsors";
import WhyBecomeSponsor from "../components/Sponsors/WhyBecomeSponsor";
import ContactUs from "../components/Sponsors/ContactUs";

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
      <Opportunity modal={modal} onOpen={handleOpen} onClose={handleClose} />
      <PastSponsors />
      <WhyBecomeSponsor />
      <ContactUs />
    </>
  );
}
