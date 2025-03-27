"use server";
import connectDB from "@/config/db";
import { Property } from "@/models/Property";
import { getSessionUser } from "@/utils/getUserSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateProperty(propertyId: string, formData: FormData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser) {
    throw new Error("session not found");
  }
  const { userId } = sessionUser;

  if (!userId) {
    throw new Error("user id not found");
  }

  const existingProperty = await Property.findById(propertyId);

  // Verify ownership
  if (existingProperty.owner.toString() !== userId) {
    throw new Error("Current user does not own this property.");
  }

  const propertyData = {
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      state: formData.get("location.state"),
      zipcode: formData.get("location.zipcode"),
      country: formData.get("location.country"),
    },
    beds: formData.get("beds"),
    baths: formData.get("baths"),

    square_meter: formData.get("square_meter"),
    amenities: formData.getAll('amenities'),
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
    owner: userId,
  };

  console.log('zipcode: ', typeof(propertyData.location.zipcode))
  const updatedProperty = await Property.findByIdAndUpdate(
    propertyId,
    propertyData
  );

  revalidatePath("/", "layout");

  redirect(`/properties/${updatedProperty._id}`);
}


