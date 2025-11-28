import React from "react";
import MainBtn from "../Mainbtn/MainBtn";

export default function AddetionalSectionTwo() {
  return (
    <div className="bg-[#FF6D2C] text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Try PostPilot <br /> Risk-Free
          </h2>

          <p className="text-lg mt-4">
            No contracts. No commitments. Guaranteed results.*
          </p>
          {/* stars  */}
          <div className="flex flex-wrap gap-8  items-center mt-8">
            <MainBtn
              txt="Get Started "
              className=" !bg-white !text-black hover:!bg-[#FF6D2C] hover:!text-white transition-all duration-300"
            />

            <div>
              <div className="flex gap-2 mb-2">
                <i className="fa-solid fa-star text-[#FDC639]"></i>
                <i className="fa-solid fa-star text-[#FDC639]"></i>
                <i className="fa-solid fa-star text-[#FDC639]"></i>
                <i className="fa-solid fa-star text-[#FDC639]"></i>
                <i className="fa-solid fa-star text-[#FDC639]"></i>
              </div>
              <p>5.0 Shopify Rating</p>
            </div>
          </div>
          <p className="text-sm opacity-80 mt-8">
            *for qualified brands with over $1m annual Shopify revenue.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="public/images/postpilot.png"
            className="w-[360px] md:w-full rotate-[8deg]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
