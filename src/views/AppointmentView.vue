<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-visible">
    <!-- Cercles décoratifs en arrière-plan (identique à Services/Catalogue) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Très grands cercles -->
      <div class="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-100 rounded-full opacity-60 animate-float">
      </div>
      <div class="absolute bottom-0 right-0 w-[480px] h-[480px] bg-black/10 rounded-full opacity-70 animate-float-slow">
      </div>

      <!-- Grands cercles -->
      <div class="absolute top-40 right-10 w-96 h-96 bg-gray-200 rounded-full opacity-50 animate-float-delayed">
      </div>
      <div class="absolute top-96 left-1/4 w-80 h-80 bg-green-50 rounded-full opacity-70 animate-float-slow">
      </div>
      <div class="absolute top-1/2 -right-32 w-72 h-72 bg-emerald-100 rounded-full opacity-55 animate-float">
      </div>
      <div class="absolute bottom-20 left-1/2 w-96 h-96 bg-gray-100 rounded-full opacity-60 animate-float-delayed">
      </div>
      <div class="absolute top-1/4 right-1/3 w-[420px] h-[420px] bg-white/80 rounded-full opacity-50 animate-float">
      </div>

      <!-- Cercles moyens -->
      <div class="absolute top-1/3 right-1/4 w-56 h-56 bg-emerald-100 rounded-full opacity-60 animate-float">
      </div>
      <div class="absolute bottom-1/3 left-10 w-64 h-64 bg-gray-100 rounded-full opacity-55 animate-float-delayed">
      </div>
      <div class="absolute top-2/3 right-20 w-48 h-48 bg-green-200 rounded-full opacity-65 animate-float-slow">
      </div>
      <div class="absolute top-80 left-2/3 w-52 h-52 bg-green-50 rounded-full opacity-50 animate-float"></div>
      <div class="absolute bottom-1/2 right-1/3 w-52 h-52 bg-gray-200 rounded-full opacity-60 animate-float-slow">
      </div>
      <div class="absolute top-20 left-1/3 w-60 h-60 bg-black/10 rounded-full opacity-55 animate-float-delayed">
      </div>
      <div class="absolute bottom-40 right-10 w-56 h-56 bg-white rounded-full opacity-60 animate-float"></div>

      <!-- Petits cercles -->
      <div class="absolute top-1/4 left-1/2 w-36 h-36 bg-green-100 rounded-full opacity-50 animate-float-delayed">
      </div>
      <div class="absolute bottom-40 right-1/3 w-28 h-28 bg-gray-200 rounded-full opacity-60 animate-float"></div>
      <div class="absolute bottom-96 left-1/3 w-36 h-36 bg-emerald-50 rounded-full opacity-55 animate-float-slow">
      </div>
      <div class="absolute top-1/2 left-20 w-24 h-24 bg-green-50 rounded-full opacity-65 animate-float"></div>
      <div class="absolute top-20 right-1/4 w-32 h-32 bg-emerald-100 rounded-full opacity-50 animate-float-delayed">
      </div>
      <div class="absolute bottom-60 left-2/3 w-28 h-28 bg-green-200 rounded-full opacity-55 animate-float-slow">
      </div>
      <div class="absolute top-10 left-10 w-32 h-32 bg-black/10 rounded-full opacity-50 animate-float"></div>
      <div class="absolute bottom-20 right-1/2 w-36 h-36 bg-white/80 rounded-full opacity-55 animate-float-delayed">
      </div>

      <!-- Très petits cercles d'accent -->
      <div class="absolute top-60 right-1/2 w-20 h-20 bg-green-300 rounded-full opacity-45 animate-float-delayed">
      </div>
      <div class="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gray-300 rounded-full opacity-50 animate-float-slow">
      </div>
      <div class="absolute top-1/3 left-1/3 w-20 h-20 bg-emerald-200 rounded-full opacity-45 animate-float"></div>
      <div class="absolute bottom-1/3 right-1/4 w-18 h-18 bg-green-200 rounded-full opacity-50 animate-float-delayed">
      </div>
      <div class="absolute top-2/3 left-10 w-16 h-16 bg-gray-200 rounded-full opacity-45 animate-float-slow">
      </div>
      <div class="absolute top-3/4 right-1/3 w-20 h-20 bg-black/15 rounded-full opacity-50 animate-float"></div>
      <div class="absolute bottom-10 left-1/3 w-18 h-18 bg-white rounded-full opacity-45 animate-float-delayed">
      </div>
      <div class="absolute top-1/2 right-20 w-16 h-16 bg-emerald-100 rounded-full opacity-50 animate-float-slow">
      </div>
      <div class="absolute top-3/4 right-1/3 w-20 h-20 bg-black/10 rounded-full opacity-30 animate-float"></div>
      <div class="absolute bottom-10 left-1/3 w-18 h-18 bg-white/80 rounded-full opacity-25 animate-float-delayed">
      </div>
      <div class="absolute top-1/2 right-20 w-16 h-16 bg-emerald-100 rounded-full opacity-30 animate-float-slow">
      </div>
    </div>

    <!-- Stylish Header with Gradient Accent (style Catalogue) -->
    <div class="bg-white border-b border-green-100 py-6 sm:py-8 relative overflow-hidden" style="z-index: 1;">
      <!-- Cercles décoratifs de l'en-tête -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Gros cercle noir qui recouvre les premières lettres -->
        <div
          class="absolute -top-20 -left-20 w-[280px] h-[280px] bg-black/15 rounded-full opacity-70 animate-float-slow">
        </div>

        <!-- Cercles d'accent -->
        <div class="absolute top-10 left-1/3 w-32 h-32 bg-green-200 rounded-full opacity-50 animate-float">
        </div>
        <div
          class="absolute -bottom-10 left-1/4 w-40 h-40 bg-emerald-100 rounded-full opacity-60 animate-float-delayed">
        </div>
        <div class="absolute top-1/2 right-20 w-24 h-24 bg-gray-200 rounded-full opacity-55 animate-float-slow">
        </div>
        <div class="absolute -top-5 right-1/4 w-36 h-36 bg-black/10 rounded-full opacity-50 animate-float">
        </div>
        <div class="absolute bottom-0 right-10 w-28 h-28 bg-green-100 rounded-full opacity-60 animate-float-delayed">
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative" style="z-index: 2;">
        <div class="flex items-center justify-between gap-4">
          <div class="flex-1">
            <h1 class="text-6xl sm:text-7xl font-extrabold text-green-900 tracking-tight mb-2"
              style="font-family: 'Montserrat', sans-serif;">Rendez-vous</h1>
            <p class="text-gray-600 text-lg">Prenez rendez-vous en ligne facilement et rapidement pour votre
              consultation.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Separator line -->
    <div class="w-full h-0.5 bg-green-600"></div>

    <!-- Stats Section avec effet moderne et vivant ultra amélioré -->
    <div class="relative py-12 bg-gradient-to-br from-green-50 via-emerald-50 via-teal-50 to-cyan-50 overflow-visible">
      <!-- Vagues fluides animées en arrière-plan -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Vague SVG animée en bas - multicouches -->
        <svg class="absolute bottom-0 left-0 w-full h-48 opacity-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 C150,80 350,20 600,50 C850,80 1050,20 1200,50 L1200,120 L0,120 Z" fill="url(#wave-gradient-1)">
            <animate attributeName="d" values="M0,50 C150,80 350,20 600,50 C850,80 1050,20 1200,50 L1200,120 L0,120 Z;
                      M0,30 C150,60 350,40 600,70 C850,50 1050,60 1200,30 L1200,120 L0,120 Z;
                      M0,50 C150,80 350,20 600,50 C850,80 1050,20 1200,50 L1200,120 L0,120 Z" dur="8s"
              repeatCount="indefinite" />
          </path>
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#065f46;stop-opacity:1">
                <animate attributeName="stop-color" values="#065f46;#115e59;#065f46" dur="6s"
                  repeatCount="indefinite" />
              </stop>
              <stop offset="50%" style="stop-color:#064e3b;stop-opacity:1">
                <animate attributeName="stop-color" values="#064e3b;#134e4a;#064e3b" dur="6s"
                  repeatCount="indefinite" />
              </stop>
              <stop offset="100%" style="stop-color:#115e59;stop-opacity:1">
                <animate attributeName="stop-color" values="#115e59;#065f46;#115e59" dur="6s"
                  repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>

        <!-- Deuxième vague décalée -->
        <svg class="absolute bottom-0 left-0 w-full h-40 opacity-30" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C180,30 380,80 600,40 C820,10 1020,70 1200,50 L1200,120 L0,120 Z" fill="url(#wave-gradient-3)">
            <animate attributeName="d" values="M0,60 C180,30 380,80 600,40 C820,10 1020,70 1200,50 L1200,120 L0,120 Z;
                      M0,40 C180,70 380,30 600,60 C820,80 1020,20 1200,40 L1200,120 L0,120 Z;
                      M0,60 C180,30 380,80 600,40 C820,10 1020,70 1200,50 L1200,120 L0,120 Z" dur="12s"
              repeatCount="indefinite" />
          </path>
          <defs>
            <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#065f46;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#115e59;stop-opacity:1" />
            </linearGradient>
          </defs>
        </svg>

        <!-- Vague SVG animée en haut -->
        <svg class="absolute top-0 left-0 w-full h-48 opacity-30 rotate-180" viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path d="M0,50 C200,80 400,20 600,60 C800,90 1000,30 1200,50 L1200,120 L0,120 Z" fill="url(#wave-gradient-2)">
            <animate attributeName="d" values="M0,50 C200,80 400,20 600,60 C800,90 1000,30 1200,50 L1200,120 L0,120 Z;
                      M0,70 C200,40 400,70 600,30 C800,60 1000,80 1200,40 L1200,120 L0,120 Z;
                      M0,50 C200,80 400,20 600,60 C800,90 1000,30 1200,50 L1200,120 L0,120 Z" dur="10s"
              repeatCount="indefinite" />
          </path>
          <defs>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#064e3b;stop-opacity:1">
                <animate attributeName="stop-color" values="#064e3b;#134e4a;#064e3b" dur="7s"
                  repeatCount="indefinite" />
              </stop>
              <stop offset="50%" style="stop-color:#134e4a;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#065f46;stop-opacity:1">
                <animate attributeName="stop-color" values="#065f46;#115e59;#065f46" dur="7s"
                  repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </svg>

        <!-- Effet de brillance qui traverse -->
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"
          style="animation-duration: 8s;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-8">
          <div class="inline-block mb-3">
            <span
              class="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-6 py-2 rounded-full text-sm font-bold animate-pulse-slow shadow-lg shadow-green-500/50">
              ✨ RENDEZ-VOUS EN LIGNE
            </span>
          </div>
          <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Réservation rapide et simple avec confirmation immédiate
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            class="relative bg-green-800/30 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-green-800/40 transition-all shadow-lg hover:shadow-xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style="animation-duration: 2.5s;"></div>
            <div class="relative z-10">
              <div class="text-3xl font-bold text-white mb-2">15 min</div>
              <div class="text-sm text-white/90">Temps moyen</div>
            </div>
          </div>
          <div
            class="relative bg-green-800/30 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-green-800/40 transition-all shadow-lg hover:shadow-xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style="animation-duration: 2.5s; animation-delay: 0.4s;"></div>
            <div class="relative z-10">
              <div class="text-3xl font-bold text-white mb-2">98%</div>
              <div class="text-sm text-white/90">Satisfaction</div>
            </div>
          </div>
          <div
            class="relative bg-green-800/30 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-green-800/40 transition-all shadow-lg hover:shadow-xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style="animation-duration: 2.5s; animation-delay: 0.8s;"></div>
            <div class="relative z-10">
              <div class="text-3xl font-bold text-white mb-2">7j/7</div>
              <div class="text-sm text-white/90">Disponible</div>
            </div>
          </div>
          <div
            class="relative bg-green-800/30 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center hover:bg-green-800/40 transition-all shadow-lg hover:shadow-xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style="animation-duration: 2.5s; animation-delay: 1.2s;"></div>
            <div class="relative z-10">
              <div class="text-3xl font-bold text-white mb-2">5000+</div>
              <div class="text-sm text-white/90">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Separator line -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent">
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative pb-20 -mt-16 z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <!-- Formulaire Principal (2 colonnes) -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <!-- En-tête du formulaire -->
              <div
                class="relative bg-gradient-to-br from-gray-900 via-green-800 to-black text-white overflow-hidden p-8">
                <!-- Animated background patterns -->
                <div class="absolute inset-0 overflow-hidden opacity-20">
                  <div class="absolute top-0 left-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-blob"></div>
                  <div
                    class="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-blob animation-delay-2000">
                  </div>
                  <div
                    class="absolute bottom-0 left-1/3 w-96 h-96 bg-green-600/30 rounded-full blur-3xl animate-blob animation-delay-4000">
                  </div>
                </div>

                <div class="relative z-10">
                  <div class="inline-block mb-4">
                    <span
                      class="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-4 py-1 rounded-full text-xs font-bold animate-pulse-slow shadow-lg shadow-green-500/50">
                      ✨ RÉSERVATION
                    </span>
                  </div>
                  <h2 class="text-3xl font-bold text-white flex items-center gap-3">
                    <span class="text-4xl">📅</span>
                    Nouveau Rendez-vous
                  </h2>
                  <p class="text-gray-300 mt-2">Complétez le formulaire ci-dessous</p>
                </div>

                <!-- Separator line -->
                <div
                  class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent">
                </div>
              </div>

              <form @submit.prevent="submitAppointment" class="p-10 space-y-10">

                <!-- Informations Personnelles -->
                <div class="space-y-6">
                  <div class="flex items-center gap-3 pb-4 border-b-2 border-gray-200">
                    <div
                      class="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-gray-900">Informations Personnelles</h3>
                      <p class="text-sm text-gray-500">Veuillez renseigner vos coordonnées</p>
                    </div>
                  </div>

                  <div v-if="!isConnected">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                          Nom complet <span class="text-red-500">*</span>
                        </label>
                        <input type="text" v-model="appointment.guestName" required placeholder="Ex: Jean Dupont"
                          class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none" />
                      </div>
                      <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                          Email <span class="text-red-500">*</span>
                        </label>
                        <input type="email" v-model="appointment.guestEmail" required
                          placeholder="votre.email@exemple.com"
                          class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none" />
                      </div>
                      <div class="md:col-span-2">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">
                          Téléphone <span class="text-red-500">*</span>
                        </label>
                        <input type="tel" v-model="appointment.guestPhone" required placeholder="+242 XX XXX XX XX"
                          class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none" />
                      </div>
                    </div>
                    <div class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
                      <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd" />
                      </svg>
                      <div class="text-sm text-blue-800">
                        <span class="font-semibold">Vous avez déjà un compte ?</span>
                        <RouterLink to="/login" class="text-blue-600 hover:text-blue-700 font-semibold underline ml-1">
                          Connectez-vous ici
                        </RouterLink>
                      </div>
                    </div>
                  </div>

                  <div v-else
                    class="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                    <div class="flex items-center gap-4">
                      <div
                        class="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        {{ currentUser.name.charAt(0) }}
                      </div>
                      <div class="flex-1">
                        <div class="font-bold text-gray-900 text-lg">{{ currentUser.name }}</div>
                        <div class="text-sm text-gray-600">{{ currentUser.email }}</div>
                      </div>
                      <span
                        class="bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                        </svg>
                        Compte vérifié
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Type de Service -->
                <div class="space-y-6">
                  <div class="flex items-center gap-3 pb-4 border-b-2 border-gray-200">
                    <div
                      class="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-gray-900">Type de Service</h3>
                      <p class="text-sm text-gray-500">Sélectionnez le service souhaité</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label v-for="service in services" :key="service.value" class="relative cursor-pointer group">
                      <input type="radio" v-model="appointment.service" :value="service.value" class="peer sr-only"
                        required />
                      <div
                        class="h-full p-5 border-2 border-gray-200 rounded-xl hover:border-green-500 peer-checked:border-green-600 peer-checked:bg-green-50 transition-all hover:shadow-lg group-hover:-translate-y-1">
                        <div class="flex items-start gap-4">
                          <div class="text-4xl">{{ service.icon }}</div>
                          <div class="flex-1">
                            <div class="font-bold text-gray-900 text-lg mb-1">{{ service.name }}</div>
                            <div class="text-sm text-gray-600 flex items-center gap-1">
                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                  clip-rule="evenodd" />
                              </svg>
                              {{ service.duration }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="absolute top-4 right-4 w-6 h-6 border-2 border-gray-300 rounded-full peer-checked:border-green-600 peer-checked:bg-green-600 transition-all flex items-center justify-center">
                        <svg class="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                          fill="currentColor" viewBox="0 0 20 20">
                          <path
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </label>
                  </div>
                </div>

                <!-- Date et Heure -->
                <div class="space-y-6">
                  <div class="flex items-center gap-3 pb-4 border-b-2 border-gray-200">
                    <div
                      class="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-gray-900">Date et Horaire</h3>
                      <p class="text-sm text-gray-500">Choisissez votre créneau de rendez-vous</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 gap-6">
                    <!-- Dates: bande horizontale compacte -->
                    <div class="bg-white border border-gray-200 rounded-lg p-3">
                      <div class="flex items-center justify-between mb-3">
                        <div>
                          <div class="text-sm font-semibold text-gray-700">Sélection de la date</div>
                          <div class="text-xs text-gray-500">Faites glisser horizontalement pour voir les jours</div>
                        </div>
                        <div class="text-xs text-gray-500">Sélectionnez une date</div>
                      </div>

                      <div class="overflow-x-auto" ref="dateListRef" role="listbox" aria-label="Liste des dates">
                        <div class="flex items-stretch gap-3 py-2">
                          <label v-for="dateSlot in availableDates" :key="dateSlot.date"
                            class="min-w-[170px] flex-shrink-0 p-3 rounded-lg border cursor-pointer flex items-center justify-between bg-white hover:shadow"
                            role="option" :aria-selected="appointment.date === dateSlot.date">
                            <div>
                              <div class="text-sm font-medium text-gray-800">{{ dateSlot.dayName }} {{ dateSlot.day }}
                                {{ dateSlot.month }}</div>
                              <div class="text-xs text-gray-500">{{ dateSlot.slots }} créneaux</div>
                            </div>
                            <input type="radio" name="appointment-date" class="form-radio h-4 w-4 text-green-600 ml-3"
                              :value="dateSlot.date" v-model="appointment.date" />
                          </label>
                        </div>
                      </div>
                    </div>

                    <!-- Créneaux : bande horizontale -->
                    <div class="bg-white border border-gray-200 rounded-lg p-3">
                      <div class="flex items-center justify-between mb-3">
                        <div>
                          <div class="text-sm font-semibold text-gray-700">Créneaux horaires</div>
                          <div class="text-xs text-gray-500">Défilement horizontal pour parcourir les heures</div>
                        </div>
                        <div class="text-sm text-gray-500" v-if="appointment.date">Date: {{ appointment.date }}</div>
                      </div>

                      <div v-if="!appointment.date" class="text-sm text-gray-500 py-6 text-center">Veuillez choisir une
                        date pour afficher les créneaux.</div>

                      <div v-else>
                        <div class="overflow-x-auto py-2" ref="timeListRef" role="listbox"
                          aria-label="Liste des créneaux">
                          <div class="flex items-center gap-2">
                            <button v-for="time in baseAvailableTimes" :key="time" type="button"
                              @click="(getAvailableTimesForDate(appointment.date).includes(time) ? appointment.time = time : null)"
                              :data-time="time" :disabled="!getAvailableTimesForDate(appointment.date).includes(time)"
                              :aria-pressed="appointment.time === time" :class="['px-4 py-2 rounded-md text-sm border transition flex-shrink-0',
                                getAvailableTimesForDate(appointment.date).includes(time)
                                  ? (appointment.time === time ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50')
                                  : 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed opacity-50']">
                              {{ time }}
                            </button>
                          </div>
                        </div>

                        <div class="mt-3 text-sm text-gray-600">
                          <span class="font-medium">Sélection actuelle :</span>
                          <span v-if="appointment.time">{{ appointment.date }} — {{ appointment.time }}</span>
                          <span v-else>Aucune heure sélectionnée</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <div class="flex items-start gap-3">
                      <svg class="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd" />
                      </svg>
                      <div class="text-sm text-gray-700">
                        <span class="font-semibold">Horaires d'ouverture :</span> Lundi - Samedi, 8h00 - 18h00. Les
                        rendez-vous sont disponibles toutes les 30 minutes.
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Notes complémentaires -->
                <div class="space-y-6">
                  <div class="flex items-center gap-3 pb-4 border-b-2 border-gray-200">
                    <div
                      class="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-gray-900">Informations Complémentaires</h3>
                      <p class="text-sm text-gray-500">Précisez vos besoins (optionnel)</p>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">
                      Message ou demande spécifique
                    </label>
                    <textarea v-model="appointment.notes" rows="4"
                      placeholder="Ex: Je souhaite un examen de vue complet, j'ai des maux de tête fréquents..."
                      class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none outline-none"></textarea>
                    <p class="text-xs text-gray-500 mt-2">Maximum 500 caractères</p>
                  </div>
                </div>

                <!-- Conditions et Bouton de soumission -->
                <div class="space-y-6 pt-6 border-t-2 border-gray-200">
                  <div class="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                    <div class="text-sm text-green-800">
                      En confirmant ce rendez-vous, vous acceptez notre <a href="#"
                        class="font-semibold underline">politique d'annulation</a>. Toute annulation doit être effectuée
                      au moins 24h à l'avance.
                    </div>
                  </div>

                  <button type="submit"
                    :disabled="!isConnected && (!appointment.guestName || !appointment.guestEmail || !appointment.guestPhone)"
                    class="w-full py-5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg rounded-xl transition-all disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-2xl hover:shadow-green-500/50 transform hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center gap-3">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Confirmer mon Rendez-vous</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Sidebar - Historique et Infos (1 colonne) -->
          <div class="lg:col-span-1 space-y-6">

            <!-- Historique des RDV -->
            <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div
                class="relative bg-gradient-to-br from-gray-900 via-green-800 to-black text-white overflow-hidden p-6">
                <!-- Animated background patterns -->
                <div class="absolute inset-0 overflow-hidden opacity-20">
                  <div class="absolute top-0 left-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-blob"></div>
                  <div
                    class="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-blob animation-delay-2000">
                  </div>
                  <div
                    class="absolute bottom-0 left-1/3 w-96 h-96 bg-green-600/30 rounded-full blur-3xl animate-blob animation-delay-4000">
                  </div>
                </div>

                <div class="relative z-10">
                  <div class="inline-block mb-2">
                    <span
                      class="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse-slow shadow-lg shadow-green-500/50">
                      ✨ HISTORIQUE
                    </span>
                  </div>
                  <h2 class="text-2xl font-bold text-white flex items-center gap-2">
                    📋 Mes Rendez-vous
                  </h2>
                </div>

                <!-- Separator line -->
                <div
                  class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent">
                </div>
              </div>

              <div class="p-6">
                <div v-if="isConnected">
                  <div v-if="appointments.length > 0" class="space-y-4">
                    <div v-for="rdv in appointments" :key="rdv.id"
                      class="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-100 hover:border-green-300 transition-all">
                      <div class="flex items-start justify-between mb-3">
                        <div class="font-bold text-gray-900">{{ rdv.serviceName }}</div>
                        <span :class="{
                          'bg-green-100 text-green-700 border-green-200': rdv.status === 'Confirmé',
                          'bg-red-100 text-red-700 border-red-200': rdv.status === 'Annulé',
                          'bg-yellow-100 text-yellow-700 border-yellow-200': rdv.status === 'En attente',
                          'bg-gray-100 text-gray-700 border-gray-200': rdv.status === 'Terminé'
                        }" class="text-xs font-bold px-3 py-1 rounded-full border">
                          {{ rdv.status }}
                        </span>
                      </div>
                      <div class="flex items-center gap-2 text-sm text-gray-600">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span class="font-medium text-green-600">{{ rdv.date }}</span>
                        <span class="text-gray-400">•</span>
                        <span class="font-medium text-green-600">{{ rdv.time }}</span>
                      </div>
                    </div>
                  </div>
                  <div v-else class="text-center py-12">
                    <div class="text-6xl mb-4">📅</div>
                    <p class="text-gray-500">Aucun rendez-vous</p>
                  </div>
                </div>

                <div v-else class="text-center py-12">
                  <div class="text-6xl mb-4">🔐</div>
                  <p class="text-gray-600 mb-4">Connectez-vous pour voir vos rendez-vous</p>
                  <RouterLink to="/login"
                    class="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:from-green-500 hover:to-emerald-500 transition-all">
                    Se Connecter
                  </RouterLink>
                </div>
              </div>
            </div>

            <!-- Infos Contact -->
            <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div
                class="relative bg-gradient-to-br from-gray-900 via-green-800 to-black text-white overflow-hidden p-6">
                <!-- Animated background patterns -->
                <div class="absolute inset-0 overflow-hidden opacity-20">
                  <div class="absolute top-0 left-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-blob"></div>
                  <div
                    class="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-blob animation-delay-2000">
                  </div>
                </div>

                <div class="relative z-10">
                  <div class="inline-block mb-2">
                    <span
                      class="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse-slow shadow-lg shadow-green-500/50">
                      ✨ ASSISTANCE
                    </span>
                  </div>
                  <h3 class="text-xl font-bold text-white flex items-center gap-2 mb-1">
                    💬 Besoin d'Aide ?
                  </h3>
                  <p class="text-gray-300 text-sm">Notre équipe est à votre écoute</p>
                </div>

                <!-- Separator line -->
                <div
                  class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent">
                </div>
              </div>

              <div class="p-6 space-y-4">
                <!-- Téléphone -->
                <div
                  class="group p-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl hover:border-green-500 hover:shadow-lg transition-all">
                  <div class="flex items-start gap-4">
                    <div
                      class="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Téléphone</div>
                      <a href="tel:+24206123456"
                        class="text-lg font-bold text-gray-900 hover:text-green-600 transition-colors">+242 06 123 45
                        67</a>
                      <p class="text-xs text-gray-500 mt-1">Disponible 7j/7</p>
                    </div>
                  </div>
                </div>

                <!-- Email -->
                <div
                  class="group p-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl hover:border-green-500 hover:shadow-lg transition-all">
                  <div class="flex items-start gap-4">
                    <div
                      class="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</div>
                      <a href="mailto:contact@lagloire.cg"
                        class="text-lg font-bold text-gray-900 hover:text-green-600 transition-colors break-all">contact@lagloire.cg</a>
                      <p class="text-xs text-gray-500 mt-1">Réponse sous 24h</p>
                    </div>
                  </div>
                </div>

                <!-- Horaires -->
                <div
                  class="group p-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl hover:border-green-500 hover:shadow-lg transition-all">
                  <div class="flex items-start gap-4">
                    <div
                      class="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Horaires d'Ouverture
                      </div>
                      <div class="space-y-1">
                        <div class="flex justify-between items-center">
                          <span class="text-sm font-semibold text-gray-900">Lundi - Samedi</span>
                          <span class="text-sm font-bold text-green-600">8h00 - 18h00</span>
                        </div>
                        <div class="flex justify-between items-center">
                          <span class="text-sm font-semibold text-gray-900">Dimanche</span>
                          <span class="text-sm text-red-600 font-bold">Fermé</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Localisation -->
                <div
                  class="group p-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl hover:border-green-500 hover:shadow-lg transition-all">
                  <div class="flex items-start gap-4">
                    <div
                      class="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Adresse</div>
                      <p class="text-sm font-semibold text-gray-900">123 Avenue de la République</p>
                      <p class="text-sm text-gray-600">Brazzaville, Congo</p>
                    </div>
                  </div>
                </div>

                <!-- Bouton d'urgence -->
                <div class="pt-4 border-t-2 border-gray-200">
                  <a href="tel:+24206123456"
                    class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Urgence Optique</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Personnage mannequin décoratif - donne l'impression qu'il sort de la section stats -->
    <div class="absolute h-[700px] w-auto" style="right: -40px; top: -208px; z-index: 1; pointer-events: none;">
      <img src="/images/character1.png" alt="Assistant virtuel" class="h-full w-auto object-contain drop-shadow-2xl"
        style="filter: drop-shadow(0 30px 60px rgba(16, 185, 129, 0.3));" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { RouterLink } from 'vue-router';

// Services disponibles
const services = [
  { value: 'examen', name: 'Examen Complet', icon: '👁️', duration: '30-45 min' },
  { value: 'ajustement', name: 'Ajustement', icon: '🔧', duration: '15-20 min' },
  { value: 'choix', name: 'Choix Montures', icon: '👓', duration: '30 min' },
  { value: 'controle', name: 'Contrôle Annuel', icon: '✅', duration: '20 min' }
];

// État utilisateur
const isConnected = ref(false);
const currentUser = ref({
  name: 'Jean Dupont',
  email: 'jean.dupont@example.com'
});

// Données du formulaire
const appointment = ref({
  service: '',
  date: '',
  time: '',
});

// Horaires de base disponibles
const baseAvailableTimes = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
];

// Générateur pseudo-aléatoire déterministe basé sur la date (LCG)
const makeSeededRandom = (seed) => {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
};

// Retourne les créneaux disponibles pour une date donnée de façon déterministe
const generateTimesForDate = (dateString) => {
  if (!dateString) return [];
  const date = new Date(dateString + 'T00:00:00');
  const dayOfWeek = date.getDay();

  // Samedi : matin uniquement
  if (dayOfWeek === 6) {
    return baseAvailableTimes.filter(time => parseInt(time.split(':')[0]) < 13);
  }

  // Créer un seed simple à partir de la date (YYYYMMDD -> number)
  const seed = parseInt(dateString.replace(/-/g, '')) || date.getTime();
  const rnd = makeSeededRandom(seed);

  // Filtrer les créneaux de manière déterministe
  const slots = baseAvailableTimes.filter(time => {
    // préserver matin/soiré logique: un peu plus de disponibilités le matin
    const hour = parseInt(time.split(':')[0]);
    const threshold = hour < 12 ? 0.25 : 0.45; // matin plus disponible
    return rnd() > threshold;
  });

  // Assurer au moins 3 créneaux pour une date (sauf samedi déjà géré)
  if (slots.length === 0) {
    return baseAvailableTimes.slice(0, 3);
  }

  return slots;
};

// Générer les dates disponibles (14 prochains jours)
const availableDates = computed(() => {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // Exclure les dimanches
    if (date.getDay() === 0) continue;

    // Calculer les créneaux disponibles de façon déterministe
    const dateString = date.toISOString().split('T')[0];
    const generatedSlots = generateTimesForDate(dateString);
    const availableSlots = generatedSlots.length;
    const day = date.getDate().toString().padStart(2, '0');
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    const month = months[date.getMonth()];
    const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    const dayName = dayNames[date.getDay()];

    dates.push({
      date: dateString,
      day: day,
      dayName: dayName,
      month: month,
      slots: availableSlots,
      isToday: i === 0,
      isTomorrow: i === 1
    });
  }

  return dates;
});

