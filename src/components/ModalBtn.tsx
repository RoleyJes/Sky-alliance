import { ReactNode } from "react";

interface ModalBtnProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function ModalBtn({
  type = "button",
  className = "",
  onClick,
  children,
}: ModalBtnProps) {
  return (
    <button
      type={type}
      className={`${className} w-full py-4 text-center bg-pink rounded-[2.33rem] text-lg transition hover:opacity-80`}
      onClick={onClick}>
      {children}
    </button>
  );
}
