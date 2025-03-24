import React from 'react'

const PropertyPage = ({params}: {
  params: {
    id: string
  }
}) => {
  return (
    <div>PropertyPage {params.id}</div>
  )
}

export default PropertyPage