import React from "react";
import connectDB from "@/config/db";
import "@/models/Property";
import { getSessionUser } from "@/utils/getUserSession";
import { convertToSerializeableObject } from "@/utils/covertToObject";
import Message from "@/models/Message";
import { MessageInterface } from "@/types";
import MessageCard from "@/components/MessageCard";
const MessagesPage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();
  if (!sessionUser) {
    throw new Error("session not found");
  }
  const { userId } = sessionUser;

  const readMessages = await Message.find({
    recipient: userId,
    read: true,
  })
    .sort({ createdAt: -1 }) // Sort read messages in asc order
    .populate("sender", "username")
    .populate("property", "name")
    .lean();

  const unreadMessages = await Message.find({
    recipient: userId,
    read: false,
  })
    .sort({ createdAt: -1 }) // Sort read messages in asc order
    .populate("sender", "username")
    .populate("property", "name")
    .lean();

  const messages = [...unreadMessages, ...readMessages].map((mesDoc) => {
    const message = convertToSerializeableObject(mesDoc) as MessageInterface;
    message.sender = convertToSerializeableObject(mesDoc.sender);
    message.property = convertToSerializeableObject(mesDoc.property);
    return message;
  });
  return (
    <section className="bg-blue-50">
        <div className="container m-auto py-24 max-w-6xl">
            <div className="bg-white px-6 py-8 mb-4
            shadow-md rounded-md border m-4 md:m-2">
                <h1 className="text-3xl font-bold mb-4">
                    Your messages
                </h1>
                <div className="space-y-4">
                {messages.length === 0 ? (
                    <p>You have no messages</p>
                )  : (
                    messages.map((message:MessageInterface) => (
                        <MessageCard 
                        key={message._id}
                         message={message}
                        />
                    ))
                )}
            </div>
            </div>
            
        </div>
    </section>
  );
};

export default MessagesPage;
