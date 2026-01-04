import Ticket from "../components/Attendees/Ticket";
import Faq from "../components/Attendees/Faq";
import Accommodation from "../components/Attendees/Accommodation";
import AttendeesSubHero from "../components/Attendees/AttendeesSubHero";
import TravelTips from "../components/Attendees/TravelTips";
import { useState } from "react";

export default function Attendees() {
  const [modal, setModal] = useState(false);

  function handleOpen() {
    setModal(true);
  }

  function handleClose() {
    setModal(false);
  }

  return (
    <>
      <AttendeesSubHero />
      <Ticket modal={modal} onOpen={handleOpen} onClose={handleClose} />
      <Faq />
      <Accommodation />
      <TravelTips />
    </>
  );
}
