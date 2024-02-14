"use client";
import React from "react";

const Button = ({ title, link, color, bgColor, classes }) => {

  return (
    <a
    href={link}
    target="_blank"
      className={`px-4 py-2 w-max font-aonik rounded-lg cursor-pointer ${color} ${bgColor} ${classes}`}
    >
      {title}
    </a>
  );
};

export default Button;
