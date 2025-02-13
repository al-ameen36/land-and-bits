import { Product } from "./products";

export type Farmer = {
  id: number;
  name: string;
  email: string;
  photo: string;
  products: Product[];
  coords: number[];
};
