<template>
  <div class="reviews-container">
    <h2>Customer Reviews</h2>
    <div class="review-cards">
      <div v-for="review in reviews" :key="review.id" class="review-card">
        <div class="review-header">
          <img :src="review.userImage" alt="User Image" class="user-image" />
          <div>
            <h3 @click="openPopup(review)">{{ review.userName }}</h3>
            <div class="review-date">{{ review.date }}</div>
          </div>
        </div>
        <div class="review-content">
          <div class="content-wrapper">
            <h4 @click="openPopup(review)">{{ review.title }}</h4>
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
            @click="openPopup(review)"
          />
        </div>
      </div>
    </div>
    <div
      v-if="isPopupVisible && selectedReview"
      class="popup-overlay"
      @click.self="closePopup"
    >
      <div class="popup-content">
        <div class="popup-header">
          <div class="popup-header-left">
            <span class="popup-user">{{ selectedReview.userName }}</span>
            <span class="popup-rating">
              <span
                v-for="star in 5"
                :key="star"
                class="star"
                :class="{ filled: star <= selectedReview.rating }"
                >★</span
              >
            </span>
          </div>
          <div class="popup-header-right">
            <span class="popup-date">{{ selectedReview.date }}</span>
          </div>
        </div>
        <h3>{{ selectedReview.title }}</h3>
        <p>{{ selectedReview.content }}</p>
        <img
          :src="selectedReview.productImage"
          alt="Reviewed Product"
          class="popup-image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useReviews from "@/composables/UserReviews"; // Composable'ı import et
import "@/styles/css/UserReviews.css";

export default defineComponent({
  name: "UserReviews",
  setup() {
    const {
      reviews,
      toggleShowMore,
      selectedReview,
      isPopupVisible,
      openPopup,
      closePopup,
    } = useReviews();

    return {
      reviews,
      toggleShowMore,
      selectedReview,
      isPopupVisible,
      openPopup,
      closePopup,
    };
  },
});
</script>

<style scoped></style>
