<template>
  <div class="features-section">
    <div class="feature-box" v-for="(feature, index) in features" :key="index">
      <img :src="feature.icon" :alt="feature.title" />
      <div class="feature-text">
        <h3>{{ feature.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeaturesSection",
  data() {
    return {
      features: [
        {
          icon: require("../assets/shipping-icon.png"),
          title: "Same Day Shipping",
        },
        {
          icon: require("../assets/price-icon.png"),
          title: "Best Price in USA",
        },
        {
          icon: require("../assets/quality-icon.png"),
          title: "High Quality Prints",
        },
        {
          icon: require("../assets/secure-payment-icon.png"),
          title: "Secure Payments",
        },
      ],
    };
  },
});
</script>

<style scoped>
.features-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem 0;
  background-color: #f8f9fa;
}

.feature-box {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 20%;
  margin: 1rem;
  min-width: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-box:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.feature-box img {
  width: 50px;
  margin-right: 1rem;
}

.feature-text {
  text-align: left;
}

.feature-text h3 {
  font-size: 1.5rem;
  margin: 0;
}

@media (max-width: 768px) {
  .feature-box {
    flex: 1 1 100%;
    margin: 0.5rem 0;
  }

  .feature-text h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .feature-text h3 {
    font-size: 1rem;
  }
}
</style>
