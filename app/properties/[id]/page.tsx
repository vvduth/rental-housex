import React from "react";
import connectDB from "@/config/db";
import { Property } from "@/models/Property";
import { PropertyInterface } from "@/types";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PropertyImages from "@/components/PropertyImages";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButton from "@/components/ShareButton";
import ContactForm from "@/components/ContactForm";
import { convertToSerializeableObject } from "@/utils/covertToObject";
const PropertyPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  await connectDB();
  const {id} = await params
  const propertyDoc = (await Property.findById(
    id
  ).lean()) as unknown as PropertyInterface;
  const property = convertToSerializeableObject(propertyDoc) as PropertyInterface;
  if (property === null) {
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>
        Property Not Found
      </h1>
    );
  }
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
          {/* Prop info */}
          <PropertyDetails 
            property= {property}
          />
          {/* sidebar */}
          <aside className="space-y-4">
            <BookmarkButton property={property} />
            <ShareButton property={property}/>
            <ContactForm property={property}/>
          </aside>
          </div>
        </div>
      </section>
      <PropertyImages
      images={property.images} />
    </>
  );
};

export default PropertyPage;
