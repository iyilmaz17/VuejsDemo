<template>
  <section class="why-us">
    <h2 class="why-us-title">WHY US?</h2>
    <div class="reasons-wrapper">
      <div class="reason-card" v-for="(reason, index) in reasons" :key="index">
        <img :src="reason.icon" alt="" class="reason-icon" />
        <p class="reason-text">{{ reason.text }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WhyUs",
  data() {
    return {
      reasons: [
        {
          icon: require("@/assets/logo.png"),
          text: "In Best Price DTF, we value your time. That’s why we strive daily to offer same-day shipping and pickup services, ensuring efficiency and convenience for you.",
        },
        {
          icon: require("@/assets/logo.png"),
          text: "We not only offer the best prices in the USA but also prioritize top-quality products. Collaborating closely with engineers, we continuously enhance our offerings to ensure excellence every day.",
        },
        {
          icon: require("@/assets/logo.png"),
          text: "We stand by our products with a Customer Satisfaction Guarantee. If you’re not completely satisfied, we’re committed to making it right, ensuring a worry-free experience with every purchase.",
        },
        {
          icon: require("@/assets/logo.png"),
          text: "We understand that effective communication is crucial. That’s why we are available for calls 24/7, always ready to assist you.",
        },
      ],
    };
  },
});
</script>

<style scoped>
.why-us {
  background-color: #3d92f3;
  padding: 4rem 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem; /* Add bottom margin to create space */
}

.why-us-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.reasons-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Yan yana iki sütun */
  gap: 3rem;
  justify-content: center;
}

.reason-card {
  display: flex; /* Flex ile yan yana */
  align-items: center; /* Dikey ortalama */
  text-align: left; /* Metni sola hizala */
  max-width: 600px;
  margin: 0 auto; /* Kartları ortalamak için */
  background: #3d92f3;
  color: #fff;
  padding: 1rem;
  border-radius: 1px;
}

.reason-icon {
  width: 80px;
  height: 80px;
  margin-right: 1.5rem; /* Resim ve metin arasında boşluk */
}

.reason-text {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
