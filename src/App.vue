<template>
  <!-- Le composant d'en-tête (TheHeader) reste fixe en haut -->
  <TheHeader />

  <!-- La balise <main> contient le contenu spécifique de la page actuelle (via RouterView) -->
  <main class="flex-grow">
    <RouterView />
  </main>
  
  <!-- Le composant de pied de page (TheFooter) en bas -->
  <TheFooter />

  <!-- 1. Composant de Modale de Panier (Reste en place pour être accessible globalement) -->
  <CartModal 
    :isVisible="isCartVisible" 
    :cartItems="cartItems" 
    @close="isCartVisible = false"
    @removeItem="removeItem"
    @updateQuantity="updateQuantity"
  />
</template>

<script setup>
import { ref, computed } from 'vue';
// Composants de la structure
import { RouterView } from 'vue-router'; // Nécessaire pour afficher les vues
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
// Composant de fonctionnalité
import CartModal from './components/CartModal.vue';

// ------------------------------------
// 2. Gestion de l'état de la Modale (Conservée)
// ------------------------------------
const isCartVisible = ref(false); // État initial : la modale est cachée

// ------------------------------------
// 3. Données de Panier Factices (Conservées)
// ------------------------------------
const cartItems = ref([
    { id: 1, name: 'Lunettes Aviator', brand: 'Ray-Ban', price: 15000, quantity: 1, imageUrl: 'https://placehold.co/100x100/38a169/ffffff?text=RB', isPromo: false, originalPrice: 0, promoPercentage: 0 },
    { id: 2, name: 'Monture de Sport', brand: 'Oakley', price: 25000, quantity: 2, imageUrl: 'https://placehold.co/100x100/2b6cb0/ffffff?text=OK', isPromo: true, originalPrice: 35000, promoPercentage: 20 },
    { id: 3, name: 'Lunettes de Lecture', brand: 'Fossil', price: 12000, quantity: 1, imageUrl: 'https://placehold.co/100x100/7c3aed/ffffff?text=FO', isPromo: false, originalPrice: 0, promoPercentage: 0 },
]);

// ------------------------------------
// 4. Logique de Gestion du Panier (Conservée)
// ------------------------------------

/** Calcule le nombre total d'articles dans le panier. */
const totalItemsInCart = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});

/** Supprime un article du panier par son ID. */
const removeItem = (itemId) => {
  cartItems.value = cartItems.value.filter(item => item.id !== itemId);
};

/** Met à jour la quantité d'un article par son ID. */
const updateQuantity = (itemId, newQuantity) => {
  const item = cartItems.value.find(item => item.id === itemId);
  if (item) {
    item.quantity = newQuantity;
  }
};
</script>

<style>
/* Style global pour s'assurer que l'application utilise une police lisible */
body {
  font-family: 'Inter', sans-serif;
}
/* Flexbox sur le corps pour assurer que le pied de page reste en bas, même avec peu de contenu */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>