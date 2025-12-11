<template>
  <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden 
           transform hover:shadow-xl hover:border-green-400 transition duration-300 
           group flex flex-col h-full cursor-pointer" @click.stop="$emit('quickView', product)">

    <!-- Image et Badges (Hauteur réduite : h-48 sm:h-56) -->
    <div class="relative overflow-hidden h-48 sm:h-56 bg-gray-50 flex items-center justify-center">
      <!-- Image du produit -->
      <img :src="product.imageUrl" :alt="product.name"
        class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />

      <!-- Conteneur des Badges -->
      <div class="absolute top-3 left-3 flex flex-col space-y-2 z-10">
        <!-- Badge PROMO (Design moderne avec dégradé) -->
        <div v-if="product.isPromo"
          class="relative overflow-hidden backdrop-blur-sm bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1.5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <div class="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-extrabold tracking-wide">-{{ product.promoPercentage || 'XX' }}%</span>
          </div>
          <!-- Effet de brillance -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shine">
          </div>
        </div>

        <!-- Badge NOUVEAU (Design moderne avec dégradé or plus doux) -->
        <div v-if="product.isNew"
          class="relative overflow-hidden backdrop-blur-sm bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 text-white px-3 py-1.5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <div class="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="text-sm font-extrabold tracking-wide">NEW</span>
          </div>
          <!-- Effet de brillance réduit -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 animate-shine-intense">
          </div>
        </div>
      </div>

      <!-- Indicateur de Clic (Vue Rapide) -->
      <p
        class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white text-md font-bold bg-black/30">
        APERÇU RAPIDE &rarr;
      </p>
    </div>

    <!-- Détails du produit et Actions -->
    <div class="p-4 flex flex-col justify-between flex-grow">
      <div>
        <!-- Informations de Base -->
        <h3 class="text-lg font-extrabold text-gray-800 mb-1 leading-tight">{{ product.name }}</h3>
        <p class="text-xs text-gray-500 mb-3">{{ product.brand }} - {{ product.type === 'vue' ? 'Vue' : 'Solaire' }}</p>
      </div>

      <!-- Prix et Boutons d'Action -->
      <div class="pt-3 border-t border-gray-100 mt-auto">

        <!-- Affichage du Prix -->
        <div class="flex items-baseline space-x-2 mb-3">
          <!-- Prix Principal en Vert Thème -->
          <span class="text-2xl font-extrabold text-green-600">
            {{ product.price.toLocaleString('fr-FR') }} FCFA
          </span>
          <span v-if="product.isPromo" class="text-sm text-gray-400 line-through">
            {{ product.originalPrice.toLocaleString('fr-FR') }} FCFA
          </span>
        </div>

        <!-- Bouton Ajouter au Panier (couleur du thème) -->
        <!-- @click.stop est essentiel pour ne pas déclencher la vue rapide -->
        <button @click.stop="$emit('addToCart', product)" class="block w-full text-center py-2 text-md font-bold 
                 bg-green-600 text-white rounded-lg 
                 hover:bg-green-700 transition duration-300 
                 shadow-lg shadow-green-500/50" aria-label="Ajouter au panier">
          <span class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M3 1a1 1 0 000 2h1a1 1 0 000-2H3zM5 3h12a1 1 0 010 2H5a1 1 0 010-2zM4 6a1 1 0 000 2h12a1 1 0 000-2H4zM6 9a1 1 0 000 2h10a1 1 0 000-2H6z" />
            </svg>
            Ajouter au Panier
          </span>
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
// Définition des propriétés (props)
defineProps({
  product: {
    type: Object,
    required: true,
  }
});

// Définition des événements émis
defineEmits(['quickView', 'addToCart']);
</script>

<style scoped>
/* Animation de brillance standard */
@keyframes shine {
  0% {
    transform: translateX(-100%) skewX(-12deg);
  }

  100% {
    transform: translateX(200%) skewX(-12deg);
  }
}

/* Animation de brillance intense pour NEW */
@keyframes shine-intense {
  0% {
    transform: translateX(-100%) skewX(-12deg);
  }

  50% {
    opacity: 0.8;
  }

  100% {
    transform: translateX(200%) skewX(-12deg);
  }
}

/* Animation de brillance inverse */
@keyframes shine-reverse {
  0% {
    transform: translateX(100%) skewX(12deg);
  }

  100% {
    transform: translateX(-200%) skewX(12deg);
  }
}

.animate-shine {
  animation: shine 3s ease-in-out infinite;
}

.animate-shine-intense {
  animation: shine-intense 2s ease-in-out infinite;
}

.animate-shine-reverse {
  animation: shine-reverse 2.5s ease-in-out infinite 0.5s;
}
</style>