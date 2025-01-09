import { useState } from "react";
import TicketMain from "./TicketMain";
import ModalFirstDisplay from "./ModalFirstDisplay";
import ModalSecondDisplay from "./ModalSecondDisplay";
import Modal from "../Modal";

interface TicketProps {
  modal: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function Ticket({ modal, onOpen, onClose }: TicketProps) {
  const [numberOfTicket, setNumberOfTicket] = useState(0);
  const [ticketFormDisplay, setTicketFormDisplay] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");

  function handleTicketSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim()) {
      setNameMessage("Please fill in your name");
      return;
    } else {
      setNameMessage("");
    }

    if (!email) {
      setEmailMessage("Please fill in your email");
      return;
    } else {
      setEmailMessage("");
    }

    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email)) {
      setEmailMessage("Error! you have entered an invalid email.");
      return;
    } else {
      setEmailMessage("");
    }

    setName("");
    setEmail("");
    setNumberOfTicket(0);
    onClose();
    setTicketFormDisplay(1);
  }

  function handleTicketIncrease() {
    setNumberOfTicket((t) => t + 1);
  }

  function handleTicketDecrease() {
    if (numberOfTicket === 0) return;
    setNumberOfTicket((t) => t - 1);
  }

  return (
    <section className="px-4 md:px-[4rem] xl:px-[6.19rem] py-6 lg:py-16 xl:py-[6.03rem] text-white">
      <TicketMain onOpen={onOpen} />

      <Modal
        modal={modal}
        modalTitle={"Ticket selection"}
        onClose={() => {
          setTicketFormDisplay(1);
          onClose();
        }}>
        {/* First display */}
        <ModalFirstDisplay
          ticketFormDisplay={ticketFormDisplay}
          onTicketFormDisplay={setTicketFormDisplay}
          numberOfTicket={numberOfTicket}
          onTicketDecrease={handleTicketDecrease}
          onTicketIncrease={handleTicketIncrease}
        />

        {/* Second display */}
        <ModalSecondDisplay
          ticketFormDisplay={ticketFormDisplay}
          onTicketSubmit={handleTicketSubmit}
          name={name}
          email={email}
          onChangeName={(e) => setName(e.target.value)}
          onChangeEmail={(e) => setEmail(e.target.value)}
          nameMessage={nameMessage}
          emailMessage={emailMessage}
        />
      </Modal>
    </section>
  );
}
