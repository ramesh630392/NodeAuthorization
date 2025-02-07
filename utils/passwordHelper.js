import bcrypt from 'bcrypt';

export const hashingPassword = async(password) =>{
    return await bcrypt.hash(password, 10);
};

export const passwordCompare = async(password, dbPassword)=>{
    return await bcrypt.compare(password, dbPassword);
}