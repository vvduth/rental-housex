"use server";

import connectDB from "@/config/db";
import { User } from "@/models/User";
import { UserInterface } from "@/types";
import { getSessionUser } from "@/utils/getUserSession";
import { revalidatePath } from "next/cache";

export async function bookMarkProperty(propertyId: string) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    return { error: "User ID is required" };
  }

  const { userId } = sessionUser;

  const user = (await User.findById(userId)) as UserInterface;

  if (!user) {
    throw new Error("user not found");
  }

  let isBookmarked = user.bookmarks.includes(propertyId);

  let message;

  if (isBookmarked) {
    // If already bookmarked, remove it
    user.bookmarks.pull(propertyId);
    message = "Bookmark removed successfully";
    isBookmarked = false;
  } else {
    // If not bookmarked, add it
    user.bookmarks.push(propertyId);
    message = "Bookmark added successfully";
    isBookmarked = true;
  }

  console.log(message);

  await user.save();
  revalidatePath("/properties/saved", "page");

  return { message, isBookmarked };
}

export async function checkBookMarkStatus(propertyId: string) {
    await connectDB();
 
    const sessionUser = await getSessionUser();
  
    if (!sessionUser || !sessionUser.userId) {
      return { error: 'User ID is required' };
    }
  
    const { userId } = sessionUser;
  
    // Find user in database
    const user = await User.findById(userId);
  
    // Check if property is bookmarked
    let isBookmarked = user.bookmarks.includes(propertyId);
  
    return { isBookmarked };
}
