import React from "react";
import { convertToSerializeableObject } from "@/utils/covertToObject";
import { getSessionUser } from "@/utils/getUserSession";
import connectDB from "@/config/db";
import profileDefault from "@/assets/images/profile.png";
import Image from "next/image";
import { Property } from "@/models/Property";
import ProfileProperties from "@/components/ProfileProperties";
import { PropertyInterface } from "@/types";
const ProfilePage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();
  if (!sessionUser) {
    throw new Error("user session not found");
  }
  const { userId } = sessionUser;

  if (!userId) {
    throw new Error("User id not found!");
  }

  const userProperty = await Property.find({owner: userId}).lean()
  const userPropertyObj = userProperty.map(convertToSerializeableObject) as PropertyInterface[]

  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border
            m-4 md:m-0"
        >
          <h1 className="text-3xl font-bold mb-4">Your profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                <Image
                  className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0"
                  src={sessionUser.user.image || profileDefault}
                  width={200}
                  height={200}
                  alt="User"
                />
              </div>
              <h2 className='text-2xl mb-4'>
                 <span className='font-bold block'>Name: </span>{' '}
                 {sessionUser.user.name}
               </h2>
               <h2 className='text-2xl'>
                 <span className='font-bold block'>Email: </span>{' '}
                 {sessionUser.user.email}
               </h2>
            </div>
            <div className="md:w-3/4 md:pl-5">
            <h2 className='text-xl font-semibold mb-4'>Your Listings</h2>
                {userPropertyObj.length === 0 ? (
                 <p>You have no property listings</p>
               ) : (
                 <ProfileProperties 
                    properties = {userPropertyObj}
                 />
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
