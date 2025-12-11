<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <div class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 sm:py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl font-extrabold">Finaliser votre Commande</h1>
        <p class="text-gray-300 mt-2">Sécurisé et rapide</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- Étapes de progression -->
      <div class="mb-12">
        <div class="flex items-center justify-between mb-8">
          <div v-for="(step, index) in steps" :key="index" class="flex items-center flex-1">
            <!-- Cercle de l'étape -->
            <div :class="[
              'flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg transition-all duration-300',
              currentStep >= index ? 'bg-green-600 text-white shadow-lg' : 'bg-gray-200 text-gray-600'
            ]">
              {{ index + 1 }}
            </div>
            <!-- Label -->
            <div class="ml-3">
              <p :class="['font-semibold', currentStep >= index ? 'text-green-600' : 'text-gray-600']">
                {{ step }}
              </p>
            </div>
            <!-- Ligne de connexion -->
            <div v-if="index < steps.length - 1" :class="[
              'flex-1 h-1 mx-4 transition-all duration-300',
              currentStep > index ? 'bg-green-600' : 'bg-gray-300'
            ]"></div>
          </div>
        </div>
      </div>

      <!-- Contenu principal : Grille réactive (Formulaire et Résumé) -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">

        <!-- Colonne 1 & 2 : Formulaire de livraison et de paiement (2/3 sur grand écran) -->
        <div class="lg:col-span-2">

          <!-- ÉTAPE 1: LIVRAISON -->
          <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden mb-8">
            <div class="bg-gradient-to-r from-green-600 to-green-700 px-6 sm:px-8 py-4 flex items-center">
              <div
                class="flex items-center justify-center w-10 h-10 bg-white text-green-600 rounded-full font-bold mr-3">1
              </div>
              <h2 class="text-2xl font-bold text-white">Vos Informations</h2>
            </div>
            <div class="p-6 sm:p-8">
              <form class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="first-name" class="block text-sm font-semibold text-gray-700 mb-2">Prénom</label>
                    <input type="text" id="first-name" v-model="form.firstName" required
                      class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition">
                  </div>
                  <div>
                    <label for="last-name" class="block text-sm font-semibold text-gray-700 mb-2">Nom de famille</label>
                    <input type="text" id="last-name" v-model="form.lastName" required
                      class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition">
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Adresse e-mail</label>
                  <input type="email" id="email" v-model="form.email" required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition">
                </div>

                <div>
                  <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" id="phone" v-model="form.phone" required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition">
                </div>

                <div>
                  <label for="address" class="block text-sm font-semibold text-gray-700 mb-2">Adresse complète</label>
                  <input type="text" id="address" v-model="form.address" required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition">
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div class="sm:col-span-2">
                    <label for="city" class="block text-sm font-semibold text-gray-700 mb-2">Ville</label>
                    <input type="text" id="city" v-model="form.city" required
                      class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition">
                  </div>
                  <div>
                    <label for="postal-code" class="block text-sm font-semibold text-gray-700 mb-2">Code Postal</label>
                    <input type="text" id="postal-code" v-model="form.postalCode" required
                      class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition">
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- ÉTAPE 2: PAIEMENT -->
          <div class="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
            <div class="bg-gradient-to-r from-green-600 to-green-700 px-6 sm:px-8 py-4 flex items-center">
              <div
                class="flex items-center justify-center w-10 h-10 bg-white text-green-600 rounded-full font-bold mr-3">2
              </div>
              <h2 class="text-2xl font-bold text-white">Méthode de Paiement</h2>
            </div>
            <div class="p-6 sm:p-8">
              <div class="p-6 border-2 border-dashed border-gray-300 rounded-xl text-center bg-gray-50">
                <p class="font-semibold text-gray-700">💳 Intégration Paiement à venir</p>
                <p class="text-sm text-gray-600 mt-2">Stripe • CinetPay • MTN Money</p>
              </div>
            </div>
          </div>
        </div>


        <!-- Colonne 3 : Votre Commande -->
        <div class="lg:col-span-2">
          <div class="sticky top-20 bg-white rounded-2xl shadow-xl border-2 border-gray-100 h-fit">

            <!-- Header de la commande -->
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6 text-white">
              <h2 class="text-3xl font-bold">Votre Commande</h2>
              <p class="text-gray-300 text-base mt-1">{{ cartStore.totalItemsCount }} article(s)</p>
            </div>

            <!-- Contenu -->
            <div class="p-8">
              <!-- DÉTAILS DES ARTICLES -->
              <div class="space-y-4 pb-6 border-b border-gray-300 mb-6 max-h-96 overflow-y-auto">
                <div v-for="item in cartStore.items" :key="item.id" class="pb-4 border-b border-gray-200">

                  <!-- Nom du produit -->
                  <p class="font-bold text-gray-900 mb-3">{{ item.name }}</p>

                  <!-- Détails simples -->
                  <div class="space-y-2 text-sm text-gray-700">
                    <div class="flex justify-between">
                      <span>Quantité : {{ item.quantity }}</span>
                      <span>{{ formatCurrency(item.price) }} / unité</span>
                    </div>

                    <!-- Prix initial (prix barré du catalogue) -->
                    <div v-if="item.originalPrice" class="flex justify-between text-gray-700">
                      <span>Prix initial :</span>
                      <span class="line-through">{{ formatCurrency(item.quantity * item.originalPrice) }}</span>
                    </div>

                    <!-- Promo si applicable -->
                    <div v-if="item.isPromo && item.promoPercentage > 0" class="flex justify-between text-red-600">
                      <span>Réduction (-{{ item.promoPercentage }}%)</span>
                      <span>-{{ formatCurrency((item.quantity * item.price) * (item.promoPercentage / 100)) }}</span>
                    </div>

                    <!-- Prix total -->
                    <div class="flex justify-between font-bold text-gray-900 pt-2 border-t">
                      <span>Prix total :</span>
                      <span class="text-green-600">{{ formatCurrency(item.totalPrice || (item.quantity * item.price))
                      }}</span>
                    </div>
                  </div>
                </div>

                <p v-if="cartStore.items.length === 0" class="text-center text-gray-500 py-8">
                  Votre panier est vide.
                </p>
              </div>

              <!-- RÉSUMÉ FINANCIER -->
              <div class="space-y-3 mb-6">
                <div class="flex justify-between text-gray-700">
                  <span>Sous-total :</span>
                  <span class="font-semibold">{{ formatCurrency(cartStore.totalPrice || 0) }}</span>
                </div>

                <div v-if="totalSavings > 0" class="flex justify-between text-green-600">
                  <span>Économies :</span>
                  <span class="font-semibold">-{{ formatCurrency(totalSavings) }}</span>
                </div>

                <!-- TOTAL -->
                <div class="flex justify-between text-xl font-bold text-gray-900 pt-4 border-t-2 border-gray-300">
                  <span>Total à payer :</span>
                  <span class="text-green-600">{{ formatCurrency(grandTotal) }}</span>
                </div>
              </div>

              <!-- BOUTON PASSER LA COMMANDE -->
              <button @click="submitCheckout" :disabled="cartStore.items.length === 0 || !isFormValid"
                class="w-full py-4 rounded-xl text-white font-bold text-lg transition duration-300 hover:shadow-lg"
                :class="isFormValid && cartStore.items.length > 0 ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'">
                {{ isFormValid ? 'Passer la Commande' : 'Veuillez remplir le formulaire' }}
              </button>

              <p class="text-xs text-gray-500 text-center mt-4">
                🔒 Paiement sécurisé
              </p>
            </div>
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

