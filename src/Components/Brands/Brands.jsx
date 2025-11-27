import React from "react";

import BrandCards from "../BrandCard/BrandCards";

export default function Brands() {
  return (
    <div>
      <h2 className="pb-14 text-[4rem] font-bold text-[#2E2F35]">
        Trusted by thousands
        <br /> of top DTC <span className="text-[#009387]">brands.</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-14 mt-6">
        <BrandCards
          image1="/src/assets/images/runGum_image.png " 
          image2="/src/assets/images/rungum_text.png"
          
        />
        <BrandCards
          image1="/src/assets/images/bearBrand_image.png" 
          image2="/src/assets/images/bearBrand_text.png"
         
        />
        <BrandCards
          image1="/src/assets/images/promix_image.png" 
          image2="/src/assets/images/promix_text.png"
          
        />
        <BrandCards
          image1="/src/assets/images/scotch_image.png" 
          image2="/src/assets/images/scotch_txt.png"
          className="w-4 h-4"
          w="60px"
          h="32px"
        />
      </div>
    </div>
  );
}
