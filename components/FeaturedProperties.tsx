import React from "react";
import connectDB from "@/config/db";
import { Property } from "@/models/Property";
import FeatureCard from "./FeatureCard";
import { PropertyInterface } from "@/types";
const FeaturedProperties = async () => {
  await connectDB();

  const properties = await Property.find({
    is_featured: true,
  }).lean();

  if (!properties || properties.length === 0) {
    return null;
  }
  

  return (
    <section className="bg-blue-50 pt-6 px-4 pb-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Featured properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.map((property: PropertyInterface) => (
            <FeatureCard 
            key={property._id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
