import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://json:json%401234@cluster0.gsw2tks.mongodb.net/JSON?retryWrites=true&w=majority");
        console.log("MongoDB is connected");
    } catch (error) {
        console.log("Error in Connecting MongoDb", error);
    }
}

export default connectDb;
