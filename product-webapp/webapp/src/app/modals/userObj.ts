import { Product } from "./product";

export type UserObj = {
  firstName?: string;
  lastName?: string;
  phoneNumber?:number;
  email?:string;
  address?:string;
  city?:string;
  state?:string;
  pinCode?:number;
  gender?:string;
  image?:string;
  productAddList?: Product[]
};
