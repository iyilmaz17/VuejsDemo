<template>
  <br />
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
  </div>
</template>

<script lang="ts">
import ProductImages from "@/components/ProductImages.vue";
import ProductInfo from "@/components/ProductInfo.vue";

export default {
  components: {
    ProductImages,
    ProductInfo,
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
      ], // Örnek boyutlar
    };
  },
};
</script>

<style scoped>
.product-detail-container {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Ürün resimleri ve bilgileri arasındaki boşluk */
}

@media (max-width: 768px) {
  .product-detail-container {
    flex-direction: column; /* Küçük ekranlar için dikey düzen */
    align-items: center;
  }
}
</style>
