<template>
  <!-- Le fond de la modale -->
  <Transition name="fade">
    <div v-if="isVisible && product"
      class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 transition-opacity"
      @click.self="$emit('close')">

      <!-- La modale elle-même -->
      <div @click.stop
        class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform scale-100 transition-all shadow-2xl">
        
        <!-- Bouton Fermer -->
        <button @click="$emit('close')"
          class="absolute top-4 right-4 p-2 bg-white rounded-full text-gray-700 hover:text-red-600 hover:bg-gray-100 transition z-10"
          aria-label="Fermer la modale">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="grid grid-cols-1 lg:grid-cols-2">
          
          <!-- Colonne 1: Image du Produit -->
          <div class="p-6">
            <img :src="product.imageUrl" :alt="product.name" class="w-full h-auto rounded-xl shadow-md" />
            <div class="mt-4 text-center text-sm text-gray-500">
              <p>Image non contractuelle. Plusieurs couleurs disponibles en magasin.</p>
            </div>
          </div>
          
          <!-- Colonne 2: Informations et Actions -->
          <div class="p-8 flex flex-col justify-between">
            <div>
              <!-- Badges et Marque -->
              <div class="flex items-center space-x-3 mb-2">
                <span v-if="product.isPromo" class="text-xs font-bold text-white bg-red-600 px-3 py-1 rounded-full">PROMO</span>
                <span v-if="product.isNew" class="text-xs font-bold text-white bg-blue-500 px-3 py-1 rounded-full">NOUVEAU</span>
                <span class="text-sm font-semibold text-gray-500">{{ product.brand }}</span>
              </div>
              
              <h2 class="text-3xl font-extrabold text-gray-900 mb-2">{{ product.name }}</h2>
              <p class="text-lg text-gray-600 mb-6">
                Monture de type <span class="font-medium text-green-600">{{ product.type === 'vue' ? 'Vue' : 'Solaire' }}</span>.
              </p>
              
              <!-- Description Détaillée (Placeholder) -->
              <div class="mb-6 border-t pt-4">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Détails Techniques</h3>
                <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Matériau: Acétate haute densité</li>
                  <li>Forme: {{ product.name.split(' ')[0] }}</li>
                  <li>Taille: 52-18-140</li>
                  <li>Catégorie: {{ product.type.toUpperCase() }}</li>
                </ul>
              </div>
            </div>

            <!-- Prix et Boutons d'Action -->
            <div class="mt-4 border-t pt-4">
              <div class="flex items-baseline space-x-3 mb-4">
                <span class="text-4xl font-extrabold text-green-700">
                  {{ product.price.toLocaleString('fr-FR') }} FCFA
                </span>
                <span v-if="product.isPromo" class="text-lg text-red-500 line-through">
                  {{ product.originalPrice.toLocaleString('fr-FR') }} FCFA
                </span>
              </div>
              
              <div class="flex space-x-4">
                <button 
                  class="flex-1 py-3 text-lg font-bold text-white bg-green-600 rounded-xl hover:bg-green-700 transition duration-300 shadow-lg"
                  @click="addToCart(product)">
                  Ajouter au Panier
                </button>
                <RouterLink :to="'/catalogue/' + product.id"
                  class="flex-1 flex items-center justify-center py-3 text-lg font-bold text-green-600 bg-white border-2 border-green-600 rounded-xl hover:bg-green-50 transition duration-300">
                  Voir Fiche Complète
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  product: {
    type: Object,
    default: null
  },
  isVisible: {
    type: Boolean,
    required: true
  }
});

defineEmits(['close']);

const addToCart = (product) => {
  // Logique d'ajout au panier (simulée pour l'instant)
  console.log(`Produit ${product.name} ajouté au panier !`);
  // Ici on pourrait émettre un événement pour incrémenter le compteur du panier global
};
</script>

<style scoped>
/* Transitions pour la Modale */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>