import React from "react";
import Link from "next/link";
import connectDB from "@/config/db";
import { Property } from "@/models/Property";
import { convertToSerializeableObject } from "@/utils/covertToObject";
import PropertyCard from "@/components/PropertyCard";
import PropertySearchForm from "@/components/PropertySearchForm";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { PropertyInterface } from "@/types";

type SearchParams = Promise<{ location: string, propertyType: string}>

const SearchResultPage = async (props: {
  searchParams: SearchParams;
}) => {
  await connectDB();
  const searchParams = await  props.searchParams
  const location = searchParams.location
  const propertyType = searchParams.propertyType
  const locationReg = new RegExp(location, "i");
  // Match location pattern against database fields
  let query: {
    $or: (
      | { name: RegExp }
      | { description: RegExp }
      | { "location.street": RegExp }
      | { "location.city": RegExp }
      | { "location.state": RegExp }
      | { "location.zipcode": RegExp }
    )[];
    type?: RegExp;
  } = {
    $or: [
      { name: locationReg },
      { description: locationReg },
      { "location.street": locationReg },
      { "location.city": locationReg },
      { "location.state": locationReg },
      { "location.zipcode": locationReg },
    ],
  };

  if (propertyType && propertyType !== "All") {
    const typePattern = new RegExp(propertyType, "i");
    query.type = typePattern;
  }
  const propertiesQueryResults = await Property.find(query).lean();
  const properties = convertToSerializeableObject(
    propertiesQueryResults
  ) as PropertyInterface[];
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div
          className="max-w-7xl mx-auto px-4 flex flex-col
        items-start sm:px-6 lg:px-8"
        >
          <PropertySearchForm />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <Link
            href={"/properties"}
            className="flex items-center text-blue-500 hover:underline mb-3"
          >
            <FaArrowAltCircleLeft className="mr-2 mb-1" />
            Back to properties
          </Link>
          <h1 className="text-2xl mb-4 font-semibold">Search Results</h1>
          {properties.length === 0 ? (
            <p>No search results found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchResultPage;
