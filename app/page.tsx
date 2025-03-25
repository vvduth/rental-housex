import React from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import InfoBoxes from '@/components/InfoBoxes'
const HomePage = () => {
  return (
    <div className='text-2xl'>
      <Hero/>
      <InfoBoxes />
    </div>
  )
}

export default HomePage