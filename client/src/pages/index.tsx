import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import Vault from "@/components/Vault";


const  Home:NextPage = () => {

  const [step, setStep] = useState<'login' | 'register' | 'vault'>('register');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
         {step == 'register' && <RegisterForm/>}
         {step == 'login' && <LoginForm/>}
         {step == 'vault' && <Vault/>}
      </main>
    </div>
  );
}

export default Home;