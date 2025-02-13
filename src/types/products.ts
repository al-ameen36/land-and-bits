export type Product = {
  name: string;
  price: number;
  description: string;
  measure: string;
  rating: {
    by: number;
    stars: number;
  };
  images: string[];
};
