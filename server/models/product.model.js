const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title: { type: String, 
    required: [true, "Title is required"],
    minlength: [2, "Title must be at least 2 characters long."]
    },

    price: { type: Number, // Boolean, Array
    required: [true, "Price is required."],
    minength: [0.01, "Price must be a positive number."],
    // max: [100000.00, "Price must be less than $100,000.00"]
    },
    
    discription: { type: String, 
    required: [true, "Discription is required."],
    minlength: [2, "Discription must be at least 2 characters long."]
    },

}, { timestamps: true })

module.exports.Product = mongoose.model('Product', ProductSchema);