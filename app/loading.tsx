'use client'
import React from 'react'
import  ClipLoader  from 'react-spinners/ClipLoader'

const override = {
  display: 'block',
  margin: '100px auto',
};

const Loading = () => {
  return (
    <ClipLoader
        color='blue'
        size={150}
        cssOverride={override}
        aria-label='Loading spinner'
    />
  )
}

export default Loading