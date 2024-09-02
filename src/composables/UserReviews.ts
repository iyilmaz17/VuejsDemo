import { ref } from "vue";
import { Review, reviews as reviewData } from "@/types/UserReviewsModel";

export default function useReviews() {
  const reviews = ref<Review[]>(reviewData);

  const toggleShowMore = (review: Review) => {
    review.showMore = !review.showMore;
  };

  const selectedReview = ref<Review | null>(null);
  const isPopupVisible = ref(false);

  const openPopup = (review: Review) => {
    selectedReview.value = review;
    isPopupVisible.value = true;
  };

  const closePopup = () => {
    isPopupVisible.value = false;
    selectedReview.value = null;
  };

  return {
    reviews,
    toggleShowMore,
    selectedReview,
    isPopupVisible,
    openPopup,
    closePopup,
  };
}
