import { PropertyInterface } from "@/types";
import { Schema, model, models } from "mongoose";

const PropertySchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    name:  {
        type: String, 
        required: true
    },
    description: {
        type: String
    },
    location: {
        street: {
          type: String,
        },
        city: {
          type: String,
        },
        state: {
          type: String,
        },
        zipcode: {
          type: String,
        },
        country: {
            type: String
        }
      },
    beds: {
        type: Number,
        required: true
    },
    baths: {
        type: Number,
        required: true
    },
    square_meter: {
        type: Number,
        required: true
    },
    amenities: [
        {
            type: String
        }
    ],
    rates: {
        nightly: Number, 
        weekly: Number,
        monthly:Number
    },
    seller_info: {
        name: String,
        email: String, 
        phone: String
    },
    images: [
        {
            type: String
        }
    ],
    is_featured: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const Property =  models.Property || model<PropertyInterface>("Property", PropertySchema);
