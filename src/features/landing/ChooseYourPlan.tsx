import cx from "clsx";
import NumIcon1 from "./icons/plan/num-1.svg";
import NumIcon2 from "./icons/plan/num-2.svg";
import NumIcon3 from "./icons/plan/num-3.svg";

import Tick from "assets/tick.png";
import CrossLight from "assets/cross.png";
import CrossDark from "assets/cross2.png";
import { Button } from "components/Button";
import { useState } from "react";

function OurNumbers() {
  return (
    <div className="mx-auto max-w-[1090px] px-6">
      <h1 className="text-5xl leading-[4rem]">Our numbers</h1>
      <div className="mt-16 flex flex-col gap-x-4 gap-y-12 divide-dotted divide-[#9FB4C4] md:flex-row md:divide-x-2 max-md:divide-y-2">
        <div className="flex flex-1 items-start justify-center gap-x-4 py-12 md:justify-start">
          <img src={NumIcon1} />
          <div>
            <h1 className="-mt-2 align-top text-[5.5rem] leading-[1]">1’518</h1>
            <p className="text-right">
              Users use your
              <br /> app
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-start justify-center gap-x-4 py-12">
          <img src={NumIcon2} />
          <div>
            <h1 className="-mt-2 align-top text-[5.5rem] leading-[1]">
              78<span className="inline-block -translate-y-4 text-6xl">%</span>
            </h1>
            <p className="text-right">
              Conversion <br /> improvement
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-start justify-center gap-x-4 py-12 md:justify-end">
          <img src={NumIcon3} />
          <div>
            <h1 className="-mt-2 align-top text-[5.5rem] leading-[1]">
              27<span className="inline-block -translate-y-4 text-6xl">%</span>
            </h1>
            <p className="text-right">
              Revenue
              <br />
              increases
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Plan({
  title,
  price,
  brightness,
  bgColor,
}: {
  brightness: "dark" | "light";
  bgColor: string;
  title: string;
  price: number;
}) {
  let isDark = brightness === "dark";
  let cross = isDark ? CrossDark : CrossLight;

  return (
    <div
      className="flex-1 rounded-[50px] px-8 py-8"
      style={{
        backgroundColor: bgColor,
        ...(isDark
          ? {
              color: "white",
            }
          : {}),
      }}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <h2 className="mt-4 text-5xl font-bold leading-[1]">
        ${price} <span className="text-lg font-normal">/ year</span>
      </h2>

      <p className="mt-4 text-lg font-normal">$2.16 /month</p>

      <hr className="mt-6 border-dotted border-[#9FB4C4]" />

      <div className="mt-8 space-y-8 text-xl font-semibold">
        <div className="flex items-center gap-x-4">
          <img src={Tick} className="w-4" />
          <p>500 Verified Emails</p>
        </div>
        <div className="flex items-center gap-x-4">
          <img src={Tick} className="w-4" />
          <p>Cleaning Templates</p>
        </div>
        <div className="flex items-center gap-x-4">
          <img src={Tick} className="w-4" />
          <p>Social Selling Extension</p>
        </div>
        <div className="flex items-center gap-x-4">
          <img src={cross} className="w-4" />
          <p>Highlights Prospects</p>
        </div>
        <div className="flex items-center gap-x-4">
          <img src={cross} className="w-4" />
          <p>Personalized Set Up</p>
        </div>
      </div>

      <hr className="mt-6 border-dotted border-[#9FB4C4]" />

      <Button className="mt-6 w-full bg-light-yellow text-dark-blue">
        Subscribe Plan
      </Button>
    </div>
  );
}

export function ChooseYourPlan() {
  const [monthly, setMonthly] = useState(false);

  const activeClasses = "bg-dark-blue text-[#E4EFF5]";
  const inActiveClasses = "text-[#628097]";

  return (
    <>
      <section id="our-numbers" className="pt-24">
        <OurNumbers />
      </section>
      <section id="choose-your-plan" className="py-24">
        <div className="mx-auto max-w-[1090px] px-6">
          <h1 className="text-5xl leading-[4rem]">Choose your plan </h1>
          <p className="mt-6 max-w-3xl">
            Our AI tool offers a comprehensive analysis of your Airbnb & VRBO
            listings delivering tangible actionable recommendations to boost
            booking rates
          </p>

          <div className="mt-8 inline-flex cursor-pointer overflow-hidden rounded-full border-2 border-[#628097] text-lg font-semibold">
            <div
              className={cx(
                "rounded-r-full px-7 py-5 text-[#628097]",
                !monthly ? activeClasses : inActiveClasses
              )}
              onClick={() => setMonthly(false)}
            >
              Annual <span className="ml-1 text-[#458ACF]">Save 25%</span>
            </div>
            <div
              className={cx(
                "rounded-l-full py-5 pl-12 pr-12",
                monthly ? activeClasses : inActiveClasses
              )}
              onClick={() => setMonthly(true)}
            >
              Monthly
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 md:flex-row">
            <Plan
              title="Grows"
              price={54}
              brightness="light"
              bgColor="#ECF2F5"
            />
            <Plan
              title="Grows"
              price={54}
              brightness="dark"
              bgColor="#4E90D2"
            />
            <Plan
              title="Teams"
              price={120}
              brightness="dark"
              bgColor="#213046"
            />
          </div>
        </div>
      </section>
    </>
  );
}
