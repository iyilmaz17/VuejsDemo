<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="product.image" :alt="product.title" class="product--image" />
    </div>
    <div class="product-details">
      <h3 class="product-title">{{ product.title }}</h3>
      <p class="product-description">
        {{
          showFullDescription || !isLongDescription
            ? product.description
            : truncatedDescription
        }}
        <span
          v-if="isLongDescription && !showFullDescription"
          class="show-more-text"
          @click="toggleDescription"
        >
          Show More
        </span>
      </p>
      <button class="shop-now-button" @click="goToProductDetail">
        Shop Now
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductCard } from "@/composables/ProductCard";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object as () => {
        id: number;
        image: string;
        title: string;
        description: string;
      },
      required: true,
    },
  },
  setup(props) {
    return useProductCard(props);
  },
});
</script>

<style src="@/styles/css/ProductCard.css"></style>
