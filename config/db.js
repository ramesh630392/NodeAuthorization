import  mongoose from "mongoose";

export const mongooseDb = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('Mongoose is connected');
    }catch(err){
        console.log(err);
        process.exit(1);  
    };
};