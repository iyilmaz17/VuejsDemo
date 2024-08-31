import { ref } from "vue";
import { Review, reviews as reviewData } from "@/types/UserReviewsModel";

export default function useReviews() {
  const reviews = ref<Review[]>(reviewData);

  const toggleShowMore = (review: Review) => {
    review.showMore = !review.showMore;
  };

  return {
    reviews,
    toggleShowMore,
  };
}
