import download from "../../assets/Press/download.png";

const kitData = [
  {
    id: 1,
    name: "logo kit",
    size: "8mb",
    date: "Updated 2 weeks ago",
    button: "Download kit",
  },
  {
    id: 2,
    name: "Brand manual",
    size: "8mb",
    date: "Updated 2 weeks ago",
    button: "Download kit",
  },
  {
    id: 3,
    name: "Company images",
    size: "8mb",
    date: "Updated 2 weeks ago",
    button: "Download kit",
  },
  {
    id: 4,
    name: "Merch",
    size: "8mb",
    date: "Updated 2 weeks ago",
    button: "Download kit",
  },
  {
    id: 5,
    name: "event pictures",
    size: "8mb",
    date: "Updated 2 weeks ago",
    button: "Download kit",
  },
];

export default function DownloadKit() {
  return (
    <section className=" text-white mb-[3rem] md:mb-[6.19rem] p-4 md:px-[4rem] md:py-[3.81rem]">
      <div className="max-w-[82.125rem] mx-auto">
        <ul className="space-y-[1.38rem]">
          {kitData.map((kit) => (
            <li
              key={kit.id}
              data-aos="fade-up"
              className="grid grid-cols-3 md:grid-cols-4 items-center w-full text-base md:text-[1.43rem]">
              <p>{kit.name}</p>
              <div>
                <p className="text-neutral400 place-self-center md:place-self-start">
                  {kit.size}
                </p>
              </div>
              <p className="hidden md:inline-block text-neutral400">
                {kit.date}
              </p>
              <div>
                <button className="text-pink flex items-center gap-2 place-self-end">
                  <img
                    className="size-[0.8rem] md:size-[1.5rem]"
                    src={download}
                    alt=""
                  />
                  <span>{kit.button}</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
