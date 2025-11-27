import React from 'react'
import Hero from '../Hero/Hero'
import Brands from '../Brands/Brands'

export default function Home() {
  return (
    <>
    <div className='w-screen bg-[#E0F8F2] relative left-1/2 right-1/2 mx-[-50vw] ps-16 pb-14'>

      <Hero/>
    </div>
    <div className='py-28 text-center'>
      <Brands/>
    </div>
    </>
  )
}
