const { Schema, model } = require("mongoose");

const Category = new Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true    
    },
    logo: { 
        type: String, 
        required: true 
    }
}, { 
    versionKey: false, 
    timestamps: true 
});

const CategorySchema = model("category", Category)
module.exports = CategorySchema