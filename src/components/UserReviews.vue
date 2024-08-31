<template>
  <div class="reviews-container">
    <h2>Customer Reviews</h2>
    <div class="review-cards">
      <div v-for="review in reviews" :key="review.id" class="review-card">
        <div class="review-header">
          <img :src="review.userImage" alt="User Image" class="user-image" />
          <div>
            <h3>{{ review.userName }}</h3>
            <div class="review-date">{{ review.date }}</div>
          </div>
        </div>
        <div class="review-content">
          <div class="content-wrapper">
            <h4>{{ review.title }}</h4>
            <p>
              {{
                review.showMore ? review.content : review.content.slice(0, 70)
              }}
              <span v-if="review.content.length > 70">
                <a href="#" @click.prevent="toggleShowMore(review)">
                  {{ review.showMore ? "Show Less" : "Show More" }}
                </a>
              </span>
            </p>
          </div>
          <div class="rating">
            <span
              v-for="star in 5"
              :key="star"
              class="star"
              :class="{ filled: star <= review.rating }"
              >★</span
            >
          </div>
          <img
            :src="review.productImage"
            alt="Reviewed Product"
            class="product-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useReviews from "@/composables/UserReviews";
import "@/styles/css/UserReviews.css";

export default defineComponent({
  name: "UserReviews",
  setup() {
    const { reviews, toggleShowMore } = useReviews();

    return {
      reviews,
      toggleShowMore,
    };
  },
});
</script>
