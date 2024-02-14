/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header = ({ layout }) => {
  return (
    <div className="w-full flex justify-between md:px-12 px-6 md:py-10 py-6 absolute top-0 left-0 z-10 fadeIn">
      <a
        className="cursor-pointer"
        href="https://algorand.foundation"
        target="_blank"
      >
        <img src="/logo.svg" alt="logo" />
      </a>
      <div className="flex space-x-5 items-center">
        <a
          href={layout.socialLogos[0].logoURL}
          className="cursor-pointer"
          target="_blank"
        >
          <img src="/twicher.svg" alt="logo" className="w-7" />
        </a>
        <a
          href={layout.socialLogos[1].logoURL}
          className="cursor-pointer"
          target="_blank"
        >
          <img src="/youtube.svg" alt="logo" className="w-7" />
        </a>
        <a
          href={layout.socialLogos[2].logoURL}
          className="cursor-pointer"
          target="_blank"
        >
          <img src="/twitter.svg" alt="logo" className="w-7" />
        </a>
      </div>
    </div>
  );
};

export default Header;
