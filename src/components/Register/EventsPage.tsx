import Heading from "../Heading";
import EventsList from "./EventsList";

export default function EventsPage() {
  return (
    <section className="bg-sub-hero bg-center bg-cover bg-no-repeat text-white px-4 mt-[5.625rem] py-[2.59rem] md:px-[4rem] xl:pt-[9.31rem] xl:pb-[5.59rem] xl:px-[6.13rem]">
      <div className="max-w-[82.125rem] mx-auto">
        <div className="space-y-5 md:space-y-10 mb-[3.12rem] md:mb-[6.25rem]">
          <Heading title="Events page" />
          <p
            data-aos="fade-up"
            className="text-base md:text-[1.44rem] md:leading-[1.725rem]">
            we have several amazing things to show you all and believe me we
            would do our best to work this for you and also work on many others,
            sky venture got you{" "}
          </p>
          <p
            data-aos="fade-up"
            className="text-base md:text-[1.44rem] md:leading-[1.725rem]">
            we have several amazing things to show you all and believe me we
            would do our best to work this for you and also work on many others,
            sky venture got you{" "}
          </p>
        </div>

        {/* Calendar Section */}

        <EventsList />
      </div>
    </section>
  );
}
