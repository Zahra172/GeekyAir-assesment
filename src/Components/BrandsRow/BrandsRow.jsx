import React, { useState } from "react";

export default function BrandsRow() {
  const [activeIndex, setActiveIndex] = useState(0);

  const brands = [
    "/public/images/obvi.png",
    "/public/images/bulletproof.png",
    "/public/images/boom.png",
    "/public/images/orbitbaby.png",
  ];

  return (
    <div className="flex flex-nowrap items-center gap-6 mt-10">
      {brands.map((src, index) => (
        <div
          key={index}
          className="group flex flex-col items-center cursor-pointer"
          onClick={() => setActiveIndex(index)}
        >
          <img
            src={src}
            className={`
              w-20 pb-2 transition-all duration-300
              ${
                activeIndex === index
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-100"
              }
            `}
          />

          <span
            className={`
              block h-[2px] bg-[#FF6D2C] transition-all duration-300
              ${
                activeIndex === index
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }
            `}
          ></span>
        </div>
      ))}
    </div>
  );
}
