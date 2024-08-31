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
import { defineComponent } from "vue";
import Testimonials from "@/composables/Testimonials";
import "@/styles/css/Testimonials.css";

export default defineComponent({
  name: "CustomerTestimonials",
  setup() {
    const { testimonials, currentIndex, sliderStyle, nextSlide, prevSlide } =
      Testimonials();

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