// Étapes du processus
const steps = ['Vos Informations', 'Paiement'];
const currentStep = ref(0);

// Données du formulaire
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  postalCode: '',
});

// Promo code
const promoCode = ref('');
const promoApplied = ref(false);
const promoError = ref('');
const promoDiscount = ref(0);

// Calcul des économies totales (promos sur les produits)
const totalSavings = computed(() => {
  return cartStore.items.reduce((sum, item) => {
    if (item.isPromo && item.promoPercentage > 0) {
      return sum + ((item.quantity * item.price) * (item.promoPercentage / 100));
    }
    return sum;
  }, 0);
});

// Validation du formulaire
const isFormValid = computed(() => {
  return form.value.firstName &&
    form.value.lastName &&
    form.value.email &&
    form.value.phone &&
    form.value.address &&
    form.value.city &&
    form.value.postalCode;
});

// Calcul du total final (sans livraison)
const grandTotal = computed(() => {
  return cartStore.totalPrice - promoDiscount.value;
});

// Appliquer code promo
const applyPromoCode = () => {
  promoError.value = '';
  promoApplied.value = false;

  if (!promoCode.value.trim()) {
    promoError.value = 'Veuillez entrer un code promo';
    return;
  }

  // Codes promo simulés
  const validPromos = {
    'BIENVENUE10': 0.10,
    'OPTIQUE15': 0.15,
    'PROMO20': 0.20,
  };

  const discount = validPromos[promoCode.value.toUpperCase()];

  if (discount) {
    promoDiscount.value = Math.round(cartStore.totalPrice * discount);
    promoApplied.value = true;
  } else {
    promoError.value = 'Code promo invalide';
  }
};

/**
 * Fonction de soumission de commande
 */
const submitCheckout = () => {
  if (cartStore.items.length === 0) {
    alert("Panier vide. Impossible de finaliser la commande.");
    return;
  }

  if (!isFormValid.value) {
    alert("Veuillez remplir tous les champs du formulaire.");
    return;
  }

  console.log("------------------------------------------");
  console.log("📋 Commande - Informations Client:", form.value);
  console.log("🛍️ Articles:", cartStore.items);
  console.log("💰 Montant total:", formatCurrency(grandTotal.value));
  console.log("------------------------------------------");

  // Simuler le traitement de la commande
  alert(`✅ Commande validée!\n\nTotal: ${formatCurrency(grandTotal.value)}\n\nVous serez redirigé...`);

  // Redirection après 2 secondes
  setTimeout(() => {
    router.push('/');
  }, 2000);
};

// Fonction de formatage de la devise
const formatCurrency = (value) => {
  const finalValue = Math.round(value);
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0
  }).format(finalValue);
};
</script>