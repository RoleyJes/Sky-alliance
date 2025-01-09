import check from "../../assets/Sponsors/Group.png";

const sponsorshipLevels = [
  {
    id: 1,
    price: "$50,000",
    type: "Platinum",
    bgColor: "pink",
    features: [
      {
        id: 1,
        description: "Forbes mention",
      },
      {
        id: 2,
        description: "Binance blog",
      },
      {
        id: 3,
        description: "Featured on 70+ News outlets’ homepage",
      },
      {
        id: 4,
        description: "Google News",
      },
      {
        id: 5,
        description: "Up to 2 image included",
      },
      {
        id: 6,
        description: "Retweet by Sky Wee",
      },
      {
        id: 7,
        description: "Dedicated tweet by Sky Wee",
      },
      {
        id: 8,
        description: "Binance square",
      },
      {
        id: 9,
        description: "Decrypt News featured",
      },
      {
        id: 10,
        description: "Yahoo finance",
      },
      {
        id: 11,
        description: "Coinmarketcap feed",
      },
      {
        id: 12,
        description: "Coinmarketcap feed",
      },
      {
        id: 13,
        description: "Coinmarketcap feed",
      },
      {
        id: 14,
        description: "Coinmarketcap feed",
      },
    ],
  },
  {
    id: 2,
    price: "$30,000",
    type: "Gold",
    bgColor: "darkGrey",
    features: [
      {
        id: 1,
        description: "Forbes mention",
      },
      {
        id: 2,
        description: "Binance blog",
      },
      {
        id: 3,
        description: "Featured on 70+ News outlets’ homepage",
      },
      {
        id: 4,
        description: "Google News",
      },
      {
        id: 5,
        description: "Up to 2 image included",
      },
      {
        id: 6,
        description: "Retweet by Sky Wee",
      },
      {
        id: 7,
        description: "Dedicated tweet by Sky Wee",
      },
      {
        id: 8,
        description: "Binance square",
      },
      {
        id: 9,
        description: "Decrypt News featured",
      },
      {
        id: 10,
        description: "Yahoo finance",
      },
      {
        id: 11,
        description: "Coinmarketcap feed",
      },
      {
        id: 12,
        description: "Coinmarketcap feed",
      },
      {
        id: 13,
        description: "Coinmarketcap feed",
      },
      {
        id: 14,
        description: "Coinmarketcap feed",
      },
    ],
  },
  {
    id: 3,
    price: "$10,000",
    type: "Silver",
    bgColor: "darkGrey",
    features: [
      {
        id: 1,
        description: "Forbes mention",
      },
      {
        id: 2,
        description: "Binance blog",
      },
      {
        id: 3,
        description: "Featured on 70+ News outlets’ homepage",
      },
      {
        id: 4,
        description: "Google News",
      },
      {
        id: 5,
        description: "Up to 2 image included",
      },
      {
        id: 6,
        description: "Retweet by Sky Wee",
      },
      {
        id: 7,
        description: "Dedicated tweet by Sky Wee",
      },
      {
        id: 8,
        description: "Binance square",
      },
      {
        id: 9,
        description: "Decrypt News featured",
      },
      {
        id: 10,
        description: "Yahoo finance",
      },
      {
        id: 11,
        description: "Coinmarketcap feed",
      },
      {
        id: 12,
        description: "Coinmarketcap feed",
      },
      {
        id: 13,
        description: "Coinmarketcap feed",
      },
      {
        id: 14,
        description: "Coinmarketcap feed",
      },
    ],
  },
];

export default function Levels() {
  return (
    <>
      {sponsorshipLevels.map((level) => (
        <article
          data-aos="zoom-in"
          className={`rounded-[1.25rem] border border-[rgba(60,60,60,0.37)] shadow-[0px_0px_40px_5px_rgba(0,0,0,0.04)] bg-darkGrey hover:bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] p-px`}>
          <div
            key={level.id}
            className={`bg-${level.bgColor} rounded-[1.25rem] pt-[4.27rem] pb-[2.16rem] px-[3.05rem] md:pt-[5.06rem] md:pb-[2.56rem] md:px-[3.62rem] hover:bg-${level.bgColor} text-neutral100`}>
            <p className="font-bold text-4xl md:text-5xl">{level.price}</p>
            <p className="mb-[3.37rem] lg:mb-16 font-bold text-xl md:text-2xl">
              {level.type}
            </p>

            <ul className="space-y-4 text-start">
              {level.features.map((feature) => (
                <li
                  key={feature.id}
                  className="text-base md:text-xl tracking-[0.004rem] md:tracking-[0.004rem] flex gap-2 items-center">
                  <img src={check} alt="" />
                  <span>{feature.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </>
  );
}
