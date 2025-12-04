<template>
  <div 
    class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden 
           transform hover:shadow-xl hover:border-green-400 transition duration-300 
           group flex flex-col h-full cursor-pointer"
    @click.stop="$emit('quickView', product)"
  >
    
    <!-- Image et Badges (Hauteur réduite : h-48 sm:h-56) -->
    <div class="relative overflow-hidden h-48 sm:h-56 bg-gray-50 flex items-center justify-center">
      <!-- Image du produit -->
      <img :src="product.imageUrl" :alt="product.name" 
        class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
      
      <!-- Conteneur des Badges -->
      <div class="absolute top-3 right-3 flex space-x-2 z-10">
        <!-- Badge PROMO (Rouge) -->
        <span v-if="product.isPromo" 
          class="px-3 py-1 text-xs font-bold bg-red-500 text-white rounded-full shadow-md">
          -{{ product.promoPercentage || 'XX' }}%
        </span>
        <!-- Badge NOUVEAU (Vert clair du thème) -->
        <span v-if="product.isNew" 
          class="px-3 py-1 text-xs font-bold bg-green-500 text-white rounded-full shadow-md">
          NEW
        </span>
      </div>
      
      <!-- Indicateur de Clic (Vue Rapide) -->
      <p class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white text-md font-bold bg-black/30">
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
        <button 
          @click.stop="$emit('addToCart', product)"
          class="block w-full text-center py-2 text-md font-bold 
                 bg-green-600 text-white rounded-lg 
                 hover:bg-green-700 transition duration-300 
                 shadow-lg shadow-green-500/50"
          aria-label="Ajouter au panier">
          <span class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1a1 1 0 000-2H3zM5 3h12a1 1 0 010 2H5a1 1 0 010-2zM4 6a1 1 0 000 2h12a1 1 0 000-2H4zM6 9a1 1 0 000 2h10a1 1 0 000-2H6z" />
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