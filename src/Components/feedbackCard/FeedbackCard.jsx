import React from "react";

export default function FeedbackCard({
  reverse,
  span,
  generalP,
  quateP,
  writer,
  image,
  heading,
  spanFirst,
}) {
  return (
    <div className={`flex py-24 ${reverse ? "flex-row-reverse" : ""}`}>
      <div className="w-5/12">
        <h3 className="text-[3.8rem] leading-none font-bold text-[#2E2F35]">
          {spanFirst && (
            <span className="text-[#009387] font-bold mb-4 block">{span}</span>
          )}

          {heading}

          <br />

          {!spanFirst && (
            <span className="text-[#009387] font-bold mb-4 block">{span}</span>
          )}
        </h3>

        <p className="text-[#58595D] text-xl mt-8 mb-10 leading-relaxed">
          {generalP}
        </p>

        <div className="relative border-2 border-[#D1C7BE] rounded-2xl p-8">
          <div className="absolute -top-6 left-8 text-5xl text-orange-400 bg-[#FDF3EA] px-2">
            ❝
          </div>

          <p className="text-[1.25rem] font-[500] text-[#58595D] italic mb-6 leading-relaxed">
            {quateP}
          </p>

          <div className="flex justify-between items-end">
            <p className="text-[#A89B90] text-sm font-medium">{writer}</p>
            <img className="w-14" src={image} alt="image feedback"/>
          </div>
        </div>
      </div>
    </div>
  );
}
