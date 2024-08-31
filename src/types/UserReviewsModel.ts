export interface Review {
  id: number;
  userImage: string;
  userName: string;
  date: string;
  title: string;
  content: string;
  rating: number;
  productImage: string;
  showMore?: boolean;
}

export const reviews: Review[] = [
  {
    id: 1,
    userImage: require("@/assets/man.png"),
    userName: "Alice",
    date: "2024-08-30",
    title: "Amazing Product!",
    content:
      "I absolutely love this product. It exceeded my expectations and I will definitely buy it again. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 1,
    productImage: require("@/assets/product1.jpg"),
  },
  {
    id: 2,
    userImage: require("@/assets/women.jpeg"),
    userName: "Bob",
    date: "2024-08-29",
    title: "Good Quality",
    content:
      "The quality is really good, but the delivery was a bit slow. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 4,
    productImage: require("@/assets/product2.jpg"),
  },
];
