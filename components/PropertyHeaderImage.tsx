import React from 'react'
import Image from 'next/image'
const PropertyHeaderImage = ({image}: {image: string}) => {
  const imgSrcDisplay = () => {

    if (image.startsWith('http')) {
      return image
    } else {
      return `/images/properties/${image}`
    }
  }
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
          
            src={imgSrcDisplay()}
            alt=""
            className="object-cover h-[400px] w-full"
            width="1800"
            height={500}
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}

export default PropertyHeaderImage