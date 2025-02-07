import jwt from 'jsonwebtoken';

export const jwtToken = (payload)=>{
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(payload, secretKey, {expiresIn: "1h"});
    return token;
};

