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
    <hr class="page-divider" />
    <UserReviews :reviews="reviews" />
    <hr class="page-divider" />
    <FrequentlyAskedQuestions />
  </div>
</template>

<script lang="ts">
import ProductImages from "@/components/ProductImages.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import UserReviews from "@/components/UserReviews.vue";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions.vue";
import {
  productImages,
  productTitle,
  productDescription,
  productPrice,
  productSizes,
  reviews,
} from "@/types/UserReviewsModel";

export default {
  components: {
    ProductImages,
    ProductInfo,
    UserReviews,
    FrequentlyAskedQuestions,
  },
  data() {
    return {
      productImages,
      productTitle,
      productDescription,
      productPrice,
      productSizes,
      reviews,
    };
  },
};
</script>

<style scoped>
.page-divider {
  border: none;
  border-top: 1px solid #ddd;
  margin: 20px 0;
}
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
