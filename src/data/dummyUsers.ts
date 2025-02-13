import { Farmer } from "../types/farmers";
import user1 from "@/assets/images/users/user1.jpg";
import user2 from "@/assets/images/users/user2.jpg";
import user3 from "@/assets/images/users/user3.jpg";
import image1 from "@/assets/images/cabbage.jpg";
import image2 from "@/assets/images/eggs.jpg";
import image3 from "@/assets/images/greens.jpg";
import image4 from "@/assets/images/chicken.jpg";

const dummyUsers: Farmer[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    coords: [7.42968, 10.528251],
    photo: user1,
    products: [
      {
        name: "Cabbage",
        price: 400,
        description:
          "Fresh and crisp cabbage, perfect for salads and stir-fries.",
        measure: "Cabbage",
        rating: {
          by: 120,
          stars: 4.5,
        },
        images: [image1, image2, image3, image4],
      },
      {
        name: "Eggs",
        price: 6000,
        description: "Free-range eggs, rich in protein and nutrients.",
        measure: "Dozen",
        rating: {
          by: 85,
          stars: 4.7,
        },
        images: [image2],
      },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    coords: [7.421552, 10.527809],
    photo: user2,
    products: [
      {
        name: "Chicken",
        price: 5000,
        description: "Organic chicken, raised without antibiotics.",
        measure: "Chicken",
        rating: {
          by: 150,
          stars: 4.6,
        },
        images: [image4],
      },
      {
        name: "Carrots",
        price: 300,
        description:
          "Sweet and crunchy carrots, great for snacking and cooking.",
        measure: "Paint bucket",
        rating: {
          by: 95,
          stars: 4.4,
        },
        images: [image3],
      },
    ],
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    coords: [7.426351, 10.526246],
    photo: user3,
    products: [
      {
        name: "Apples",
        price: 500,
        description: "Juicy and crisp apples, perfect for a healthy snack.",
        measure: "Apple",
        rating: {
          by: 110,
          stars: 4.8,
        },
        images: [image1],
      },
      {
        name: "Milk",
        price: 3000,
        description: "Fresh and creamy milk, great for cereal and coffee.",
        measure: "liter",
        rating: {
          by: 75,
          stars: 4.5,
        },
        images: [image1],
      },
    ],
  },
];

export default dummyUsers;
