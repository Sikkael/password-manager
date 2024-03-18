import { Ref, prop } from "@typegoose/typegoose";
import { User } from "../user/user.model";

export class Vault {

    @prop({require: true, ref : () => User})
    user:Ref<User>;

    @prop({default: ""})
    data: string;
}