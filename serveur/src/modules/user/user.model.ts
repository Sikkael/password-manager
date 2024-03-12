import {  getModelForClass, pre, prop } from "@typegoose/typegoose";
import argon2 from "argon2";



export class User {
  @prop({ required: true, unique: true })
  public email!: string;

  @prop({ required: true })
  password?: string;
}

