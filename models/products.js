import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true,
        unique: true
    },
    brand:{
        type: String,
        required: true,
        
    },
    name:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    discount:{
        type: Number,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    
});

export const Products = mongoose.model('products', productSchema);
