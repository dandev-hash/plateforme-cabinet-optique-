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
              'flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full font-bold text-base sm:text-lg transition-all duration-300 relative',
              currentStep >= index ? 'bg-green-600 text-white shadow-lg' : 'bg-gray-200 text-gray-600'
            ]">
              <!-- Numéro ou check -->
              <transition name="check" mode="out-in">
                <span v-if="currentStep > index" key="check" class="text-xl sm:text-2xl animate-check">✓</span>
                <span v-else key="number">{{ index + 1 }}</span>
              </transition>
            </div>
            <!-- Label (caché sur mobile) -->
            <div class="ml-2 sm:ml-3 hidden sm:block">
              <p
                :class="['font-semibold text-sm sm:text-base', currentStep >= index ? 'text-green-600' : 'text-gray-600']">
                {{ step }}
              </p>
            </div>
            <!-- Ligne de connexion -->
            <div v-if="index < steps.length - 1" :class="[
              'flex-1 h-1 mx-2 sm:mx-4 transition-all duration-300',
              currentStep > index ? 'bg-green-600' : 'bg-gray-300'
            ]"></div>
          </div>
        </div>
      </div>

      <!-- Contenu principal : Grille réactive (Formulaire et Résumé) -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">

        <!-- Colonne 1 & 2 : Formulaire de livraison et de paiement (2/3 sur grand écran) -->
        <div class="lg:col-span-2">

          <!-- ÉTAPE 1: VOS INFORMATIONS -->
          <Transition name="slide-fade" mode="out-in">
            <div v-if="currentStep === 0" key="step-1"
              class="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden mb-8">
              <div class="bg-gradient-to-r from-green-600 to-green-700 px-6 sm:px-8 py-4 flex items-center">
                <div
                  class="flex items-center justify-center w-10 h-10 bg-white text-green-600 rounded-full font-bold mr-3">
                  1
                </div>
                <h2 class="text-2xl font-bold text-white">Vos Informations</h2>
              </div>
              <div class="p-6 sm:p-8">
                <form class="space-y-6">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label for="first-name" class="block text-sm font-semibold text-gray-700 mb-2">
                        Prénom
                        <span v-if="shouldShowSuccess('firstName')" class="text-green-600 ml-2">✓</span>
                        <span v-if="shouldShowError('firstName')" class="text-red-600 ml-2">✗</span>
                      </label>
                      <input type="text" id="first-name" v-model="form.firstName" @blur="markTouched('firstName')"
                        required :class="[
                          'w-full px-4 py-3 border-2 rounded-lg focus:ring-2 transition',
                          shouldShowError('firstName') ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' :
                            shouldShowSuccess('firstName') ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' :
                              'border-gray-200 focus:border-green-500 focus:ring-green-500/20'
                        ]">
                      <p v-if="shouldShowError('firstName')" class="text-red-600 text-xs mt-1">
                        {{ fieldValidation.firstName.message }}
                      </p>
                    </div>
                    <div>
                      <label for="last-name" class="block text-sm font-semibold text-gray-700 mb-2">
                        Nom de famille
                        <span v-if="shouldShowSuccess('lastName')" class="text-green-600 ml-2">✓</span>
                        <span v-if="shouldShowError('lastName')" class="text-red-600 ml-2">✗</span>
                      </label>
                      <input type="text" id="last-name" v-model="form.lastName" @blur="markTouched('lastName')" required
                        :class="[
                          'w-full px-4 py-3 border-2 rounded-lg focus:ring-2 transition',
                          shouldShowError('lastName') ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' :
                            shouldShowSuccess('lastName') ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' :
                              'border-gray-200 focus:border-green-500 focus:ring-green-500/20'
                        ]">
                      <p v-if="shouldShowError('lastName')" class="text-red-600 text-xs mt-1">
                        {{ fieldValidation.lastName.message }}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse e-mail
                      <span v-if="shouldShowSuccess('email')" class="text-green-600 ml-2">✓</span>
                      <span v-if="shouldShowError('email')" class="text-red-600 ml-2">✗</span>
                    </label>
                    <input type="email" id="email" v-model="form.email" @blur="markTouched('email')" required :class="[
                      'w-full px-4 py-3 border-2 rounded-lg focus:ring-2 transition',
                      shouldShowError('email') ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' :
                        shouldShowSuccess('email') ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' :
                          'border-gray-200 focus:border-green-500 focus:ring-green-500/20'
                    ]">
                    <p v-if="shouldShowError('email')" class="text-red-600 text-xs mt-1">
                      {{ fieldValidation.email.message }}
                    </p>
                  </div>

                  <div>
                    <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                      <span v-if="shouldShowSuccess('phone')" class="text-green-600 ml-2">✓</span>
                      <span v-if="shouldShowError('phone')" class="text-red-600 ml-2">✗</span>
                    </label>
                    <input type="tel" id="phone" v-model="form.phone" @blur="markTouched('phone')" required :class="[
                      'w-full px-4 py-3 border-2 rounded-lg focus:ring-2 transition',
                      shouldShowError('phone') ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' :
                        shouldShowSuccess('phone') ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' :
                          'border-gray-200 focus:border-green-500 focus:ring-green-500/20'
                    ]">
                    <p v-if="shouldShowError('phone')" class="text-red-600 text-xs mt-1">
                      {{ fieldValidation.phone.message }}
                    </p>
                  </div>

                  <div>
                    <label for="address" class="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse complète
                      <span v-if="shouldShowSuccess('address')" class="text-green-600 ml-2">✓</span>
                      <span v-if="shouldShowError('address')" class="text-red-600 ml-2">✗</span>
                    </label>
                    <input type="text" id="address" v-model="form.address" @blur="markTouched('address')" required
                      :class="[
                        'w-full px-4 py-3 border-2 rounded-lg focus:ring-2 transition',
                        shouldShowError('address') ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' :
                          shouldShowSuccess('address') ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' :
                            'border-gray-200 focus:border-green-500 focus:ring-green-500/20'
                      ]">
                    <p v-if="shouldShowError('address')" class="text-red-600 text-xs mt-1">
                      {{ fieldValidation.address.message }}
                    </p>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="sm:col-span-2">
                      <label for="city" class="block text-sm font-semibold text-gray-700 mb-2">
                        Ville
                        <span v-if="shouldShowSuccess('city')" class="text-green-600 ml-2">✓</span>
                        <span v-if="shouldShowError('city')" class="text-red-600 ml-2">✗</span>
                      </label>
                      <input type="text" id="city" v-model="form.city" @blur="markTouched('city')" required :class="[
                        'w-full px-4 py-3 border-2 rounded-lg focus:ring-2 transition',
                        shouldShowError('city') ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' :
                          shouldShowSuccess('city') ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' :
                            'border-gray-200 focus:border-green-500 focus:ring-green-500/20'
                      ]">
                      <p v-if="shouldShowError('city')" class="text-red-600 text-xs mt-1">
                        {{ fieldValidation.city.message }}
                      </p>
                    </div>
                    <div>
                      <label for="postal-code" class="block text-sm font-semibold text-gray-700 mb-2">
                        Code Postal
                        <span v-if="shouldShowSuccess('postalCode')" class="text-green-600 ml-2">✓</span>
                        <span v-if="shouldShowError('postalCode')" class="text-red-600 ml-2">✗</span>
                      </label>
                      <input type="text" id="postal-code" v-model="form.postalCode" @blur="markTouched('postalCode')"
                        required :class="[
                          'w-full px-4 py-3 border-2 rounded-lg focus:ring-2 transition',
                          shouldShowError('postalCode') ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' :
                            shouldShowSuccess('postalCode') ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' :
                              'border-gray-200 focus:border-green-500 focus:ring-green-500/20'
                        ]">
                      <p v-if="shouldShowError('postalCode')" class="text-red-600 text-xs mt-1">
                        {{ fieldValidation.postalCode.message }}
                      </p>
                    </div>
                  </div>
                </form>

                <!-- Bouton Suivant -->
                <div class="mt-6">
                  <button @click="nextStep" :disabled="!isFormValid"
                    class="w-full py-3 rounded-lg text-white font-bold transition"
                    :class="isFormValid ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'">
                    Suivant →
                  </button>
                </div>
              </div>
            </div>
          </Transition>

          <!-- ÉTAPE 2: PAIEMENT -->
          <Transition name="slide-fade" mode="out-in">
            <div v-if="currentStep === 1" key="step-2"
              class="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden mb-8">
              <div class="bg-gradient-to-r from-green-600 to-green-700 px-6 sm:px-8 py-4 flex items-center">
                <div
                  class="flex items-center justify-center w-10 h-10 bg-white text-green-600 rounded-full font-bold mr-3">
                  2
                </div>
                <h2 class="text-2xl font-bold text-white">Méthode de Paiement</h2>
              </div>
              <div class="p-6 sm:p-8">
                <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
                  <p class="text-blue-800 font-semibold text-center">
                    ℹ️ Paiement à effectuer lors de votre visite au cabinet
                  </p>
                </div>

                <div class="space-y-4">
                  <!-- Option 1: Espèces -->
                  <label
                    class="flex items-start gap-4 p-4 border-2 rounded-xl cursor-pointer transition hover:border-green-500 hover:bg-green-50"
                    :class="form.paymentMethod === 'cash' ? 'border-green-500 bg-green-50' : 'border-gray-200'">
                    <input type="radio" name="payment" value="cash" v-model="form.paymentMethod" class="mt-1">
                    <div class="flex-1">
                      <div class="flex items-center gap-3">
                        <span class="text-3xl">💵</span>
                        <div>
                          <p class="font-bold text-gray-900">Espèces (Cash)</p>
                          <p class="text-sm text-gray-600">Paiement en liquide au cabinet ou à la livraison</p>
                        </div>
                      </div>
                    </div>
                  </label>

                  <!-- Option 2: Mobile Money -->
                  <label
                    class="flex items-start gap-4 p-4 border-2 rounded-xl cursor-pointer transition hover:border-green-500 hover:bg-green-50"
                    :class="form.paymentMethod === 'mobile-money' ? 'border-green-500 bg-green-50' : 'border-gray-200'">
                    <input type="radio" name="payment" value="mobile-money" v-model="form.paymentMethod" class="mt-1">
                    <div class="flex-1">
                      <div class="flex items-center gap-3">
                        <span class="text-3xl">📱</span>
                        <div>
                          <p class="font-bold text-gray-900">Mobile Money</p>
                          <p class="text-sm text-gray-600">Orange Money • MTN Mobile Money</p>
                          <p class="text-xs text-gray-500 mt-1">Paiement lors de la réception</p>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                <!-- Boutons Navigation -->
                <div class="mt-6 flex gap-3">
                  <button @click="prevStep"
                    class="flex-1 py-3 rounded-lg border-2 border-green-600 text-green-600 font-bold hover:bg-green-50 transition">
                    ← Précédent
                  </button>
                  <button @click="nextStep" :disabled="!form.paymentMethod"
                    class="flex-1 py-3 rounded-lg text-white font-bold transition"
                    :class="form.paymentMethod ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'">
                    Suivant →
                  </button>
                </div>
              </div>
            </div>
          </Transition>

          <!-- ÉTAPE 3: VALIDATION -->
          <Transition name="slide-fade" mode="out-in">
            <div v-if="currentStep === 2" key="step-3"
              class="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-600 to-blue-700 px-6 sm:px-8 py-4 flex items-center">
                <div
                  class="flex items-center justify-center w-10 h-10 bg-white text-blue-600 rounded-full font-bold mr-3">
                  3
                </div>
                <h2 class="text-2xl font-bold text-white">Validation de la commande</h2>
              </div>
              <div class="p-6 sm:p-8">
                <!-- Récapitulatif des informations -->
                <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                  <h3 class="font-bold text-green-900 text-lg mb-4">✓ Informations de livraison</h3>

                  <div class="space-y-3 text-sm">
                    <div class="flex justify-between">
                      <span class="text-gray-600">Nom complet :</span>
                      <span class="font-semibold">{{ form.firstName }} {{ form.lastName }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Email :</span>
                      <span class="font-semibold">{{ form.email }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Téléphone :</span>
                      <span class="font-semibold">{{ form.phone }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Adresse :</span>
                      <span class="font-semibold">{{ form.address }}, {{ form.city }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Mode de paiement :</span>
                      <span class="font-semibold">{{ form.paymentMethod === 'cash' ? 'Espèces' : 'Mobile Money'
                      }}</span>
                    </div>
                  </div>
                </div>

                <!-- Mini-résumé de la commande -->
                <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                  <h3 class="font-bold text-blue-900 text-lg mb-4">🛍️ Résumé de votre commande</h3>

                  <div class="space-y-3">
                    <!-- Liste des articles -->
                    <div class="space-y-2 max-h-40 overflow-y-auto">
                      <div v-for="item in cartStore.items" :key="item.id" class="flex justify-between text-sm">
                        <span class="text-gray-700">
                          <span class="font-semibold text-blue-900">{{ item.quantity }}x</span> {{ item.name }}
                        </span>
                        <span class="font-semibold text-gray-900">{{ formatCurrency(item.totalPrice || (item.quantity *
                          item.price)) }}</span>
                      </div>
                    </div>

                    <div class="border-t-2 border-blue-300 pt-3 mt-3">
                      <div v-if="totalSavings > 0" class="flex justify-between text-sm text-green-600 mb-2">
                        <span class="font-semibold">Économies :</span>
                        <span class="font-bold">-{{ formatCurrency(totalSavings) }}</span>
                      </div>
                      <div class="flex justify-between text-lg font-bold text-blue-900">
                        <span>Total à payer :</span>
                        <span class="text-2xl">{{ formatCurrency(grandTotal) }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Case à cocher CGV -->
                <div class="bg-gray-50 border-2 border-gray-200 rounded-xl p-4 mb-6">
                  <label class="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" v-model="acceptedTerms"
                      class="mt-1 w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-green-500 cursor-pointer">
                    <span class="text-sm text-gray-700 group-hover:text-gray-900 transition">
                      J'accepte les
                      <a href="#" class="text-green-600 font-semibold hover:underline">conditions générales de vente</a>
                      et la
                      <a href="#" class="text-green-600 font-semibold hover:underline">politique de confidentialité</a>
                    </span>
                  </label>
                  <p v-if="!acceptedTerms" class="text-xs text-gray-500 mt-2 ml-8">
                    ⚠️ Vous devez accepter les conditions pour continuer
                  </p>
                </div>

                <!-- Boutons Navigation -->
                <div class="flex gap-3">
                  <button @click="prevStep"
                    class="flex-1 py-3 rounded-lg border-2 border-green-600 text-green-600 font-bold hover:bg-green-50 transition">
                    ← Précédent
                  </button>
                  <button @click="submitCheckout" :disabled="cartStore.items.length === 0 || !acceptedTerms"
                    class="flex-1 py-3 rounded-lg text-white font-bold transition"
                    :class="cartStore.items.length > 0 && acceptedTerms ? 'bg-green-600 hover:bg-green-700 shadow-lg' : 'bg-gray-400 cursor-not-allowed'">
                    <span v-if="acceptedTerms">✓ Passer la Commande</span>
                    <span v-else>🔒 Acceptez les CGV</span>
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div>


        <!-- Colonne 3 : Votre Commande (cachée sur mobile, affichée via bouton flottant) -->
        <div class="lg:col-span-2 hidden lg:block">
          <div class="sticky top-20 bg-white rounded-2xl shadow-xl border-2 border-gray-100 h-fit">

            <!-- Header de la commande -->
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6 text-white">
              <h2 class="text-3xl font-bold">Votre Commande</h2>
              <p class="text-gray-300 text-base mt-1">{{ cartStore.totalItemsCount }} article(s)</p>

              <!-- Timer de réservation -->
              <div v-if="timeLeft > 0" class="mt-4 bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-4 py-3">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">⏱️</span>
                  <div>
                    <p class="text-xs text-yellow-200 font-semibold">Panier réservé pendant</p>
                    <p class="text-lg font-bold text-yellow-300">{{ formattedTime }}</p>
                  </div>
                </div>
              </div>
              <div v-else class="mt-4 bg-red-500/20 border border-red-500/50 rounded-lg px-4 py-3 text-center">
                <p class="text-red-300 font-semibold">⚠️ Temps de réservation expiré</p>
              </div>
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
                    <!-- Quantité avec boutons +/- -->
                    <div class="flex justify-between items-center">
                      <span class="font-medium">Quantité :</span>
                      <div class="flex items-center gap-2">
                        <button @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                          class="w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-red-500 hover:text-white rounded-md font-bold transition">
                          -
                        </button>
                        <span class="font-bold text-base w-8 text-center">{{ item.quantity }}</span>
                        <button @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                          class="w-7 h-7 flex items-center justify-center bg-gray-200 hover:bg-green-500 hover:text-white rounded-md font-bold transition">
                          +
                        </button>
                      </div>
                    </div>
                    <div class="flex justify-between">
                      <span>Prix unitaire :</span>
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

                    <!-- Bouton supprimer -->
                    <button @click="cartStore.removeItem(item.id)"
                      class="w-full mt-2 py-1.5 text-xs text-red-600 hover:text-white hover:bg-red-500 border border-red-300 rounded-md font-semibold transition">
                      🗑️ Retirer du panier
                    </button>
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

              <!-- Badges de sécurité et confiance -->
              <div class="border-t-2 border-gray-200 pt-4">
                <div class="grid grid-cols-2 gap-3 mb-3">
                  <div class="flex items-center gap-2 text-xs text-gray-600">
                    <span class="text-green-600 text-lg">🔒</span>
                    <span class="font-semibold">Paiement sécurisé</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-gray-600">
                    <span class="text-blue-600 text-lg">🛡️</span>
                    <span class="font-semibold">Données protégées</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-gray-600">
                    <span class="text-green-600 text-lg">✔️</span>
                    <span class="font-semibold">Service certifié</span>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-gray-600">
                    <span class="text-purple-600 text-lg">🔄</span>
                    <span class="font-semibold">Retour 14 jours</span>
                  </div>
                </div>
                <p class="text-xs text-gray-500 text-center">
                  Vos informations sont protégées et sécurisées
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Bouton flottant pour le résumé (mobile uniquement) -->
    <div class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-40">
      <button @click="showMobileSummary = true" class="w-full py-4 px-6 flex items-center justify-between text-left">
        <div>
          <p class="font-bold text-gray-900 text-lg">Voir le résumé</p>
          <p class="text-sm text-gray-600">{{ cartStore.totalItemsCount }} article(s)</p>
        </div>
        <div class="text-right">
          <p class="font-bold text-green-600 text-xl">{{ formatCurrency(grandTotal) }}</p>
          <p class="text-xs text-gray-500">⏱️ {{ formattedTime }}</p>
        </div>
      </button>
    </div>

    <!-- Modal résumé mobile -->
    <Transition name="slide-up">
      <div v-if="showMobileSummary" class="lg:hidden fixed inset-0 bg-black/50 z-50" @click="showMobileSummary = false">
        <div @click.stop
          class="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] overflow-y-auto">
          <!-- Header -->
          <div class="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 text-white rounded-t-3xl">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold">Votre Commande</h2>
                <p class="text-gray-300 text-sm mt-1">{{ cartStore.totalItemsCount }} article(s)</p>
              </div>
              <button @click="showMobileSummary = false" class="text-3xl hover:text-gray-300">×</button>
            </div>

            <!-- Timer mobile -->
            <div v-if="timeLeft > 0" class="mt-3 bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-3 py-2">
              <div class="flex items-center gap-2">
                <span class="text-xl">⏱️</span>
                <div>
                  <p class="text-xs text-yellow-200 font-semibold">Panier réservé</p>
                  <p class="text-base font-bold text-yellow-300">{{ formattedTime }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contenu -->
          <div class="p-6">
            <!-- Articles -->
            <div class="space-y-3 pb-4 border-b border-gray-300 mb-4">
              <div v-for="item in cartStore.items" :key="item.id" class="pb-3 border-b border-gray-200">
                <p class="font-bold text-gray-900 mb-2">{{ item.name }}</p>
                <div class="space-y-1 text-sm text-gray-700">
                  <!-- Quantité avec boutons +/- -->
                  <div class="flex justify-between items-center">
                    <span class="font-medium">Quantité :</span>
                    <div class="flex items-center gap-2">
                      <button @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                        class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-red-500 hover:text-white rounded-md font-bold text-lg transition">
                        -
                      </button>
                      <span class="font-bold text-base w-8 text-center">{{ item.quantity }}</span>
                      <button @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                        class="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-green-500 hover:text-white rounded-md font-bold text-lg transition">
                        +
                      </button>
                    </div>
                  </div>
                  <div class="flex justify-between">
                    <span>Prix unitaire :</span>
                    <span>{{ formatCurrency(item.price) }} / unité</span>
                  </div>
                  <div v-if="item.originalPrice" class="flex justify-between text-gray-600">
                    <span>Prix initial :</span>
                    <span class="line-through">{{ formatCurrency(item.quantity * item.originalPrice) }}</span>
                  </div>
                  <div v-if="item.isPromo && item.promoPercentage > 0" class="flex justify-between text-red-600">
                    <span>Réduction (-{{ item.promoPercentage }}%)</span>
                    <span>-{{ formatCurrency((item.quantity * item.price) * (item.promoPercentage / 100)) }}</span>
                  </div>
                  <div class="flex justify-between font-bold text-gray-900 pt-1 border-t">
                    <span>Total :</span>
                    <span class="text-green-600">{{ formatCurrency(item.totalPrice || (item.quantity * item.price))
                    }}</span>
                  </div>

                  <!-- Bouton supprimer -->
                  <button @click="cartStore.removeItem(item.id)"
                    class="w-full mt-2 py-2 text-xs text-red-600 hover:text-white hover:bg-red-500 border border-red-300 rounded-md font-semibold transition">
                    🗑️ Retirer
                  </button>
                </div>
              </div>
            </div>

            <!-- Résumé financier -->
            <div class="space-y-2 mb-4">
              <div class="flex justify-between text-gray-700">
                <span>Sous-total :</span>
                <span class="font-semibold">{{ formatCurrency(cartStore.totalPrice || 0) }}</span>
              </div>
              <div v-if="totalSavings > 0" class="flex justify-between text-green-600">
                <span>Économies :</span>
                <span class="font-semibold">-{{ formatCurrency(totalSavings) }}</span>
              </div>
              <div class="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t-2 border-gray-300">
                <span>Total à payer :</span>
                <span class="text-green-600">{{ formatCurrency(grandTotal) }}</span>
              </div>
            </div>

            <!-- Badges sécurité -->
            <div class="border-t-2 border-gray-200 pt-4">
              <div class="grid grid-cols-2 gap-2">
                <div class="flex items-center gap-2 text-xs text-gray-600">
                  <span class="text-green-600">🔒</span>
                  <span class="font-semibold">Paiement sécurisé</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-gray-600">
                  <span class="text-blue-600">🛡️</span>
                  <span class="font-semibold">Données protégées</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Modal de timeout -->
    <Transition name="fade">
      <div v-if="showTimeoutModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-bounce-in">
          <div class="text-center">
            <div class="text-6xl mb-4">⏰</div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Temps de réservation expiré !</h3>
            <p class="text-gray-600 mb-6">
              Votre panier va être vidé dans quelques secondes. Souhaitez-vous prolonger votre session ?
            </p>

            <div class="flex gap-3">
              <button @click="goHome"
                class="flex-1 py-3 px-4 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
                Retour accueil
              </button>
              <button @click="extendTimer"
                class="flex-1 py-3 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition shadow-lg">
                🔄 Prolonger (10 min)
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Conteneur de notifications toast -->
    <div class="fixed top-20 right-4 z-50 space-y-3">
      <TransitionGroup name="toast">
        <div v-for="toast in toasts" :key="toast.id" :class="[
          'px-6 py-4 rounded-lg shadow-2xl border-2 flex items-center gap-3 min-w-[300px]',
          toast.type === 'success' ? 'bg-green-50 border-green-500 text-green-900' :
            toast.type === 'error' ? 'bg-red-50 border-red-500 text-red-900' :
              'bg-blue-50 border-blue-500 text-blue-900'
        ]">
          <span class="text-2xl">
            {{ toast.type === 'success' ? '✓' : toast.type === 'error' ? '⚠️' : '📦' }}
          </span>
          <p class="font-semibold">{{ toast.message }}</p>
        </div>
      </TransitionGroup>
    </div>

    <!-- Overlay de chargement -->
    <Transition name="fade">
      <div v-if="isSubmitting" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl p-8 text-center">
          <div class="animate-spin w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-4">
          </div>
          <p class="text-xl font-bold text-gray-900">Traitement en cours...</p>
          <p class="text-sm text-gray-600 mt-2">Veuillez patienter</p>
        </div>
      </div>
    </Transition>

    <!-- Conteneur de notifications toast -->
    <div class="fixed top-20 right-4 z-50 space-y-3">
      <TransitionGroup name="toast">
        <div v-for="toast in toasts" :key="toast.id" :class="[
          'px-6 py-4 rounded-lg shadow-2xl border-2 flex items-center gap-3 min-w-[300px]',
          toast.type === 'success' ? 'bg-green-50 border-green-500 text-green-900' :
            toast.type === 'error' ? 'bg-red-50 border-red-500 text-red-900' :
              'bg-blue-50 border-blue-500 text-blue-900'
        ]">
          <span class="text-2xl">
            {{ toast.type === 'success' ? '✓' : toast.type === 'error' ? '⚠️' : '📦' }}
          </span>
          <p class="font-semibold">{{ toast.message }}</p>
        </div>
      </TransitionGroup>
    </div>

    <!-- Overlay de chargement -->
    <Transition name="fade">
      <div v-if="isSubmitting" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl p-8 text-center">
          <div class="animate-spin w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-4">
          </div>
          <p class="text-xl font-bold text-gray-900">Traitement en cours...</p>
          <p class="text-sm text-gray-600 mt-2">Veuillez patienter</p>
        </div>
      </div>
    </Transition>

    <!-- Modal de confirmation de commande -->
    <Transition name="fade">
      <div v-if="showSuccessModal" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        @click="closeSuccessModal">
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full animate-bounce-in p-8 text-center" @click.stop>
          <!-- Icône de succès -->
          <div class="mb-6">
            <div
              class="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          <!-- Message de félicitations -->
          <h2 class="text-3xl font-bold text-gray-900 mb-4">🎉 Bravo !</h2>
          <p class="text-lg text-gray-700 mb-3 leading-relaxed">
            Votre commande a été <span class="font-bold text-green-600">validée avec succès</span> !
          </p>
          <p class="text-base text-gray-600 mb-6">
            Merci pour votre confiance. Nous sommes ravis de vous accueillir bientôt au cabinet pour finaliser votre
            achat.
          </p>

          <!-- Rappel email de confirmation -->
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6 text-left">
            <p class="text-sm text-blue-900 flex items-start gap-2">
              <span class="text-lg">📧</span>
              <span>
                Vous recevrez un mail de confirmation de votre commande dans les plus brefs délais.
              </span>
            </p>
          </div>

          <!-- Ligne décorative -->
          <div class="flex items-center gap-2 mb-6">
            <div class="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            <span class="text-2xl">✨</span>
            <div class="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
          </div>

          <p class="text-sm text-gray-500 mb-6 italic">
            "Prenez soin de vos yeux, ils sont uniques !"
          </p>

          <!-- Bouton de fermeture -->
          <button @click="closeSuccessModal"
            class="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-bold text-base hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
            Retour à l'accueil
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useCartStore } from '../stores/cartStore';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();

// Étapes du processus
const steps = ['Vos Informations', 'Paiement', 'Validation'];
const currentStep = ref(0);

// Navigation entre les étapes
const nextStep = () => {
  if (currentStep.value === 0 && isFormValid.value) {
    currentStep.value = 1;
    scrollToTop();
    showToast('✓ Informations validées avec succès !', 'success');
  } else if (currentStep.value === 1 && form.value.paymentMethod) {
    currentStep.value = 2;
    scrollToTop();
    showToast('✓ Méthode de paiement enregistrée !', 'success');
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
    scrollToTop();
  }
};

// Fonction pour scroller vers le haut avec animation fluide
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Données du formulaire
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  postalCode: '',
  paymentMethod: 'cash', // Méthode de paiement par défaut
});

// Sauvegarde automatique du formulaire dans localStorage
const FORM_STORAGE_KEY = 'checkout_form_data';

const saveFormToStorage = () => {
  try {
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(form.value));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du formulaire:', error);
  }
};

