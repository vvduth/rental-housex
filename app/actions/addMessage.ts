"use server";
import connectDB from "@/config/db";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getUserSession";
import { revalidatePath } from "next/cache";

type FormState = {
    submitted?: boolean,
    error?: string | any
}
export async function addMessage(prevState: FormState | {}, formData: FormData) {
    await connectDB()

    const sessionUser = await getSessionUser()

    if(!sessionUser || !sessionUser.user) {
        return {error: 'you musr be logged in to send a message'}
    }

    const {user} = sessionUser

    const recipient = formData.get('recipient')

    if (user.id === recipient) {
        return { error: 'You can not send a message to yourself' };
      }

    const newMessage = new Message({
        sender: user.id,
     recipient,
     property: formData.get('property'),
     name: formData.get('name'),
     email: formData.get('email'),
     phone: formData.get('phone'),
     body: formData.get('message'),
    })

    await newMessage.save();
 
   return { submitted: true };
}