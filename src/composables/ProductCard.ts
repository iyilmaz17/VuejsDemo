import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Product } from "@/types/ProductCardModel";

export function useProductCard(props: { product: Product }) {
  const router = useRouter();
  const maxLength = 200; // Maximum length for description before truncation
  const showFullDescription = ref(false);

  const isLongDescription = computed(() => {
    return props.product.description.length > maxLength;
  });

  const truncatedDescription = computed(() => {
    return `${props.product.description.slice(0, maxLength)}...`;
  });

  const toggleDescription = () => {
    showFullDescription.value = !showFullDescription.value;
  };

  const goToProductDetail = () => {
    router.push({ name: "product-detail", params: { id: props.product.id } });
  };

  return {
    isLongDescription,
    showFullDescription,
    truncatedDescription,
    toggleDescription,
    goToProductDetail,
  };
}
