import React from "react";
import SeparatorRight from "./SeparatorRight";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "../utils/imageUrlBuilder";
import Button from "./Button";

const SectionThree = ({ title, address, map, buttonText, buttonUrl }) => {
  return (
    <div className="relative">
      <SeparatorRight color={"#524DF6"} classes={"translate-y-[1px]"} />
      <div className="bg-mainPurple md:min-h-[125vh] lg:pl-20 md:px-10 pt-6 pb-52 lg:pt-0 md:pb-0 lg:pr-20 pl-6 pr-6 text-white flex lg:flex-row flex-col lg:justify-between md:justify-start justify-center w-full">
        <div className="flex flex-col font-aonik md:py-10 lg:py-40 w-full">
          <h1 className="lg:text-headline text-[86px] lg:pt-20 leading-none pb-4">
            {title}
          </h1>
          <div className="text-4xl">
            <BlockContent blocks={address} />
          </div>
          <Button
            title={buttonText}
            link={buttonUrl}
            color={"text-mainPurple"}
            bgColor={"bg-white"}
            classes={"!px-16"}
          />
        </div>
        <div>
          <img
            className="w-full md:w-5/6 lg:w-full lg:pt-20 pt-8 fadeIn"
            src={urlFor(map)}
            alt="section3_background"
          />
        </div>
      </div>
      <SeparatorRight classes={"-translate-y-[199px] absolute"} />
    </div>
  );
};

export default SectionThree;
