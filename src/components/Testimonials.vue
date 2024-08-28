<template>
  <div class="testimonials-section">
    <div class="title-container">
      <div class="line"></div>
      <h2 class="title">What Our Customers Are Saying</h2>
      <div class="line"></div>
    </div>
    <div class="testimonials-container">
      <button class="nav-button prev" @click="prevSlide">❮</button>
      <div class="testimonials-wrapper">
        <div class="testimonials" :style="sliderStyle">
          <div
            class="testimonial"
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <h3 class="testimonial-title">{{ testimonial.title }}</h3>
            <div class="testimonial-info">
              <cite class="testimonial-author">{{ testimonial.author }}</cite>
              <span class="separator">-</span>
              <div class="testimonial-rating">
                <span
                  v-for="star in 5"
                  :key="star"
                  class="star"
                  :class="{ filled: star <= testimonial.rating }"
                  >★</span
                >
              </div>
            </div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
          </div>
        </div>
      </div>
      <button class="nav-button next" @click="nextSlide">❯</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

interface Testimonial {
  title: string;
  text: string;
  author: string;
  rating: number;
}

export default defineComponent({
  name: "CustomerTestimonials",
  setup() {
    const testimonials = ref<Testimonial[]>([
      {
        title: "Outstanding Service",
        text: "Great service! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis rem inventore corporis nihil repellendus, sequi animi alias dignissimos. Voluptatem laborum soluta ducimus architecto quae. Quam, quisquam ullam. Perferendis, harum officia?",
        author: "John Doe",
        rating: 5,
      },
      {
        title: "Excellent Quality",
        text: "Excellent quality! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro totam animi temporibus, quo aliquam quasi facere molestias velit natus doloremque nostrum ullam minima aspernatur ducimus amet voluptate perferendis minus quia!",
        author: "Jane Smith",
        rating: 4,
      },
      {
        title: "Fast Shipping",
        text: "Fast shipping! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio dolorum esse maxime ab voluptates voluptas, suscipit accusantium iure commodi tenetur aut cupiditate harum hic blanditiis nemo perferendis consequuntur quae. Sed?",
        author: "Mary Johnson",
        rating: 5,
      },
      {
        title: "Very Satisfied",
        text: "Very satisfied! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident debitis temporibus voluptates tempora, quaerat et aliquid fuga totam impedit porro. Assumenda dolorum, nulla expedita odio alias facilis numquam ducimus tempore.",
        author: "James Brown",
        rating: 3,
      },
      {
        title: "Will Buy Again",
        text: "Will buy again! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus cumque qui doloremque eaque quas natus est eius cum molestiae, alias, ad inventore fugiat magni omnis dolores ratione, laudantium repudiandae!",
        author: "Patricia Taylor",
        rating: 4,
      },
    ]);

    const currentIndex = ref(0);

    const sliderStyle = computed(() => {
      const offset = -currentIndex.value * 100;
      return {
        transform: `translateX(${offset}%)`,
      };
    });

    const nextSlide = () => {
      if (currentIndex.value < testimonials.value.length - 4) {
        currentIndex.value++;
      }
    };

    const prevSlide = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      }
    };

    return {
      testimonials,
      currentIndex,
      sliderStyle,
      nextSlide,
      prevSlide,
    };
  },
});
</script>

<style scoped>
.testimonials-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px; /* Adjust the maximum width as needed */
  padding: 0 1rem; /* Add some padding on the sides */
}

.title-container {
  display: flex;
  align-items: center;
  margin: 2rem 0;
  text-align: center;
  width: 100%;
}

.line {
  flex: 1;
  border-top: 1px solid #ddd;
}

.title {
  margin: 0 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.testimonials-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.nav-button {
  background-color: transparent; /* Remove the background color */
  border: none; /* Remove the border */
  cursor: pointer;
  font-size: 2rem; /* Adjust font size for better visibility */
  color: #000; /* Black color for arrows */
  z-index: 1;
  transition: color 0.3s ease;
  position: absolute;
  top: 50%; /* Center vertically */
  transform: translateY(-50%); /* Adjust for vertical centering */
}

.nav-button:hover {
  color: #333; /* Slightly darker color on hover */
}

.prev {
  left: -2rem; /* Adjusted space from the left edge */
}

.next {
  right: -2rem; /* Increase the space from the right edge */
}

.testimonials-wrapper {
  overflow: hidden;
  width: 100%;
}

.testimonials {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial {
  min-width: 25%; /* Adjust based on the number of visible testimonials */
  box-sizing: border-box;
  padding: 1rem;
  text-align: left; /* Align text to the left */
}

.testimonial-title {
  text-align: center; /* Center title */
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.testimonial-info {
  display: flex;
  align-items: center;
  justify-content: center; /* Center the author and rating */
  margin-bottom: 0.5rem;
}

.testimonial-author {
  font-size: 0.875rem;
  color: #555;
  margin-right: 0.5rem;
}

.separator {
  margin: 0 0.5rem;
  font-size: 1.25rem;
}

.testimonial-rating {
  display: flex;
}

.star {
  font-size: 1.5rem;
  color: #ccc; /* Default star color */
}

.star.filled {
  color: #f5c518; /* Filled star color */
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.5; /* More relaxed line spacing */
  margin-bottom: 0.5rem;
}
</style>
