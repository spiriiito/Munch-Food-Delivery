import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Add food item

const addFood = async (req, res) => {
    try {
        console.log("REQ FILE:", req.file);
        console.log("REQ BODY:", req.body);

        // Check if file is present
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        let image_filename = `${req.file.filename}`;  // Get filename from the uploaded file

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();
        return res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log("Error:", error);  
        return res.status(500).json({ success: false, message: "Error", error: error.message });
    }
}

// All food list

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

// Remove food item

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {} );

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food removed"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

export { addFood, listFood, removeFood };