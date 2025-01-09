import { useState } from "react";
import ContactLeftPart from "../ContactLeftPart";
import ContactForm from "../ContactForm";
import NewsLetterFormField from "./NewsLetterFormField";
import ContactMain from "../ContactMain";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEmail("");
  }

  return (
    <ContactMain itemsCenter>
      <ContactLeftPart title="Newsletter">
        <p
          className="text-base md:text-[1.4375rem] md:leading-[1.725rem]"
          data-aos="fade-up">
          we have several amazing things to show you all and believe me we would
          do our best to work this for you and also work on many others, sky
          venture got you
        </p>
      </ContactLeftPart>

      <ContactForm onSubmit={handleSubmit}>
        <NewsLetterFormField email={email} onSetEmail={setEmail} />
      </ContactForm>
    </ContactMain>
  );
}
