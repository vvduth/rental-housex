import React from "react";
import PropertyCard from "@/components/PropertyCard";
import connectDB from "@/config/db";
import { Property } from "@/models/Property";
import Pagination from "@/components/Pagination";
import PropertySearchForm from "@/components/PropertySearchForm";


type SearchParams = Promise<{ page: 1, pageSize: 2}>


const PropertiesPage = async (props: {
  searchParams: SearchParams;
}) => {
  await connectDB();
  const searchParams = await props.searchParams;
  const page = searchParams.page
  const pageSize = searchParams.pageSize
  const skip = (page-1) * pageSize ;
  const total = await Property.countDocuments({}) as unknown as number
  const properties = await Property.find({}).skip(skip).limit(pageSize);
console.log(total)
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <PropertySearchForm />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
          <Pagination 
          page={page}
          pageSize={pageSize}
          totalItems={total}/>
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
