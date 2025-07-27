import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect('mongodb+srv://spiriiito:UDs4NEXXylXD4whS@cluster0.fyzxe.mongodb.net/project_wp', )
    .then(() => console.log("DB connected"))
}

