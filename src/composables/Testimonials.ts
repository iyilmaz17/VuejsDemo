import { ref, computed } from "vue";
import {
  Testimonial,
  testimonials as testimonialData,
} from "@/types/TestimonialsModel";

export default function Testimonials() {
  const testimonials = ref<Testimonial[]>(testimonialData);
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
}
