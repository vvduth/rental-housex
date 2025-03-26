"use server";

import connectDB from "@/config/db";
import { getSessionUser } from "@/utils/getUserSession";
import { Property } from "@/models/Property";

async function addProperty(formData: FormData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User iD is required");
  }

  const { userId } = sessionUser;

  const amenities = formData.getAll("amenities");
  const images = formData
    .getAll("images")
    .filter(
      (image): image is File => image instanceof File && image.name !== ""
    ) // Filter out empty names
    .map((image) => image.name); // Extract only the names

  // Create the propertyData object with embedded seller_info
  const propertyData = {
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      state: formData.get("location.state"),
      zipcode: formData.get("location.zipcode"),
      country: formData.get('location.country')
    },
    beds: formData.get("beds"),
    baths: formData.get("baths"),

    square_meter: formData.get("quare_meter"),
    amenities,
    rates: {
      weekly: formData.get("rates.weekly"),
      monthly: formData.get("rates.monthly"),
      nightly: formData.get("rates.nightly."),
    },
    seller_info: {
      name: formData.get("seller_info.name"),
      email: formData.get("seller_info.email"),
      phone: formData.get("seller_info.phone"),
    },
    images,
    owner: userId,
  };

  const newProperty = new Property(propertyData);
  await newProperty.save();
}

export default addProperty;
