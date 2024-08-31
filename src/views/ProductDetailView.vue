<template>
  <div>
    <div class="product-detail-container">
      <ProductImages :productImages="productImages" />
      <ProductInfo
        :productTitle="productTitle"
        :productDescription="productDescription"
        :productPrice="productPrice"
        :sizes="productSizes"
      />
    </div>
    <UserReviews :reviews="reviews" />
  </div>
</template>

<script lang="ts">
import ProductImages from "@/components/ProductImages.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import UserReviews from "@/components/UserReviews.vue"; // Import the component

export default {
  components: {
    ProductImages,
    ProductInfo,
    UserReviews, // Register the component
  },
  data() {
    return {
      productImages: [
        require("@/assets/product1.jpg"),
        require("@/assets/product2.jpg"),
        require("@/assets/product3.jpg"),
      ],
      productTitle: "DTF Sheet",
      productDescription:
        "High-quality DTF transfer sheet for all your printing needs.",
      productPrice: 19.99,
      productSizes: [
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
      ],
      reviews: [
        {
          id: 1,
          userImage: require("@/assets/women.jpeg"),
          userName: "Alice",
          date: "2024-08-30",
          title: "Fantastic Product", // Add the title
          content:
            "Great product! The quality is superb and delivery was quick.Great product! The quality is superb and delivery was quick.",
          rating: 1, // 5 stars
          productImage: require("@/assets/product1.jpg"),
        },
        {
          id: 2,
          userImage: require("@/assets/man.png"),
          userName: "Bob",
          date: "2024-08-29",
          title: "Good, but not perfect", // Add the title
          content: "Not bad, but I expected a higher quality.",
          rating: 4, // 4 stars
          productImage: require("@/assets/product2.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.product-detail-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 768px) {
  .product-detail-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
