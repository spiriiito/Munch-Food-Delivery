import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import multer from "multer";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


// app config

const app = express();
const port = 4000;

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());

// DB connection

connectDB();

// API endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API working");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});

// MongoDB User Password: UDs4NEXXylXD4whS

// mongodb+srv://spiriiito:UDs4NEXXylXD4whS@cluster0.fyzxe.mongodb.net/?
//retryWrites=true&w=majority&appName=Cluster0