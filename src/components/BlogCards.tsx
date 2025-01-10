import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id?: number;
  img?: string;
  title?: string;
  description?: string;
  date?: string;
  link?: string;
  arrow?: string;
  figureClass?: string;
  listStyleClass?: string;
  linkClass?: string;
  children?: ReactNode;
}

export default function BlogCards({
  id,
  img,
  title,
  description,
  date,
  link,
  arrow,
  figureClass,
  listStyleClass,
  linkClass,
  children,
}: BlogCardProps) {
  return (
    <div data-aos="fade-up" key={id}>
      <li className={`list-none ${listStyleClass}`}>
        <figure
          className={`mb-4 overflow-hidden rounded-[1.25rem] border border-[#f4f2f2] ${figureClass}`}>
          <img
            className="transition-all duration-500 hover:scale-125 size-full object-cover"
            loading="lazy"
            src={img}
            alt=""
          />
        </figure>

        <div>
          {date && (
            <p className="mb-[0.25rem] text-neutral400 text-[1.1875rem]">
              {date}
            </p>
          )}
          {children}
          <h3 className="text-[1.19rem] md:text-[1.4375rem] font-bold mb-[0.72rem] md:mb-[0.88rem]">
            {title}
          </h3>
          <p className="text-[0.98rem] md:text-[1.1875rem]  text-[rgba(255,255,255,0.82)]">
            {description}
          </p>

          <Link
            to="/blog-post"
            className={`flex items-center gap-2 mt-[0.75rem] md:mt-[1.69rem] text-[rgba(255,255,255,0.82)] text-[1.1875rem] w-fit transition-colors duration-75 hover:text-pink ${linkClass}`}>
            <span className="">{link}</span>
            {arrow && <img src={arrow} alt="" />}
          </Link>
        </div>
      </li>
    </div>
  );
}
