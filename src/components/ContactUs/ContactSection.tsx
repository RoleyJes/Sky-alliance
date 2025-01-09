import ContactLeftPart from "../ContactLeftPart";
import ContactMain from "../ContactMain";
import location from "../../assets/ContactUs/mdi_address-marker.png";
import call from "../../assets/ContactUs/mingcute_phone-fill.png";
import mail from "../../assets/ContactUs/ic_baseline-email.png";
import ContactForm from "../ContactForm";
import LabelAndInput from "../LabelAndInput";
import ModalBtn from "../ModalBtn";
import { useState } from "react";

const contactdetails = [
  {
    id: 1,
    img: location,
    detail: "92 song road Malaysia",
  },
  {
    id: 2,
    img: call,
    detail: "+892 932 902 3245",
  },
  {
    id: 3,
    img: mail,
    detail: "sky alliance@gmail.com",
  },
];

export default function ContactSection() {
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
    <section className="mt-[5.625rem]">
      <ContactMain>
        <ContactLeftPart title="Contact us">
          <ul className="space-y-6">
            {contactdetails.map((item) => (
              <li key={item.id} className="flex items-center gap-2 md:gap-6">
                <img className="size-4 md:size-6" src={item.img} alt="" />
                <span className="text-base md:text-2xl">{item.detail}</span>
              </li>
            ))}
          </ul>
        </ContactLeftPart>

        <ContactForm onSubmit={handleSubmit}>
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
    </section>
  );
}
