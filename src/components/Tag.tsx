interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <p className="border border-pink rounded-[1.25rem] py-2 px-[0.69rem] text-pink text-xs inline-block">
      {text}
    </p>
  );
}
