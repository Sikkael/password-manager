import { FormControl, FormLabel, Heading } from "@chakra-ui/react";
import FormWrapper from "./FormWrapper";
import { useForm } from "react-hook-form";

function RegisterForm(){

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<{ email: string; password: string; hashedPassword: string }>();
     
    return <FormWrapper>
             <Heading>Register</Heading>
             <FormControl mt="4">
                <FormLabel htmlFor="email">Email</FormLabel> 
                <input id="email" placeholder="Email"/>
             </FormControl>
           </FormWrapper>;

}

export default RegisterForm;