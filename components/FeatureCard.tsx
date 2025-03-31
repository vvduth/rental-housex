import { PropertyInterface } from "@/types";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { imgSrcDisplay } from "@/utils/imgDisplay";
import { FaBath, FaBed, FaMapMarker, FaMoneyBill, FaRulerCombined } from "react-icons/fa";
const FeatureCard = ({ property }: { property: PropertyInterface }) => {
  const getrateDisplay = () => {
    const { rates } = property;
    if (rates.monthly) {
      return `€${rates.monthly.toLocaleString()}/month`;
    } else if (rates.weekly) {
      return `€${rates.weekly.toLocaleString()}/week`;
    }
    if (rates.nightly) {
      return `€${rates.nightly.toLocaleString()}/night`;
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-md relative flex flex-col md:flex-row">
      <Image
        src={imgSrcDisplay(property.images[0])}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:w-2/5"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold">{property.name}</h3>
        <div className="text-gray-600 mb-4">{property.type}</div>
        <h3 className="absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {getrateDisplay()}
        </h3>
        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline-block mr-2" /> {property.beds}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline-block mr-2" /> {property.beds}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline-block mr-2" /> {property.beds}
            {property.square_meter}{" "}
            <span className="md:hidden lg:inline">sq meter</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className="inline-block mr-2" /> Nightly
            </p>
          )}
          {property.rates.weekly && (
            <p>
              <FaMoneyBill className="inline-block mr-2" /> Weekly
            </p>
          )}
          {property.rates.monthly && (
            <p>
              <FaMoneyBill className="inline-block mr-2" /> Monthly
            </p>
          )}
        </div>

        <div className="border border-gray-200 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="text-orange-700" />
            <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
            <span className="text-orange-700 text-sm"> 
                {property.location.city}, {property.location.country}
            </span>
          </div>
          <a
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
