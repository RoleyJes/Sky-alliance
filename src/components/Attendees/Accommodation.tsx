import house from "../../assets/Attendees/house.svg";
import bed from "../../assets/Attendees/bed.svg";
import bath from "../../assets/Attendees/bath.svg";
import pool from "../../assets/Attendees/pool.svg";
import star from "../../assets/Attendees/star.svg";
import location from "../../assets/Home/location.svg";
import arrow from "../../assets/Home/Arrow_Right_LG.svg";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useState } from "react";

const houses = [
  {
    id: 1,
    name: "775 Rolling Green Rd.",
    location: "Saudi Arabia",
    bed: 1,
    bath: 1,
    amount: 23000,
    star,
    rating: 4.2,
    lat: 51.505,
    lng: -0.09,
    popUp: "A pretty apartment",
  },
  {
    id: 2,
    name: "775 Rolling Green Rd.",
    location: "Saudi Arabia",
    bed: 1,
    bath: 1,
    amount: 23000,
    star,
    rating: 4.2,
    lat: 38.72,
    lng: -9.14,
    popUp: "A pretty apartment",
  },
  {
    id: 3,
    name: "775 Rolling Green Rd.",
    location: "Saudi Arabia",
    bed: 1,
    bath: 1,
    amount: 23000,
    star,
    rating: 4.2,
    lat: 40.46,
    lng: -3.71,
    popUp: "A pretty apartment",
  },
];

export default function Accommodation() {
  const [mapPosition, setMapPosition] = useState<[number, number]>(
    houses.length > 0 ? [houses[0].lat, houses[0].lng] : [0, 0],
  );

  return (
    <section className="text-white px-4 py-[4.3125rem] md:px-[4rem] xl:py-24 xl:px-[6.13rem]">
      <div className="max-w-[82.125rem] mx-auto">
        <div className="mb-[2.19rem] lg:mb-[4.19rem]">
          <h2
            data-aos="fade-up"
            className="mb-[1.06rem] bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent inline-block font-bold text-2xl md:text-[3rem] md:leading-[3.66rem]">
            Accommodation options
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base md:text-[1.44rem] md:leading-[1.725rem]">
            sky venture got fill page is not easy Lorem ipsum is just doing
            lorem ipsum things here. get the
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6 xl:gap-x-10 gap-y-8 lg:gap-y-0 justify-center items-stretch">
          {/* Apartments */}
          <div className="space-y-[1.25rem] md:space-y-[2.25rem]">
            {houses.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                onClick={() => {
                  setMapPosition([item.lat, item.lng]);
                }}>
                <div className="rounded-[1.25rem] border border-[#2e3033] bg-[#1c1e2f] p-[1.29rem] lg:py-7 xl:p-[1.97rem] flex gap-x-[0.82rem] lg:gap-x-[1.25rem] cursor-pointer transition-all duration-300 hover:border-pink">
                  <figure className="rounded-[1.25rem] basis-[40%]">
                    <img
                      src={house}
                      className="object-fill object-center"
                      alt=""
                    />
                  </figure>

                  <div className=" flex-grow">
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-sm md:text-[1.25rem]">
                        {item.name}
                      </p>
                      <div className="flex items-center gap-1">
                        <img className="" src={item.star} alt="" />
                        <span className="text-[0.57rem] md:text-[0.88rem] leading-none">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                    <p className="flex items-center text-grey300 font-semibold text-[0.57rem] md:text-[0.875rem] mt-[0.21rem] mb-[0.16rem] md:my-[0.35rem]">
                      <img
                        className="size-[0.9rem] md:size-6"
                        src={location}
                        alt=""
                      />{" "}
                      <span>{item.location}</span>
                    </p>
                    <div className="flex justify-betwee gap-x-[0.25rem] md:gap-x-[0.38rem] lg:gap-x-[0.25rem] xl:gap-x-[0.38rem] text-[0.57rem] md:text-[0.875rem] leading-none max-w-[15rem]">
                      <div className="rounded-[1.23rem] border-[0.656px] border-grey200 p-[0.33rem] md:p-[0.5rem] lg:p-[0.33rem] xl:p-[0.5rem] flex items-center gap-x-[0.33rem]">
                        <img className="md:size-[1.02rem]" src={bed} alt="" />
                        <p>{item.bed} Bed</p>
                      </div>
                      <div className="rounded-[1.23rem] border-[0.656px] border-grey200 p-[0.33rem] md:p-[0.5rem] lg:p-[0.33rem] xl:p-[0.5rem] flex items-center gap-x-[0.33rem]">
                        <img className="md:size-[1.02rem]" src={pool} alt="" />
                        <p>Pool</p>
                      </div>
                      <div className="rounded-[1.23rem] border-[0.656px] border-grey200 p-[0.33rem] md:p-[0.5rem] lg:p-[0.33rem] xl:p-[0.5rem] flex items-center gap-x-[0.33rem] md:gap-x-[0.5rem]">
                        <img className="md:size-[1.02rem]" src={bath} alt="" />
                        <p>{item.bath} Bed</p>
                      </div>
                    </div>
                    <p className="text-[0.66rem] md:text-base lg:mt-4">
                      <span className="font-semibold">
                        ${" "}
                        {new Intl.NumberFormat(navigator.language).format(
                          item.amount,
                        )}
                      </span>
                      <span className="text-grey300">/night</span>
                    </p>
                    <a
                      href="#"
                      className="flex flex-grow items-center gap-2 text-xs md:text-base text-pink me-0 justify-end mt-[0.71rem] md:mt-[1.66rem] transition-all duration-300 hover:text-white">
                      Get apartment <img src={arrow} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div
            className="rounded-[1.25rem] overflow-hidden h-[20rem] lg:h-full bg-pink order-first lg:order-last"
            data-aos="zoom-in"
            data-aos-delay="400">
            <MapContainer
              className="h-full"
              center={mapPosition}
              zoom={13}
              scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {houses.map((house) => (
                <Marker key={house.id} position={[house.lat, house.lng]}>
                  <Popup>{house.popUp}</Popup>
                </Marker>
              ))}

              <ChangeCenter position={mapPosition} />
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

type PositionType = [number, number];

interface Mcp {
  position: PositionType;
}

function ChangeCenter({ position }: Mcp) {
  const map = useMap();
  map.setView(position);
  return null;
}
