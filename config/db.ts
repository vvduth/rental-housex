import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // if the db is already connected dont connect again
    if (connected) {
        console.log('mongo is already connected')
    }

    try {
        await mongoose.connect(process.env.MONGO_URI!)
        connected = true
    } catch (error) {
        console.log(error)
    }
}

export default connectDB