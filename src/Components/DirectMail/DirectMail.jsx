import React from "react";

export default function DirectMail() {
  return (
    <div className="text-center  ">
      <h2 className="pb-14 text-[4rem]  font-bold text-[#2E2F35]">
        Why use direct mail?
        <br /> it works <span className="text-[#009387]">works</span> like crazy
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-0  place-items-center">
        <div className="flex flex-col items-center ">
          <h3 className="text-[#2E2F35] font-bold text-[4rem]">82x</h3>
          <p className="text-sm text-[#58595D]">
            Higher response rate than email & digital
          </p>
        </div>

        <div className="flex flex-col items-center ">
          <img src="/src/assets/images/whyMail.png" alt="why use mail" className="w-56"/>
          <p className="text-sm text-[#58595D]">
            Your messages get read
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-[#2E2F35] font-bold text-[4rem]">117Days</h3>
          <p className="text-sm text-[#58595D]">
            Lifespan of a postcard vs.<br/> seconds for email or SMS
          </p>
        </div>

      </div>
    </div>
  );
}
