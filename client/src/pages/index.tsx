import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { SetStateAction, useEffect, useState } from "react";
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import Vault from "@/components/Vault";
import dynamic from 'next/dynamic'
import { Button } from "@chakra-ui/react";
 
export interface VaultItem {
  website: string;
  username: string;
  password: string;
}


const  Home:NextPage = () => {

  const [step, setStep] = useState<"login" | "register" | "vault">("login");
  const [vault, setVault] = useState<VaultItem[]>([]);
  const [vaultKey, setVaultKey] = useState("");

  useEffect(() => {
    const vault = window.sessionStorage.getItem("vault");
    const vaultKey = window.sessionStorage.getItem("vk");

    if (vault) {
      setVault(JSON.parse(vault));
    }

    if (vaultKey) {
      setVaultKey(vaultKey);
      setStep("vault");
    }
  }, []);


  return (
    <div className={styles.container} >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
            
          
        
        
      {step === "register" && (
          <RegisterForm setStep={setStep} setVaultKey={setVaultKey} />
        )}
          {step === "login" && (
          <LoginForm
            setVault={setVault}
            setStep={setStep}
            setVaultKey={setVaultKey}
          />
        )}
         {step === "vault" && (
         
         <Vault vault={vault} vaultKey={vaultKey}  setStep={setStep}/>)}
      </main>
    </div>
  );
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
