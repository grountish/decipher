import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Arrow from "./Arrow";
import { useState } from "react";

const Day = ({ day, dayNumber }) => {
  const [showA, setshowA] = useState(true);
  const daysToShow = showA ? 3 : day.schedule.length;
  return (
    <div
      className="mx-auto rounded-3xl font-aonik xs:p-6 p-10 text-white z-10 lg:w-[500px] md:w-full w-[380px] xs:w-[350px] lg:h-[575px] md:h-[500px] h-[445px]"
      style={{
        backgroundColor: day.backgroundColor
          ? day.backgroundColor.hex
          : "transparent",
      }}
    >
      <div>
        <div className="flex items-center justify-between">
          {showA ? (
            <p className="lg:text-3xl text-[22px]">PROGRAM</p>
          ) : (
            <p className="lg:text-3xl text-[22px]">{dayNumber}</p>
          )}
          <div onClick={() => setshowA(!showA)}>
            <Arrow color="white" />
          </div>
        </div>
        {showA && (
          <div className="flex items-end">
            <div className="lg:text-9xl text-[86px] leading-none">
              <BlockContent blocks={day.dayNumber} />
            </div>
            <div className="uppercase lg:text-3xl text-xl lg:-ml-14 md:ml-0 ml-8 mb-3">
              <BlockContent blocks={day.date} />
            </div>
          </div>
        )}
        <div className="pt-4">
          {day.schedule.slice(0, daysToShow).map((slot) => {
            return (
              <div
                className="uppercase flex justify-between border-t lg:py-3 py-2 items-center lg:text-xl text-base last:border-b"
                key={slot._key}
              >
                <p>{slot.time}</p>
                <p>{slot.activity}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Day;
