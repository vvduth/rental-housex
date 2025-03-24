import React from 'react'
import Link from 'next/link'
const HomePage = () => {
  return (
    <div className='text-2xl'>
      <h1 >welcome</h1>
      <Link href={'/properties'}>
      go to properties</Link>
    </div>
  )
}

export default HomePage