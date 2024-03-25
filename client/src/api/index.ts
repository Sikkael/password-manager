import axios from "axios";

const userBase = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users`;

export function registerUser(payload: {
       hasshedPassword: string,
       email: string 
}){
       return axios.post(userBase);
}