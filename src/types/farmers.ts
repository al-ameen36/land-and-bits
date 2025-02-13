import { Product } from "./products";

export type Farmer = {
  id: number;
  name: string;
  email: string;
  products: Product[];
};
