export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}
export const products: Product[] = [
  {
    id: 1,
    image: require("@/assets/product1.jpg"),
    title: "DTF Sheet",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium, recusandae quasi modi, ex quam exercitationem id voluptatem aspernatur sapiente rerum maxime voluptates sunt at assumenda tenetur quis porro soluta!",
  },
  {
    id: 2,
    image: require("@/assets/product2.jpg"),
    title: "DTF Gang Roll",
    description: "Description for Product 2.",
  },
  {
    id: 3,
    image: require("@/assets/product5.jpg"),
    title: "Free DTF Sample",
    description:
      "Receive a complimentary 22x25 DTF sheet, showcasing a vibrant array of designs, with our free sample offer. This is your chance to experience our top-tier print quality firsthand! Our DTF sheets are perfect for testing on various textiles.",
  },
  {
    id: 4,
    image: require("@/assets/product4.jpg"),
    title: "Product 4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium, recusandae quasi modi, ex quam exercitationem id voluptatem.",
  },
  {
    id: 5,
    image: require("@/assets/product5.jpg"),
    title: "Product 5",
    description: "Description for Product 5.",
  },
];
