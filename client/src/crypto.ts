import { SHA256 } from "crypto-js";

export function hashedPassword(password:string){
     return SHA256(password).toString();

}