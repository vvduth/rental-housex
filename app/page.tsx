import React from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import InfoBoxes from '@/components/InfoBoxes'
import HomeProperty from '@/components/HomeProperty'
import connectDB from '@/config/db'
const HomePage = () => {
  
  return (
    <div className='text-2xl'>
      <Hero/>
      <InfoBoxes />
      <HomeProperty/>
    </div>
  )
}

export default HomePage