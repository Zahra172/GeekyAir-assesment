import React from "react";

export default function LatestTrends() {
  const trends = [
    {
      src: "/images/trend1.png",
      paragraph: "3 Low-Cost Campaigns You Must Run to Win BFCM",
      alt: "trend1",
    },
    {
      src: "/images/trend2.jpg",
      paragraph: "Postcard Marketing: The Definitive Guide to High ROI [2022]",
      alt: "trend2",
    },
    {
      src: "/images/trend3.jpg",
      paragraph: "The Ultimate Guide to Thank You Notes for Ecommerce",
      alt: "trend3",
    },
  ];
  return (
    <>
      <h2 className="pb-20 text-4xl md:text-5xl font-bold leading-tight text-[#2E2F35]">
        Latest trends & <span className="grace-title ">insights</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {trends.map((card, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={card.src}
        alt={card.alt}
        className=" w-[30rem] h-[17rem] object-cover rounded-md"
      />
      <p className="text-[#58595D] text-lg mt-6 leading-relaxed">
        {card.paragraph}
      </p>
    </div>
  ))}
</div>

    </>
  );
}
