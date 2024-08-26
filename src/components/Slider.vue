<template>
  <swiper
    :slides-per-view="1"
    :space-between="10"
    pagination
    navigation
    loop
    autoplay
  >
    <swiper-slide>
      <div class="slide-content">
        <img src="@/assets/slider1.jpg" alt="Slide 1" class="slider-image" />
        <div class="overlay">
          <h2 class="headline">Let us handle your DTF prints</h2>
          <div class="buttons">
            <button class="btn yes">Buy Now</button>
            <button class="btn no">Build</button>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

export default defineComponent({
  name: "MySlider",
  components: {
    Swiper,
    SwiperSlide,
  },
});
</script>

<style scoped>
.slider-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.slide-content {
  position: relative;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  text-align: left;
  color: white;
  padding: 1rem;
  max-width: 500px;
}

.headline {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
}

.yes {
  background-color: rgb(71, 73, 72);
}

.no {
  background-color: rgb(71, 73, 72);
}
</style>
