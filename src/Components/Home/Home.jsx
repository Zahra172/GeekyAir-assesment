import React from 'react'
import Hero from '../Hero/Hero'
import Brands from '../Brands/Brands'
import DirectMail from '../DirectMail/DirectMail'

export default function Home() {
  return (
    <>
    <div className=' bg-[#E0F8F2]  ps-16 '>

      <Hero/>
    </div>
    <div className='py-28 px-8 text-center'>
      <Brands/>
    </div>
    <div className='bg-[#E0F8F2] py-28 '>
      <DirectMail/>
    </div>
    </>
  )
}
