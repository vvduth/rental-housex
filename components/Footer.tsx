import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer
     className='bg-gray-200 py-4 mt-auto'
    >
      <div className='container mx-auto flex flex-col
      md:flex-row items-center justify-between px-4'>
        <div className='mb-4 md:mb-0'>
          <Image
            src={'/images/logo.png'}
            alt='Logo'
            className='h-8 w-auto'
            width={30}
            height={30}
          />
        </div>
        <div className='flex flex-wrap justify-center
        md:justify-start mb-4 md:mb-0'>
          <ul className='flex space-x-4'>
            <li><Link href={'/properties'}>
            Propterties</Link></li>
            <li>
              <Link
              href={'/'}>
              Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-sm text-gray-500 mt-2
          md:mt-0'>
            &copy; {new Date().getFullYear()} Dukeroo
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer