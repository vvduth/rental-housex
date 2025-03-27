import React from 'react'
import connectDB from '@/config/db';
import { User } from '@/models/User';
import { getSessionUser } from '@/utils/getUserSession';
import { PropertyInterface, UserInterface } from '@/types';
import PropertyCard from '@/components/PropertyCard';
const PropertiesSavedPage = async () => {
    await connectDB();
 
   const sessionUser = await getSessionUser();
 
   if (!sessionUser) {
       throw new Error('User session not found');
   }
   const { userId } = sessionUser;
 
   // NOTE: here we can make one database query by using Model.populate
   const { bookmarks } = await User.findById(userId)
     .populate('bookmarks')
     .lean() as unknown as UserInterface;
 
  return (
    <section className='px-4 py-6'>
    <div className='container-xl lg:container m-auto px-4 py-6'>
      <h1 className='text-2xl mb-4'>Saved Properties</h1>
      {bookmarks.length === 0 ? (
        <p>No saved properties</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {bookmarks.map((property : PropertyInterface) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      )}
    </div>
  </section>
  )
}

export default PropertiesSavedPage