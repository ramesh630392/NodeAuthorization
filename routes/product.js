import express, { request, response } from 'express';
import { Products } from '../models/products.js';
import { middleWare } from '../utils/jwtVerify.js';

const router = express.Router();



router.get("/", middleWare,  async(request, response)=>{
    try{
        const products = await Products.find({});
        return response.status(200).json({message: products});
    }catch(err){
        console.log(err);
        return response.status(500).json({message:"Server Error455"});
    };
});

//API based on id
router.get("/:id", middleWare, async(request, response)=>{
    const {id} = request.params;

    try{
        const product = await Products.findOne({_id: id})
        return response.status(200).json({message: product});
    }catch(err){
        return response.status(500).json({message: "Server Error"});
    }
});

//Related products API

router.get('/related', middleWare,   async(request, response)=>{
    const {category} = request.params;
    console.log(category);
    try{
        const products = await Products.find({});
        return response.status(200).json({message:products});
    }catch(err){
        console.log(err.message);
        return response.status(500).json({message:"Server Error 123"});
    };
});

////////////////
router.get("/all", middleWare, async(request, response)=>{
    try{
        const products = await Products.find({});
        return response.status(200).json({message: products});
    }catch(err){
        console.log(err);
        return response.status(500).json({message: "server error"})
    };
});

export default router;