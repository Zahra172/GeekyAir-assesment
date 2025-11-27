import React from "react";

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center ">
  {/* left 3/5 */}
  <div className="lg:col-span-3">
    <h1 className="text-[5.25rem] font-bold leading-tight">
      Meet your <span className="text-[#009387] ">Favourite</span> new (old) marketing channel.
    </h1>

    <p className="text-[#58595D] text-lg mt-4">
      Remarkable results. Easier than email. Postcard marketing reinvented
      for modern ecommerce.
    </p>

    <div className="flex flex-wrap gap-8 items-center mt-8">
      <button className="text-white px-16 shadow-[6px_6px_0px_#2E2F35] border-2 border-[#2E2F35] rounded-[15px] py-[1.5rem] bg-[#FF6D2C]">
        Try it Risk-free
      </button>

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
  </div>

  {/* right 2/5 */}
  <div className="lg:col-span-2 relative w-full overflow-hidden">
  <img
    src="/src/assets/images/hero1.png"
    alt="hero image"
    className="w-full lg:w-[550px] xl:w-[650px]"
  />

  <img
    src="/src/assets/images/hero2.png"
    alt="hero image"
    className="absolute top-0 right-0 w-[18rem] sm:w-[22rem] md:w-[26rem] lg:w-[30rem]"
  />
</div>
</div>

    </>
  );
}
