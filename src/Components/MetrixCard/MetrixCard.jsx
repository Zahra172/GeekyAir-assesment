import React from "react";

export default function MetrixCard({ image, title, desc, bg, alt }) {
  return (
    <div
      className={`p-8 rounded-2xl shadow-sm ${bg} flex flex-col items-center text-center`}
    >
      <img
        src={image}
        className="w-[20.5rem] h-[13rem] object-contain mb-5"
        alt={alt}
      />

      <h3 className="text-xl font-bold text-[#2E2F35] mb-3">{title}</h3>

      <p className="text-[#58595D] leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
