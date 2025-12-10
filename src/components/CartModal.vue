<template>
  <!-- 
    Conteneur Global (Invisible) : Gère la fermeture par clic à l'extérieur 
    Z-index à z-[90]
  -->
  <transition name="fade">
    <div v-if="isVisible" 
      class="fixed inset-0 z-[90] transition-opacity bg-black/30" 
      @click="emit('close')">
      
      <!-- Panneau du Panier (Contenu Visible) -->
      <transition name="slide-in">
        <div v-if="isVisible" 
          class="fixed right-0 top-0 h-full w-full md:max-w-sm bg-white/50 backdrop-blur-md shadow-2xl z-[100] overflow-y-auto flex flex-col "
          :class="{'translate-x-0': isVisible, 'translate-x-full': !isVisible}"
          @click.stop> <!-- Empêche la fermeture si l'on clique à l'intérieur -->
          
          <!-- En-tête du Panier -->
          <div class="sticky top-0 bg-white/90 backdrop-blur-sm p-4 flex justify-center items-center z-10 flex-shrink-0 relative">
            
            <!-- Titre Stylisé et Centré (Couleur Verte) -->
            <h2 class="text-2xl sm:text-3xl font-extrabold text-green-600 tracking-tight">Votre Panier</h2>
            <svg class="mx-auto h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            
            <!-- Bouton de fermeture (Position Absolue) -->
            <button @click="emit('close')" 
              class="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600 transition duration-150 p-2 rounded-full hover:bg-gray-100">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <!-- Corps du Panier : Liste des articles -->
          <div class="p-4 sm:p-6 flex-grow overflow-y-auto"> 
            
            <div v-if="cartItems.length === 0" class="text-center py-12">
              <!-- Icône (Couleur Verte) -->
              <svg class="mx-auto h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <h3 class="mt-2 text-lg font-medium text-gray-900">Votre panier est vide</h3>
              <p class="mt-1 text-sm text-gray-600">Ajoutez des montures pour commencer votre commande.</p>
            </div>

            <!-- Liste des articles (Bordure Verte) -->
            <ul role="list" class="divide-y divide-green-600">
              <li v-for="item in cartItems" :key="item.id" class="flex py-6">
                
                <!-- Image (Bordure Grise) -->
                <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-400">
                  <img :src="item.imageUrl" :alt="item.name" class="h-full w-full object-cover object-center">
                </div>

                <!-- Détails de l'article -->
                <div class="ml-4 flex flex-1 flex-col">
                  <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#" class="hover:text-green-600">{{ item.name }}</a>
                      </h3>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">{{ item.brand }}</p>
                  </div>
                  
                  <div class="mt-2">
                    <!-- Affichage des prix détaillé -->
                    <div class="text-right">
                      <template v-if="getItemPriceDetails(item).isPromo">
                        <!-- Prix normal (barré) -->
                        <p class="text-sm text-gray-500 line-through">
                          {{ formatCurrency(getItemPriceDetails(item).basePrice) }}
                        </p>
                        <!-- Réduction et prix final -->
                        <p class="text-sm text-red-600 font-semibold flex justify-end items-center space-x-2">
                          <span>-{{ getItemPriceDetails(item).promoPercentage }}%</span>
                          <!-- Ici, nous affichons le prix unitaire multiplié par la quantité -->
                          <span class="text-lg text-gray-900 font-bold">
                            {{ formatCurrency(getItemPriceDetails(item).finalPrice * item.quantity) }}
                          </span>
                        </p>
                      </template>
                      <!-- Ici, nous affichons le prix unitaire multiplié par la quantité -->
                      <p v-else class="text-lg font-bold text-gray-900">
                        {{ formatCurrency(getItemPriceDetails(item).finalPrice * item.quantity) }}
                      </p>
                    </div>
                  </div>
                  
                  <div class="flex flex-1 items-end justify-between text-sm mt-3 pt-2 border-t border-gray-100">
                    
                    <!-- Contrôles de Quantité (Couleur Verte) -->
                    <div class="flex items-center space-x-1">
                        <button 
                            @click="handleQuantityChange(item, -1)" 
                            :disabled="item.quantity <= 1"
                            class="p-1 w-8 h-8 rounded-full bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 transition duration-150">
                            −
                        </button>
                        <span class="w-8 text-center font-semibold text-gray-800">{{ item.quantity }}</span>
                        <button 
                            @click="handleQuantityChange(item, 1)" 
                            class="p-1 w-8 h-8 rounded-full bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 transition duration-150">
                            +
                        </button>
                    </div>

                    <!-- Bouton Retirer -->
                    <div class="flex">
                      <button @click="emit('removeItem', item.id)" type="button" class="font-medium text-red-600 hover:text-red-800 transition duration-150">
                        Supprimer
                      </button>
                    </div>
                  </div>

                </div>
              </li>
            </ul>
          </div>

          <!-- Pied de Page -->
          <div class="flex-shrink-0 bg-white/90 backdrop-blur-sm shadow-2xl p-4 sm:p-6">
            
            <!-- Sous-Total -->
            <div class="flex justify-between text-base font-medium text-gray-900 mb-2 ">
              <p>Sous-total</p>
              <p class="text-lg font-bold">{{ formatCurrency(totalPrice) }}</p>
            </div>

            <!-- Économies totales (Couleur Verte) -->
            <div v-if="totalSavings > 0"
                class="flex justify-between text-sm font-medium text-green-600 mb-4">
              <p>Vous économisez</p>
              <p class="font-semibold">{{ formatCurrency(totalSavings) }}</p>
            </div>

            <!-- Bouton Passer à la Caisse (CORRIGÉ : Ajout de l'événement click et appel de la fonction goToCheckout) -->
            <div class="mt-6">
              <button 
                @click="goToCheckout"
                :disabled="cartItems.length === 0"
                class="flex items-center justify-center rounded-xl border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-green-700 transition duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed">
                Passer à la caisse
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router'; // 1. Importation du Routeur
// Note: useCartStore n'est pas nécessaire ici car les données viennent des props (cartItems)


// Initialisation du Routeur
const router = useRouter();

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  cartItems: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['close', 'removeItem', 'updateQuantity']);

