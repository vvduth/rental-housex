import React from "react";
import Link from "next/link";
import { PropertyInterface } from "@/types";
import { FaCheck, FaTimes } from "react-icons/fa";
const PropertyDetails = ({ property }: { property: PropertyInterface }) => {
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{property.type}</div>
        <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
          <p className="text-orange-700">
            {property.location.street}, {property.location.zipcode},{" "}
            {property.location.city}, {property.location.country}
          </p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Rates & Options
        </h3>
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Nightly</div>
            <div className="text-2xl text-blue-500 font-bold">
              {property.rates.nightly ? (
                `€${property.rates.nightly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-500" />
              )}
            </div>
          </div>
          <div className="flex  items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Weekly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.weekly ? (
                `€${property.rates.weekly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-500" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Monthly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.monthly ? (
                `€${property.rates.monthly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-500" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description & Details</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
          <p>
            <i className="fa-solid fa-bed"></i> {property.beds} {' '}
            <span className="hidden sm:inline">Beds</span>
          </p>
          <p>
            <i className="fa-solid fa-bath"></i> {property.baths} {' '}
            <span className="hidden sm:inline">Baths</span>
          </p>
          <p>
            <i className="fa-solid fa-ruler-combined"></i>
            {property.square_meter}{' '} <span className="hidden sm:inline">m<sup>2</sup></span>
          </p>
        </div>
        <p className="text-gray-500 mb-4">
          {property.description}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Amenities</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
         {property.amenities.map((amenity, index) => (
          <li
            key={index}
          >
            <FaCheck className="inline-block text-green-600 mr-2" /> {amenity}
          </li>
         ))}
        </ul>
      </div>
      {/* <!-- Map --> */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map"></div>
      </div>
    </main>
  );
};

export default PropertyDetails;
