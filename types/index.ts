import mongoose, { Document } from "mongoose";

export interface PropertyInterface extends mongoose.Document {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
  };
  beds: number;
  baths: number;
  square_meter: number;
  amenities: string[];
  rates: {
    nightly?: number;
    weekly?: number;
    monthly?: number;
  };
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserInterface extends mongoose.Document {
  email: string;
  username: string;
  image: string;
  bookmarks: string[] | any
}


export interface MessageInterface extends mongoose.Document {
  sender: string, 
  recipient: string, 
  property: string, 
  name: string, 
  email: string, 
  phone: string ,
  body: string, 
  read: boolean, 
  
}