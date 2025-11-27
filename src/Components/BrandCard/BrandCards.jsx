import React from 'react'

export default function BrandCards({ image1, image2 ,w,h  }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <img src={image1} alt="brand 1" className=" object-contain" />
      <img src={image2} alt="brand 2" className=" w-40" style={{ width: w, height: h }} />
    </div>
  );
}
