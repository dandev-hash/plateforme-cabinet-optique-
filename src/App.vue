<template>
  <!-- Le composant d'en-tête (TheHeader) reste fixe en haut -->
  <TheHeader @openCart="isCartVisible = true" :cartCount="cartStore.totalItemsCount"
    :showConfirmation="showCartConfirmation" />

  <!-- La balise <main> contient le contenu spécifique de la page actuelle (via RouterView) -->
  <main class="flex-grow">
    <RouterView />
  </main>

  <!-- Le composant de pied de page (TheFooter) en bas -->
  <TheFooter />

  <!-- 1. Composant de Modale de Panier (Reste en place pour être accessible globalement) -->
  <CartModal :isVisible="isCartVisible" :cartItems="cartStore.items" @close="isCartVisible = false"
    @removeItem="cartStore.removeItem" @updateQuantity="cartStore.updateQuantity" />
</template>

<script setup>
import { ref } from 'vue';
// Composants de la structure
import { RouterView } from 'vue-router'; // Nécessaire pour afficher les vues
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
// Composant de fonctionnalité
import CartModal from './components/CartModal.vue';
import ProductList from './components/ProductList.vue';
import { useCartStore } from './stores/cartStore';


// ------------------------------------
// 2. Gestion de l'état de la Modale (Conservée)
// ------------------------------------
const isCartVisible = ref(false); // État initial : la modale est cachée
// AJOUTER : État qui contrôle l'affichage du badge de confirmation dans TheHeader
const showCartConfirmation = ref(false);
const cartStore = useCartStore();
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