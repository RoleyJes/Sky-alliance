import { useState } from "react";
import Faq from "../components/Attendees/Faq";
import Ticket from "../components/Attendees/Ticket";
import Hero from "../components/Ticketing/Hero";
import Speakers from "../components/Ticketing/Speakers";
import WhatToExpect from "../components/Ticketing/WhatToExpect";
import ImagesFromLastEvent from "../components/AboutUs/ImagesFromLastEvent";
import LastEventVideos from "../components/Ticketing/LastEventVideos";

export default function Ticketing() {
  const [modal, setModal] = useState(false);

  function handleOpen() {
    setModal(true);
  }

  function handleClose() {
    setModal(false);
  }

  return (
    <>
      <Hero onOpen={handleOpen} />
      <WhatToExpect />
      <Speakers />
      <Ticket modal={modal} onOpen={handleOpen} onClose={handleClose} />
      <Faq />
      <LastEventVideos />
      <div className="hidden xl:block">
        <ImagesFromLastEvent />
      </div>
    </>
  );
}
