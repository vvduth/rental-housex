'use client'
import { GlobalContextType, MessageInterface, PropertyInterface } from '@/types'
import React, { useState } from 'react'
import markMessageAsRead from '@/app/actions/markMessageAsRead'
import {toast} from "react-toastify"
import deleteMessage from '@/app/actions/deleteMessage'
import { useGlobalContext } from '@/context/GlobalContext'
const MessageCard = ({message}: {
    message: MessageInterface
}) => {
const [isRead, setIsRead] = useState(message.read)
const [isdelete, setIsdelete] = useState(false)


const {setUnreadCount} = useGlobalContext() as GlobalContextType
const handleReadClick = async () =>{
  const read = await markMessageAsRead(message._id) as boolean;
  setIsRead(read)
  setUnreadCount((prevCount) => (read ? prevCount -1 : prevCount +1))
  toast.success(`marked as ${read ? 'read': 'unread'} successfully`)
}

const handleDeleteClick = async () => {
  await deleteMessage(message._id) 
  setIsdelete(true)
  setUnreadCount((prevCount) => (isRead ? prevCount -1 : prevCount +1))
  toast.success('Delete successfully')
}

if (isdelete) {
  return <p>Deleted Message</p>
}

  return (
    <div className='relative bg-white p-4 rounded-md shadow-md
     border border-gray-200'>
      {!isRead && (
        <div className='absolute top-2 right-2 bg-yellow-500
        text-white px-2 py-1 rounded-md'>New</div>
      )}
    <h2 className='text-xl mb-4'>
      <span className='font-bold'>Property Inquiry:</span>{' '}
      {(message.property as PropertyInterface).name}
    </h2>
    <p className='text-gray-700'>{message.body}</p>

    <ul className='mt-4'>
    <li>
        <strong>Sender name:</strong>{' '}
        <span className='font-semibold'>{message.name}</span>
      </li>
      <li>
        <strong>Reply Email:</strong>{' '}
        <a href={`mailto:${message.email}`} className='text-blue-500'>
          {message.email}
        </a>
      </li>
      <li>
        <strong>Reply Phone:</strong>{' '}
        <a href={`tel:${message.phone}`} className='text-blue-500'>
          {message.phone}
        </a>
      </li>
      <li>
        <strong>Received:</strong>{' '}
        {new Date(message.createdAt).toLocaleString()}
      </li>
    </ul>
    <button
     onClick={handleReadClick}
    className='mt-4 mr-3 bg-blue-500 text-white py-1 px-3 rounded-md'>
      {isRead ? 'Mark as new' : 'Mark as Read'}
    </button>
    <button
    onClick={handleDeleteClick}
    className='mt-4 bg-red-500 text-white py-1 px-3 rounded-md'>
      Delete
    </button>
  </div>
  )
}

export default MessageCard