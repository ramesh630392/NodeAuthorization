import jwt from 'jsonwebtoken';

export const middleWare = (request, response, next) =>{
    const token = request.header("Authorization")?.split(" ")[1];

    if (!token){
        response.status(400).json({message: "Access denied Token not provided"});
    };
    try{
        jwt.verify(token, process.env.SECRET_KEY);
        next();
    }catch(err){
        response.status(403).json({message: "Invalid Token"});
    };
};