const loadFormFromStorage = () => {
  try {
    const savedData = localStorage.getItem(FORM_STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      form.value = { ...form.value, ...parsedData };
    }
  } catch (error) {
    console.error('Erreur lors du chargement du formulaire:', error);
  }
};

const clearFormStorage = () => {
  try {
    localStorage.removeItem(FORM_STORAGE_KEY);
  } catch (error) {
    console.error('Erreur lors de la suppression du formulaire:', error);
  }
};

// Watcher pour sauvegarder automatiquement le formulaire
watch(form, () => {
  saveFormToStorage();
}, { deep: true });

// Promo code
const promoCode = ref('');
const promoApplied = ref(false);
const promoError = ref('');
const promoDiscount = ref(0);

// Validation en temps réel - touched fields
const touched = ref({
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
  address: false,
  city: false,
  postalCode: false
});

// Fonctions de validation individuelles
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhone = (phone) => {
  const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phone.length >= 9 && re.test(phone);
};

// Validation des champs individuels
const fieldValidation = computed(() => ({
  firstName: {
    isValid: form.value.firstName.length >= 2,
    message: 'Le prénom doit contenir au moins 2 caractères'
  },
  lastName: {
    isValid: form.value.lastName.length >= 2,
    message: 'Le nom doit contenir au moins 2 caractères'
  },
  email: {
    isValid: validateEmail(form.value.email),
    message: 'Veuillez entrer une adresse email valide'
  },
  phone: {
    isValid: validatePhone(form.value.phone),
    message: 'Numéro de téléphone invalide (min. 9 chiffres)'
  },
  address: {
    isValid: form.value.address.length >= 5,
    message: 'L\'adresse doit contenir au moins 5 caractères'
  },
  city: {
    isValid: form.value.city.length >= 2,
    message: 'La ville doit contenir au moins 2 caractères'
  },
  postalCode: {
    isValid: form.value.postalCode.length >= 3,
    message: 'Le code postal doit contenir au moins 3 caractères'
  }
}));

