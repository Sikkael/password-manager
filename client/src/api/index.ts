

import axios from "axios";

const userBase = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users`;

export async function registerUser(payload: {
       hashedPassword: string,
       email: string 
}){
       const res = await axios.post<{ salt: string; vault: string; }>(userBase, payload, {
              withCredentials: true
       });
       return res.data;
}