import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import Heading from "../Heading";

export default function Headquaters() {
  const position: LatLngTuple = [51.505, -0.09];

  return (
    <section className="text-white p-4 md:px-[4rem] md:py-[4.31rem]">
      <div className=" max-w-[82.125rem] mx-auto">
        <div className="mb-[3.12rem]">
          <Heading title="Headquaters" />
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base md:text-[1.44rem] md:leading-[1.725rem]">
            sky venture got fill page is not easy Lorem ipsum is just doing
            lorem ipsum things here. get the
          </p>
        </div>

        <div
          className="rounded-[1.25rem] overflow-hidden h-[19rem] md:h-[30rem] lg:h-[40rem]"
          data-aos="zoom-in"
          data-aos-delay="400">
          <MapContainer
            className="h-full"
            center={position}
            zoom={13}
            scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
