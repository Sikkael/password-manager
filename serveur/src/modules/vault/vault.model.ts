import { Ref, getModelForClass, prop } from "@typegoose/typegoose";
import { User } from "../user/user.model";

export class Vault {

    @prop({require: true, ref : () => User})
    user:Ref<User>;

    @prop({default: ""})
    data: string;

    @prop({require: true})
    salt: string;
}


export const VaultModel = getModelForClass(Vault, {
    schemaOptions: {
      timestamps: true,
    },
  });