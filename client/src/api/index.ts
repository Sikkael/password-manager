import axios from "axios";

const userBase = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/user`;


export async function registerUser(payload: {
  hashedPassword: string;
  email: string;
}) {
  console.log(payload);
  console.log(userBase);
  const res = await axios
              .post<{ salt: string; vault: string; }>(userBase, payload, {
                     withCredentials: true,
              });
       return res.data;
}