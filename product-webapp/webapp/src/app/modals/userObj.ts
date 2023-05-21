import { Product } from "./product";

export type UserObj = {
  firstName?: string;
  lastName?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  gender?: string;
  phoneNumber?: number;
  image?: number;
  productList?: Product[]
};
