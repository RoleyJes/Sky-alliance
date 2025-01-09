interface ModalProps {
  modal: boolean;
  modalTitle: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({
  modal,
  onClose,
  modalTitle,
  children,
}: ModalProps) {
  if (!modal) return null;

  return (
    <section
      className="fixed w-full h-full top-0 left-0 bg-[rgba(0,0,1,0.58)] z-20 overflow-y-auto"
      onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        data-aos="zoom-in"
        className="bg-primary rounded-xl px-4 lg:px-11 py-10 w-[90%] lg:w-1/2 mx-auto">
        <h2
          className="mb-[1.81rem] lg:mb-[5.6rem]  bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]"
          data-aos="fade-up">
          {modalTitle}
        </h2>
        {children}
      </div>
    </section>
  );
}
