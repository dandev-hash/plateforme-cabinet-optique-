<template>
  <div class="min-h-screen bg-gray-50 pt-10 pb-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Titre principal -->
      <h1 class="text-4xl font-extrabold text-gray-900 mb-8 text-center sm:text-left">
        Finaliser la Commande
      </h1>

      <!-- Contenu principal : Grille réactive (Formulaire et Résumé) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <!-- Colonne 1 : Formulaire de livraison et de paiement (2/3 sur grand écran) -->
        <div class="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
          
          <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">1. Informations de Livraison</h2>
          
          <!-- Formulaire de Livraison -->
          <form @submit.prevent="submitCheckout" class="space-y-6">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="first-name" class="block text-sm font-medium text-gray-700">Prénom</label>
                <input type="text" id="first-name" v-model="form.firstName" required
                  class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
              </div>
              <div>
                <label for="last-name" class="block text-sm font-medium text-gray-700">Nom de famille</label>
                <input type="text" id="last-name" v-model="form.lastName" required
                  class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Adresse e-mail</label>
              <input type="email" id="email" v-model="form.email" required
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
            </div>

            <div>
              <label for="address" class="block text-sm font-medium text-blue-700">Adresse complète</label>
              <input type="text" id="address" v-model="form.address" required
                class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="sm:col-span-2">
                <label for="city" class="block text-sm font-medium text-gray-700">Ville</label>
                <input type="text" id="city" v-model="form.city" required
                  class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
              </div>
              <div>
                <label for="postal-code" class="block text-sm font-medium text-gray-700">Code Postal</label>
                <input type="text" id="postal-code" v-model="form.postalCode" required
                  class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
              </div>
            </div>
            
            <!-- Séparateur de section -->
            <h2 class="text-2xl font-bold text-gray-800 pt-6 mt-8 border-t pb-3">2. Méthode de Paiement</h2>
            
            <!-- Placeholder pour le Paiement -->
            <div class="p-4 border-2 border-dashed border-gray-300 rounded-xl text-center text-gray-500 bg-gray-50">
                <p class="font-semibold">Intégration du système de paiement à venir (Stripe, CinetPay, etc.)</p>
                <p class="text-sm">Pour l'instant, validez votre commande ci-dessous.</p>
            </div>

          </form>

        </div>

        <!-- Colonne 2 : Résumé de la Commande (1/3 sur grand écran) -->
        <div class="lg:col-span-1">
          <div class="sticky top-10 bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
            
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Récapitulatif ({{ cartStore.totalItemsCount }} articles)</h2>
            
            <!-- LISTE DÉTAILLÉE DES ARTICLES DU PANIER -->
            <div class="space-y-4 pb-4 border-b border-gray-200 mb-6 max-h-96 overflow-y-auto pr-2">
                <div v-for="item in cartStore.items" :key="item.id" class="flex items-start space-x-4">
                    
                    <!-- Image et détails du produit -->
                    <img :src="item.imageUrl || `https://placehold.co/60x60/500/FFF?text=${item.name.substring(0, 1)}`" 
                         :alt="item.name" 
                         class="w-16 h-16 object-cover rounded-lg flex-shrink-0 border"
                         onerror="this.onerror=null;this.src=`https://placehold.co/60x60/500/FFF?text=P`">
                    
                    <div class="flex-grow">
                        <p class="font-semibold text-gray-900 leading-tight">{{ item.name }}</p>
                        <p class="text-sm text-gray-500">
                            {{ item.quantity }} x {{ formatCurrency(item.price) }}
                        </p>
                        <p v-if="item.discount > 0" class="text-xs text-red-500 font-medium">
                            Réduction : {{ formatCurrency(item.discount) }}
                        </p>
                    </div>

                    <!-- Total de la ligne -->
                    <div class="text-right flex-shrink-0">
                        <p class="font-bold text-gray-900">{{ formatCurrency(item.totalPrice) }}</p>
                    </div>
                </div>

                <p v-if="cartStore.items.length === 0" class="text-center text-gray-500 py-4">
                    Votre panier est vide.
                </p>
            </div>
            
            <!-- CALCULS DES TOTAUX -->
            <dl class="space-y-3">
              <!-- Sous-total -->
              <div class="flex justify-between">
                <dt class="text-gray-600">Sous-total des articles</dt>
                <dd class="font-medium text-gray-900">{{ formatCurrency(cartStore.totalPriceWithoutSavings) }}</dd>
              </div>

              <!-- Économies (si existantes) -->
              <div v-if="cartStore.totalSavings > 0" class="flex justify-between">
                <dt class="text-sm font-semibold text-green-600">Économies (Réductions)</dt>
                <dd class="text-sm font-semibold text-green-600">- {{ formatCurrency(cartStore.totalSavings) }}</dd>
              </div>
              
              <div class="flex justify-between pt-2 border-t border-gray-200">
                <dt class="text-gray-600">Total après réduction</dt>
                <dd class="font-medium text-gray-900">{{ formatCurrency(cartStore.totalPrice) }}</dd>
              </div>

              <!-- Frais de Livraison -->
              <div class="flex justify-between">
                <dt class="text-gray-600">Frais de Livraison</dt>
                <dd class="font-medium text-gray-900">{{ formatCurrency(shippingFee) }}</dd>
              </div>

              <!-- Grand Total -->
              <div class="flex justify-between border-t border-green-300 pt-4">
                <dt class="text-xl font-bold text-gray-900">Total à payer</dt>
                <dd class="text-2xl font-extrabold text-green-600">{{ formatCurrency(grandTotal) }}</dd>
              </div>
            </dl>

            <!-- BOUTON FINAL -->
            <button 
              @click="submitCheckout"
              :disabled="cartStore.items.length === 0"
              class="w-full mt-8 py-3 rounded-xl text-white font-bold text-lg shadow-green-600/50 shadow-lg transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-green-500/50"
              :class="cartStore.items.length > 0 ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'"
            >
              Passer la Commande ({{ formatCurrency(grandTotal) }})
            </button>
            
            <p class="text-xs text-gray-500 text-center mt-3">En cliquant, vous acceptez nos conditions générales de vente.</p>
            
          </div>
        </div>
        
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from '../stores/cartStore'; 
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();