// Fonction pour marquer un champ comme touché
const markTouched = (field) => {
  touched.value[field] = true;
};

// Vérifier si un champ doit afficher une erreur
const shouldShowError = (field) => {
  return touched.value[field] && !fieldValidation.value[field].isValid;
};

// Vérifier si un champ doit afficher un succès
const shouldShowSuccess = (field) => {
  return touched.value[field] && fieldValidation.value[field].isValid;
};

// Acceptance des CGV
const acceptedTerms = ref(false);

// Affichage du résumé mobile
const showMobileSummary = ref(false);

// Système de notifications toast
const toasts = ref([]);
let toastId = 0;

const showToast = (message, type = 'success') => {
  const id = toastId++;
  toasts.value.push({ id, message, type });

  // Retirer automatiquement après 3 secondes
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id);
  }, 3000);
};

// Indicateur de chargement
const isSubmitting = ref(false);

// Timer de réservation du panier (15 minutes)
const timeLeft = ref(15 * 60); // 15 minutes en secondes
const timerInterval = ref(null);
const showTimeoutModal = ref(false);
const showSuccessModal = ref(false);

// Formater le temps restant
const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
});

// Gérer l'expiration du timer
const handleTimeout = () => {
  clearInterval(timerInterval.value);
  showTimeoutModal.value = true;
  // Vider le panier après 3 secondes pour laisser le temps de voir le modal
  setTimeout(() => {
    cartStore.items = [];
  }, 3000);
};

