import { useNavigate } from "react-router-dom";
import ModalBtn from "./ModalBtn";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <section className="h-dvh w-full flex items-center justify-center">
      <div className="flex flex-col gap-6 text-white">
        <p className=" text-2xl">Page not found</p>
        <ModalBtn onClick={() => navigate(-1)}>Go back</ModalBtn>
      </div>
    </section>
  );
}
