<template>
  <div class="product-images">
    <img :src="selectedImage" alt="Product Image" class="main-image" />
    <div class="image-gallery">
      <img
        v-for="(image, index) in productImages"
        :key="index"
        :src="image"
        @click="selectImage(image)"
        class="gallery-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productImages: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedImage: "",
    };
  },
  methods: {
    selectImage(image) {
      this.selectedImage = image;
    },
  },
  mounted() {
    this.selectedImage = this.productImages[0];
  },
};
</script>

<style scoped>
.product-images {
  width: 30%; /* Alanı biraz daha daraltıyoruz */
  margin: 0 auto; /* Ortalamak için */
  padding: 10px;
  border: 1px solid #ddd; /* Hafif bir kenarlık ekleyelim */
  border-radius: 8px; /* Köşeleri yuvarlayalım */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Hafif bir gölge ekleyelim */
  background-color: #f9f9f9; /* Arka plan rengi */
}

.main-image {
  width: 100%; /* Ana resim genişliği */
  height: auto;
  border-radius: 8px; /* Resmi yuvarlatılmış kenarlarla gösterelim */
  margin-bottom: 10px; /* Resim ile galeri arasına boşluk ekleyelim */
}

.image-gallery {
  display: flex;
  gap: 8px; /* Resimler arasındaki boşluğu biraz azaltalım */
  justify-content: center; /* Resim galerisini ortalayalım */
}

.gallery-image {
  width: 60px; /* Küçük resim boyutunu azaltalım */
  height: 60px;
  cursor: pointer;
  border: 2px solid transparent; /* Başlangıçta görünmez kenarlık */
  border-radius: 4px; /* Küçük resimler için köşe yuvarlama */
  transition: border-color 0.3s ease; /* Kenarlık değişimi için geçiş efekti ekleyelim */
}

.gallery-image:hover {
  border-color: #007bff; /* Üzerine gelindiğinde kenarlık rengi değişsin */
}
</style>
