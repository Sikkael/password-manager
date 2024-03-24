import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react";
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
     
    return <FormWrapper
            onSubmit={handleSubmit(() => {
            const password = getValues("password");
            const email = getValues("email");

       })}
    >
             <Heading>Register</Heading>
             <FormControl mt="4">
                <FormLabel htmlFor="email">Email</FormLabel> 
                <Input id="email" placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    minLength: { value: 4, message: "Email must be 4 characters long" },
                  })}
                />
              
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>  
             </FormControl>

              <FormControl mt="4">
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be 6 characters long",
            },
          })}
        />

        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

         <Button type="submit">Register</Button>
      </FormWrapper>;

}

export default RegisterForm;