import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected"))
    .catch((err) => {
        console.error("MongoDB connection error: ", err);
        process.exit(1);
    });
};