/**
 * Fonction de navigation vers la page de caisse.
 */
const goToCheckout = () => {
  if (props.cartItems.length > 0) {
    emit('close'); // Ferme le panneau latéral
    router.push('/checkout'); // Navigue vers la route de paiement
  }
};


/**
 * Gère le changement de quantité d'un article.
 * @param {Object} item L'objet article.
 * @param {number} delta Le changement de quantité (-1 ou 1).
 */
const handleQuantityChange = (item, delta) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity <= 0) {
        // Émet un événement pour retirer l'article si la quantité atteint zéro
        emit('removeItem', item.id);
    } else {
        emit('updateQuantity', item.id, newQuantity);
    }
};

/**
 * Fonction pour obtenir les prix unitaires détaillés d'un article.
 * NOTE : Cette fonction retourne les prix pour UNE SEULE unité.
 */
const getItemPriceDetails = (item) => {
    let finalPriceSingle = item.price; 
    let basePriceSingle = item.price;
    let reductionAmountSingle = 0;
    
    if (item.isPromo && item.originalPrice && item.promoPercentage > 0) {
        basePriceSingle = item.originalPrice;
        // Prix final = Prix d'origine - Réduction
        finalPriceSingle = item.originalPrice * (1 - item.promoPercentage / 100);
        reductionAmountSingle = item.originalPrice - finalPriceSingle;
    } 

    return {
        // Prix UNITAIRES arrondis
        basePrice: Math.round(basePriceSingle),
        finalPrice: Math.round(finalPriceSingle),
        reductionAmount: Math.round(reductionAmountSingle),
        isPromo: item.isPromo && item.promoPercentage > 0,
        promoPercentage: item.promoPercentage || 0,
    };
};

/**
 * Calcule le prix total du panier (somme des prix unitaires * quantité).
 */
const totalPrice = computed(() => {
  return props.cartItems.reduce((total, item) => {
    const details = getItemPriceDetails(item);
    // On multiplie le prix unitaire final par la quantité pour obtenir le total de la ligne
    return total + (details.finalPrice * item.quantity);
  }, 0);
});

/**
 * Calcule les économies totales réalisées sur le panier.
 */
const totalSavings = computed(() => {
    return props.cartItems.reduce((total, item) => {
        const details = getItemPriceDetails(item);
        // On multiplie l'économie unitaire par la quantité
        return total + (details.reductionAmount * item.quantity);
    }, 0);
});


// Fonction de formatage de la devise (Franc CFA Ouest Africain XOF)
const formatCurrency = (value) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF', // Code de devise standard pour le Franc CFA
    minimumFractionDigits: 0
  }).format(value);
};
</script>

<style scoped>
/* Transition pour l'arrière-plan */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Transition pour le panneau latéral (glissement depuis la droite) */
.slide-in-enter-active {
  /* Effet "Tiroir/Ressort" */
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); 
}
.slide-in-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(100%);
}

.flex-grow {
    flex-grow: 1;
}
.flex-shrink-0 {
    flex-shrink: 0;
}
</style>