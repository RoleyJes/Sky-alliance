import { useState } from "react";
import ContactMain from "../ContactMain";
import ContactLeftPart from "../ContactLeftPart";
import ContactForm from "../ContactForm";
import LabelAndInput from "../LabelAndInput";
import ModalBtn from "../ModalBtn";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email) {
      setEmailError("Please fill in your email");
      return;
    } else {
      setEmailError("");
    }

    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email)) {
      setEmailError("Error! you have entered an invalid email.");
      return;
    } else {
      setEmailError("");
    }

    setEmail("");
    setMessage("");
  }

  return (
    <ContactMain>
      <ContactLeftPart title="Contact us">
        <p
          className="text-base md:text-[1.4375rem] md:leading-[1.725rem]"
          data-aos="fade-up">
          we have several amazing things to show you all and believe me we would
          do our best to work this for you and also work on many others, sky
          venture got you
        </p>
      </ContactLeftPart>

      <ContactForm onSubmit={handleSubmit} className="w-full">
        <LabelAndInput
          label="Email address"
          placeholder="Enter email"
          type="email"
          name={email}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
          error={emailError}
          marginTop={false}
        />
        <LabelAndInput
          label="Message"
          placeholder="Enter message"
          fieldType="textarea"
          name={message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <ModalBtn type="submit" className="mt-10">
          Send
        </ModalBtn>
      </ContactForm>
    </ContactMain>
  );
}