// Prolonger le timer de 10 minutes
const extendTimer = () => {
  timeLeft.value = 10 * 60; // 10 minutes supplémentaires
  showTimeoutModal.value = false;
  startTimer();
};

// Retourner à l'accueil
const goHome = () => {
  cartStore.items = []; // Vider le panier
  router.push('/');
};

// Démarrer le timer
const startTimer = () => {
  timerInterval.value = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      handleTimeout();
    }
  }, 1000);
};

// Démarrer le timer au montage du composant
onMounted(() => {
  startTimer();
  loadFormFromStorage(); // Charger le formulaire sauvegardé
});

onUnmounted(() => {
  if (timerInterval.value) {
    clearInterval(timerInterval.value);
  }
});

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
    showToast('⚠️ Votre panier est vide', 'error');
    return;
  }

  if (!acceptedTerms.value) {
    showToast('⚠️ Veuillez accepter les conditions générales', 'error');
    return;
  }

  isSubmitting.value = true;

  console.log("------------------------------------------");
  console.log("📋 Commande - Informations Client:", form.value);
  console.log("🛍️ Articles:", cartStore.items);
  console.log("💰 Montant total:", formatCurrency(grandTotal.value));
  console.log("------------------------------------------");

  // Simuler le traitement de la commande
  setTimeout(() => {
    isSubmitting.value = false;
    showSuccessModal.value = true;
    clearFormStorage();
  }, 1500);
};

/**
 * Fermer le modal de succès et rediriger
 */
const closeSuccessModal = () => {
  showSuccessModal.value = false;
  cartStore.clearCart();
  setTimeout(() => {
    router.push('/');
  }, 300);
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
<style scoped>
/* Animation de slide et fade pour les transitions entre étapes */
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

/* Animation du check dans les cercles d'étapes */
.check-enter-active {
  animation: checkBounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes checkBounce {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-check {
  display: inline-block;
  animation: checkPop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes checkPop {
  0% {
    transform: scale(0) rotate(-45deg);
  }

  60% {
    transform: scale(1.2) rotate(10deg);
  }

  100% {
    transform: scale(1) rotate(0deg);
  }
}

/* Animation pour le modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-bounce-in {
  animation: bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Animation slide-up pour le modal mobile */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Animations pour les toast */
.toast-enter-active {
  animation: toastIn 0.3s ease-out;
}

.toast-leave-active {
  animation: toastOut 0.3s ease-in;
}

@keyframes toastIn {
  0% {
    transform: translateX(400px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes toastOut {
  0% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(400px) scale(0.8);
    opacity: 0;
  }
}

.toast-move {
  transition: transform 0.3s ease;
}
</style>
