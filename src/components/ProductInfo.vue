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

    <!-- Quantity input section and Add to Cart button -->
    <div class="quantity-and-cart">
      <h2>Quantity :</h2>
      <div class="quantity-wrapper">
        <button
          class="quantity-button quantity-minus"
          @click="decreaseQuantity"
        >
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
      <button
        v-if="!selectedFile"
        class="upload-file-button"
        @click="triggerFileInput"
      >
        Continue to Upload Your File
      </button>
      <button v-if="selectedFile" class="upload-file-button">
        Add to Cart
      </button>
    </div>

    <!-- Hidden file input element -->
    <input
      ref="fileInput"
      type="file"
      style="display: none"
      @change="handleFileChange"
    />

    <!-- File preview section -->
    <div v-if="selectedFile" class="file-preview">
      <div class="file-preview-inner">
        <img
          v-if="imageUrl"
          :src="imageUrl"
          alt="File preview"
          class="file-image"
        />
        <div class="file-info">
          <span>{{ selectedFile.name }}</span>
          <button class="remove-file-button" @click="removeFile">×</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

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
      type: Array as () => string[],
      required: true,
    },
  },
  setup(props) {
    const selectedSize = ref<string>(props.sizes[0] || ""); // İlk bedeni varsayılan olarak seçme
    const quantity = ref<number>(1); // Varsayılan miktar
    const fileInput = ref<HTMLInputElement | null>(null); // Dosya girişi referansı
    const selectedFile = ref<File | null>(null); // Seçilen dosya
    const imageUrl = ref<string | null>(null); // Resim URL'si

    const increaseQuantity = () => {
      quantity.value++;
    };

    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    const triggerFileInput = () => {
      if (fileInput.value) {
        fileInput.value.click(); // Dosya seçiciyi aç
      }
    };

    const handleFileChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        selectedFile.value = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          imageUrl.value = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      }
    };

    const removeFile = () => {
      selectedFile.value = null;
      imageUrl.value = null;
      if (fileInput.value) {
        fileInput.value.value = ""; // Dosya seçiciyi sıfırla
      }
    };

    return {
      selectedSize,
      quantity,
      fileInput,
      selectedFile,
      imageUrl,
      increaseQuantity,
      decreaseQuantity,
      triggerFileInput,
      handleFileChange,
      removeFile,
    };
  },
});
</script>

<style src="@/styles/css/ProductInfo.css"></style>
