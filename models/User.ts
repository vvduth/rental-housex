import { UserInterface } from "@/types";
import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String, 
        unique: [true, 'email already exists'],
        required: [true, 'email is required']
    },
    username: {
        type: String, 
        required: [true, 'username is required']
    }, 
    image: {
        type: String
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Property'
        }
    ]
}, {timestamps: true})

export const User = models.User || model<UserInterface>('User', userSchema)