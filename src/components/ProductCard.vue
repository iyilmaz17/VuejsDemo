<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.title" class="product-image" />
    <div class="product-details">
      <h3 class="product-title">{{ product.title }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <button class="shop-now-button">Shop Now</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object as () => {
        image: string;
        title: string;
        description: string;
      },
      required: true,
    },
  },
});
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  max-width: 300px; /* Adjust max-width as needed */
  margin: 1rem;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-details {
  margin-top: 1rem;
}

.product-title {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.product-description {
  color: #666;
  margin-bottom: 1rem;
}

.shop-now-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.shop-now-button:hover {
  background-color: #0056b3;
}
</style>
