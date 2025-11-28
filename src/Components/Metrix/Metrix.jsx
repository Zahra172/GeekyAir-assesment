import React from "react";
import MetrixCard from "../MetrixCard/MetrixCard";

export default function Metrix() {
  const features = [
    {
      image: "/src/assets/images/metrix1.png",
      title: "Plug-and-play with your stack",
      desc: "Native integrations provide seamless segmentation, automation & tracking. No clunky spreadsheets.",
      bg: "bg-[#FDF3EA]",
      alt:"metrix1"
    },
    {
      image: "/src/assets/images/metrix2.png",
      title: "Run campaigns on autopilot",
      desc: "Ink profits while you sleep: Just set it and forget it.",
      bg: "bg-[#E0F8F2]",
      alt:"metrix2"
    },
    {
      image: "/src/assets/images/metrix3.png",
      title: "Real-time ROI dashboard",
      desc: "Track performance of every postcard by customer or discount code. Your CFO will love it.",
      bg: "bg-[#EEECFF]",
      alt:"metrix3"
    },
    {
      image: "/src/assets/images/metrix4.png",
      title: "Deliver WOW handwritten cards",
      desc: "Our proprietary robots use real pens and ink for an unforgettable VIP touch.",
      bg: "bg-[#E0F8F2]",
      alt:"metrix4"
    },
    {
      image: "/src/assets/images/metrix5.png",
      title: "Predictable pricing",
      desc: "Unlike CPCs, postage rates don’t change based on competition or who you’re targeting.",
      bg: "bg-[#FDF3EA]",
      alt:"metrix5"
    },
    {
      image: "/src/assets/images//metrix6.png",
      title: "Complimentary concierge service",
      desc: "DTC is in our DNA. Our pros will build your strategy and custom designs using battle-tested best practices.",
      bg: "bg-[#F1F1F1]",
      alt:"metrix6"
    },
  ];

  return (
    <>
      <div className="">
        <h2 className="text-center  text-4xl font-bold text-[#2E2F35]">
          Everything your brand needs to
          <br />
          <span className="grace-title ">
            make your brand unforgettable
          </span>
        </h2>

        <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((item, i) => (
            <MetrixCard
              key={i}
              image={item.image}
              title={item.title}
              desc={item.desc}
              bg={item.bg}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </>
  );
}
