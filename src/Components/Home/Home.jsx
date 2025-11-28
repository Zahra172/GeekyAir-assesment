import React from 'react'
import Hero from '../Hero/Hero'
import Brands from '../Brands/Brands'
import DirectMail from '../DirectMail/DirectMail'
import Feedback from '../Feedback/Feedback'
import AddetionalSectionOne from '../AddetionalSectionOne/AddetionalSectionOne'
import AddetionalSectionTwo from '../AddetionalSectionTwo/AddetionalSectionTwo'
import LatestTrends from '../LatestTrends/LatestTrends'

export default function Home() {
  return (
    <>
    <div className=' bg-[#E0F8F2]  ps-20 '>

      <Hero/>
    </div>
    <div className='py-28 px-8 text-center'>
      <Brands/>
    </div>
    <div className='bg-[#E0F8F2] py-28 '>
      <DirectMail/>
    </div>
    <div className='bg-[#FDF3EA] py-28 px-20'>
      <Feedback/>
    </div>
    <div className='py-28 px-20 bg-[#EEECFF]'>
      <AddetionalSectionOne/>
    </div>
    <div className=' px-20 bg-[#FF6D2C]'>
      <AddetionalSectionTwo/>
    </div>
    <div className=' px-20 py-28 bg-[#EEECFF] text-center mx-auto'>
      <LatestTrends/>
    </div>
    </>
  )
}