// Fonction pour sélectionner une date
const selectDate = (date) => {
  appointment.value.date = date;
  appointment.value.time = ''; // Réinitialiser l'heure sélectionnée
};

// Réfs DOM pour navigation clavier
const dateListRef = ref(null);
const timeListRef = ref(null);

const focusDateElement = async (date) => {
  await nextTick();
  if (!dateListRef.value) return;
  const el = dateListRef.value.querySelector(`input[value="${date}"]`);
  if (el) el.focus();
};

const focusTimeElement = async (time) => {
  await nextTick();
  if (!timeListRef.value) return;
  const btn = timeListRef.value.querySelector(`[data-time="${time}"]`);
  if (btn) btn.focus();
};

// Navigation clavier: flèches gauche/droite pour parcourir dates/créneaux
const handleKeydown = (e) => {
  if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;

  const active = document.activeElement;
  if (dateListRef.value && dateListRef.value.contains(active)) {
    const list = availableDates.value;
    const idx = list.findIndex(d => d.date === appointment.value.date);
    let nextIdx = idx;
    if (e.key === 'ArrowRight') nextIdx = Math.min(list.length - 1, (idx === -1 ? 0 : idx + 1));
    else nextIdx = Math.max(0, (idx === -1 ? list.length - 1 : idx - 1));
    appointment.value.date = list[nextIdx].date;
    appointment.value.time = '';
    focusDateElement(appointment.value.date);
    e.preventDefault();
    return;
  }

  if (timeListRef.value && timeListRef.value.contains(active)) {
    const available = getAvailableTimesForDate(appointment.value.date);
    if (!available || available.length === 0) return;
    const idx = available.findIndex(t => t === appointment.value.time);
    let nextIdx = idx;
    if (e.key === 'ArrowRight') nextIdx = Math.min(available.length - 1, (idx === -1 ? 0 : idx + 1));
    else nextIdx = Math.max(0, (idx === -1 ? available.length - 1 : idx - 1));
    appointment.value.time = available[nextIdx];
    focusTimeElement(appointment.value.time);
    e.preventDefault();
    return;
  }
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown));

