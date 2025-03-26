"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PropertyInterface } from "@/types";
import React from "react";
import deleteProperty from "@/app/actions/deleteProperty";
const ProfileProperties = ({
  properties: initialProperties,
}: {
  properties: PropertyInterface[];
}) => {
  const [properties, setProperties] = useState(initialProperties);

  const handleDeleteProperty = async (propertyId:string) => {
    const confirmed = window.confirm(
        'Are you sure you want to delete this property?'
      );
  
      if (!confirmed) return;
  
      const deletePropertyById = deleteProperty.bind(null, propertyId);
  
      await deletePropertyById();
  
      const updatedProperties = properties.filter(
        (property) => property._id !== propertyId
      );
  
      setProperties(updatedProperties);
  }
  return (
    <>
      {properties.map((property) => (
        <div className="mb-10" key={property._id}>
          <Link href={`/properties/${property._id}`}>
            <Image
              className="h-48 w-full md:w-96 pl-5 lg:pl-0 rounded-md object-cover"
              src={property.images[0]}
              alt="prop for rent"
              width={500}
              height={100}
              priority={true}
            />
          </Link>
          <div className="mt-2 pl-5 lg:pl-0">
            <p className="text-lg font-semibold">{property.name}</p>
            <p className="text-gray-600">
              Address: {property.location.street}, {property.location.city},{" "}
              {property.location.country}
            </p>
          </div>
          <div className="mt-2 pl-5 lg:pl-0">
            <Link
              href={`/properties/${property._id}/edit`}
              className="bg-blue-500 text-white px-3 py-2
             rounded-md mr-2 hover:bg-blue-600"
            >
              Edit
            </Link>
            <button
              className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
              type="button"
              onClick={() => handleDeleteProperty(property._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProfileProperties;
