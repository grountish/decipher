import React from "react";
import Counter from "./Counter";
import Button from "./Button";
import { useState, useEffect } from "react";
import SeparatorLeft from "./SeparatorLeft";
import BlockContent from "@sanity/block-content-to-react";

const SectionOne = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonUrl,
  location,
  date,
  bottomText,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="relative">
      <div
        //ver por que no se ve la background image en movil
        className="lg:min-h-screen md:min-h-[100vh] min-h-[140vh] xs:min-h-[160vh] bg-mainPurple bg-contain md:bg-center bg-top bg-no-repeat text-white lg:p-12 px-6 py-12 flex justify-center font-inter md:bg-[url('/section1_background.svg')]
        bg-[url('/algo-bg-mobile.svg')]"
      >
        <div className="flex">
          <div className="relative lg:mt-[40vh] hidden lg:block mt-0">
            <h3 className="absolute hidden lg:block font-interBold lg:rotate-[-90deg] h-[5px] w-max lg:-translate-x-[100px]">
              {location}
            </h3>
          </div>
        </div>
        <div className="flex w-full flex-col items-center pt-20 max-w-[850px] mx-auto">
          <div className="ml-auto pr-5 lg:block hidden">
            {isClient ? <Counter targetDate={new Date("2024-03-24")} /> : null}
          </div>
          <h1 className="font-aonik lg:text-headline text-center text-[50px] leading-none lg:pb-6 pb-0">
            {title}
          </h1>
          <h3 className="font-interBold uppercase text-xl lg:hidden block pt-2 pb-5">
            {location}
          </h3>
          <div className="flex lg:flex-row flex-col mb-20 lg:justify-between justify-center items-center lg:items-baseline w-full">
            <p className="text-xl font-aonik lg:pl-6 w-36 lg:text-left text-center py-4 lg:py-0">
              {subtitle}
            </p>
            <div className="flex flex-col items-center lg:block">
              <div className="max-w-[660px] text-xl mb-6 font-interLight text-center lg:text-left">
                <BlockContent blocks={description} />
              </div>
              <Button
                title={buttonText}
                color="text-white"
                link={buttonUrl}
                bgColor="bg-mainGreen"
              />
            </div>
          </div>
          <div className="lg:hidden block">
            {isClient ? <Counter targetDate={new Date("2024-03-24")} /> : null}
          </div>
          <div className="lg:text-right text-center lg:w-1/3 lg:absolute static lg:bottom-16 lg:right-14 pt-10 lg:pt-0">
            <BlockContent blocks={bottomText} />
          </div>
        </div>
        <div className="relative lg:mt-[40vh] hidden lg:block mt-0">
          <h3 className="font-interBold lg:absolute static lg:rotate-[-90deg] h-[5px] w-max -translate-x-0 lg:-translate-x-[70px]">
            {date}
          </h3>
        </div>
      </div>
      <SeparatorLeft color={"white"} classes={"absolute"} />
    </div>
  );
};

export default SectionOne;
