<template>
  <div>
    <Slider />
    <FeaturesSection />
    <div class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div>
      <Testimonials />
    </div>
    <div>
      <WhyUs />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Slider from "@/components/Slider.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import ProductCard from "@/components/ProductCard.vue";
import Testimonials from "@/components/Testimonials.vue";
import WhyUs from "@/components/WhyUs.vue";
import { products } from "@/types/ProductCardModel";

export default defineComponent({
  name: "HomeView",
  components: {
    Slider,
    FeaturesSection,
    ProductCard,
    Testimonials,
    WhyUs,
  },
  data() {
    return {
      products,
    };
  },
});
</script>

<style scoped></style>
