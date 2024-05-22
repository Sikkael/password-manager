import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
  } from "@chakra-ui/react";
  import { Dispatch, SetStateAction, useState } from "react";
  import { useForm } from "react-hook-form";
  import { useMutation } from "react-query";
  import { loginUser } from "../api";
  import { decryptVault, generateVaultKey, hashPassword } from "../crypto";
  import { VaultItem } from "../pages";
  import FormWrapper from "./FormWrapper";
  
  function LoginForm({
    setVault,
    setVaultKey,
    setStep,
    setEmail,
  }: {
    setVault: Dispatch<SetStateAction<VaultItem[]>>;
    setVaultKey: Dispatch<SetStateAction<string>>;
    setStep: Dispatch<SetStateAction<"login" | "register" | "vault">>;
    setEmail: Dispatch<SetStateAction<string>>;
  }) {
    const {
      handleSubmit,
      register,
      getValues,
      setValue,
      formState: { errors, isSubmitting },
    } = useForm<{ email: string; password: string; hashedPassword: string }>();
  
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');


    const handleEmailInput = (e: { target: { value: SetStateAction<string>; }; }) => setEmailInput(e.target.value)
    const handlePasswordInput = (e: { target: { value: SetStateAction<string>; }; }) => setPasswordInput(e.target.value)
    const isEmailError = emailInput === '';
    const isPasswordError = passwordInput === '';
    
    const mutation = useMutation(loginUser, {
      onSuccess: ({ salt, vault }) => {
        const hashedPassword = getValues("hashedPassword");
  
        const email = getValues("email");
        
        const vaultKey = generateVaultKey({
          hashedPassword,
          email,
          salt,
        });
  
        window.sessionStorage.setItem("vk", vaultKey);
  
        const decryptedVault = decryptVault({ vault, vaultKey });
  
        setVaultKey(vaultKey);
        setVault(decryptedVault);
        setEmail(email);
  
        window.sessionStorage.setItem("vault", JSON.stringify(decryptedVault));
        window.sessionStorage.setItem("email", email);
  
        setStep("vault");
      },
      
    });
  
    return (
      <FormWrapper
        onSubmit={handleSubmit(() => {
          const password = getValues("password");
          const email = getValues("email");
  
          const hashedPassword = hashPassword(password);
  
          setValue("hashedPassword", hashedPassword);
          console.log(isEmailError);
          mutation.mutate({
            email,
            hashedPassword,
          });
          
        })}

        
      >
        <Heading>Login</Heading>
       
        <FormControl mt="4" isInvalid={isEmailError}  >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              minLength: { value: 4, message: "Email must be 4 characters long" },
            })}
            value={emailInput}
            onChange={handleEmailInput} 
           
          />
  
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
      
        <FormControl mt="4" isInvalid={isPasswordError}>
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
            value={passwordInput}
            onChange={handlePasswordInput}
          />
  
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
  
        <Button type="submit" mt="4" >
           Login
        </Button>
        <Button 
        mt="4" ml="2" onClick={() => setStep("register")}>
           Register
        </Button>
      </FormWrapper>
    );
  }
  
  export default LoginForm;