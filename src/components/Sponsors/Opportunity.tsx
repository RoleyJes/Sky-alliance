import { useState } from "react";
import Modal from "../Modal";
import ModalSponsors from "./ModalSponsors";
import OpportunityMain from "./OpportunityMain";

interface OpportunityProps {
  modal: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function Opportunity({
  modal,
  onOpen,
  onClose,
}: OpportunityProps) {
  const [isChecked, setIsChecked] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  function handleSponsorshipSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submitting..", isChecked); // Log the selected checkboxes

    // Reset all checkboxes to false
    setIsChecked((prev) => {
      const resetState = Object.fromEntries(
        Object.keys(prev).map((key) => [key, false]), // Map all keys to `false`
      ) as typeof prev; // Explicitly cast to match the expected type

      return resetState;
    });

    onClose();
  }

  function handleCheckboxChange(name: string, checked: boolean) {
    setIsChecked((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  return (
    <>
      <OpportunityMain onOpen={onOpen} />

      <Modal modal={modal} modalTitle={"Sponsorship"} onClose={onClose}>
        <ModalSponsors
          onSponsorshipSubmit={handleSponsorshipSubmit}
          isChecked={isChecked}
          onCheckboxChange={handleCheckboxChange}
        />
      </Modal>
    </>
  );
}
