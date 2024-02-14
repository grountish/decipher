import React from "react";
import SeparatorRight from "./SeparatorRight";
import BlockContent from "@sanity/block-content-to-react";
import { useState } from "react";

const SectionFive = ({ title, subtitle, questions }) => {
  const [open, setOpen] = useState(false);
  const openText = (id) => {
    const selected = "data-" + id;
    const target = document.getElementsByClassName(selected)[0];
    target?.classList.toggle("hidden");
    const btn = "btn-" + id;

    const targetBtn = document.getElementsByClassName(btn)[0];

    const isOpen = [...targetBtn.classList].indexOf("-rotate-45") !== -1;

    if (isOpen) {
      targetBtn?.classList.add("rotate-0");
      targetBtn?.classList.add("text-black");
      targetBtn?.classList.remove("-rotate-45");
      targetBtn?.classList.remove("text-primary-500");
    } else {
      targetBtn?.classList.remove("rotate-0");
      targetBtn?.classList.remove("text-black");
      targetBtn?.classList.add("-rotate-45");
      targetBtn?.classList.add("text-primary-500");
    }
  };
  return (
    <div>
      <SeparatorRight color={"#001325"} />
      <div className="bg-lightBlack min-h-[120vh] md:px-10 lg:px-20 px-6 text-white flex lg:flex-row flex-col md:justify-between justify-center w-full">
        <div className="flex flex-col font-aonik w-full">
          <h1 className="md:text-headline text-6xl pt-20 leading-none pb-4">
            {title}
          </h1>
          <div className="md:text-4xl text-xl leading-none">
            <BlockContent blocks={subtitle} />
          </div>
        </div>
        <div className="flex flex-col text-center w-full mx-auto md:pt-20 pt-3 pb-56">
          <div className="container mx-auto">
            <div className="mb-8 overflow-hidden">
              {questions?.map((question, i) => {
                return (
                  <div
                    onClick={() => {
                      openText(i);
                      setOpen(!open);
                    }}
                    key={question._key}
                    className="py-4 cursor-pointer last:border-b border-t first:border-none"
                  >
                    <>
                      <div className="text-lg">
                        <div className="flex items-start justify-between w-full text-left">
                          <div className="flex items-center">
                            <div className="hover:text-secondary-400 text-xl font-bold">
                              {question.question}
                            </div>
                          </div>
                          <span className="flex items-center ml-6 h-7">
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-6 w-6 transform transition ease duration-500 btn-${i} rotate-0 text-white`}
                            >
                              <path
                                d="M8.73518 11.432H0.96518V7.90405H8.73518V0.134047H12.2212V7.90405H20.0332V11.432H12.2212V19.202H8.73518V11.432Z"
                                className=" fill-current"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div
                        className={`py-6 mt-2 text-softBlack hidden text-base formatedTextAlt text-left data-${i}`}
                      >
                        <BlockContent blocks={question.answer} />
                      </div>
                    </>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <SeparatorRight
        color={"#17CAC6"}
        classes={"absolute -translate-y-[199px]"}
      />
    </div>
  );
};

export default SectionFive;
