import { useState } from "react";
import coupon from "../assets/24076783_coupon 1.svg";
import coinTopLeft from "../assets/coinTopLeft.svg";
import coinTopRight from "../assets/coinTopRight.svg";
import coinBottomLeft from "../assets/coinBottomLeft.svg";
import coinBottomRight from "../assets/coinBottomRight.svg";
import Axios from "axios";

export default function Hero() {
  const url =
    "https://decove-3962994e1fbc.herokuapp.com/api/v1/user/add-to-waitlist";
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [buttonState, setButtonState] = useState(false);
  const [message, setMessage] = useState(" ");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email) {
      console.log("enter email");
      return;
    }

    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email)) {
      setMessage("Error! you have entered an invalid email.");
      return;
    } else {
      setMessage("");
    }

    setButtonState(true);
    Axios.post(url, {
      email,
      app: "Sky Alliance",
    })
      .then((res) => {
        setButtonState(false);
        setResponseMessage(res.data.message);
        setTimeout(() => {
          setResponseMessage("");
        }, 5000);
        setEmail("");
      })
      .catch((err) => {
        setButtonState(false);
        setResponseMessage(err.response.data.message);
        setTimeout(() => {
          setResponseMessage("");
        }, 5000);
        setEmail("");
      });
  }

  return (
    <section className="bg-coming-soon bg-no-repeat bg-cover bg-center bg-primary h-full relative">
      <img
        src={coinTopLeft}
        className="absolute w-[3.28rem] h-[3.78rem] lg:w-[5.03rem] lg:h-[5.79rem] top-[13rem] left-[3.81rem] md:left-[12rem]"
        alt="coin"
      />

      <img
        src={coinTopRight}
        className="absolute w-[1.55rem] h-[1.12rem] lg:w-[2.37rem] lg:h-[1.71rem] top-[10rem] right-[1.26rem] md:right-[5rem]"
        alt="coin"
      />
      <img
        src={coinBottomLeft}
        className="absolute w-[3.28rem] h-[3.78rem] lg:w-[5.03rem] lg:h-[5.79rem] bottom-[5rem] left-[3rem] md:left-[8.5rem]"
        alt="coin"
      />
      <img
        src={coinBottomRight}
        className="absolute w-[3.36rem] h-[2.66rem] lg:w-[5.14rem] lg:h-[4.07rem] bottom-[7rem] right-[3rem]"
        alt="coin"
      />
      <div
        className=" max-w-[56.4375rem] mx-auto h-full flex flex-col justify-center items-center gap-4 lg:gap-[2rem] text-center px-[1.78rem]"
        data-aos="zoom-in">
        <figure className="w-[53px] h-[48px] lg:w-[68px] lg:h-[61px]">
          <img src={coupon} className="w-full h-full" alt="coupon" />
        </figure>

        <div>
          <p className="text-base lg:text-[1.5rem] lg:leading-[1.83rem] text-white">
            We are cooking
          </p>
          <p className="mt-[0.65rem bg-gradient-to-r from-[#C108F1] from-[-2.52%] via-[#6825D7] via-[28.25%] to-[#C108F1] to-[102.92%] bg-clip-text text-transparent font-bold text-[2rem] leading-[2.44rem] lg:text-[3rem] lg:leading-[3.66rem]">
            Get notified when we launch our website
          </p>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="relative w-[20.81rem] lg:w-[35.5rem]">
            <input
              type="email"
              className=" ps-[1.31rem] pe-[10rem] lg:pe-[11rem] py-[1.31rem] lg:py-[1.62rem] w-full rounded-[3.1875rem] border border-neutral300 bg-transparent text-white text-base"
              placeholder="Enter email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={buttonState}
              className="w-[8.25rem] h-[2.85rem] lg:w-[9.31rem] lg:h-[3rem] flex items-center justify-center bg-[#C108F1] rounded-[1.875rem] text-sm text-white absolute right-[0.94rem] top-1/2 -translate-y-1/2 transition-all hover:bg-[#c208f1b6] disabled:bg-[#c208f1b6] disabled:opacity-70">
              Join waiting list
            </button>
          </div>
          <p className="tex-sm text-red-500">{message}</p>
        </form>
        <p className="text-lg text-white mt-4">{responseMessage}</p>
      </div>
    </section>
  );
}
