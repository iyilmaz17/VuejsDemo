<template>
  <div class="product-info">
    <h1>{{ productTitle }}</h1>
    <p class="product-description">{{ productDescription }}</p>
    <p class="product-price">${{ productPrice }}</p>

    <!-- Size selection buttons -->
    <label>Select Size:</label>
    <div class="size-selection">
      <button
        v-for="size in sizes"
        :key="size"
        :class="['size-button', { selected: size === selectedSize }]"
        @click="selectedSize = size"
      >
        {{ size }}
      </button>
    </div>

    <!-- Quantity input section -->
    <label>Quantity:</label>
    <div class="quantity-wrapper">
      <button class="quantity-button quantity-minus" @click="decreaseQuantity">
        -
      </button>
      <input
        name="quantity"
        type="number"
        v-model.number="quantity"
        min="1"
        class="quantity-input"
      />
      <button class="quantity-button quantity-plus" @click="increaseQuantity">
        +
      </button>
    </div>

    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductInfo",
  props: {
    productTitle: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    sizes: {
      type: Array as () => string[], // Array of strings (sizes)
      required: true,
    },
  },
  data() {
    return {
      selectedSize: this.sizes[0] || "", // Default to the first size or an empty string
      quantity: 1, // Default quantity
    };
  },
  methods: {
    addToCart() {
      alert(
        `Product added to cart with size: ${this.selectedSize} and quantity: ${this.quantity}`
      );
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
});
</script>

<style scoped>
.product-info {
  width: 45%;
}

.product-description {
  margin: 20px 0;
}

.product-price {
  font-size: 24px;
  color: #333;
}

.size-selection {
  margin-bottom: 20px;
}

.size-button {
  padding: 10px 20px;
  margin: 5px;
  background-color: white;
  border: 2px solid #333;
  border-radius: 15px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
}

.size-button.selected {
  background-color: #333;
  color: white;
}

.quantity-wrapper {
  display: flex;
  align-items: center;
  background-color: #fff; /* Beyaz arka plan rengi */
  border: 1px solid #ccc; /* Çerçeve rengi */
  border-radius: 55px; /* Yuvarlatılmış köşeler */
  padding: 0; /* İç boşlukları sıfırla */
  width: fit-content; /* İçeriğe göre genişlik */
  height: fit-content; /* İçeriğe göre yükseklik */
}

.quantity-button {
  width: 40px;
  height: 40px;
  background-color: white;
  border: 2px solid #fff; /* Çerçeve rengi */
  border-radius: 50%; /* Yuvarlak düğmeler */
  font-size: 18px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0; /* Marginleri kaldır */
}

.quantity-button:focus {
  outline: none;
}

.quantity-input {
  width: 60px;
  height: 34px;
  border: 1px solid #fff; /* Çerçeve rengi */
  text-align: center;
  font-size: 18px;
  margin: 0; /* Marginleri kaldır */
  border-radius: 55px; /* Yuvarlatılmış köşeler */
  background-color: white; /* Beyaz arka plan */
  color: #333; /* Yazı rengi */
}

/* Varsayılan spin butonlarını gizle */
.quantity-input::-webkit-inner-spin-button,
.quantity-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Odaklanıldığında dış çizgiyi kaldır */
.quantity-input:focus {
  outline: none;
  box-shadow: none;
}

.quantity-button.quantity-minus {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
}

.quantity-button.quantity-plus {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
}

button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
