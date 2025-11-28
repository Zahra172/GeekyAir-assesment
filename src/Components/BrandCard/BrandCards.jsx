import React from 'react'

export default function BrandCards({ image1, image2  }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <img
        src={image1}
        alt="brand 1"
        className="object-contain w-96 h-auto"  
      />
      <img
        src={image2}
        alt="brand 2"
        className="w-20 h-auto"
      />
    </div>
  );
}
