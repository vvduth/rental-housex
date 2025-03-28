"use server";

import connectDB from "@/config/db";
import { User } from "@/models/User";
import { UserInterface } from "@/types";
import { getSessionUser } from "@/utils/getUserSession";
import { revalidatePath } from "next/cache";
import Message from "@/models/Message";

async function markMessageAsRead(messageId: string) {
    await connectDB();
  
    const sessionUser = await getSessionUser();
  
    if (!sessionUser || !sessionUser.user) {
      throw new Error('User ID is required');
    }
  
    const { userId } = sessionUser;
  
    const message = await Message.findById(messageId);
  
    if (!message) throw new Error('Message not found');
  
    // Verify ownership
    if (message.recipient.toString() !== userId) {
      return new Response('Unauthorized', { status: 401 });
    }
  
    message.read = !message.read;
  
    revalidatePath('/messages', 'page');
  
    await message.save();
  
    return message.read;
  }
  
  export default markMessageAsRead;