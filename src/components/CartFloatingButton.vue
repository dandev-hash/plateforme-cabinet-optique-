<template>
  <button @click="$emit('openCart')" :class="[
    'fixed bottom-8 right-8 lg:bottom-12 lg:right-12 z-50 p-6 transition-all duration-300 ease-in-out',
    'bg-white/50 backdrop-blur-md',
    'rounded-full aspect-square w-32 h-32 lg:w-36 lg:h-36 cursor-pointer shadow-2xl',
    'flex flex-col items-center justify-center space-y-1',
    'border-4 border-green-500 text-green-800',
    'transform hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-green-400/50',
    { 'pulse-halo-animation shadow-green-500/70': itemCount > 0 }
  ]" aria-label="Ouvrir le panier d'achat">

    <!-- Nouvelle Icône : Chariot de course classique -->
    <svg :class="['h-1/3 w-1/3 transition-transform duration-300 stroke-[2.5px]', { 'animate-jiggle': itemCount > 0 }]"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 12.87a2 2 0 0 0 2 1.13h9.72a2 2 0 0 0 2-1.13L23 6H6" />
    </svg>

    <!-- Texte (capitale, net, en vert) -->
    <span class="text-xs font-extrabold tracking-widest uppercase mt-1 text-green-800">
      Voir Panier
    </span>

    <!-- Badge du Compteur (rouge, grand, en haut à droite) -->
    <span :class="[
      'absolute -top-1 -right-1 lg:-top-3 lg:-right-3 px-3 py-1 text-lg font-extrabold rounded-full transition-all duration-300',
      'shadow-xl border-2 border-white',
      itemCount > 0 ? 'bg-red-600 text-white scale-100' : 'bg-gray-400 text-white scale-75'
    ]" aria-live="polite" aria-atomic="true">
      {{ itemCount }}
    </span>

  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cartStore';
const cartStore = useCartStore();
const itemCount = computed(() => cartStore.totalItemsCount);

// Définition des événements émis
defineEmits(['openCart']);
</script>

<style scoped>
/* Animation de HALO (Glow) RENFORCÉE pour plus de visibilité */
.pulse-halo-animation {
  /* Le halo sera plus grand et plus lumineux */
  animation: pulse-halo 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
}

@keyframes pulse-halo {
  0% {
    /* Halo initialement plus lumineux (95% opaque) */
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.95);
    /* Green-500 très lumineux */
  }

  70% {
    /* Le halo s'étend plus loin (35px) et devient très transparent */
    box-shadow: 0 0 0 35px rgba(16, 185, 129, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

/* Animation subtile pour l'icône du panier (légère secousse) */
.animate-jiggle {
  animation: jiggle 0.5s ease-in-out infinite alternate;
}

@keyframes jiggle {
  0% {
    transform: translateY(0px) rotate(0deg);
  }

  100% {
    transform: translateY(-2px) rotate(1deg);
  }
}

/* Rendre le bouton responsive sur les petits écrans */
@media (max-width: 640px) {
  button {
    width: 90px;
    height: 90px;
    padding: 10px;
    bottom: 30px;
    right: 15px;
  }

  /* Ajustement de la taille de la police pour mobile */
  .text-xs {
    font-size: 0.65rem;
    /* 10.4px */
  }
}
</style>