import { Users } from "../models/users.js";
import express, { request, response } from 'express';
import { jwtToken } from "../utils/jwt.js";
import { middleWare } from "../utils/jwtVerify.js";
import { passwordCompare, hashingPassword } from "../utils/passwordHelper.js";

const router = express.Router();

router.post("/register", async(request, response)=>{
    const {username, email, password} = request.body;

    if(!username|| !email || !password){
        response.status(400).json({success:false, message: "Please provide all the inputs"});
    }else{
        try{
             const user = await Users.findOne({username});
             if (user === null){
                const newUser = new Users({username, email, password: hashingPassword(password) });
                try{
                    await newUser.save();
                    response.status(201).json({success:true, message:"User Created"});
                }catch(err){
                    console.log(err);
                    response.status(500).json({success:false, message:"server Error"});
             }
            }else{
                response.status(400).json({success:false, message: "User already exists please login"});
             };
        }catch(err){
            console.log(err);
            response.status(500).json({success:false, message:"Server Error"})
        }

    }
});

//Login route//
router.use("/login", async(request, response)=>{
    const {username, password} = request.body;
    
    try{
        const user = await Users.findOne({username});
        if (user !== null){
            //const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordCompare(password, user.password)){
                const secretKey = user.password;
                response.status(200).json({success: true, message: jwtToken({username, password})});
            }else{
                response.status(400).json({success: false, message: "Password is incorrect"});
            }
        }else{
            response.status(400).json({success: false, message: "Username is invalid"});
        }
    }catch(err){
        console.log(err);
        response.status(500).json({success: false, message: "Server Error"});
    };
    
});


router.get("/", middleWare, (request, response)=>{
    response.status(200).json({message: "working"});
});



export default router;