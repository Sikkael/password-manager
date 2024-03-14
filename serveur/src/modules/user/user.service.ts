import {UserModel}  from "./user.model";
import crypto from "crypto";
// generate salt
export function generateSalt() {
  return crypto.randomBytes(64).toString('hex');
}



// Create a model
export async function createUser(input:{
    hashedPassword:string;
    email:string;
}){
    return UserModel.create(input);
}

