interface LabelAndInputProps {
  label?: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  fieldType?: "input" | "textarea";
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void; // Change handler
  className?: string;
  rows?: number;
  marginTop?: boolean;
  error?: string;
}

export default function LabelAndInput({
  label,
  type = "text",
  fieldType = "input",
  name,
  className = "",
  value,
  onChange,
  placeholder = "",
  rows = 7,
  marginTop = true,
  error = "",
}: LabelAndInputProps) {
  return (
    <div className={`space-y-2 ${marginTop ? "mt-10" : ""}`}>
      <label>{label}</label>
      {fieldType === "input" ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`block px-[1.31rem] py-[1.31rem] lg:py-[1.62rem] w-full rounded-[3.1875rem] border  bg-transparent text-white text-base focus:outline-none focus:border-pink ${
            error ? "border-red-500" : "border-neutral300"
          }`}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`block px-[1.31rem] py-[1.31rem] lg:py-[1.62rem] w-full rounded-[1.25rem] border  bg-transparent text-white text-base focus:outline-none focus:border-pink ${className} ${
            error ? "border-red-500" : "border-neutral300"
          }`}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
