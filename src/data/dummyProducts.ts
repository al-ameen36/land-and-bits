import image1 from "@/assets/images/cabbage.jpg";
import image2 from "@/assets/images/eggs.jpg";
import image3 from "@/assets/images/chicken.jpg";
import image4 from "@/assets/images/greens.jpg";
import { Product } from "../types/products";

const dummyProducts: Product[] = [
  {
    name: "Cabbage",
    price: 1.99,
    description: "Fresh and crisp cabbage, perfect for salads and stir-fries.",
    measure: "per kg",
    rating: {
      by: 120,
      stars: 4.5,
    },
    images: [image1],
  },
  {
    name: "Eggs",
    price: 2.49,
    description: "Free-range eggs, rich in protein and nutrients.",
    measure: "dozen",
    rating: {
      by: 85,
      stars: 4.7,
    },
    images: [image2],
  },
  {
    name: "Chicken",
    price: 5.99,
    description: "Organic chicken, raised without antibiotics.",
    measure: "per kg",
    rating: {
      by: 150,
      stars: 4.6,
    },
    images: [image3],
  },
  {
    name: "Carrots",
    price: 0.99,
    description: "Sweet and crunchy carrots, great for snacking and cooking.",
    measure: "per kg",
    rating: {
      by: 95,
      stars: 4.4,
    },
    images: [image4],
  },
];

export default dummyProducts;
