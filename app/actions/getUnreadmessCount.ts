"use server";

import connectDB from "@/config/db";
import { User } from "@/models/User";
import { UserInterface } from "@/types";
import { getSessionUser } from "@/utils/getUserSession";
import { revalidatePath } from "next/cache";
import Message from "@/models/Message";

async function getUnreadMessageCount() {
    await connectDB();
  
    const sessionUser = await getSessionUser();
  
    if (!sessionUser || !sessionUser.user) {
      throw new Error('User ID is required');
    }
  
    const { userId } = sessionUser;
  
   const count = await Message.countDocuments({
    recipient: userId, 
    read: false
   })

   return {count}
  }
  
  export default getUnreadMessageCount;