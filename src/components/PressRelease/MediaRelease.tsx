import Heading from "../Heading";
import MediaReleaseImages from "./MediaReleaseImages";

export default function MediaRelease() {
  return (
    <section className=" text-white px-4 mt-[5.625rem] py-[2.59rem] md:px-[4rem] xl:pt-[9.31rem] xl:pb-[5.59rem] xl:px-[6.13rem]">
      <div className="max-w-[82.125rem] mx-auto">
        <div className="mb-[3.12rem]">
          <Heading title="Media and press realease" />
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base md:text-[1.44rem] md:leading-[1.725rem]">
            sky venture got you , relax and get the best sky venture got you ,
            relax and get the bestsky venture got you , relax and get the
            bestsky venture got you , relax and get the bestsky venture got you
            , relax and get the bestsky venture got you , relax and get the
            bestsky venture got you , relax and get the bestsky venture got you
            , relax and get the bestsky venture got you , relax and get the best
          </p>
        </div>

        <MediaReleaseImages />
      </div>
    </section>
  );
}
