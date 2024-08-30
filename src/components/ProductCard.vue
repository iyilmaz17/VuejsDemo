<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="product.image" :alt="product.title" class="product-image" />
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
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";

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
    const router = useRouter();
    const maxLength = 200; // Maximum length for description before truncation
    const showFullDescription = ref(false);

    const isLongDescription = computed(() => {
      return props.product.description.length > maxLength;
    });

    const truncatedDescription = computed(() => {
      return `${props.product.description.slice(0, maxLength)}...`;
    });

    const toggleDescription = () => {
      showFullDescription.value = !showFullDescription.value;
    };

    const goToProductDetail = () => {
      router.push({ name: "product-detail", params: { id: 1 } });
      //router.push({ name: "product-detail", params: { id: props.product.id } });
    };

    return {
      isLongDescription,
      showFullDescription,
      truncatedDescription,
      toggleDescription,
      goToProductDetail,
    };
  },
});
</script>

<style scoped>
.product-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.image-container {
  overflow: hidden;
  border-radius: 8px;
  position: relative;
}

.product-image {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ensures the image covers the container without stretching */
  display: block;
}

.product-details {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1; /* Ensures the details section takes up available space */
}

.product-title {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.product-description {
  color: #666;
  margin-bottom: 1rem;
  text-align: left;
  overflow: hidden;
  position: relative;
}

.show-more-text {
  color: #666; /* Match description text color */
  cursor: pointer;
  font-size: 0.875rem;
  margin-left: 0.5rem;
  text-decoration: underline;
}

.show-more-text:hover {
  color: #555;
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
  align-self: center; /* Center the button horizontally */
  margin-top: auto; /* Push button to the bottom of the card */
}

.shop-now-button:hover {
  background-color: #0056b3;
}
</style>
