<template>
  <div class="faq-container">
    <h2 class="faq-title">Frequently Asked Questions</h2>
    <div v-for="(item, index) in faqs" :key="index" class="faq-item">
      <button @click="toggle(index)" class="faq-question">
        {{ item.question }}
        <span :class="['faq-icon', { 'faq-icon-open': activeIndex === index }]">
          &#9662;
        </span>
      </button>
      <transition name="fade">
        <div v-show="activeIndex === index" class="faq-answer">
          <p>{{ item.answer }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "What is DTF?",
          answer:
            "DTF stands for Direct to Film printing, which involves transferring ink onto a special film that is then applied to the fabric.",
        },
        {
          question: "How long does shipping take?",
          answer:
            "Shipping times vary depending on your location, but most orders arrive within 5-7 business days.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes, once your order has shipped, you will receive a tracking number to follow your package.",
        },
      ],
      activeIndex: null,
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.faq-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.faq-item {
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.faq-question {
  background: #f5f5f5;
  border: none;
  width: 100%;
  text-align: left;
  padding: 15px;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s;
}

.faq-question:hover {
  background: #e0e0e0;
}

.faq-icon {
  font-size: 20px;
  transition: transform 0.3s;
}

.faq-icon-open {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 15px;
  background: #fafafa;
  border-top: 1px solid #ddd;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
