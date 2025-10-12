"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeWapper = ({ items, direction }) => {
  return (
    <div className="text-slider bg-clr_base py-3 h-[80px] md:h-[90px] flex items-center overflow-hidden">
      <Marquee direction={direction} gradient={false}>
        {items?.map((item) => (
          <div key={item.id} className="flex items-center">
            <span className="mx-5 md:mx-8 text-2xl md:text-3xl font-semibold whitespace-nowrap">
              {" "}
              {item.text}
            </span>
            <span className="text-3xl font-light text-black">★</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeWapper;
