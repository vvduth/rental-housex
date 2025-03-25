'use client'
import React from 'react'
import  ClipLoader  from 'react-spinners/ClipLoader'


const Loading = () => {
  return (
    <ClipLoader
        color='blue'
        size={150}
        aria-label='Loading spinner'
    />
  )
}

export default Loading