// Données du formulaire
const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
});

// Frais de livraison fixe (à ajuster selon votre logique métier)
const shippingFee = 5000; 

// Calcul du total final (Total Panier Net + Frais de livraison)
const grandTotal = computed(() => {
    // cartStore.totalPrice est déjà le total des articles APRÈS réductions
    return cartStore.totalPrice + shippingFee; 
});

/**
 * Fonction de simulation de soumission de paiement
 */
const submitCheckout = () => {
    if (cartStore.items.length === 0) {
        console.error("Panier vide. Impossible de finaliser la commande.");
        return;
    }
    
    // Simplification : En production, une vérification plus poussée serait nécessaire.
    if (!form.value.firstName || !form.value.email) {
        console.error("Veuillez remplir au moins le prénom et l'e-mail pour la simulation.");
        return;
    }

    console.log("------------------------------------------");
    console.log("Commande simulée. Détails du client :", form.value);
    console.log("Montant total payé :", formatCurrency(grandTotal.value));
    console.log("------------------------------------------");
    
    // Remarque : Pour une commande réelle, vous ajouteriez ici un appel API
    // au service de paiement (Stripe, etc.) avant de vider le panier.

    // Redirection vers la page d'accueil pour l'exemple
    router.push('/'); 
};

// Fonction de formatage de la devise (Franc CFA Ouest Africain XOF)
const formatCurrency = (value) => {
  const finalValue = Math.round(value);
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0
  }).format(finalValue);
};
</script>