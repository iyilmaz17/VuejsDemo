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
  {
    id: 3,
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
    id: 4,
    userImage: require("@/assets/women.jpeg"),
    userName: "Bob",
    date: "2024-08-29",
    title: "Good Quality",
    content:
      "The quality is really good, but the delivery was a bit slow. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 5,
    productImage: require("@/assets/product2.jpg"),
  },
  {
    id: 5,
    userImage: require("@/assets/man.png"),
    userName: "Alice",
    date: "2024-08-30",
    title: "Amazing Product!",
    content:
      "I absolutely love this product. It exceeded my expectations and I will definitely buy it again. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 2,
    productImage: require("@/assets/product1.jpg"),
  },
  {
    id: 6,
    userImage: require("@/assets/women.jpeg"),
    userName: "Bob",
    date: "2024-08-29",
    title: "Good Quality",
    content:
      "The quality is really good, but the delivery was a bit slow. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 3,
    productImage: require("@/assets/product2.jpg"),
  },
];

export const productImages: string[] = [
  require("@/assets/product1.jpg"),
  require("@/assets/product2.jpg"),
  require("@/assets/product3.jpg"),
];

export const productTitle = "DTF Sheet";
export const productDescription =
  "High-quality DTF transfer sheet for all your printing needs.";
export const productPrice = 19.99;
export const productSizes: string[] = [
  "22x25",
  "24x36",
  "30x40",
  "40x50",
  "50x60",
  "60x70",
  "70x80",
  "80x90",
  "90x100",
  "100x110",
  "110x120",
];
