interface PinkBtnTypes {
  text: string;
  onOpen?: () => void;
  className?: string;
}

export default function PinkBtn({ text, onOpen, className }: PinkBtnTypes) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`bg-pink w-fit block rounded-[1.875rem] py-[0.44rem] px-[1.88rem] text-white text-[1.18rem] hover:outline hover:bg-[#001940] transition-all duration-300 mt-[2.19rem] lg:mt-[3.12rem] ${className}`}>
      {text}
    </button>
  );
}
