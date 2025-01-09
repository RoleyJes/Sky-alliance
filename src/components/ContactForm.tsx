import { ReactNode } from "react";

interface ContactFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
  children: ReactNode;
}

export default function ContactForm({
  onSubmit,
  className = "",
  children,
}: ContactFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={className}
      data-aos="fade-up"
      data-aos-delay="300">
      {children}
    </form>
  );
}