// Obtenir les horaires disponibles pour une date donnée (utilise la génération déterministe)
const getAvailableTimesForDate = (selectedDate) => {
  if (!selectedDate) return [];
  return generateTimesForDate(selectedDate);
};

// Historique
const appointments = ref([
  { id: 1, serviceName: 'Examen de vue complet', date: '10/11/2025', time: '15:30', status: 'Confirmé' },
  { id: 2, serviceName: 'Ajustement de monture', date: '05/09/2025', time: '11:00', status: 'Terminé' },
  { id: 3, serviceName: 'Aide au choix', date: '25/12/2025', time: '10:00', status: 'En attente' },
]);

// Soumission
const submitAppointment = () => {
  if (!isConnected.value) {
    alert("Veuillez vous connecter pour prendre un rendez-vous.");
    return;
  }

  const serviceNameMap = {
    examen: 'Examen de vue complet',
    ajustement: 'Ajustement ou réparation de monture',
    choix: 'Aide au choix de nouvelles montures',
    controle: 'Contrôle annuel',
  };

  // Formater la date au format DD/MM/YYYY
  const dateObj = new Date(appointment.value.date + 'T00:00:00');
  const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;

  const newAppointment = {
    id: appointments.value.length + 1,
    serviceName: serviceNameMap[appointment.value.service],
    date: formattedDate,
    time: appointment.value.time,
    status: 'En attente',
  };

  appointments.value.unshift(newAppointment);

  alert(`✅ Rendez-vous confirmé pour le ${newAppointment.date} à ${newAppointment.time}!\n\nService: ${newAppointment.serviceName}\n\nVous recevrez une confirmation par email.`);

  appointment.value = { service: '', date: '', time: '' };
};
</script>

<style scoped>
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes float-slow {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-30px) rotate(-5deg);
  }
}

@keyframes float-delayed {

  0%,
  100% {
    transform: translateY(0px) scale(1);
  }

  50% {
    transform: translateY(-15px) scale(1.05);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite 2s;
}
</style>