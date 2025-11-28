import React from "react";

import BrandCards from "../BrandCard/BrandCards";

export default function Brands() {
  return (
    <div>
      <h2 className="pb-14 text-[4rem] font-bold text-[#2E2F35]">
        Trusted by thousands
        <br /> of top DTC <span className="grace-title ">brands.</span>
      </h2>

      <div className="grid grid-cols-2 gap-14 mt-6 overflow-hidden  max-h-[400px]">
        
        <div className="scroll-up space-y-6">
          <BrandCards
            image1="/public/images/runGum_image.png"
            image2="/public/images/rungum_text.png"
          />

          <BrandCards
            image1="/public/images/bearBrand_image.png"
            image2="/public/images/bearBrand_text.png"
          />
          <BrandCards
            image1="/public/images/promix_image.png"
            image2="/public/images/promix_text.png"
          />

          <BrandCards
            image1="/public/images/scotch_image.png"
            image2="/public/images/scotch_txt.png"
            
          />
        </div>

       
        <div className="scroll-down space-y-6">
          <BrandCards
            image1="/public/images/promix_image.png"
            image2="/public/images/promix_text.png"
          />

          <BrandCards
            image1="/public/images/scotch_image.png"
            image2="/public/images/scotch_txt.png"
            
          />
          <BrandCards
            image1="/public/images/runGum_image.png"
            image2="/public/images/rungum_text.png"
          />

          <BrandCards
            image1="/public/images/bearBrand_image.png"
            image2="/public/images/bearBrand_text.png"
          />
        </div>
      </div>
    </div>
  );
}
