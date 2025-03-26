"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PropertyInterface } from "@/types";
import React from "react";

const ProfileProperties = ({
  properties: initialProperties,
}: {
  properties: PropertyInterface[];
}) => {
  const [properties, setProperties] = useState(initialProperties);
  return (
    <>
      {properties.map((property) => (
        <div className="mb-10" key={property._id}>
          <Link href={`/properties/${property._id}`}>
            <Image
              className="h-32 w-full pl-5 lg:pl-0 rounded-md object-cover"
              src={property.images[0]}
              alt=""
              width={500}
              height={100}
              priority={true}
            />
          </Link>
          <div className="mt-2 pl-5 lg:pl-0">
            <p className="text-lg font-semibold">{property.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProfileProperties;
