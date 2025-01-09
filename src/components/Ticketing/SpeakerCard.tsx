interface BlogCardProps {
  id: number;
  img?: string;
  name?: string;
  role?: string;
}

export default function SpeakerCard({ id, img, name, role }: BlogCardProps) {
  return (
    <li key={id} className="text-center" data-aos="fade-up">
      <figure className="rounded-[1.25rem] overflow-hidden">
        <img loading="lazy" src={img} alt={name} />
      </figure>
      <p className="mt-8 mb-2 bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-lg">
        {name}
      </p>
      <p className="text-base">{role}</p>
    </li>
  );
}
