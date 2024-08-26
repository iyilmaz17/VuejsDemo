<template>
  <div>
    <Slider />
    <FeaturesSection />
    <div class="product-grid">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Slider from "@/components/Slider.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import ProductCard from "@/components/ProductCard.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Slider,
    FeaturesSection,
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          image: require("@/assets/product1.jpg"),
          title: "Product 1",
          description: "Description for Product 1.",
        },
        {
          image: require("@/assets/product1.jpg"),
          title: "Product 2",
          description: "Description for Product 2.",
        },
        {
          image: require("@/assets/product1.jpg"),
          title: "Product 3",
          description: "Description for Product 3.",
        },
      ],
    };
  },
});
</script>

<style scoped>
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
}
</style>
