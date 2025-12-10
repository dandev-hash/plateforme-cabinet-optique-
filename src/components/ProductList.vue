<template>
  <!-- Cette composant gère uniquement la structure de la grille et l'itération -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <!-- On itère sur la prop products -->
    <ProductCard 
      v-for="product in products" 
      :key="product.id"
      :product="product"
      @addToCart="$emit('addToCart', $event)" 
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import ProductCard from './ProductCard.vue'; // Import du composant de carte

defineProps({
    products: {
        type: Array,
        required: true
    }
});

// L'événement addToCart est écouté depuis ProductCard et re-émis vers App.vue
defineEmits(['addToCart']);
</script>