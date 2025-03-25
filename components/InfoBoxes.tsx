import Link from "next/link";
import React from "react";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">For renters</h2>
            <p className="mt-2 mb-4">
              Find your fav properties. Bookmark them and contact the owners.
            </p>
            <Link
              href={"/properties"}
              className="inline-block bg-black text-white
            rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Show me houses
            </Link>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">For property owners</h2>
          <p className="mt-2 mb-4">
            List your properties and reach potential clients/tenant. Rent as
            short term/long term
          </p>
          <Link
            href={"/properties/add"}
            className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2
          hover:bg-blue-600"
          >
            Add Properties
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
