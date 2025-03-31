import React from "react";
import connectDB from "@/config/db";
import { Property } from "@/models/Property";
import { convertToSerializeableObject } from "@/utils/covertToObject";
import PropertyEditForm from "@/components/PropertyEditForm";
import { PropertyInterface } from "@/types";
const EditPropertiesPage = async ({
  params,
}: {
  params: {
    id: Promise<any>;
  };
}) => {
  await connectDB();
  const { id } = await params;
  const propertyToEdit = await Property.findById(id).lean();
  const property = convertToSerializeableObject(propertyToEdit)  as PropertyInterface
  if (!property) {
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>
        Property Not Found
      </h1>
    );
  }
  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <PropertyEditForm 
            property={property}
          />
        </div>
      </div>
    </section>
  );
};

export default EditPropertiesPage;
