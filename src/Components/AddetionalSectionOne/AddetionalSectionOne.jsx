import React from "react";
import MainBtn from "../Mainbtn/MainBtn";
import BrandsRow from "../BrandsRow/BrandsRow";

export default function AddetionalSectionOne() {
  return (
    <div className="py-24 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex flex-col gap-7 justify-center items-center">
          <img
          src="/public/images/obviOffer.png"
            
            className="w-[420px] md:w-[38rem] "
            alt="website offer"
          />
        </div>

        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#2E2F35]">
            How <span className="grace-title ">Obvi</span> Drives <br />
            Profits with Hands-Off <br />
            Postcard Campaigns
          </h2>

          <p className="text-[#58595D] text-lg mt-6 leading-relaxed">
            The 🧪 supplements brand wanted to offset high ad costs and reach
            dormant customers. They scored 1000%+ ROIs.
          </p>

          <div className="flex flex-wrap gap-12 mt-10">
            <div>
              <p className="text-3xl font-bold">1468%</p>
              <p className="text-sm text-gray-500">ROI</p>
            </div>

            <div>
              <p className="text-3xl font-bold">8.59%</p>
              <p className="text-sm text-gray-500">Conversion Rate</p>
            </div>

            <div>
              <p className="text-3xl font-bold">$73,457</p>
              <p className="text-sm text-gray-500">Sales Generated</p>
            </div>
          </div>

          <MainBtn
            txt="Read Case study"
            className="mt-10 !bg-white !text-black hover:!bg-[#FF6D2C] hover:!text-white transition-all duration-300"
          />

          <div className="flex flex-nowrap items-center  gap-6 mt-10  ">
            <BrandsRow />
          </div>
        </div>
      </div>
    </div>
  );
}
