<template>
  <Transition name="fade">
    <div v-if="isVisible && product" 
      class="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 flex justify-center items-center p-4"
      @click.self="$emit('close')">
      
      <Transition name="slide-up">
        <div v-if="isVisible"
          class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden transform transition-all duration-300"
          @click.stop>
          
          <div class="relative flex flex-col lg:flex-row h-full">
            
            <!-- Bouton de Fermeture -->
            <button @click="$emit('close')"
              class="absolute top-4 right-4 z-20 p-2 text-gray-500 hover:text-gray-900 bg-white rounded-full shadow-lg transition duration-150 focus:outline-none focus:ring-2 focus:ring-green-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <!-- Colonne Image -->
            <div class="lg:w-1/2 p-6 bg-gray-50 flex items-center justify-center relative">
              <img :src="product.imageUrl" :alt="product.name" class="max-h-[60vh] w-full object-contain rounded-xl mix-blend-multiply" />
            </div>

            <!-- Colonne Détails -->
            <div class="lg:w-1/2 p-8 overflow-y-auto">
              
              <!-- Marque & Catégorie -->
              <p class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{{ product.brand }}</p>
              <span class="inline-block text-sm font-medium px-3 py-1 rounded-full capitalize mb-4"
                    :class="product.type === 'vue' ? 'bg-indigo-100 text-indigo-800' : 'bg-yellow-100 text-yellow-800'">
                  {{ product.type === 'vue' ? 'Lunettes de Vue' : 'Lunettes de Soleil' }}
              </span>

              <h2 class="text-3xl font-extrabold text-gray-900 mb-4">{{ product.name }}</h2>

              <!-- Prix -->
              <div class="flex items-baseline mb-6">
                <span class="text-4xl font-extrabold" :class="{'text-red-600': product.isPromo, 'text-gray-900': !product.isPromo}">
                  {{ formatPrice(product.price) }}
                </span>
                <span v-if="product.isPromo && product.originalPrice" class="ml-4 text-xl text-gray-500 line-through">
                  {{ formatPrice(product.originalPrice) }}
                </span>
              </div>
              
              <!-- Description rapide -->
              <p class="text-gray-600 mb-6 border-t pt-4">
                Une monture au style **{{ product.shape }}** et de couleur **{{ product.color }}**. 
                Parfait pour un look moderne et sophistiqué. Conçu par la marque **{{ product.brand }}**.
                (Ceci est une description générique pour l'exemple.)
              </p>

              <!-- Statut du Panier et Bouton -->
              <div class="space-y-4">
                
                <p v-if="successMessage" class="text-sm font-medium text-green-700 bg-green-100 p-3 rounded-lg flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {{ successMessage }}
                </p>

                <button
                  @click="addItemToCart"
                  :disabled="isProductInCart"
                  :class="[
                    'w-full flex items-center justify-center px-4 py-3 text-lg font-bold rounded-xl transition duration-200 shadow-xl',
                    isProductInCart ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'
                  ]">
                  <svg v-if="isProductInCart" class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <svg v-else class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h7a4 4 0 004-4v-3m-3 2l-4-4m0 0l-4 4m4-4V3"></path></svg>
                  {{ isProductInCart ? 'Déjà dans le panier' : 'Ajouter au Panier' }}
                </button>
                
                <!-- Lien pour voir les détails complets (Mock) -->
                <button @click="$emit('close')" class="w-full text-center text-sm text-gray-500 hover:text-green-600 transition duration-150">
                    Voir les détails complets du produit
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </Transition>

    </div>
  </Transition>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useCartStore } from '../stores/cartStore'; 

// Props
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  product: {
    type: Object,
    default: null,
  }
});

// Événements
const emit = defineEmits(['close']);

// 1. Initialisation du Store
const cartStore = useCartStore();

// 2. État local pour le message de succès
const successMessage = ref('');
let successTimeout = null;

// 3. Computed Property pour l'état du panier
const isProductInCart = computed(() => {
  if (!props.product) return false;
  return cartStore.isItemInCart(props.product.id);
});

// 4. Fonction pour ajouter au panier
const addItemToCart = () => {
  if (props.product && !isProductInCart.value) {
    cartStore.addItem(props.product);
    
    // Affichage du message de succès
    successMessage.value = `${props.product.name} a été ajouté à votre panier !`;
    
    // Efface l'ancien timeout pour réinitialiser le compte à rebours
    if (successTimeout) clearTimeout(successTimeout);

    // Cache le message après 3 secondes
    successTimeout = setTimeout(() => {
        successMessage.value = '';
    }, 3000);
  }
};

// Réinitialiser le message de succès lorsque la modale est fermée
watch(() => props.isVisible, (newVal) => {
    if (!newVal) {
        successMessage.value = '';
        if (successTimeout) clearTimeout(successTimeout);
    }
});


// Fonction de formatage (Reste inchangée)
const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price).replace('XOF', 'FCFA');
};
</script>

<style scoped>
/* Styles de transition pour la modale */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Styles de transition pour le contenu de la modale */
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease-out;
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>