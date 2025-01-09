interface NewsLetterFormFieldProps {
  onSetEmail: (e: string) => void;
  email: string;
}

export default function NewsLetterFormField({
  email,
  onSetEmail,
}: NewsLetterFormFieldProps) {
  return (
    <div>
      <label className="mb-[0.5rem] inline-block">Enter email address</label>
      <div className="relative w-auto lg:w-[33rem]">
        <input
          type="text"
          className=" ps-[1.31rem] pe-[8.5rem] md:pe-[10rem] lg:pe-[11rem] py-[1.31rem] lg:py-[1.62rem] w-full rounded-[3.1875rem] border border-neutral300 bg-transparent text-white text-base focus:outline-none"
          placeholder="Enter email"
          value={email}
          onChange={(e) => onSetEmail(e.target.value)}
        />

        <button
          type="submit"
          className="w-[6.75rem] h-[2.25rem] md:w-[8.25rem] md:h-[2.85rem] lg:w-[9.31rem] lg:h-[3rem] flex items-center justify-center bg-[#C108F1] rounded-[1.875rem] text-sm text-white absolute right-[0.94rem] top-1/2 -translate-y-1/2 transition-all hover:bg-[#c208f1b6]">
          Join
        </button>
      </div>
    </div>
  );
}
