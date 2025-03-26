"use server";
import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/db";
import { Property } from "@/models/Property";
import { PropertyInterface } from "@/types";
import { getSessionUser } from "@/utils/getUserSession";

import { revalidatePath } from "next/cache";

async function deleteProperty(propertyId: string) {
  const sessionUser = await getSessionUser();

  // check for user sessin
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  await connectDB();

  const property = await Property.findById(propertyId) as PropertyInterface;

  if (!property) throw new Error("Property not found");

  if (property.owner.toString() !== userId) {
    throw new Error('Unauthorized! Bro you dont own this.')
  }
   // extract public id's from image url in DB
   const publicIds = property.images.map((imageUrl) => {
    const parts = imageUrl.split('/');
    
    const lastPart = parts.at(-1);
    if (!lastPart) {return };
    const splitParts = lastPart.split('.');
    if (!splitParts.at(0)) {return};
    return splitParts.at(0);
  });

  // Delete images from Cloudinary
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy('rental-housex/' + publicId);
    }
  }

  // Proceed with property deletion
  await property.deleteOne();

  revalidatePath('/', 'layout');
}

export default deleteProperty