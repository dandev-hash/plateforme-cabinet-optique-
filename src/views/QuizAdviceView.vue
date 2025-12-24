<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-slate-100 relative overflow-hidden">
    <!-- Header Section -->
    <div class="bg-white border-b border-green-100 py-6 sm:py-8 relative z-10 overflow-hidden">
      <!-- Cercles décoratifs de l'en-tête -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Gros cercle noir qui recouvre les premières lettres -->
        <div
          class="absolute -top-20 -left-20 w-[280px] h-[280px] bg-black/15 rounded-full opacity-70 animate-float-slow">
        </div>

        <!-- Cercles d'accent -->
        <div class="absolute top-10 left-1/3 w-32 h-32 bg-green-200 rounded-full opacity-50 animate-float"></div>
        <div
          class="absolute -bottom-10 left-1/4 w-40 h-40 bg-emerald-100 rounded-full opacity-60 animate-float-delayed">
        </div>
        <div class="absolute top-1/2 right-20 w-24 h-24 bg-gray-200 rounded-full opacity-55 animate-float-slow"></div>
        <div class="absolute -top-5 right-1/4 w-36 h-36 bg-black/10 rounded-full opacity-50 animate-float"></div>
        <div class="absolute bottom-0 right-10 w-28 h-28 bg-green-100 rounded-full opacity-60 animate-float-delayed">
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="flex items-center justify-between gap-4">
          <div class="flex-1">
            <h1 class="text-6xl sm:text-7xl font-extrabold text-green-900 tracking-tight mb-2"
              style="font-family: 'Montserrat', sans-serif;">Quiz & Conseils</h1>
            <p class="text-gray-600 text-lg">Découvrez vos besoins visuels avec nos tests personnalisés.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Separator line -->
    <div class="w-full h-0.5 bg-green-600"></div>

    <!-- Navigation Section -->
    <div class="relative bg-gradient-to-br from-gray-900 via-green-800 to-black text-white overflow-hidden py-8">
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div class="absolute top-0 left-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-blob"></div>
        <div
          class="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-blob animation-delay-2000">
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-wrap justify-center items-center gap-30">
          <a href="#quiz-section"
            class="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            Effectuer un test
          </a>
          <a href="#quiz-section"
            class="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            Effectuer un quiz
          </a>
          <a href="#conseils-section"
            class="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            Conseils personnalisés
          </a>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent">
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12 -mt-8 relative z-10">

      <!-- Section de sélection : Quiz & Tests -->
      <div id="quiz-section" class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 scroll-mt-20">

        <!-- Carte Quiz -->
        <div @click="openQuizModal"
          class="group relative bg-gradient-to-br from-white/40 via-emerald-100/20 to-green-100/30 rounded-3xl shadow-lg overflow-hidden border border-white/40 cursor-pointer transform hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl">
          <!-- Motifs animés -->
          <div class="absolute inset-0 opacity-60 pointer-events-none">
            <svg class="absolute top-0 left-0 w-full h-full">
              <rect x="8%" y="12%" width="50" height="50" fill="none" stroke="#10b981" stroke-width="1.5" opacity="0.5">
                <animateTransform attributeName="transform" type="rotate" from="0 10 10" to="360 10 10" dur="4s"
                  repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0.2" dur="2s" repeatCount="indefinite" />
              </rect>
              <rect x="25%" y="8%" width="40" height="40" fill="none" stroke="#14b8a6" stroke-width="1" opacity="0.4">
                <animateTransform attributeName="transform" type="rotate" from="0 27 10" to="-360 27 10" dur="5s"
                  repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.3s" repeatCount="indefinite" />
              </rect>
              <polygon points="85,15 92,30 85,45 78,30" fill="none" stroke="#14b8a6" stroke-width="1.5" opacity="0.5"
                transform="translate(65%, 20%)">
                <animateTransform attributeName="transform" type="rotate" from="0 85 30" to="360 85 30" dur="3.5s"
                  repeatCount="indefinite" additive="sum" />
                <animate attributeName="opacity" from="0.6" to="0.2" dur="2.5s" repeatCount="indefinite" />
              </polygon>
              <polygon points="10,5 18,12 15,22 7,18" fill="none" stroke="#059669" stroke-width="1" opacity="0.4"
                transform="translate(78%, 12%)">
                <animateTransform attributeName="transform" type="rotate" from="0 13 14" to="-360 13 14" dur="4.5s"
                  repeatCount="indefinite" additive="sum" />
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.2s" repeatCount="indefinite" />
              </polygon>
              <line x1="35%" y1="35%" x2="50%" y2="50%" stroke="#059669" stroke-width="2" opacity="0.5">
                <animate attributeName="opacity" from="0.6" to="0.1" dur="1.8s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="rotate" from="0 42 42" to="360 42 42" dur="6s"
                  repeatCount="indefinite" />
              </line>
              <line x1="35%" y1="50%" x2="50%" y2="35%" stroke="#059669" stroke-width="2" opacity="0.5">
                <animate attributeName="opacity" from="0.6" to="0.1" dur="1.8s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="rotate" from="0 42 42" to="360 42 42" dur="6s"
                  repeatCount="indefinite" />
              </line>
              <line x1="55%" y1="40%" x2="68%" y2="55%" stroke="#10b981" stroke-width="1.5" opacity="0.4">
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.2s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="rotate" from="0 61 47" to="-360 61 47" dur="7s"
                  repeatCount="indefinite" />
              </line>
              <polygon points="0,0 20,8 16,28 -4,20" fill="none" stroke="#10b981" stroke-width="1.5" opacity="0.5"
                transform="translate(12%, 68%)">
                <animate attributeName="opacity" from="0.6" to="0.2" dur="2.3s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="scale" from="1" to="1.4" dur="3.5s"
                  repeatCount="indefinite" additive="sum" />
              </polygon>
              <rect x="30%" y="70%" width="45" height="45" fill="none" stroke="#059669" stroke-width="1" opacity="0.4"
                rx="6">
                <animateTransform attributeName="transform" type="rotate" from="0 32 72" to="360 32 72" dur="5.5s"
                  repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.6s" repeatCount="indefinite" />
              </rect>
              <rect x="70%" y="60%" width="50" height="50" fill="none" stroke="#14b8a6" stroke-width="1.5" opacity="0.4"
                rx="8">
                <animateTransform attributeName="transform" type="rotate" from="0 72 62" to="-360 72 62" dur="5s"
                  repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.5s" repeatCount="indefinite" />
              </rect>
              <polygon points="5,0 15,5 12,18 2,13" fill="none" stroke="#10b981" stroke-width="1" opacity="0.4"
                transform="translate(55%, 75%)">
                <animateTransform attributeName="transform" type="rotate" from="0 8 9" to="360 8 9" dur="4s"
                  repeatCount="indefinite" additive="sum" />
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.4s" repeatCount="indefinite" />
              </polygon>
              <line x1="18%" y1="45%" x2="28%" y2="58%" stroke="#14b8a6" stroke-width="1.5" opacity="0.4">
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="rotate" from="0 23 51" to="360 23 51" dur="6.5s"
                  repeatCount="indefinite" />
              </line>
              <polygon points="8,3 14,10 10,20 4,13" fill="none" stroke="#059669" stroke-width="1" opacity="0.4"
                transform="translate(82%, 45%)">
                <animateTransform attributeName="transform" type="rotate" from="0 9 11" to="-360 9 11" dur="4.8s"
                  repeatCount="indefinite" additive="sum" />
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.1s" repeatCount="indefinite" />
              </polygon>
            </svg>
          </div>
          <div
            class="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-green-400/10 via-emerald-400/5 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700">
          </div>
          <div
            class="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-400/10 via-green-400/5 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700">
          </div>

          <div class="relative p-10 overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity">
            </div>

            <div class="relative z-10 text-center space-y-4">
              <div
                class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-3xl mb-2 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                <span class="text-6xl">📋</span>
              </div>

              <div>
                <h3
                  class="text-3xl font-extrabold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-900 bg-clip-text text-transparent mb-3">
                  Quiz Diagnostic Visuel</h3>
                <p class="text-gray-600 text-base leading-relaxed max-w-sm mx-auto">Obtenez des recommandations
                  personnalisées selon vos besoins</p>
              </div>

              <div
                class="pt-4 inline-flex items-center gap-2 text-green-700 text-sm font-bold group-hover:gap-4 transition-all">
                <span>Commencer le diagnostic</span>
                <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Carte Tests -->
        <div @click="openTestModal"
          class="group relative bg-gradient-to-br from-white/40 via-blue-100/20 to-indigo-100/30 rounded-3xl shadow-lg overflow-hidden border border-white/40 cursor-pointer transform hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl">
          <!-- Motifs animés -->
          <div class="absolute inset-0 opacity-60 pointer-events-none">
            <svg class="absolute top-0 left-0 w-full h-full">
              <polygon points="18,8 26,20 18,32 10,20" fill="none" stroke="#3b82f6" stroke-width="1.5" opacity="0.5"
                transform="translate(12%, 10%)">
                <animateTransform attributeName="transform" type="rotate" from="0 18 20" to="360 18 20" dur="5s"
                  repeatCount="indefinite" additive="sum" />
                <animate attributeName="opacity" from="0.6" to="0.2" dur="2.5s" repeatCount="indefinite" />
              </polygon>
              <polygon points="8,4 14,12 10,22 4,14" fill="none" stroke="#6366f1" stroke-width="1" opacity="0.4"
                transform="translate(28%, 8%)">
                <animateTransform attributeName="transform" type="rotate" from="0 9 13" to="-360 9 13" dur="4.2s"
                  repeatCount="indefinite" additive="sum" />
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.2s" repeatCount="indefinite" />
              </polygon>
              <rect x="70%" y="15%" width="55" height="55" fill="none" stroke="#8b5cf6" stroke-width="1.5" opacity="0.5"
                rx="8">
                <animateTransform attributeName="transform" type="rotate" from="0 72 17" to="-360 72 17" dur="4s"
                  repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0.2" dur="2s" repeatCount="indefinite" />
              </rect>
              <rect x="82%" y="8%" width="40" height="40" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.4"
                rx="5">
                <animateTransform attributeName="transform" type="rotate" from="0 84 10" to="360 84 10" dur="5.5s"
                  repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.3s" repeatCount="indefinite" />
              </rect>
              <path d="M 35,40 L 43,40 L 47,48 L 43,56 L 35,56 L 31,48 Z" fill="none" stroke="#6366f1" stroke-width="2"
                opacity="0.5" transform="translate(8%, 8%)">
                <animateTransform attributeName="transform" type="rotate" from="0 39 48" to="360 39 48" dur="6s"
                  repeatCount="indefinite" additive="sum" />
                <animate attributeName="opacity" from="0.6" to="0.2" dur="3s" repeatCount="indefinite" />
              </path>
              <path d="M 10,8 L 16,8 L 19,14 L 16,20 L 10,20 L 7,14 Z" fill="none" stroke="#8b5cf6" stroke-width="1"
                opacity="0.4" transform="translate(55%, 25%)">
                <animateTransform attributeName="transform" type="rotate" from="0 13 14" to="-360 13 14" dur="5.2s"
                  repeatCount="indefinite" additive="sum" />
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.4s" repeatCount="indefinite" />
              </path>
              <polygon points="0,0 28,0 28,28 0,28" fill="none" stroke="#3b82f6" stroke-width="1.5" opacity="0.5"
                transform="translate(8%, 65%)">
                <animateTransform attributeName="transform" type="scale" from="1" to="1.3" dur="3.5s"
                  repeatCount="indefinite" additive="sum" />
                <animate attributeName="opacity" from="0.6" to="0.2" dur="2.5s" repeatCount="indefinite" />
              </polygon>
              <rect x="32%" y="72%" width="42" height="42" fill="none" stroke="#6366f1" stroke-width="1" opacity="0.4"
                rx="6">
                <animateTransform attributeName="transform" type="rotate" from="0 34 74" to="360 34 74" dur="4.8s"
                  repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.6s" repeatCount="indefinite" />
              </rect>
              <line x1="68%" y1="62%" x2="82%" y2="78%" stroke="#8b5cf6" stroke-width="2" opacity="0.5">
                <animate attributeName="opacity" from="0.6" to="0.1" dur="2s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="rotate" from="0 75 70" to="360 75 70" dur="5s"
                  repeatCount="indefinite" />
              </line>
              <line x1="68%" y1="78%" x2="82%" y2="62%" stroke="#8b5cf6" stroke-width="2" opacity="0.5">
                <animate attributeName="opacity" from="0.6" to="0.1" dur="2s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="rotate" from="0 75 70" to="360 75 70" dur="5s"
                  repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="55%" x2="62%" y2="68%" stroke="#6366f1" stroke-width="1.5" opacity="0.4">
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.3s" repeatCount="indefinite" />
                <animateTransform attributeName="transform" type="rotate" from="0 56 61" to="-360 56 61" dur="6.5s"
                  repeatCount="indefinite" />
              </line>
              <polygon points="6,2 12,8 9,16 3,10" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.4"
                transform="translate(48%, 12%)">
                <animateTransform attributeName="transform" type="rotate" from="0 7 9" to="360 7 9" dur="4.5s"
                  repeatCount="indefinite" additive="sum" />
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.1s" repeatCount="indefinite" />
              </polygon>
              <rect x="58%" y="75%" width="35" height="35" fill="none" stroke="#8b5cf6" stroke-width="1" opacity="0.4"
                rx="4">
                <animateTransform attributeName="transform" type="rotate" from="0 60 77" to="-360 60 77" dur="5.8s"
                  repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0.1" dur="2.7s" repeatCount="indefinite" />
              </rect>
            </svg>
          </div>
          <div
            class="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-400/10 via-indigo-400/5 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700">
          </div>
          <div
            class="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-400/10 via-blue-400/5 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700">
          </div>

          <div class="relative p-10 overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"
              style="animation-delay: 0.3s;"></div>

            <div class="relative z-10 text-center space-y-4">
              <div
                class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-3xl mb-2 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                <span class="text-6xl">🔬</span>
              </div>

              <div>
                <h3
                  class="text-3xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-3">
                  Tests Visuels Interactifs</h3>
                <p class="text-gray-600 text-base leading-relaxed max-w-sm mx-auto">Évaluez votre santé oculaire avec
                  nos outils de dépistage</p>
              </div>

              <div
                class="pt-4 inline-flex items-center gap-2 text-indigo-700 text-sm font-bold group-hover:gap-4 transition-all">
                <span>Lancer un test</span>
                <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Quiz/Test + FAQ - Pleine largeur -->
    <div class="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">

        <!-- Colonne Gauche : Quiz OU Test -->
        <div id="quiz-test-section" class="lg:col-span-3 scroll-mt-20">
          <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

            <!-- En-tête Quiz -->
            <div v-if="selectedQuizType && !selectedTestType"
              class="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 p-8 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer">
              </div>
              <div class="absolute inset-0 opacity-10"
                style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 20px 20px;">
              </div>

              <div class="relative z-10">
                <h2 class="text-3xl font-bold text-white flex items-center gap-3 drop-shadow-lg">
                  <span class="text-4xl">{{ selectedQuizType.icon }}</span>
                  {{ selectedQuizType.title }}
                </h2>
                <p class="text-green-100 mt-2">{{ selectedQuizType.description }}</p>
                <div class="flex gap-4 mt-3 text-sm text-green-200">
                  <span>📋 {{ selectedQuizType.questionCount }} questions</span>
                  <span>⏱️ {{ selectedQuizType.duration }}</span>
                </div>
              </div>
            </div>

            <!-- En-tête Test -->
            <div v-else-if="selectedTestType"
              class="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 p-8 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer">
              </div>
              <div class="absolute inset-0 opacity-10"
                style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 20px 20px;">
              </div>

              <div class="relative z-10">
                <h2 class="text-3xl font-bold text-white flex items-center gap-3 drop-shadow-lg">
                  <span class="text-4xl">{{ selectedTestType.icon }}</span>
                  {{ selectedTestType.title }}
                </h2>
                <p class="text-blue-100 mt-2">{{ selectedTestType.description }}</p>
                <div class="flex gap-4 mt-3 text-sm text-blue-200">
                  <span>📋 {{ selectedTestType.stepCount }} étapes</span>
                  <span>⏱️ {{ selectedTestType.duration }}</span>
                </div>
              </div>
            </div>

            <!-- En-tête par défaut -->
            <div v-else class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer">
              </div>
              <div class="absolute inset-0 opacity-10"
                style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 20px 20px;">
              </div>

              <div class="relative z-10">
                <h2 class="text-3xl font-bold text-white flex items-center gap-3 drop-shadow-lg">
                  <span class="text-4xl">📋</span>
                  Sélectionnez un Quiz ou Test
                </h2>
                <p class="text-gray-300 mt-2">Choisissez un quiz pour des résultats instantanés ou un test médical
                  approfondi</p>
              </div>
            </div>

            <!-- Corps du questionnaire -->
            <div class="p-8">
              <!-- Message de sélection -->
              <div v-if="!selectedQuizType && !selectedTestType" class="text-center py-12">
                <div class="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                  <span class="text-6xl">🎯</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Commencez par choisir</h3>
                <p class="text-gray-600 mb-8">Cliquez sur les cartes ci-dessus pour sélectionner un quiz rapide ou un
                  test médical</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <button @click="openQuizModal"
                    class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all">
                    Choisir un Quiz
                  </button>
                  <button @click="openTestModal"
                    class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all">
                    Choisir un Test
                  </button>
                </div>
              </div>

              <!-- Formulaire d'inscription pour Test -->
              <div v-else-if="selectedTestType && !testFormSubmitted" class="space-y-6">
                <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <div class="flex items-start gap-3">
                    <span class="text-3xl">ℹ️</span>
                    <div>
                      <h3 class="font-bold text-blue-900 mb-2">Test Médical Approfondi</h3>
                      <p class="text-blue-800 text-sm leading-relaxed">
                        Ce test nécessite une analyse détaillée et rigoureuse. Commencez par renseigner vos
                        informations,
                        puis effectuez le test. Les résultats vous seront envoyés par email dans un délai de <strong>24
                          à 48 heures</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <form @submit.prevent="submitTestForm" class="space-y-6">
                  <!-- Nom complet -->
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">
                      Nom Complet <span class="text-red-500">*</span>
                    </label>
                    <input v-model="testFormData.name" type="text" required placeholder="Jean Dupont"
                      class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none">
                  </div>

                  <!-- Email -->
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">
                      Adresse Email <span class="text-red-500">*</span>
                    </label>
                    <input v-model="testFormData.email" @blur="validateEmail" type="email" required
                      placeholder="jean.dupont@example.com" :class="[
                        'w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-200 transition-all outline-none',
                        emailError ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'
                      ]">
                    <p v-if="emailError" class="text-xs text-red-500 mt-2">{{ emailError }}</p>
                    <p v-else class="text-xs text-gray-500 mt-2">📧 Les résultats seront envoyés à cette adresse</p>
                  </div>

                  <!-- Téléphone -->
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-2">
                      Téléphone <span class="text-gray-400">(optionnel)</span>
                    </label>
                    <input v-model="testFormData.phone" type="tel" placeholder="+221 XX XXX XX XX"
                      class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all outline-none">
                  </div>

                  <!-- Boutons -->
                  <div class="flex gap-3 pt-4">
                    <button type="submit" :disabled="!isFormValid"
                      class="flex-1 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl transition-all duration-300 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none">
                      <span v-if="isFormValid">▶️ Commencer le Test</span>
                      <span v-else>⚠️ Remplissez les champs obligatoires</span>
                    </button>
                    <button type="button" @click="resetTestSelection"
                      class="px-6 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all">
                      Annuler
                    </button>
                  </div>
                </form>
              </div>

              <!-- Contenu du Test (après soumission du formulaire) -->
              <div v-else-if="selectedTestType && testFormSubmitted && !testCompleted" class="space-y-6">
                <div class="bg-blue-50 border border-blue-200 p-5 rounded-lg mb-6">
                  <div class="flex items-start gap-3">
                    <span class="text-2xl">ℹ️</span>
                    <div>
                      <h3 class="font-semibold text-blue-900 mb-1">Informations enregistrées</h3>
                      <p class="text-blue-800 text-sm">Les résultats seront envoyés à <strong>{{ testFormData.email
                          }}</strong></p>
                    </div>
                  </div>
                </div>

                <!-- Indicateur de progression du test -->
                <div :class="[
                  'bg-white rounded-lg p-4 border-2 transition-all duration-300',
                  currentTestStep === selectedTestType.stepCount - 1
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300'
                ]">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold text-gray-700">Progression du test</span>
                    <span :class="[
                      'text-sm font-semibold',
                      currentTestStep === selectedTestType.stepCount - 1 ? 'text-green-600' : 'text-blue-600'
                    ]">
                      {{ currentTestStep === selectedTestType.stepCount - 1 ? '🏁 Dernière étape !' : `Étape
                      ${currentTestStep + 1} / ${selectedTestType.stepCount}` }}
                    </span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div :class="[
                      'h-2 rounded-full transition-all duration-500',
                      currentTestStep === selectedTestType.stepCount - 1 ? 'bg-green-600' : 'bg-blue-600'
                    ]" :style="{ width: `${((currentTestStep + 1) / selectedTestType.stepCount) * 100}%` }"></div>
                  </div>
                </div>

                <!-- Contenu du test -->
                <div class="bg-white border border-gray-300 rounded-lg p-8">
                  <!-- En-tête de l'étape -->
                  <div class="mb-6 pb-4 border-b border-gray-200">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-3xl">{{ selectedTestType.icon }}</span>
                      <h3 class="text-2xl font-semibold text-gray-900">{{ getCurrentTestStep().title }}</h3>
                    </div>
                    <p class="text-gray-600 text-sm">{{ getCurrentTestStep().instruction }}</p>
                  </div>

                  <!-- Contenu de l'étape -->
                  <Transition name="test-step" mode="out-in">
                    <div :key="currentTestStep" class="min-h-[300px]">
                      <!-- Test d'Acuité Visuelle -->
                      <div v-if="selectedTestType.id === 'acuite'">
                        <div class="text-center space-y-6">
                          <p class="text-gray-700 mb-4">{{ getCurrentTestStep().description }}</p>
                          <div class="bg-gray-50 border border-gray-300 rounded-lg p-8 inline-block">
                            <div class="font-mono font-bold text-gray-900"
                              :style="{ fontSize: getCurrentTestStep().size }">
                              {{ getCurrentTestStep().letter }}
                            </div>
                          </div>
                          <div class="space-y-3 max-w-md mx-auto">
                            <button v-for="option in getCurrentTestStep().options" :key="option"
                              @click="answerTestQuestion(option)" :class="[
                                'w-full px-6 py-3 border-2 rounded-lg font-medium transition-all',
                                testAnswers[currentTestStep] === option
                                  ? 'border-blue-600 bg-blue-100 text-blue-900'
                                  : 'bg-white border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-900'
                              ]">
                              {{ option }}
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- Test de Myopie -->
                      <div v-else-if="selectedTestType.id === 'myopie'">
                        <div class="text-center space-y-6">
                          <p class="text-gray-700 mb-4">{{ getCurrentTestStep().description }}</p>
                          <div v-if="getCurrentTestStep().letter"
                            class="bg-gray-50 border border-gray-300 rounded-lg p-8 inline-block">
                            <div class="font-mono font-bold text-gray-900"
                              :style="{ fontSize: getCurrentTestStep().size }">
                              {{ getCurrentTestStep().letter }}
                            </div>
                          </div>
                          <p v-else class="text-lg text-gray-800 mb-4">{{ getCurrentTestStep().question }}</p>
                          <div class="space-y-3 max-w-md mx-auto">
                            <button v-for="option in getCurrentTestStep().options" :key="option"
                              @click="answerTestQuestion(option)" :class="[
                                'w-full px-6 py-3 border-2 rounded-lg font-medium transition-all',
                                testAnswers[currentTestStep] === option
                                  ? 'border-blue-600 bg-blue-100 text-blue-900'
                                  : 'bg-white border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-900'
                              ]">
                              {{ option }}
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- Test d'Hypermétropie -->
                      <div v-else-if="selectedTestType.id === 'hypermetropie'">
                        <div class="text-center space-y-6">
                          <p class="text-gray-700 mb-4">{{ getCurrentTestStep().description }}</p>
                          <div v-if="getCurrentTestStep().letter"
                            class="bg-gray-50 border border-gray-300 rounded-lg p-8 inline-block">
                            <div class="font-sans text-gray-900" :style="{ fontSize: getCurrentTestStep().size }">
                              {{ getCurrentTestStep().letter }}
                            </div>
                          </div>
                          <p v-else class="text-lg text-gray-800 mb-4">{{ getCurrentTestStep().question }}</p>
                          <div class="space-y-3 max-w-md mx-auto">
                            <button v-for="option in getCurrentTestStep().options" :key="option"
                              @click="answerTestQuestion(option)" :class="[
                                'w-full px-6 py-3 border-2 rounded-lg font-medium transition-all',
                                testAnswers[currentTestStep] === option
                                  ? 'border-blue-600 bg-blue-100 text-blue-900'
                                  : 'bg-white border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-900'
                              ]">
                              {{ option }}
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- Test de Daltonisme -->
                      <div v-else-if="selectedTestType.id === 'daltonisme'">
                        <div class="text-center space-y-6">
                          <p class="text-gray-700 mb-4">{{ getCurrentTestStep().description }}</p>
                          <div class="bg-gray-100 border border-gray-300 rounded-lg p-6 inline-block">
                            <div class="w-64 h-64 rounded-full flex items-center justify-center text-6xl font-bold"
                              :style="{ backgroundColor: getCurrentTestStep().color }">
                              {{ getCurrentTestStep().number || '?' }}
                            </div>
                          </div>
                          <div class="space-y-3 max-w-md mx-auto">
                            <button v-for="option in getCurrentTestStep().options" :key="option"
                              @click="answerTestQuestion(option)" :class="[
                                'w-full px-6 py-3 border-2 rounded-lg font-medium transition-all',
                                testAnswers[currentTestStep] === option
                                  ? 'border-blue-600 bg-blue-100 text-blue-900'
                                  : 'bg-white border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-900'
                              ]">
                              {{ option }}
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- Test d'Astigmatisme -->
                      <div v-else-if="selectedTestType.id === 'astigmatisme'">
                        <div class="text-center space-y-6">
                          <p class="text-gray-700 mb-4">{{ getCurrentTestStep().description }}</p>
                          <div class="bg-white border border-gray-300 rounded-lg p-4 sm:p-8 inline-block max-w-full">
                            <svg class="w-full max-w-[300px] h-auto" viewBox="0 0 300 300">
                              <g v-for="i in 12" :key="i" :transform="`rotate(${i * 30} 150 150)`">
                                <line x1="150" y1="20" x2="150" y2="100" stroke="black"
                                  :stroke-width="getCurrentTestStep().lineWidth || 3" />
                              </g>
                            </svg>
                          </div>
                          <div class="space-y-3 max-w-md mx-auto">
                            <button v-for="option in getCurrentTestStep().options" :key="option"
                              @click="answerTestQuestion(option)" :class="[
                                'w-full px-6 py-3 border-2 rounded-lg font-medium transition-all',
                                testAnswers[currentTestStep] === option
                                  ? 'border-blue-600 bg-blue-100 text-blue-900'
                                  : 'bg-white border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-900'
                              ]">
                              {{ option }}
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- Grille d'Amsler -->
                      <div v-else-if="selectedTestType.id === 'amsler'">
                        <div class="text-center space-y-6">
                          <p class="text-gray-700 mb-4">{{ getCurrentTestStep().description }}</p>
                          <div class="bg-white border border-gray-300 rounded-lg p-4 sm:p-6 inline-block max-w-full">
                            <svg class="w-full max-w-[400px] h-auto bg-white" viewBox="0 0 400 400">
                              <!-- Grille -->
                              <g v-for="i in 20" :key="'h' + i">
                                <line :x1="0" :y1="i * 20" :x2="400" :y2="i * 20" stroke="#000" stroke-width="1" />
                              </g>
                              <g v-for="i in 20" :key="'v' + i">
                                <line :x1="i * 20" :y1="0" :x2="i * 20" :y2="400" stroke="#000" stroke-width="1" />
                              </g>
                              <!-- Point central -->
                              <circle cx="200" cy="200" r="4" fill="black" />
                            </svg>
                          </div>
                          <div class="space-y-3 max-w-md mx-auto">
                            <button v-for="option in getCurrentTestStep().options" :key="option"
                              @click="answerTestQuestion(option)" :class="[
                                'w-full px-6 py-3 border-2 rounded-lg font-medium transition-all',
                                testAnswers[currentTestStep] === option
                                  ? 'border-blue-600 bg-blue-100 text-blue-900'
                                  : 'bg-white border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-900'
                              ]">
                              {{ option }}
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- Tests type questionnaire -->
                      <div v-else>
                        <div class="space-y-4">
                          <p class="text-gray-700 text-lg mb-6">{{ getCurrentTestStep().question }}</p>
                          <div class="space-y-3">
                            <button v-for="option in getCurrentTestStep().options" :key="option"
                              @click="answerTestQuestion(option)" :class="[
                                'w-full text-left px-6 py-4 border-2 rounded-lg transition-all',
                                testAnswers[currentTestStep] === option
                                  ? 'border-blue-600 bg-blue-100 text-blue-900'
                                  : 'bg-white border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-900'
                              ]">
                              {{ option }}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Transition>

                  <!-- Boutons de navigation -->
                  <div class="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                    <button v-if="currentTestStep > 0" @click="previousTestStep"
                      aria-label="Retour à l'étape précédente"
                      class="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-all">
                      ← Précédent
                    </button>
                    <div class="flex-1"></div>
                    <button v-if="currentTestStep < selectedTestType.stepCount - 1" @click="nextTestStep"
                      :disabled="!testAnswers[currentTestStep]" :aria-label="`Passer à l'étape ${currentTestStep + 2}`"
                      class="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all">
                      Suivant →
                    </button>
                    <button v-else @click="completeTest" :disabled="!testAnswers[currentTestStep]"
                      aria-label="Terminer le test et soumettre vos réponses"
                      class="px-8 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all">
                      ✓ Terminer le test
                    </button>
                  </div>
                </div>
              </div>

              <!-- Résultat du Test -->
              <div v-else-if="selectedTestType && testCompleted" class="space-y-6">
                <div ref="testCompletionMessage" class="bg-green-50 border border-green-300 p-6 rounded-lg text-center">
                  <div class="text-6xl mb-4">✅</div>
                  <h3 class="text-2xl font-bold text-green-900 mb-2">Test terminé avec succès</h3>
                  <p class="text-green-800 mb-4">Vos résultats ont été enregistrés et seront analysés par notre équipe
                    médicale.</p>
                  <p class="text-sm text-green-700">Un rapport détaillé vous sera envoyé à <strong>{{ testFormData.email
                      }}</strong> sous 24-48 heures.</p>
                </div>
                <button @click="resetTestSelection"
                  class="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all">
                  Effectuer un autre test
                </button>
              </div>

              <!-- Contenu du Quiz -->
              <div v-else-if="selectedQuizType && !quizCompleted && !isCalculating" class="space-y-8">

                <!-- Indicateur de progression -->
                <div class="bg-white rounded-xl p-4 border-2 border-green-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold text-gray-700">Progression</span>
                    <span class="text-sm font-bold text-green-600">{{answers.filter(a => a !== null).length}} / {{
                      questions.length }}</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      class="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
                      :style="{ width: `${(answers.filter(a => a !== null).length / questions.length) * 100}%` }"></div>
                  </div>
                  <p class="text-xs text-gray-500 mt-2 text-center">Page {{ currentQuestionPage + 1 }} sur {{ totalPages
                  }}</p>
                </div>

                <!-- Questions -->
                <Transition name="test-step" mode="out-in">
                  <div :key="currentQuestionPage">
                    <div v-for="q in displayedQuestions" :key="q.globalIndex"
                      class="relative p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-all mb-6">

                      <!-- Numéro de question -->
                      <div
                        class="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {{ q.globalIndex + 1 }}
                      </div>

                      <p class="text-xl font-bold text-gray-900 mb-5 pl-8">
                        {{ q.text }}
                      </p>

                      <div class="space-y-3">
                        <button v-for="(option, oIndex) in q.options" :key="oIndex"
                          @click="answers[q.globalIndex] = option.value" :class="[
                            'w-full text-left p-4 border-2 rounded-xl transition-all',
                            answers[q.globalIndex] === option.value
                              ? 'border-green-600 bg-green-50'
                              : 'border-gray-200 bg-white hover:border-green-400 hover:shadow-md'
                          ]">
                          <div class="flex items-center gap-3">
                            <!-- Cercle de sélection -->
                            <div :class="[
                              'w-6 h-6 border-2 rounded-full transition-all flex items-center justify-center',
                              answers[q.globalIndex] === option.value
                                ? 'border-green-600 bg-green-600'
                                : 'border-gray-300'
                            ]">
                              <svg v-if="answers[q.globalIndex] === option.value" class="w-4 h-4 text-white"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                              </svg>
                            </div>
                            <span class="text-gray-700 font-medium">{{ option.text }}</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </Transition>

                <!-- Navigation et Soumission -->
                <div class="flex gap-3 pt-6">
                  <!-- Bouton Précédent -->
                  <button v-if="currentQuestionPage > 0" @click="previousPage"
                    class="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all flex items-center gap-2">
                    ← Précédent
                  </button>

                  <div class="flex-1"></div>

                  <!-- Bouton Suivant -->
                  <button v-if="currentQuestionPage < totalPages - 1" @click="nextPage" :disabled="!isCurrentPageValid"
                    class="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed flex items-center gap-2">
                    Suivant →
                  </button>

                  <!-- Bouton Soumettre (dernière page) -->
                  <button v-else @click="calculateResults" :disabled="!isQuizValid"
                    class="flex-1 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg rounded-xl transition-all duration-300 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none">
                    <span v-if="isQuizValid">⚡ Obtenir mes Résultats</span>
                    <span v-else>⚠️ Complétez toutes les questions</span>
                  </button>
                </div>
              </div>

              <!-- Écran de Chargement Professionnel -->
              <div v-else-if="isCalculating" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div class="bg-white rounded-2xl p-10 text-center max-w-md mx-4 shadow-2xl">
                  <!-- Spinner -->
                  <div
                    class="animate-spin w-20 h-20 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-6">
                  </div>

                  <!-- Icône du Quiz -->
                  <div class="text-6xl mb-4">{{ selectedQuizType.icon }}</div>

                  <!-- Texte Principal -->
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">Analyse en cours...</h3>
                  <p class="text-gray-600 mb-6">
                    Nous analysons vos {{ questions.length }} réponses
                  </p>

                  <!-- Barre de progression -->
                  <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-4">
                    <div class="bg-gradient-to-r from-green-600 to-emerald-600 h-full rounded-full"
                      style="width: 100%; animation: progressBar 8s ease-in-out"></div>
                  </div>

                  <!-- Étapes -->
                  <div class="space-y-2 text-left">
                    <div class="flex items-center gap-2 text-gray-700 text-sm">
                      <div class="relative flex items-center justify-center">
                        <div class="w-2 h-2 bg-green-600 rounded-full"></div>
                        <div class="absolute w-2 h-2 bg-green-600 rounded-full animate-ping"></div>
                      </div>
                      <span>Traitement de vos réponses...</span>
                    </div>
                    <div class="flex items-center gap-2 text-gray-700 text-sm">
                      <div class="relative flex items-center justify-center">
                        <div class="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        <div class="absolute w-2 h-2 bg-emerald-600 rounded-full animate-ping"
                          style="animation-delay: 0.3s"></div>
                      </div>
                      <span>Analyse de votre profil visuel...</span>
                    </div>
                    <div class="flex items-center gap-2 text-gray-700 text-sm">
                      <div class="relative flex items-center justify-center">
                        <div class="w-2 h-2 bg-green-700 rounded-full"></div>
                        <div class="absolute w-2 h-2 bg-green-700 rounded-full animate-ping"
                          style="animation-delay: 0.6s"></div>
                      </div>
                      <span>Génération des recommandations...</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Résultats du Quiz - Version Formelle et Professionnelle -->
              <div v-else-if="quizCompleted && !isCalculating" class="py-8">

                <!-- Message de confirmation d'envoi -->
                <div v-if="quizResultSent"
                  class="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-6 animate-fade-in">
                  <div class="flex items-start gap-4">
                    <div class="text-4xl">✅</div>
                    <div class="flex-1">
                      <h4 class="text-lg font-bold text-green-900 mb-2">Résultats envoyés avec succès !</h4>
                      <p class="text-green-800 text-sm">Un rapport détaillé de votre évaluation a été envoyé à votre
                        adresse email. Vous le recevrez dans quelques minutes.</p>
                    </div>
                  </div>
                </div>

                <!-- En-tête Rapport Formel -->
                <div class="bg-white rounded-lg border-2 border-gray-300 p-8 mb-6 shadow-sm">
                  <div class="border-b border-gray-200 pb-6 mb-6">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <p class="text-sm text-gray-500 uppercase tracking-wide mb-1">Rapport d'Évaluation</p>
                        <h3 class="text-3xl font-bold text-gray-900">{{ selectedQuizType.title }}</h3>
                      </div>
                      <div class="text-5xl opacity-80">{{ selectedQuizType.icon }}</div>
                    </div>
                    <div class="flex items-center gap-6 text-sm text-gray-600">
                      <div class="flex items-center gap-2">
                        <span class="font-medium">Date :</span>
                        <span>{{ new Date().toLocaleDateString('fr-FR', {
                          day: '2-digit', month: 'long', year: 'numeric'
                        }) }}</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="font-medium">Questions traitées :</span>
                        <span>{{ questions.length }}</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="font-medium">Taux de complétion :</span>
                        <span class="text-green-700 font-semibold">100%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">Contexte de
                      l'évaluation</h4>
                    <p class="text-gray-700 leading-relaxed">{{ selectedQuizType.description }}</p>
                  </div>
                </div>

                <!-- Analyse et Recommandations -->
                <div class="bg-white rounded-lg border-2 border-gray-300 p-8 mb-6 shadow-sm">
                  <h4 class="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                    Analyse de votre profil et recommandations
                  </h4>
                  <div class="prose prose-gray max-w-none">
                    <p class="text-gray-700 leading-relaxed mb-4">
                      Suite à l'analyse approfondie de vos réponses, notre système a établi le profil suivant :
                    </p>
                    <div class="bg-gray-50 border-l-4 border-gray-400 p-6 my-4">
                      <p class="text-gray-800 leading-relaxed whitespace-pre-line">{{ resultMessage }}</p>
                    </div>
                  </div>
                </div>

                <!-- Recommandations Professionnelles -->
                <div class="bg-white rounded-lg border-2 border-gray-300 p-8 mb-6 shadow-sm">
                  <h4 class="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                    Recommandations professionnelles
                  </h4>
                  <div class="space-y-4">
                    <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div
                        class="flex-shrink-0 w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h5 class="font-bold text-gray-900 mb-2">Consultation ophtalmologique</h5>
                        <p class="text-sm text-gray-600 leading-relaxed">
                          Nous vous recommandons de planifier un examen complet avec l'un de nos opticiens diplômés
                          d'État.
                          Cette consultation permettra de valider ces recommandations et d'établir une prescription
                          précise adaptée à votre vue.
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div
                        class="flex-shrink-0 w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h5 class="font-bold text-gray-900 mb-2">Examen approfondi avec équipement médical</h5>
                        <p class="text-sm text-gray-600 leading-relaxed">
                          Notre centre dispose d'équipements de diagnostic de dernière génération permettant une analyse
                          détaillée de votre santé oculaire (réfractomètre, tonomètre, fond d'œil, etc.).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Suite à donner -->
                <div class="bg-gray-800 text-white rounded-lg p-8 mb-6 shadow-sm">
                  <h4 class="text-xl font-bold mb-4">Suite à donner à cette évaluation</h4>
                  <p class="text-gray-300 mb-6 leading-relaxed">
                    Pour bénéficier d'un accompagnement personnalisé et d'une prise en charge optimale de votre santé
                    visuelle,
                    nous vous invitons à prendre contact avec notre équipe.
                  </p>
                  <div class="grid sm:grid-cols-2 gap-4">
                    <RouterLink to="/rendez-vous"
                      class="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-6 rounded-lg transition-all duration-200">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Prendre rendez-vous
                    </RouterLink>
                    <RouterLink to="/contact"
                      class="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg border-2 border-white/30 transition-all duration-200">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Nous contacter
                    </RouterLink>
                  </div>
                </div>

                <!-- Actions -->
                <div class="flex flex-col sm:flex-row gap-4">
                  <RouterLink to="/catalogue"
                    class="inline-flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Consulter notre catalogue
                  </RouterLink>
                  <button @click="resetQuiz"
                    class="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Nouvelle évaluation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Colonne Droite : FAQ Thématique -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 sticky top-24">

            <!-- En-tête FAQ -->
            <div class="bg-gray-800 px-5 py-4 border-b border-gray-300">
              <h2 class="text-lg font-semibold text-white flex items-center gap-2">
                <span class="text-xl">💡</span>
                Foire Aux Questions
              </h2>
            </div>

            <!-- Items FAQ -->
            <div class="p-4 space-y-2 max-h-[500px] overflow-y-auto">
              <div v-for="(item, index) in faqItems" :key="index"
                class="border border-gray-300 rounded-lg overflow-hidden hover:border-gray-400 transition-all">
                <button @click="toggleFaq(index)"
                  class="flex justify-between items-center w-full text-left px-4 py-3 bg-white hover:bg-gray-50 transition-all">
                  <span class="font-medium text-gray-900 text-sm pr-3">{{ item.question }}</span>
                  <span
                    class="flex-shrink-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-sm font-bold transition-transform"
                    :class="{ 'rotate-45': item.open }">
                    +
                  </span>
                </button>
                <div v-if="item.open" class="bg-gray-50 px-4 py-3 border-t border-gray-200 animate-fade-in">
                  <p class="text-gray-700 text-sm leading-relaxed">{{ item.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Conseil Personnalisé - Pleine largeur -->
    <div class="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div id="conseils-section" class="scroll-mt-20">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

          <!-- En-tête Conseil -->
          <div class="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 p-8 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer">
            </div>
            <div class="absolute inset-0 opacity-10"
              style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 20px 20px;">
            </div>

            <div class="relative z-10">
              <h2 class="text-3xl font-bold text-white flex items-center gap-3 drop-shadow-lg">
                <span class="text-4xl">💬</span>
                Besoin d'un Conseil Personnalisé ?
              </h2>
              <p class="text-green-100 mt-2">Décrivez votre problème ou besoin, nos experts vous répondront par email
              </p>
            </div>
          </div>

          <!-- Formulaire de conseil -->
          <form @submit.prevent="sendAdviceRequest" class="p-8 space-y-6">

            <!-- Nom & Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2">
                  Votre Nom <span class="text-red-500">*</span>
                </label>
                <input v-model="adviceForm.name" type="text" required placeholder="Jean Dupont"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all outline-none" />
              </div>
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2">
                  Votre Email <span class="text-red-500">*</span>
                </label>
                <input v-model="adviceForm.email" type="email" required placeholder="jean.dupont@email.com"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all outline-none" />
              </div>
            </div>

            <!-- Téléphone -->
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">
                Téléphone <span class="text-gray-400 text-xs">(optionnel)</span>
              </label>
              <input v-model="adviceForm.phone" type="tel" placeholder="+225 XX XX XX XX XX"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all outline-none" />
            </div>

            <!-- Sujet -->
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">
                Sujet de votre demande <span class="text-red-500">*</span>
              </label>
              <select v-model="adviceForm.subject" required
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all outline-none bg-white">
                <option value="">-- Sélectionnez un sujet --</option>
                <option value="vision">Problème de vision</option>
                <option value="monture">Conseil sur les montures</option>
                <option value="verre">Conseil sur les verres</option>
                <option value="adaptation">Difficulté d'adaptation</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">
                Décrivez votre problème ou besoin <span class="text-red-500">*</span>
              </label>
              <textarea v-model="adviceForm.message" required rows="6"
                placeholder="Expliquez en détail votre situation, vos symptômes ou vos besoins..."
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none"></textarea>
              <p class="text-xs text-gray-500 mt-2">{{ adviceForm.message.length }} / 500 caractères minimum</p>
            </div>

            <!-- Message de succès/erreur -->
            <div v-if="adviceStatus.show"
              :class="adviceStatus.success ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'"
              class="p-4 rounded-xl border-2 flex items-start gap-3">
              <span class="text-2xl">{{ adviceStatus.success ? '✅' : '❌' }}</span>
              <p class="flex-1">{{ adviceStatus.message }}</p>
            </div>

            <!-- Bouton d'envoi -->
            <div class="pt-4">
              <button type="submit" :disabled="adviceSending || !isAdviceFormValid"
                class="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-lg rounded-xl transition-all duration-300 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:transform-none">
                <span v-if="adviceSending">⏳ Envoi en cours...</span>
                <span v-else-if="isAdviceFormValid">📧 Envoyer ma demande</span>
                <span v-else>⚠️ Veuillez remplir tous les champs obligatoires</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>

    <!-- Modal de Sélection de Quiz -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showQuizModal" @click="closeQuizModal"
          class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div @click.stop class="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">

            <!-- En-tête du modal -->
            <div class="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 p-6 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer">
              </div>

              <div class="relative z-10 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="text-4xl">📋</span>
                  <h3 class="text-2xl font-bold text-white">Choisissez un Quiz</h3>
                </div>
                <button @click="closeQuizModal"
                  class="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Liste des quiz -->
            <div class="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="quiz in quizTypes" :key="quiz.id" @click="selectQuiz(quiz)"
                  class="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 hover:border-green-600 cursor-pointer transition-all hover:shadow-lg transform hover:scale-105">
                  <div class="text-4xl mb-3">{{ quiz.icon }}</div>
                  <h4 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{{
                    quiz.title }}</h4>
                  <p class="text-sm text-gray-600 mb-3">{{ quiz.description }}</p>
                  <div class="flex items-center gap-2 text-sm text-green-600 font-semibold">
                    <span>{{ quiz.questionCount }} questions</span>
                    <span>•</span>
                    <span>{{ quiz.duration }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Modal de Sélection de Test -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showTestModal" @click="closeTestModal"
          class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div @click.stop class="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">

            <!-- En-tête du modal -->
            <div class="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 p-6 overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer">
              </div>

              <div class="relative z-10 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="text-4xl">🔬</span>
                  <h3 class="text-2xl font-bold text-white">Choisissez un Test</h3>
                </div>
                <button @click="closeTestModal"
                  class="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Liste des tests -->
            <div class="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="test in testTypes" :key="test.id" @click="selectTest(test)"
                  class="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 hover:border-blue-600 cursor-pointer transition-all hover:shadow-lg transform hover:scale-105">
                  <div class="text-4xl mb-3">{{ test.icon }}</div>
                  <h4 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{{
                    test.title }}</h4>
                  <p class="text-sm text-gray-600 mb-3">{{ test.description }}</p>
                  <div class="flex items-center gap-2 text-sm text-blue-600 font-semibold">
                    <span>{{ test.stepCount }} étapes</span>
                    <span>•</span>
                    <span>{{ test.duration }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, Transition } from 'vue';
import { RouterLink } from 'vue-router';

// --- Gestion des Modals ---
const showQuizModal = ref(false);
const showTestModal = ref(false);
const selectedQuizType = ref(null);
const selectedTestType = ref(null);
const testFormVisible = ref(false);
const testSubmitted = ref(false);
const testFormSubmitted = ref(false);
const testCompleted = ref(false);
const currentTestStep = ref(0);
const testAnswers = ref([]);
const testCompletionMessage = ref(null);
const testFormData = ref({
  name: '',
  email: '',
  phone: ''
});

// Validation et messages
const emailError = ref('');
const phoneError = ref('');
const quizResultSent = ref(false);

const openQuizModal = () => {
  showQuizModal.value = true;
};

const closeQuizModal = () => {
  showQuizModal.value = false;
};

const openTestModal = () => {
  showTestModal.value = true;
};

const closeTestModal = () => {
  showTestModal.value = false;
};

// --- Types de Quiz disponibles ---
const quizTypes = ref([
  {
    id: 'depistage-vision',
    title: 'Dépistage de Problèmes de Vision',
    icon: '👁️',
    description: 'Évaluez les symptômes et signes précoces de troubles visuels',
    questionCount: 12,
    duration: '6 min',
    questions: [
      {
        text: "Avez-vous des difficultés à voir les objets éloignés clairement ?",
        options: [
          { text: "Jamais", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Souvent", value: 'c' }
        ],
      },
      {
        text: "Ressentez-vous des maux de tête après une lecture prolongée ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Occasionnellement", value: 'b' },
          { text: "Régulièrement", value: 'c' }
        ],
      },
      {
        text: "Avez-vous besoin de plisser les yeux pour lire de loin ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Très souvent", value: 'c' }
        ],
      },
      {
        text: "Avez-vous du mal à lire de près (livres, téléphone) ?",
        options: [
          { text: "Non, aucun problème", value: 'a' },
          { text: "Oui, je dois éloigner le texte", value: 'b' },
          { text: "Oui, avec fatigue oculaire", value: 'c' }
        ],
      },
      {
        text: "Voyez-vous des halos autour des lumières la nuit ?",
        options: [
          { text: "Jamais", value: 'a' },
          { text: "Rarement", value: 'b' },
          { text: "Fréquemment", value: 'c' }
        ],
      },
      {
        text: "Vos yeux sont-ils souvent rouges ou irrités ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Très souvent", value: 'c' }
        ],
      },
      {
        text: "Avez-vous une vision double occasionnelle ?",
        options: [
          { text: "Jamais", value: 'a' },
          { text: "Rarement", value: 'b' },
          { text: "Régulièrement", value: 'c' }
        ],
      },
      {
        text: "Ressentez-vous une sensibilité excessive à la lumière ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Légèrement", value: 'b' },
          { text: "Oui, très gênant", value: 'c' }
        ],
      },
      {
        text: "Avez-vous des difficultés à conduire de nuit ?",
        options: [
          { text: "Non, aucune difficulté", value: 'a' },
          { text: "Oui, avec éblouissement", value: 'b' },
          { text: "Oui, vision très limitée", value: 'c' }
        ],
      },
      {
        text: "Constatez-vous une baisse progressive de votre vision ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Légère depuis quelques mois", value: 'b' },
          { text: "Importante et récente", value: 'c' }
        ],
      },
      {
        text: "Avez-vous des antécédents familiaux de problèmes visuels ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Oui, légers", value: 'b' },
          { text: "Oui, importants (glaucome, DMLA, etc.)", value: 'c' }
        ],
      },
      {
        text: "À quand remonte votre dernier examen de vue ?",
        options: [
          { text: "Moins de 6 mois", value: 'a' },
          { text: "1 à 2 ans", value: 'b' },
          { text: "Plus de 3 ans ou jamais", value: 'c' }
        ],
      }
    ]
  },
  {
    id: 'selection-lunettes',
    title: 'Sélection de Lunettes',
    icon: '👓',
    description: 'Trouvez le type de lunettes adapté à votre morphologie et besoins',
    questionCount: 10,
    duration: '5 min',
    questions: [
      {
        text: "Quelle est la forme de votre visage ?",
        options: [
          { text: "Ovale", value: 'a' },
          { text: "Carré", value: 'b' },
          { text: "Rond", value: 'c' }
        ],
      },
      {
        text: "Quelle est votre principale activité nécessitant des lunettes ?",
        options: [
          { text: "Lecture", value: 'a' },
          { text: "Ordinateur", value: 'b' },
          { text: "Sport", value: 'c' }
        ],
      },
      {
        text: "Préférez-vous des montures légères ou robustes ?",
        options: [
          { text: "Légères", value: 'a' },
          { text: "Robustes", value: 'b' },
          { text: "Équilibrées", value: 'c' }
        ],
      },
      {
        text: "Quel est votre style vestimentaire habituel ?",
        options: [
          { text: "Classique/Professionnel", value: 'a' },
          { text: "Décontracté/Sportif", value: 'b' },
          { text: "Tendance/Mode", value: 'c' }
        ],
      },
      {
        text: "Quelle est votre couleur de cheveux ?",
        options: [
          { text: "Blond/Clair", value: 'a' },
          { text: "Châtain/Roux", value: 'b' },
          { text: "Brun/Noir", value: 'c' }
        ],
      },
      {
        text: "Quelle couleur de monture préférez-vous ?",
        options: [
          { text: "Noir/Gris/Argent", value: 'a' },
          { text: "Brun/Écaille/Doré", value: 'b' },
          { text: "Couleurs vives/Originales", value: 'c' }
        ],
      },
      {
        text: "Quelle taille de monture vous convient ?",
        options: [
          { text: "Petite (discr\u00e8te)", value: 'a' },
          { text: "Moyenne (standard)", value: 'b' },
          { text: "Grande (statement)", value: 'c' }
        ],
      },
      {
        text: "Porterez-vous vos lunettes toute la journée ?",
        options: [
          { text: "Oui, en permanence", value: 'a' },
          { text: "Seulement pour certaines activités", value: 'b' },
          { text: "Rarement", value: 'c' }
        ],
      },
      {
        text: "Quel type de matériau préférez-vous ?",
        options: [
          { text: "Métal (Titane, Acier)", value: 'a' },
          { text: "Plastique (Acétate)", value: 'b' },
          { text: "Mixte", value: 'c' }
        ],
      },
      {
        text: "Quel est votre budget approximatif ?",
        options: [
          { text: "Moins de 50 000 FCFA", value: 'a' },
          { text: "50 000 - 150 000 FCFA", value: 'b' },
          { text: "Plus de 150 000 FCFA", value: 'c' }
        ],
      }
    ]
  },
  {
    id: 'detection-maladies',
    title: 'Détection de Maladies Oculaires',
    icon: '🔬',
    description: 'Identifiez les signes précurseurs de pathologies oculaires courantes',
    questionCount: 15,
    duration: '8 min',
    questions: [
      {
        text: "Voyez-vous des taches flottantes ou des mouches volantes ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Quelques-unes", value: 'b' },
          { text: "Beaucoup, surtout récemment", value: 'c' }
        ],
      },
      {
        text: "Avez-vous une perte progressive de vision périphérique ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Légère", value: 'b' },
          { text: "Importante", value: 'c' }
        ],
      },
      {
        text: "Ressentez-vous des douleurs oculaires avec vision floue ?",
        options: [
          { text: "Jamais", value: 'a' },
          { text: "Rarement", value: 'b' },
          { text: "Fréquemment", value: 'c' }
        ],
      },
      {
        text: "Voyez-vous des éclairs lumineux dans votre vision ?",
        options: [
          { text: "Jamais", value: 'a' },
          { text: "Occasionnellement", value: 'b' },
          { text: "Fréquemment", value: 'c' }
        ],
      },
      {
        text: "Avez-vous remarqué un voile ou rideau dans votre champ visuel ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Oui, persistant", value: 'c' }
        ],
      },
      {
        text: "Les lignes droites vous apparaissent-elles déformées ou ondulées ?",
        options: [
          { text: "Non, toujours droites", value: 'a' },
          { text: "Légèrement", value: 'b' },
          { text: "Oui, nettement déformées", value: 'c' }
        ],
      },
      {
        text: "Avez-vous une vision centrale floue ou obscurcie ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Légère", value: 'b' },
          { text: "Importante", value: 'c' }
        ],
      },
      {
        text: "Ressentez-vous une pression ou douleur dans les yeux ?",
        options: [
          { text: "Jamais", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Souvent", value: 'c' }
        ],
      },
      {
        text: "Avez-vous des rougeurs oculaires fréquentes ?",
        options: [
          { text: "Rarement", value: 'a' },
          { text: "Occasionnellement", value: 'b' },
          { text: "Très fréquemment", value: 'c' }
        ],
      },
      {
        text: "Voyez-vous des halos colorés autour des lumières ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Régulièrement", value: 'c' }
        ],
      },
      {
        text: "Avez-vous des difficultés à distinguer les couleurs ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Légères", value: 'b' },
          { text: "Importantes", value: 'c' }
        ],
      },
      {
        text: "Vos yeux larmoient-ils excessivement ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Constamment", value: 'c' }
        ],
      },
      {
        text: "Avez-vous des antécédents de diabète ou d'hypertension ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Diabète ou hypertension contrôlé", value: 'b' },
          { text: "Oui, mal contrôlé", value: 'c' }
        ],
      },
      {
        text: "Avez-vous plus de 60 ans ?",
        options: [
          { text: "Non, moins de 40 ans", value: 'a' },
          { text: "Entre 40 et 60 ans", value: 'b' },
          { text: "Oui, plus de 60 ans", value: 'c' }
        ],
      },
      {
        text: "Avez-vous subi un traumatisme oculaire récent ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Oui, léger", value: 'b' },
          { text: "Oui, important", value: 'c' }
        ],
      }
    ]
  },
  {
    id: 'sante-oculaire',
    title: 'Vérification de Santé Oculaire',
    icon: '💚',
    description: 'Évaluez votre santé oculaire globale et habitudes de soin',
    questionCount: 12,
    duration: '6 min',
    questions: [
      {
        text: "À quelle fréquence consultez-vous un ophtalmologiste ?",
        options: [
          { text: "Tous les 6 mois", value: 'a' },
          { text: "Une fois par an", value: 'b' },
          { text: "Rarement ou jamais", value: 'c' }
        ],
      },
      {
        text: "Portez-vous des lunettes de soleil avec protection UV ?",
        options: [
          { text: "Toujours en extérieur", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Rarement", value: 'c' }
        ],
      },
      {
        text: "Avez-vous des antécédents familiaux de maladies oculaires ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Oui, mais légers", value: 'b' },
          { text: "Oui, importants", value: 'c' }
        ],
      },
      {
        text: "Fumez-vous ou êtes-vous exposé à la fumée ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Occasionnellement", value: 'b' },
          { text: "Régulièrement", value: 'c' }
        ],
      },
      {
        text: "Pratiquez-vous une activité physique régulière ?",
        options: [
          { text: "Oui, régulièrement", value: 'a' },
          { text: "Occasionnellement", value: 'b' },
          { text: "Rarement ou jamais", value: 'c' }
        ],
      },
      {
        text: "Consommez-vous des aliments riches en vitamines A, C et E ?",
        options: [
          { text: "Oui, quotidiennement", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Rarement", value: 'c' }
        ],
      },
      {
        text: "Dormez-vous suffisamment (7-8h par nuit) ?",
        options: [
          { text: "Oui, régulièrement", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Rarement", value: 'c' }
        ],
      },
      {
        text: "Passez-vous plus de 6 heures par jour devant un écran ?",
        options: [
          { text: "Non, moins de 4h", value: 'a' },
          { text: "4-6 heures", value: 'b' },
          { text: "Oui, plus de 6h", value: 'c' }
        ],
      },
      {
        text: "Utilisez-vous un éclairage adapté pour lire ou travailler ?",
        options: [
          { text: "Oui, toujours", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Non", value: 'c' }
        ],
      },
      {
        text: "Buvez-vous suffisamment d'eau (1.5-2L par jour) ?",
        options: [
          { text: "Oui", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Non", value: 'c' }
        ],
      },
      {
        text: "Nettoyez-vous régulièrement vos lunettes ou lentilles ?",
        options: [
          { text: "Oui, quotidiennement", value: 'a' },
          { text: "Quelques fois par semaine", value: 'b' },
          { text: "Rarement", value: 'c' }
        ],
      },
      {
        text: "Prenez-vous des pauses régulières lors du travail sur écran ?",
        options: [
          { text: "Oui, règle 20-20-20", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Rarement", value: 'c' }
        ],
      }
    ]
  },
  {
    id: 'selection-lentilles',
    title: 'Sélection de Lentilles de Contact',
    icon: '👁️‍🗨️',
    description: 'Découvrez le type de lentilles adapté à votre style de vie',
    questionCount: 11,
    duration: '6 min',
    questions: [
      {
        text: "Combien d'heures par jour prévoyez-vous porter des lentilles ?",
        options: [
          { text: "Moins de 8 heures", value: 'a' },
          { text: "8 à 12 heures", value: 'b' },
          { text: "Plus de 12 heures", value: 'c' }
        ],
      },
      {
        text: "Avez-vous les yeux sensibles ou secs ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Souvent", value: 'c' }
        ],
      },
      {
        text: "Préférez-vous des lentilles jetables quotidiennes ou mensuelles ?",
        options: [
          { text: "Quotidiennes", value: 'a' },
          { text: "Mensuelles", value: 'b' },
          { text: "Je ne sais pas", value: 'c' }
        ],
      },
      {
        text: "Pratiquez-vous des sports ou activités physiques intenses ?",
        options: [
          { text: "Oui, régulièrement", value: 'a' },
          { text: "Occasionnellement", value: 'b' },
          { text: "Non", value: 'c' }
        ],
      },
      {
        text: "Travaillez-vous dans un environnement climatisé ou sec ?",
        options: [
          { text: "Oui, quotidiennement", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Non", value: 'c' }
        ],
      },
      {
        text: "Avez-vous déjà porté des lentilles de contact ?",
        options: [
          { text: "Oui, régulièrement", value: 'a' },
          { text: "Oui, mais arrêté", value: 'b' },
          { text: "Non, jamais", value: 'c' }
        ],
      },
      {
        text: "Êtes-vous prêt à entretenir vos lentilles quotidiennement ?",
        options: [
          { text: "Oui, sans problème", value: 'a' },
          { text: "Si nécessaire", value: 'b' },
          { text: "Préfère éviter", value: 'c' }
        ],
      },
      {
        text: "Souhaitez-vous des lentilles colorées ou correctrices uniquement ?",
        options: [
          { text: "Correctrices uniquement", value: 'a' },
          { text: "Colorées", value: 'b' },
          { text: "Les deux", value: 'c' }
        ],
      },
      {
        text: "Avez-vous un astigmatisme ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Oui, léger", value: 'b' },
          { text: "Oui, important", value: 'c' }
        ],
      },
      {
        text: "Dormez-vous parfois avec vos lentilles (si applicable) ?",
        options: [
          { text: "Jamais", value: 'a' },
          { text: "Rarement", value: 'b' },
          { text: "Parfois", value: 'c' }
        ],
      },
      {
        text: "Quel est votre budget mensuel pour les lentilles ?",
        options: [
          { text: "Moins de 15 000 FCFA", value: 'a' },
          { text: "15 000 - 30 000 FCFA", value: 'b' },
          { text: "Plus de 30 000 FCFA", value: 'c' }
        ],
      }
    ]
  },
  {
    id: 'prevention-fatigue',
    title: 'Prévention de Fatigue Oculaire',
    icon: '💻',
    description: 'Adoptez les bonnes pratiques pour protéger vos yeux au quotidien',
    questionCount: 10,
    duration: '5 min',
    questions: [
      {
        text: "Combien d'heures passez-vous devant un écran par jour ?",
        options: [
          { text: "Moins de 4 heures", value: 'a' },
          { text: "4 à 8 heures", value: 'b' },
          { text: "Plus de 8 heures", value: 'c' }
        ],
      },
      {
        text: "Appliquez-vous la règle 20-20-20 ?",
        options: [
          { text: "Oui, systématiquement", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Jamais", value: 'c' }
        ],
      },
      {
        text: "Votre écran est-il à la bonne distance (50-70 cm) ?",
        options: [
          { text: "Oui", value: 'a' },
          { text: "Trop proche", value: 'b' },
          { text: "Trop loin", value: 'c' }
        ],
      },
      {
        text: "Clignez-vous suffisamment des yeux devant l'écran ?",
        options: [
          { text: "Oui, régulièrement", value: 'a' },
          { text: "Je ne sais pas", value: 'b' },
          { text: "Rarement, j'oublie", value: 'c' }
        ],
      },
      {
        text: "Votre écran est-il positionné sous le niveau des yeux ?",
        options: [
          { text: "Oui, légèrement en dessous", value: 'a' },
          { text: "Au niveau des yeux", value: 'b' },
          { text: "Au-dessus", value: 'c' }
        ],
      },
      {
        text: "Quel est l'éclairage de votre poste de travail ?",
        options: [
          { text: "Lumière naturelle + lampe d'appoint", value: 'a' },
          { text: "Lumière artificielle uniquement", value: 'b' },
          { text: "Écran dans le noir", value: 'c' }
        ],
      },
      {
        text: "Utilisez-vous un filtre anti-lumière bleue ?",
        options: [
          { text: "Oui, sur mes lunettes ou écran", value: 'a' },
          { text: "Non, mais j'utilise un mode nuit", value: 'b' },
          { text: "Non, rien du tout", value: 'c' }
        ],
      },
      {
        text: "Pratiquez-vous des exercices oculaires ?",
        options: [
          { text: "Oui, régulièrement (palming, rotations)", value: 'a' },
          { text: "Rarement", value: 'b' },
          { text: "Jamais", value: 'c' }
        ],
      },
      {
        text: "Quelle est votre posture devant l'écran ?",
        options: [
          { text: "Dos droit, pieds au sol", value: 'a' },
          { text: "Avachi(e)", value: 'b' },
          { text: "Variable", value: 'c' }
        ],
      },
      {
        text: "Prenez-vous des pauses régulières (toutes les heures) ?",
        options: [
          { text: "Oui, systématiquement", value: 'a' },
          { text: "Parfois", value: 'b' },
          { text: "Rarement", value: 'c' }
        ],
      }
    ]
  },
  {
    id: 'selection-traitement',
    title: 'Sélection de Traitement',
    icon: '⚕️',
    description: 'Identifiez les options de traitement adaptées à vos besoins visuels',
    questionCount: 13,
    duration: '7 min',
    questions: [
      {
        text: "Quel est votre principal problème visuel ?",
        options: [
          { text: "Myopie", value: 'a' },
          { text: "Hypermétropie", value: 'b' },
          { text: "Astigmatisme", value: 'c' }
        ],
      },
      {
        text: "Avez-vous envisagé la chirurgie réfractive ?",
        options: [
          { text: "Oui, intéressé(e)", value: 'a' },
          { text: "Peut-être", value: 'b' },
          { text: "Non", value: 'c' }
        ],
      },
      {
        text: "Votre correction optique est-elle stable depuis plus de 2 ans ?",
        options: [
          { text: "Oui", value: 'a' },
          { text: "Non", value: 'b' },
          { text: "Je ne sais pas", value: 'c' }
        ],
      },
      {
        text: "Avez-vous plus de 18 ans ?",
        options: [
          { text: "Oui", value: 'a' },
          { text: "Non", value: 'b' },
          { text: "Entre 16 et 18 ans", value: 'c' }
        ],
      },
      {
        text: "Quelle est l'épaisseur de votre cornée (si connue) ?",
        options: [
          { text: "Normale (>500 µm)", value: 'a' },
          { text: "Fine (<500 µm)", value: 'b' },
          { text: "Je ne sais pas", value: 'c' }
        ],
      },
      {
        text: "Avez-vous des maladies auto-immunes ou du diabète ?",
        options: [
          { text: "Non", value: 'a' },
          { text: "Oui, diabète", value: 'b' },
          { text: "Oui, autre maladie auto-immune", value: 'c' }
        ],
      },
      {
        text: "Êtes-vous prêt(e) à accepter les risques d'une chirurgie ?",
        options: [
          { text: "Oui, après information complète", value: 'a' },
          { text: "J'ai des doutes", value: 'b' },
          { text: "Non, trop risqué", value: 'c' }
        ],
      },
      {
        text: "Quel type de chirurgie vous intéresse le plus ?",
        options: [
          { text: "LASIK", value: 'a' },
          { text: "PKR (sans découpe)", value: 'b' },
          { text: "Implants phakes", value: 'c' }
        ],
      },
      {
        text: "Pouvez-vous prendre 1 semaine de repos post-opératoire ?",
        options: [
          { text: "Oui, facilement", value: 'a' },
          { text: "Difficile mais possible", value: 'b' },
          { text: "Non", value: 'c' }
        ],
      },
      {
        text: "Avez-vous des attentes réalistes sur les résultats ?",
        options: [
          { text: "Oui, 20/20 n'est pas garanti", value: 'a' },
          { text: "J'attends une vision parfaite", value: 'b' },
          { text: "Je ne sais pas", value: 'c' }
        ],
      },
      {
        text: "Quel est votre budget pour une chirurgie réfractive ?",
        options: [
          { text: "500 000 - 1 000 000 FCFA par œil", value: 'a' },
          { text: "Moins de 500 000 FCFA", value: 'b' },
          { text: "Plus de 1 000 000 FCFA", value: 'c' }
        ],
      },
      {
        text: "Préférez-vous une correction temporaire ou permanente ?",
        options: [
          { text: "Permanente (chirurgie)", value: 'a' },
          { text: "Temporaire (lunettes/lentilles)", value: 'b' },
          { text: "Je ne sais pas encore", value: 'c' }
        ],
      },
      {
        text: "Acceptez-vous un suivi post-opératoire régulier ?",
        options: [
          { text: "Oui, je m'y engage", value: 'a' },
          { text: "Si nécessaire", value: 'b' },
          { text: "Non, pas le temps", value: 'c' }
        ],
      }
    ]
  }
]);

// --- Types de Tests disponibles ---
const testTypes = ref([
  {
    id: 'acuite',
    title: 'Test d\'Acuité Visuelle',
    icon: '👁️',
    description: 'Évaluez votre capacité à distinguer les détails à distance',
    stepCount: 5,
    duration: '3 min',
    type: 'interactive'
  },
  {
    id: 'myopie',
    title: 'Test de Dépistage Myopie',
    icon: '🔍',
    description: 'Évaluez votre vision de loin et détectez une éventuelle myopie',
    stepCount: 6,
    duration: '3 min',
    type: 'interactive'
  },
  {
    id: 'hypermetropie',
    title: 'Test de Dépistage Hypermétropie',
    icon: '📖',
    description: 'Évaluez votre vision de près et détectez une éventuelle hypermétropie',
    stepCount: 6,
    duration: '3 min',
    type: 'interactive'
  },
  {
    id: 'daltonisme',
    title: 'Test de Daltonisme',
    icon: '🎨',
    description: 'Détectez une éventuelle déficience de perception des couleurs (Ishihara)',
    stepCount: 8,
    duration: '4 min',
    type: 'interactive'
  },
  {
    id: 'astigmatisme',
    title: 'Test d\'Astigmatisme',
    icon: '⭐',
    description: 'Identifiez une déformation de la cornée affectant la vision',
    stepCount: 4,
    duration: '2 min',
    type: 'interactive'
  },
  {
    id: 'amsler',
    title: 'Grille d\'Amsler (DMLA)',
    icon: '🔲',
    description: 'Dépistage précoce de la dégénérescence maculaire liée à l\'âge',
    stepCount: 3,
    duration: '2 min',
    type: 'interactive'
  },
  {
    id: 'contraste',
    title: 'Test de Sensibilité au Contraste',
    icon: '◐',
    description: 'Évaluez votre capacité à percevoir les différences de luminosité',
    stepCount: 6,
    duration: '3 min',
    type: 'interactive'
  },
  {
    id: 'glaucome',
    title: 'Évaluation Risque Glaucome',
    icon: '⚕️',
    description: 'Questionnaire sur les facteurs de risque du glaucome',
    stepCount: 10,
    duration: '5 min',
    type: 'questionnaire'
  },
  {
    id: 'secheresse',
    title: 'Test de Sécheresse Oculaire',
    icon: '💧',
    description: 'Identifiez les symptômes de l\'œil sec',
    stepCount: 8,
    duration: '4 min',
    type: 'questionnaire'
  },
  {
    id: 'cataracte',
    title: 'Évaluation Cataracte',
    icon: '☁️',
    description: 'Détectez les signes précoces de la cataracte',
    stepCount: 7,
    duration: '3 min',
    type: 'questionnaire'
  }
]);

const selectQuiz = (quiz) => {
  selectedQuizType.value = quiz;
  selectedTestType.value = null; // Désélectionner le test
  closeQuizModal();
  // Charger les questions du quiz sélectionné
  questions.value = quiz.questions;
  resetQuiz();
  quizCompleted.value = false;

  // Scroll automatique vers la section quiz/test
  setTimeout(() => {
    const section = document.querySelector('#quiz-test-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
};

const selectTest = (test) => {
  selectedTestType.value = test;
  selectedQuizType.value = null; // Désélectionner le quiz
  closeTestModal();
  testFormSubmitted.value = false;
  testSubmitted.value = false;

  // Scroll automatique vers la section quiz/test
  setTimeout(() => {
    const section = document.querySelector('#quiz-test-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
};

const submitTestForm = () => {
  if (!testFormData.value.name || !testFormData.value.email) return;
  testFormSubmitted.value = true;

  // Scroll pour voir le test qui s'affiche
  setTimeout(() => {
    const section = document.querySelector('#quiz-test-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
};

const completeTest = () => {
  testCompleted.value = true;

  // Envoyer les données au backend
  console.log('Test complété:', {
    test: selectedTestType.value.title,
    formData: testFormData.value,
    answers: testAnswers.value
  });

  // Scroller vers le message de confirmation
  setTimeout(() => {
    if (testCompletionMessage.value) {
      testCompletionMessage.value.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, 100);
};

const resetTestSelection = () => {
  selectedTestType.value = null;
  testFormSubmitted.value = false;
  testSubmitted.value = false;
  testCompleted.value = false;
  currentTestStep.value = 0;
  testAnswers.value = [];
  testFormData.value = {
    name: '',
    email: '',
    phone: ''
  };
};

const answerTestQuestion = (answer) => {
  testAnswers.value[currentTestStep.value] = answer;
};

const nextTestStep = () => {
  if (currentTestStep.value < selectedTestType.value.stepCount - 1) {
    currentTestStep.value++;

    // Scroll automatique vers le haut du test
    setTimeout(() => {
      const section = document.querySelector('#quiz-test-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 10);
  }
};

const previousTestStep = () => {
  if (currentTestStep.value > 0) {
    currentTestStep.value--;

    // Scroll automatique vers le haut du test
    setTimeout(() => {
      const section = document.querySelector('#quiz-test-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 10);
  }
};

const getCurrentTestStep = () => {
  if (!selectedTestType.value) return null;

  const testId = selectedTestType.value.id;
  const step = currentTestStep.value;

  // Définir les étapes pour chaque type de test
  const testSteps = {
    acuite: [
      { title: 'Distance 5m - Taille Grande', instruction: 'Identifiez la lettre affichée', description: 'Placez-vous à 5 mètres de l\'écran', letter: 'E', size: '120px', options: ['E', 'F', 'L', 'P'] },
      { title: 'Distance 5m - Taille Moyenne', instruction: 'Identifiez la lettre affichée', description: 'Maintenez la même distance', letter: 'T', size: '80px', options: ['T', 'L', 'I', 'F'] },
      { title: 'Distance 5m - Taille Petite', instruction: 'Identifiez la lettre affichée', description: 'Concentrez-vous bien', letter: 'P', size: '60px', options: ['P', 'R', 'B', 'D'] },
      { title: 'Distance 5m - Taille Très Petite', instruction: 'Identifiez la lettre affichée', description: 'Dernière lettre de grande distance', letter: 'Z', size: '50px', options: ['Z', 'N', 'M', 'W'] },
      { title: 'Distance 3m - Lecture', instruction: 'Identifiez la lettre affichée', description: 'Rapprochez-vous à 3 mètres', letter: 'H', size: '40px', options: ['H', 'N', 'M', 'U'] }
    ],
    myopie: [
      { title: 'Vision de loin - Grande taille', instruction: 'Pouvez-vous lire cette lettre à 5m ?', description: 'Placez-vous à 5 mètres de l\'écran', letter: 'C', size: '100px', options: ['Oui, nettement', 'Oui, mais flou', 'Difficilement', 'Non'] },
      { title: 'Vision de loin - Taille moyenne', instruction: 'Cette lettre est-elle nette ?', description: 'Restez à 5 mètres', letter: 'F', size: '70px', options: ['Oui, très nette', 'Légèrement floue', 'Floue', 'Très floue'] },
      { title: 'Vision de loin - Petite taille', instruction: 'Distinguez-vous cette lettre ?', description: 'Distance 5 mètres', letter: 'N', size: '50px', options: ['Oui, clairement', 'Avec effort', 'À peine', 'Non'] },
      { title: 'Panneau routier simulé', instruction: 'Pouvez-vous lire ce texte de loin ?', description: 'Imaginez un panneau à distance', question: 'Lisez-vous "STOP" clairement à 20m ?', options: ['Oui, facilement', 'Difficilement', 'Non'] },
      { title: 'Symptômes quotidiens', instruction: 'Décrivez votre expérience', description: '', question: 'Plissez-vous les yeux pour voir au loin ?', options: ['Oui, souvent', 'Parfois', 'Rarement', 'Jamais'] },
      { title: 'Fatigue visuelle', instruction: 'Perception de l\'effort', description: '', question: 'Ressentez-vous une fatigue après avoir regardé au loin ?', options: ['Oui, rapidement', 'Après un moment', 'Rarement', 'Jamais'] }
    ],
    hypermetropie: [
      { title: 'Vision de près - Lecture', instruction: 'Pouvez-vous lire ce texte à 30cm ?', description: 'Tenez votre téléphone à 30cm', letter: 'LECTURE', size: '24px', options: ['Oui, nettement', 'Oui, mais flou', 'Difficilement', 'Non'] },
      { title: 'Vision de près - Texte petit', instruction: 'Ce texte est-il net de près ?', description: 'Distance 30cm', letter: 'petit texte', size: '16px', options: ['Oui, très net', 'Légèrement flou', 'Flou', 'Très flou'] },
      { title: 'Vision de près - Très petit', instruction: 'Distinguez-vous ces caractères ?', description: 'Lecture fine', letter: 'abc123', size: '12px', options: ['Oui, clairement', 'Avec effort', 'À peine', 'Non'] },
      { title: 'Lecture prolongée', instruction: 'Expérience quotidienne', description: '', question: 'Ressentez-vous une fatigue en lisant ?', options: ['Oui, rapidement', 'Après 15-30 min', 'Après 1h+', 'Non'] },
      { title: 'Maux de tête', instruction: 'Symptômes associés', description: '', question: 'Avez-vous des maux de tête après lecture ou travail de près ?', options: ['Oui, fréquemment', 'Parfois', 'Rarement', 'Jamais'] },
      { title: 'Effort d\'accommodation', instruction: 'Observation personnelle', description: '', question: 'Devez-vous éloigner les objets pour mieux les voir ?', options: ['Oui, toujours', 'Souvent', 'Parfois', 'Non'] }
    ],
    daltonisme: [
      { title: 'Planche 1 - Rouge/Vert', instruction: 'Quel chiffre voyez-vous ?', description: 'Observez attentivement le cercle coloré', number: '12', color: '#D4A5A5', options: ['12', '13', '21', 'Aucun'] },
      { title: 'Planche 2 - Rouge/Vert', instruction: 'Quel chiffre voyez-vous ?', description: 'Concentrez-vous sur les points', number: '8', color: '#C5B8A8', options: ['8', '3', '6', 'Aucun'] },
      { title: 'Planche 3 - Rouge/Vert', instruction: 'Quel chiffre voyez-vous ?', description: 'Identifiez le nombre', number: '5', color: '#B8C5A8', options: ['5', '2', '6', 'Aucun'] },
      { title: 'Planche 4 - Rouge/Vert', instruction: 'Quel chiffre voyez-vous ?', description: 'Dernier test rouge/vert', number: '74', color: '#A8B8A8', options: ['74', '21', '71', 'Aucun'] },
      { title: 'Planche 5 - Bleu/Jaune', instruction: 'Quel chiffre voyez-vous ?', description: 'Test de déficience bleu/jaune', number: '6', color: '#B8B8C5', options: ['6', '5', '8', 'Aucun'] },
      { title: 'Planche 6 - Bleu/Jaune', instruction: 'Quel chiffre voyez-vous ?', description: 'Suite du test bleu/jaune', number: '45', color: '#C5C5A8', options: ['45', '15', '43', 'Aucun'] },
      { title: 'Planche 7 - Complexe', instruction: 'Quel chiffre voyez-vous ?', description: 'Test avancé', number: '2', color: '#B8A8B8', options: ['2', '5', '7', 'Aucun'] },
      { title: 'Planche 8 - Complexe', instruction: 'Quel chiffre voyez-vous ?', description: 'Dernière planche', number: '16', color: '#A8B8C5', options: ['16', '18', '15', 'Aucun'] }
    ],
    astigmatisme: [
      { title: 'Vue d\'ensemble', instruction: 'Toutes les lignes ont-elles la même netteté ?', description: 'Observez les 12 lignes radiales', lineWidth: 3, options: ['Oui, toutes nettes', 'Non, certaines floues', 'Je ne sais pas'] },
      { title: 'Lignes verticales/horizontales', instruction: 'Les lignes verticales et horizontales sont-elles aussi nettes ?', description: 'Comparez leur netteté', lineWidth: 3, options: ['Oui, équivalentes', 'Les verticales plus nettes', 'Les horizontales plus nettes'] },
      { title: 'Lignes diagonales', instruction: 'Les lignes diagonales sont-elles nettes ?', description: 'Observez les lignes à 45°', lineWidth: 3, options: ['Oui, très nettes', 'Légèrement floues', 'Très floues'] },
      { title: 'Évaluation globale', instruction: 'Y a-t-il des zones de flou particulières ?', description: 'Vue finale', lineWidth: 3, options: ['Non, tout est net', 'Oui, dans certaines directions', 'Difficile à dire'] }
    ],
    amsler: [
      { title: 'Œil droit', instruction: 'Fixez le point central. Voyez-vous des lignes déformées ?', description: 'Couvrez votre œil gauche', options: ['Non, grille parfaite', 'Oui, lignes ondulées', 'Oui, zones manquantes', 'Oui, taches sombres'] },
      { title: 'Œil gauche', instruction: 'Fixez le point central. Voyez-vous des lignes déformées ?', description: 'Couvrez votre œil droit', options: ['Non, grille parfaite', 'Oui, lignes ondulées', 'Oui, zones manquantes', 'Oui, taches sombres'] },
      { title: 'Vision binoculaire', instruction: 'Avec les deux yeux, la grille est-elle uniforme ?', description: 'Observez avec les deux yeux ouverts', options: ['Oui, grille normale', 'Non, déformations présentes', 'Incertain'] }
    ],
    contraste: [
      { title: 'Contraste élevé', instruction: 'Voyez-vous clairement la lettre ?', description: 'Contraste noir sur blanc', question: 'La lettre E est-elle visible ?', options: ['Oui, très nette', 'Oui, mais flou', 'Difficile', 'Non visible'] },
      { title: 'Contraste moyen', instruction: 'Voyez-vous la lettre ?', description: 'Contraste gris foncé sur blanc', question: 'La lettre T est-elle visible ?', options: ['Oui, nette', 'Oui, mais effort', 'Très difficile', 'Non visible'] },
      { title: 'Contraste faible', instruction: 'Voyez-vous la lettre ?', description: 'Contraste gris sur blanc', question: 'La lettre O est-elle visible ?', options: ['Oui', 'À peine', 'Non visible'] },
      { title: 'Contraste très faible', instruction: 'Voyez-vous la lettre ?', description: 'Contraste gris clair sur blanc', question: 'La lettre C est-elle visible ?', options: ['Oui', 'Non visible'] },
      { title: 'Vision nocturne simulée', instruction: 'Dans un environnement sombre, distinguez-vous les formes ?', description: 'Baissez la luminosité de votre écran', question: 'Voyez-vous des formes ?', options: ['Oui, clairement', 'Difficilement', 'Non'] },
      { title: 'Éblouissement', instruction: 'Après un flash lumineux, récupérez-vous rapidement ?', description: 'Imaginez une lumière forte', question: 'Temps de récupération habituel ?', options: ['< 5 secondes', '5-10 secondes', '> 10 secondes'] }
    ],
    glaucome: [
      { title: 'Antécédents familiaux', instruction: 'Répondez honnêtement', description: '', question: 'Avez-vous des antécédents familiaux de glaucome ?', options: ['Oui, parent direct', 'Oui, famille éloignée', 'Non', 'Je ne sais pas'] },
      { title: 'Âge', instruction: 'Indiquez votre tranche d\'âge', description: '', question: 'Quel est votre âge ?', options: ['< 40 ans', '40-60 ans', '> 60 ans'] },
      { title: 'Pression oculaire', instruction: 'Si vous la connaissez', description: '', question: 'Votre pression oculaire a-t-elle déjà été mesurée élevée ?', options: ['Oui', 'Non', 'Jamais mesurée'] },
      { title: 'Vision périphérique', instruction: 'Observation quotidienne', description: '', question: 'Avez-vous remarqué une réduction de votre vision latérale ?', options: ['Oui, significative', 'Légèrement', 'Non'] },
      { title: 'Douleurs oculaires', instruction: 'Dans les 6 derniers mois', description: '', question: 'Ressentez-vous des douleurs oculaires ou maux de tête ?', options: ['Oui, fréquemment', 'Parfois', 'Rarement', 'Jamais'] },
      { title: 'Halos lumineux', instruction: 'Surtout la nuit', description: '', question: 'Voyez-vous des halos autour des lumières ?', options: ['Oui, souvent', 'Occasionnellement', 'Non'] },
      { title: 'Diabète', instruction: 'Facteur de risque', description: '', question: 'Êtes-vous diabétique ?', options: ['Oui', 'Non', 'Pré-diabète'] },
      { title: 'Myopie forte', instruction: 'Degré de myopie', description: '', question: 'Avez-vous une forte myopie (> -6 dioptries) ?', options: ['Oui', 'Non', 'Je ne sais pas'] },
      { title: 'Traitement corticoïdes', instruction: 'Médicaments', description: '', question: 'Prenez-vous régulièrement des corticoïdes ?', options: ['Oui, long terme', 'Oui, ponctuel', 'Non'] },
      { title: 'Suivi ophtalmologique', instruction: 'Dernière consultation', description: '', question: 'Quand avez-vous consulté un ophtalmologue ?', options: ['< 1 an', '1-2 ans', '> 2 ans', 'Jamais'] }
    ],
    secheresse: [
      { title: 'Sensation de sécheresse', instruction: 'Fréquence', description: '', question: 'Ressentez-vous vos yeux secs ?', options: ['Constamment', 'Souvent', 'Parfois', 'Rarement', 'Jamais'] },
      { title: 'Sensation de brûlure', instruction: 'Inconfort', description: '', question: 'Vos yeux vous brûlent-ils ?', options: ['Toujours', 'Fréquemment', 'Occasionnellement', 'Jamais'] },
      { title: 'Larmoiement', instruction: 'Paradoxalement', description: '', question: 'Vos yeux larmoient-ils excessivement ?', options: ['Oui, beaucoup', 'Modérément', 'Peu', 'Pas du tout'] },
      { title: 'Sensation de corps étranger', instruction: 'Comme du sable', description: '', question: 'Avez-vous l\'impression d\'avoir quelque chose dans l\'œil ?', options: ['Constamment', 'Souvent', 'Parfois', 'Jamais'] },
      { title: 'Fatigue visuelle', instruction: 'Après écrans', description: '', question: 'Vos yeux sont-ils fatigués après l\'usage d\'écrans ?', options: ['Très rapidement', 'Après 1-2h', 'Après > 3h', 'Rarement'] },
      { title: 'Vision floue intermittente', instruction: 'Qui s\'améliore en clignant', description: '', question: 'Votre vision devient-elle floue puis s\'éclaircit ?', options: ['Oui, fréquemment', 'Parfois', 'Rarement', 'Jamais'] },
      { title: 'Rougeur oculaire', instruction: 'Apparence', description: '', question: 'Vos yeux sont-ils souvent rouges ?', options: ['Constamment', 'Souvent', 'Occasionnellement', 'Non'] },
      { title: 'Environnement', instruction: 'Facteurs déclenchants', description: '', question: 'Les symptômes s\'aggravent-ils dans certains environnements (climatisation, vent) ?', options: ['Oui, beaucoup', 'Légèrement', 'Non'] }
    ],
    cataracte: [
      { title: 'Vision floue', instruction: 'Progressive', description: '', question: 'Votre vision est-elle devenue progressivement floue ?', options: ['Oui, significativement', 'Légèrement', 'Non'] },
      { title: 'Éblouissement', instruction: 'Sensibilité à la lumière', description: '', question: 'Êtes-vous gêné par les lumières vives ?', options: ['Oui, très', 'Modérément', 'Non'] },
      { title: 'Halos', instruction: 'Autour des lumières', description: '', question: 'Voyez-vous des halos autour des lumières la nuit ?', options: ['Oui, toujours', 'Parfois', 'Non'] },
      { title: 'Vision nocturne', instruction: 'Conduite de nuit', description: '', question: 'Avez-vous des difficultés à conduire la nuit ?', options: ['Oui, importantes', 'Quelques difficultés', 'Non'] },
      { title: 'Couleurs', instruction: 'Perception', description: '', question: 'Les couleurs vous semblent-elles ternes ou jaunies ?', options: ['Oui, nettement', 'Légèrement', 'Non'] },
      { title: 'Double vision', instruction: 'Monoculaire', description: '', question: 'Voyez-vous double avec un seul œil ?', options: ['Oui', 'Parfois', 'Non'] },
      { title: 'Âge', instruction: 'Facteur principal', description: '', question: 'Quel est votre âge ?', options: ['< 50 ans', '50-65 ans', '> 65 ans'] }
    ]
  };

  return testSteps[testId]?.[step] || { title: 'Étape', instruction: '', description: '', options: [] };
};

// --- Data pour le Quiz ---
const questions = ref([
  {
    text: "Quel est votre principal environnement d'utilisation ?",
    options: [
      { text: "Principalement à l'intérieur (bureau, écran)", value: 'indoor' },
      { text: "Principalement à l'extérieur (conduite, sport)", value: 'outdoor' },
      { text: "Les deux équitablement", value: 'mixed' },
    ]
  },
  {
    text: "Quel critère est le plus important pour vous ?",
    options: [
      { text: "La résistance et la durabilité", value: 'durability' },
      { text: "Le style et la mode", value: 'style' },
      { text: "Le poids et le confort (légèreté)", value: 'comfort' },
    ]
  },
  {
    text: "Quel est votre budget principal pour les montures ?",
    options: [
      { text: "Moins de 50 000 XOF (Bas)", value: 'low' },
      { text: "50 000 - 100 000 XOF (Moyen)", value: 'medium' },
      { text: "Plus de 100 000 XOF (Premium)", value: 'high' },
    ]
  }
]);

const answers = ref(new Array(questions.value.length).fill(null));
const quizCompleted = ref(false);
const isCalculating = ref(false);
const resultMessage = ref('');
const currentQuestionPage = ref(0);
const questionsPerPage = 3;

// Questions affichées sur la page actuelle
const displayedQuestions = computed(() => {
  const start = currentQuestionPage.value * questionsPerPage;
  const end = start + questionsPerPage;
  return questions.value.slice(start, end).map((q, idx) => ({
    ...q,
    globalIndex: start + idx
  }));
});

// Nombre total de pages
const totalPages = computed(() => {
  return Math.ceil(questions.value.length / questionsPerPage);
});

// Vérifie si les questions de la page actuelle sont toutes répondues
const isCurrentPageValid = computed(() => {
  const start = currentQuestionPage.value * questionsPerPage;
  const end = Math.min(start + questionsPerPage, questions.value.length);
  for (let i = start; i < end; i++) {
    if (answers.value[i] === null) return false;
  }
  return true;
});

// Vérifie si toutes les questions ont reçu une réponse
const isQuizValid = computed(() => {
  return answers.value.every(answer => answer !== null);
});

const nextPage = () => {
  if (currentQuestionPage.value < totalPages.value - 1) {
    currentQuestionPage.value++;
    setTimeout(() => {
      const section = document.querySelector('#quiz-test-section');
      if (section) {
        section.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }, 10);
  }
};

const previousPage = () => {
  if (currentQuestionPage.value > 0) {
    currentQuestionPage.value--;
    setTimeout(() => {
      const section = document.querySelector('#quiz-test-section');
      if (section) {
        section.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }, 10);
  }
};

// --- Logique du Quiz ---
const calculateResults = () => {
  if (!isQuizValid.value) return;

  console.log('🔥 calculateResults appelé - Affichage écran de chargement');
  isCalculating.value = true;
  console.log('✅ isCalculating =', isCalculating.value);

  // Simuler un temps de traitement professionnel (8 secondes)
  setTimeout(() => {
    let diagnostic = "";
    const quizId = selectedQuizType.value.id;
    const userAnswers = answers.value;

    // Analyser les réponses selon le quiz
    if (quizId === 'depistage-vision') {
      // Quiz Dépistage de Problèmes de Vision (12 questions)
      let symptoms = [];

      // Q0: Difficultés à voir les objets éloignés
      if (userAnswers[0] === 'b' || userAnswers[0] === 'c') symptoms.push("difficulté à voir de loin");

      // Q1: Maux de tête après lecture prolongée
      if (userAnswers[1] === 'b' || userAnswers[1] === 'c') symptoms.push("maux de tête fréquents");

      // Q2: Besoin de plisser les yeux pour lire de loin
      if (userAnswers[2] === 'b' || userAnswers[2] === 'c') symptoms.push("plissement des yeux");

      // Q3: Difficulté à lire de près
      if (userAnswers[3] === 'b' || userAnswers[3] === 'c') symptoms.push("difficulté à lire de près");

      // Q4: Halos autour des lumières la nuit
      if (userAnswers[4] === 'b' || userAnswers[4] === 'c') symptoms.push("halos lumineux");

      // Q5: Yeux rouges ou irrités
      if (userAnswers[5] === 'b' || userAnswers[5] === 'c') symptoms.push("yeux rouges/irrités");

      // Q6: Vision double occasionnelle
      if (userAnswers[6] === 'b' || userAnswers[6] === 'c') symptoms.push("vision double");

      // Q7: Sensibilité excessive à la lumière
      if (userAnswers[7] === 'b' || userAnswers[7] === 'c') symptoms.push("photophobie");

      // Q8: Difficultés à conduire de nuit
      if (userAnswers[8] === 'b' || userAnswers[8] === 'c') symptoms.push("difficultés conduite nocturne");

      // Q9: Baisse progressive de la vision
      if (userAnswers[9] === 'b' || userAnswers[9] === 'c') symptoms.push("baisse de vision progressive");

      // Q10: Antécédents familiaux
      if (userAnswers[10] === 'b' || userAnswers[10] === 'c') symptoms.push("antécédents familiaux");

      // Q11: Dernier examen de vue
      if (userAnswers[11] === 'b' || userAnswers[11] === 'c') symptoms.push("suivi médical insuffisant");

      if (symptoms.length >= 5) {
        diagnostic = `🚨 Diagnostic : Plusieurs symptômes préoccupants détectés.\n\nNous avons identifié les signes suivants : ${symptoms.join(', ')}. Cette combinaison nécessite une consultation ophtalmologique approfondie dans les plus brefs délais. Ces symptômes peuvent indiquer des troubles de réfraction (myopie, hypermétropie, astigmatisme) ou d'autres pathologies nécessitant une correction urgente.\n\nRecommandation : Prenez rendez-vous pour un examen complet avec mesure de l'acuité visuelle et réfraction.`;
      } else if (symptoms.length >= 2) {
        diagnostic = `⚠️ Diagnostic : Signes de troubles visuels modérés.\n\nNous détectons : ${symptoms.join(', ')}. Ces symptômes suggèrent un possible besoin de correction visuelle ou d'ajustement de votre correction actuelle. Il est recommandé de consulter un opticien pour vérifier votre vue.\n\nRecommandation : Examen de routine conseillé dans le mois. Une correction adaptée pourrait grandement améliorer votre confort quotidien.`;
      } else {
        diagnostic = `✅ Diagnostic : Vision apparemment stable.\n\nVos réponses n'indiquent pas de symptômes alarmants majeurs. Toutefois, maintenez une surveillance régulière de votre santé visuelle.\n\nRecommandation : Examen de contrôle annuel recommandé pour prévenir tout problème futur. ${symptoms.length > 0 ? 'Surveillez les symptômes mentionnés : ' + symptoms.join(', ') : ''}`;
      }
    }
    else if (quizId === 'selection-lunettes') {
      // Quiz Sélection de Lunettes (10 questions)
      let preferences = {
        morphologie: userAnswers[0],
        activite: userAnswers[1],
        style: userAnswers[2],
        materiau: userAnswers[3],
        couleur: userAnswers[4],
        taille: userAnswers[5],
        budget: userAnswers[6]
      };

      diagnostic = "👓 Profil de monture recommandé :\n\n";

      // Morphologie du visage
      if (preferences.morphologie === 'a') {
        diagnostic += "• Avec votre visage ovale, vous avez de la chance ! Presque toutes les formes vous vont. Osez l'originalité !\n";
      } else if (preferences.morphologie === 'b') {
        diagnostic += "• Pour votre visage carré, optez pour des montures rondes ou ovales pour adoucir vos angles.\n";
      } else if (preferences.morphologie === 'c') {
        diagnostic += "• Pour votre visage rond, privilégiez des montures rectangulaires ou carrées pour affiner vos traits.\n";
      }

      // Style de vie
      if (preferences.activite === 'a') {
        diagnostic += "• Lecture : Montures légères et confortables, verres traités anti-reflet pour un confort optimal.\n";
      } else if (preferences.activite === 'b') {
        diagnostic += "• Écrans intensifs : Verres anti-lumière bleue indispensables, montures confortables pour port prolongé.\n";
      } else if (preferences.activite === 'c') {
        diagnostic += "• Vie sportive : Montures légères en titane ou TR90, verres résistants aux chocs.\n";
      }

      // Budget
      if (preferences.budget === 'a') {
        diagnostic += "• Budget <50k FCFA : Notre gamme Standard offre d'excellents rapports qualité-prix.\n";
      } else if (preferences.budget === 'b') {
        diagnostic += "• Budget 50-100k FCFA : Accédez à nos collections Premium avec verres traités.\n";
      } else {
        diagnostic += "• Budget >100k FCFA : Découvrez nos marques de luxe et verres haute technologie.\n";
      }

      diagnostic += "\n📍 Rendez-vous en boutique pour essayer nos modèles sélectionnés selon votre profil !";
    }
    else if (quizId === 'detection-maladies') {
      // Quiz Détection de Maladies Oculaires (15 questions)
      let risques = [];

      // Q0: Mouches volantes
      if (userAnswers[0] === 'b' || userAnswers[0] === 'c') risques.push("mouches volantes (décollement rétine possible)");

      // Q1: Perte vision périphérique
      if (userAnswers[1] === 'b' || userAnswers[1] === 'c') risques.push("perte vision périphérique (glaucome?)");

      // Q2: Douleurs oculaires avec vision floue
      if (userAnswers[2] === 'b' || userAnswers[2] === 'c') risques.push("douleurs oculaires");

      // Q3: Éclairs lumineux
      if (userAnswers[3] === 'b' || userAnswers[3] === 'c') risques.push("éclairs lumineux (alerte rétine)");

      // Q4: Voile/rideau dans champ visuel
      if (userAnswers[4] === 'b' || userAnswers[4] === 'c') risques.push("voile/rideau visuel (urgence)");

      // Q5: Lignes déformées
      if (userAnswers[5] === 'b' || userAnswers[5] === 'c') risques.push("déformation des lignes (DMLA?)");

      // Q6: Vision centrale floue
      if (userAnswers[6] === 'b' || userAnswers[6] === 'c') risques.push("vision centrale floue");

      // Q7: Pression/douleur yeux
      if (userAnswers[7] === 'b' || userAnswers[7] === 'c') risques.push("pression oculaire élevée");

      // Q8: Rougeurs fréquentes
      if (userAnswers[8] === 'b' || userAnswers[8] === 'c') risques.push("rougeurs fréquentes");

      // Q9: Halos colorés
      if (userAnswers[9] === 'b' || userAnswers[9] === 'c') risques.push("halos colorés (glaucome?)");

      // Q10: Difficultés couleurs
      if (userAnswers[10] === 'b' || userAnswers[10] === 'c') risques.push("problèmes de perception couleurs");

      // Q11: Larmoiement excessif
      if (userAnswers[11] === 'b' || userAnswers[11] === 'c') risques.push("larmoiement excessif");

      // Q12: Diabète/hypertension
      if (userAnswers[12] === 'b' || userAnswers[12] === 'c') risques.push("diabète/hypertension (facteur risque)");

      // Q13: Âge >60 ans
      if (userAnswers[13] === 'b' || userAnswers[13] === 'c') risques.push("âge avancé (surveillance accrue)");

      // Q14: Traumatisme récent
      if (userAnswers[14] === 'b' || userAnswers[14] === 'c') risques.push("traumatisme oculaire récent");

      if (risques.length >= 4) {
        diagnostic = `🚨 ALERTE : Signes de pathologies oculaires graves possibles.\n\nSymptômes détectés : ${risques.join(', ')}.\n\nCette combinaison de symptômes nécessite une CONSULTATION OPHTALMOLOGIQUE URGENTE. Ces signes peuvent indiquer :\n- DMLA (Dégénérescence Maculaire)\n- Glaucome\n- Décollement de rétine\n- Rétinopathie diabétique\n\n⚠️ NE PAS ATTENDRE : Certains de ces symptômes constituent des urgences ophtalmologiques. Un diagnostic et traitement précoces sont cruciaux pour préserver votre vision.`;
      } else if (risques.length >= 2) {
        diagnostic = `⚠️ Diagnostic : Facteurs de risque identifiés.\n\nÉléments préoccupants : ${risques.join(', ')}.\n\nCes symptômes méritent une attention médicale. Nous recommandons un examen ophtalmologique complet incluant :\n- Fond d'œil\n- Mesure de la pression intraoculaire\n- Test du champ visuel\n- OCT (Tomographie par Cohérence Optique) si nécessaire\n\nConsultation recommandée dans les 2-4 semaines.`;
      } else {
        diagnostic = `✅ Diagnostic : Pas de signes alarmants majeurs.\n\n${risques.length > 0 ? 'Éléments à surveiller : ' + risques.join(', ') + '.\n\n' : ''}Maintenez une surveillance régulière, surtout si vous avez des antécédents familiaux. Examen de contrôle annuel recommandé après 40 ans, semestriel après 60 ans.`;
      }
    }
    else if (quizId === 'sante-oculaire') {
      // Quiz Vérification de Santé Oculaire (12 questions)
      let bonnesPratiques = 0;
      let mauvaisesHabitudes = [];

      // Q0: Fréquence consultations
      if (userAnswers[0] === 'a' || userAnswers[0] === 'b') bonnesPratiques++;
      else mauvaisesHabitudes.push("consultations irrégulières");

      // Q1: Protection UV
      if (userAnswers[1] === 'a') bonnesPratiques++;
      else mauvaisesHabitudes.push("protection UV insuffisante");

      // Q2: Antécédents familiaux (info, pas de score)

      // Q3: Tabagisme
      if (userAnswers[3] === 'a') bonnesPratiques++;
      else mauvaisesHabitudes.push("exposition fumée");

      // Q4: Activité physique
      if (userAnswers[4] === 'a') bonnesPratiques++;
      else mauvaisesHabitudes.push("sédentarité");

      // Q5: Alimentation
      if (userAnswers[5] === 'a') bonnesPratiques++;
      else mauvaisesHabitudes.push("carences nutritionnelles");

      // Q6: Sommeil
      if (userAnswers[6] === 'a') bonnesPratiques++;
      else mauvaisesHabitudes.push("manque de sommeil");

      // Q7: Temps écran
      if (userAnswers[7] === 'c') {
        mauvaisesHabitudes.push("surexposition écrans (>6h/jour)");
      } else if (userAnswers[7] === 'a') {
        bonnesPratiques++;
      }

      // Q8: Éclairage adapté
      if (userAnswers[8] === 'a') bonnesPratiques++;
      else mauvaisesHabitudes.push("éclairage inadapté");

      // Q9: Hydratation
      if (userAnswers[9] === 'a') bonnesPratiques++;
      else mauvaisesHabitudes.push("déshydratation");

      // Q10: Nettoyage lunettes/lentilles
      if (userAnswers[10] === 'a') bonnesPratiques++;
      else mauvaisesHabitudes.push("hygiène insuffisante");

      // Q11: Pauses écran
      if (userAnswers[11] === 'a') bonnesPratiques++;
      else mauvaisesHabitudes.push("absence de pauses visuelles");

      const scoreHygiene = (bonnesPratiques / 12) * 100;

      if (scoreHygiene >= 70) {
        diagnostic = `🌟 Excellent ! Hygiène de vie oculaire exemplaire.\n\nVous appliquez ${bonnesPratiques} bonnes pratiques sur 12. Continuez ainsi ! Votre mode de vie protège efficacement votre capital visuel à long terme.\n\nPoints forts : Consultations régulières, protection solaire, mode de vie sain.\n\nMaintenez ces habitudes pour prévenir les pathologies liées à l'âge (DMLA, cataracte, glaucome).`;
      } else if (scoreHygiene >= 40) {
        diagnostic = `📈 Diagnostic : Habitudes à améliorer.\n\nVous pratiquez ${bonnesPratiques}/12 bonnes habitudes. Points à corriger :\n${mauvaisesHabitudes.map(h => '• ' + h).join('\n')}\n\nCes facteurs augmentent vos risques de pathologies oculaires. Adoptez progressivement de meilleures habitudes : protection UV systématique, alimentation riche en antioxydants, pauses écran régulières, hydratation suffisante.\n\nUne consultation permettra d'évaluer l'impact actuel sur votre santé oculaire.`;
      } else {
        diagnostic = `🚨 Alerte : Hygiène de vie préoccupante pour vos yeux.\n\nSeulement ${bonnesPratiques}/12 bonnes pratiques. Problèmes identifiés :\n${mauvaisesHabitudes.map(h => '• ' + h).join('\n')}\n\nVotre mode de vie actuel vous expose à des risques élevés de pathologies oculaires précoces. Changements urgents nécessaires :\n- Consultation ophtalmologique complète\n- Protection UV systématique\n- Alimentation enrichie (vitamines A, C, E, oméga-3)\n- Réduction du temps d'écran\n- Hydratation (1,5-2L/jour)\n\nUne prise en charge globale est nécessaire.`;
      }
    }
    else if (quizId === 'selection-lentilles') {
      // Quiz Sélection de Lentilles (11 questions)
      let profil = {
        duree: userAnswers[0],
        sensibilite: userAnswers[1],
        type: userAnswers[2],
        sport: userAnswers[3],
        environnement: userAnswers[4],
        experience: userAnswers[5],
        entretien: userAnswers[6],
        couleur: userAnswers[7],
        astigmatisme: userAnswers[8],
        sommeil: userAnswers[9],
        budget: userAnswers[10]
      };

      diagnostic = "👁️ Recommandation de lentilles personnalisée :\n\n";

      // Analyse de la durée de port
      if (profil.duree === 'c') {
        diagnostic += "⚠️ Port prolongé (>12h) : Privilégiez des lentilles en silicone hydrogel haute perméabilité à l'oxygène.\n";
      } else if (profil.duree === 'b') {
        diagnostic += "✅ Port standard (8-12h) : Lentilles mensuelles ou journalières selon votre budget.\n";
      }

      // Sensibilité
      if (profil.sensibilite === 'a' || profil.sensibilite === 'b') {
        diagnostic += "⚠️ Yeux sensibles : Lentilles journalières recommandées (plus hygiéniques), avec agent hydratant.\n";
      }

      // Type recommandé
      if (profil.type === 'a') {
        diagnostic += "• Votre choix : Journalières - Excellentes pour l'hygiène et le confort.\n";
      } else if (profil.type === 'b') {
        diagnostic += "• Votre choix : Mensuelles - Bon compromis économie/confort si entretien rigoureux.\n";
      }

      // Sport
      if (profil.sport === 'a') {
        diagnostic += "• Activité sportive intense : Les lentilles sont idéales ! Meilleur champ visuel que les lunettes.\n";
      }

      // Environnement
      if (profil.environnement === 'a' || profil.environnement === 'b') {
        diagnostic += "⚠️ Environnement sec (climatisation/chauffage) : Utilisez des larmes artificielles compatibles lentilles.\n";
      }

      // Astigmatisme
      if (profil.astigmatisme === 'a') {
        diagnostic += "• Astigmatisme : Lentilles toriques nécessaires (plus chères mais indispensables).\n";
      }

      // Sommeil
      if (profil.sommeil === 'b' || profil.sommeil === 'c') {
        diagnostic += "🚨 DANGER : Ne JAMAIS dormir avec des lentilles classiques ! Risque majeur d'infection cornéenne.\n";
      }

      // Budget
      if (profil.budget === 'a') {
        diagnostic += "\n💰 Budget <15k/mois : Lentilles mensuelles + solution (si entretien rigoureux possible).\n";
      } else if (profil.budget === 'b') {
        diagnostic += "\n💰 Budget 15-30k/mois : Lentilles journalières recommandées pour confort et hygiène optimaux.\n";
      }

      diagnostic += "\n📍 Rendez-vous pour essai gratuit et formation à la pose/dépose requis avant tout port.";
    }
    else if (quizId === 'prevention-fatigue') {
      // Quiz Prévention de Fatigue Oculaire (10 questions)
      let risquesFatigue = [];
      let bonnesPratiques = 0;

      if (userAnswers[0] === 'c') risquesFatigue.push("temps d'écran excessif (>8h)");
      if (userAnswers[1] === 'a') bonnesPratiques++; else risquesFatigue.push("règle 20-20-20 non appliquée");
      if (userAnswers[2] === 'a') bonnesPratiques++; else risquesFatigue.push("distance écran inadaptée");
      if (userAnswers[3] === 'c') risquesFatigue.push("clignements insuffisants");
      if (userAnswers[4] === 'a') bonnesPratiques++; else risquesFatigue.push("écran mal positionné");
      if (userAnswers[5] === 'c') risquesFatigue.push("éclairage inadapté");
      if (userAnswers[6] === 'c') risquesFatigue.push("absence de filtre lumière bleue");
      if (userAnswers[7] === 'c') risquesFatigue.push("pas d'exercices oculaires");
      if (userAnswers[8] === 'b' || userAnswers[8] === 'c') risquesFatigue.push("mauvaise posture");
      if (userAnswers[9] === 'c') risquesFatigue.push("absence de pauses");

      if (risquesFatigue.length >= 6) {
        diagnostic = `🚨 Risque élevé de syndrome de vision informatique !\n\nFacteurs de risque identifiés (${risquesFatigue.length}/10) :\n${risquesFatigue.map(r => '• ' + r).join('\n')}\n\nSymptômes probables : yeux secs, rouges, irrités, vision floue temporaire, maux de tête, douleurs cervicales.\n\nActions urgentes :\n✓ Verres anti-lumière bleue\n✓ Règle 20-20-20 obligatoire (toutes les 20min, regarder à 20m pendant 20sec)\n✓ Écran à 50-70cm, légèrement sous le niveau des yeux\n✓ Éclairage ambiant adapté (pas de reflets sur l'écran)\n✓ Pauses de 5-10min toutes les heures\n✓ Consultation pour vérifier correction visuelle\n\nSi non traité : risque de fatigue chronique et aggravation des symptômes.`;
      } else if (risquesFatigue.length >= 3) {
        diagnostic = `⚠️ Fatigue oculaire modérée probable.\n\nPoints à améliorer (${risquesFatigue.length}/10) :\n${risquesFatigue.map(r => '• ' + r).join('\n')}\n\nVous avez déjà ${bonnesPratiques} bonnes pratiques. Complétez votre prévention :\n• Appliquez systématiquement la règle 20-20-20\n• Vérifiez la position et distance de votre écran\n• Améliorez votre éclairage (lumière naturelle + lampe d'appoint)\n• Clignez volontairement plus souvent\n• Envisagez des verres avec filtre anti-lumière bleue\n\nUne consultation permettra d'exclure un besoin de correction.`;
      } else {
        diagnostic = `✅ Excellente prévention de la fatigue oculaire !\n\nVous appliquez ${bonnesPratiques} bonnes pratiques. ${risquesFatigue.length > 0 ? 'Points mineurs à peaufiner : ' + risquesFatigue.join(', ') : 'Continuez ainsi !'}\n\nVotre vigilance vous protège efficacement du syndrome de vision informatique. Maintenez ces habitudes et restez attentif à tout nouveau symptôme (sécheresse, fatigue inhabituelle).`;
      }
    }
    else if (quizId === 'selection-traitement') {
      // Quiz Sélection de Traitement (13 questions)
      let candidatureChirurgie = 0;
      let contreIndications = [];
      let avantages = [];

      // Question 1: Intérêt pour la chirurgie
      if (userAnswers[1] === 'a') {
        candidatureChirurgie += 3;
        avantages.push("forte motivation");
      } else if (userAnswers[1] === 'b') {
        candidatureChirurgie += 1;
      }

      // Question 2: Stabilité correction (critère majeur)
      if (userAnswers[2] === 'a') {
        candidatureChirurgie += 3;
        avantages.push("correction stable");
      } else {
        contreIndications.push("correction instable (attendre stabilisation 2 ans)");
        candidatureChirurgie -= 2;
      }

      // Question 3: Âge
      if (userAnswers[3] === 'a') {
        candidatureChirurgie += 2;
        avantages.push("âge approprié");
      } else {
        contreIndications.push("âge insuffisant (<18 ans)");
        candidatureChirurgie -= 3;
      }

      // Question 4: Épaisseur cornée
      if (userAnswers[4] === 'b') {
        contreIndications.push("cornée trop fine (risque ectasie)");
        candidatureChirurgie -= 2;
      } else if (userAnswers[4] === 'a') {
        avantages.push("épaisseur cornéenne normale");
        candidatureChirurgie += 2;
      }

      // Question 5: Maladies
      if (userAnswers[5] === 'b' || userAnswers[5] === 'c') {
        contreIndications.push("maladies systémiques (contre-indication relative)");
        candidatureChirurgie -= 2;
      }

      // Question 6: Acceptation des risques
      if (userAnswers[6] === 'a') {
        candidatureChirurgie += 2;
        avantages.push("consentement éclairé");
      } else if (userAnswers[6] === 'c') {
        contreIndications.push("réticence aux risques chirurgicaux");
        candidatureChirurgie -= 3;
      }

      // Question 8: Disponibilité repos
      if (userAnswers[8] === 'c') {
        contreIndications.push("pas de disponibilité post-opératoire");
        candidatureChirurgie -= 1;
      }

      // Question 9: Attentes réalistes
      if (userAnswers[9] === 'b') {
        contreIndications.push("attentes irréalistes (risque insatisfaction)");
        candidatureChirurgie -= 2;
      } else if (userAnswers[9] === 'a') {
        avantages.push("attentes réalistes");
        candidatureChirurgie += 2;
      }

      // Question 11: Préférence type correction
      if (userAnswers[11] === 'b') {
        candidatureChirurgie -= 2;
      }

      // Question 12: Suivi post-op
      if (userAnswers[12] === 'c') {
        contreIndications.push("refus de suivi post-opératoire");
        candidatureChirurgie -= 2;
      }

      // Générer le diagnostic selon le score
      if (candidatureChirurgie >= 8 && contreIndications.length === 0) {
        diagnostic = `✅ Excellent candidat pour la chirurgie réfractive !\n\nScore d'éligibilité : ${candidatureChirurgie}/15\n\nPoints positifs identifiés :\n${avantages.map(a => '✓ ' + a).join('\n')}\n\nRecommandations :\n`;

        // Type de chirurgie recommandé selon Q7
        if (userAnswers[7] === 'a') {
          diagnostic += `• LASIK : Technique de référence, récupération rapide (24-48h), confort optimal.\n`;
        } else if (userAnswers[7] === 'b') {
          diagnostic += `• PKR : Idéal si cornée fine, sécurité maximale, récupération plus longue (5-7 jours).\n`;
        } else if (userAnswers[7] === 'c') {
          diagnostic += `• Implants phakes : Pour fortes myopies, réversible, excellents résultats.\n`;
        }

        // Budget Q10
        if (userAnswers[10] === 'a') {
          diagnostic += `• Votre budget (500k-1M FCFA/œil) permet d'accéder aux meilleures technologies.\n`;
        } else if (userAnswers[10] === 'c') {
          diagnostic += `• Votre budget (>1M FCFA/œil) permet les techniques premium (Femtosecond, guidage aberrométrique).\n`;
        }

        diagnostic += `\n🏥 Prochaines étapes :\n1. Bilan pré-opératoire complet (topographie cornéenne, pachymétrie)\n2. Consultation avec chirurgien ophtalmologiste\n3. Explication détaillée des risques/bénéfices\n4. Planification de l'intervention`;
      }
      else if (candidatureChirurgie >= 3 && candidatureChirurgie < 8) {
        diagnostic = `⚠️ Candidature possible avec réserves.\n\nScore d'éligibilité : ${candidatureChirurgie}/15\n\n`;

        if (contreIndications.length > 0) {
          diagnostic += `Points bloquants à résoudre :\n${contreIndications.map(c => '⚠️ ' + c).join('\n')}\n\n`;
        }

        if (avantages.length > 0) {
          diagnostic += `Points positifs :\n${avantages.map(a => '✓ ' + a).join('\n')}\n\n`;
        }

        diagnostic += `Recommandations :\n`;

        // Conseils spécifiques selon les contre-indications
        if (contreIndications.some(c => c.includes('instable'))) {
          diagnostic += `• Attendez 2 ans de stabilité complète de votre correction\n`;
        }
        if (contreIndications.some(c => c.includes('cornée'))) {
          diagnostic += `• Privilégiez PKR ou implants phakes (préservation cornéenne)\n`;
        }
        if (contreIndications.some(c => c.includes('attentes'))) {
          diagnostic += `• Informez-vous davantage : résultat optimal ne garantit pas 10/10\n`;
        }
        if (contreIndications.some(c => c.includes('maladies'))) {
          diagnostic += `• Contrôle strict de votre pathologie avant toute chirurgie\n`;
        }

        diagnostic += `\n📋 Action immédiate : Consultation d'évaluation pour examen détaillé de votre cas. Alternatives (lunettes progressives, lentilles) à considérer.`;
      }
      else {
        diagnostic = `🚫 Candidature non recommandée actuellement.\n\nScore d'éligibilité : ${candidatureChirurgie}/15 (seuil minimum non atteint)\n\n`;

        if (contreIndications.length > 0) {
          diagnostic += `Contre-indications majeures identifiées :\n${contreIndications.map(c => '❌ ' + c).join('\n')}\n\n`;
        }

        diagnostic += `Pourquoi la chirurgie n'est pas adaptée actuellement :\n`;

        if (userAnswers[1] === 'c') {
          diagnostic += `• Vous n'êtes pas intéressé(e) par la chirurgie → Les lunettes/lentilles restent d'excellentes solutions\n`;
        }
        if (userAnswers[3] !== 'a') {
          diagnostic += `• Âge insuffisant → Attendez 18 ans minimum (idéalement 21-25 ans)\n`;
        }
        if (userAnswers[2] !== 'a') {
          diagnostic += `• Correction instable → Toute chirurgie serait inefficace si la vue continue d'évoluer\n`;
        }
        if (userAnswers[6] === 'c') {
          diagnostic += `• Réticence aux risques → Prudence légitime, pas de chirurgie sans acceptation totale\n`;
        }

        diagnostic += `\n✅ Solutions alternatives recommandées :\n`;
        diagnostic += `• Lunettes : Large choix esthétique, sans risque, évolutif\n`;
        diagnostic += `• Lentilles : Liberté de mouvement, champ visuel complet\n`;
        diagnostic += `• Orthokératologie : Lentilles de nuit pour corriger temporairement (myopie légère)\n`;

        diagnostic += `\n\n💡 Vous pourrez réévaluer votre candidature dans quelques années si votre situation évolue.`;
      }
    }
    else {
      // Diagnostic générique pour les autres quiz
      diagnostic = `📊 Analyse de vos réponses terminée.\n\nMerci d'avoir complété ce quiz. Vos réponses ont été enregistrées et analysées. Pour un diagnostic personnalisé plus approfondi et des recommandations spécifiques à votre situation, nous vous invitons à prendre rendez-vous avec nos spécialistes.\n\nNos opticiens diplômés pourront répondre précisément à vos besoins et vous orienter vers les meilleures solutions.`;
    }

    resultMessage.value = diagnostic;
    isCalculating.value = false;
    quizCompleted.value = true;

    // Scroll vers les résultats
    setTimeout(() => {
      const section = document.querySelector('#quiz-test-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, 8000);
};

const resetQuiz = () => {
  answers.value = new Array(questions.value.length).fill(null);
  quizCompleted.value = false;
  resultMessage.value = '';
  currentQuestionPage.value = 0;
};

// --- Logique des Tests (envoi par email) ---
const submitTest = () => {
  if (!testFormData.value.name || !testFormData.value.email) return;

  // Simuler l'envoi au backend
  console.log('Test soumis:', {
    test: selectedTestType.value.title,
    formData: testFormData.value
  });

  // TODO: Intégrer avec l'API backend pour envoyer réellement
  // await api.submitTest({...})

  testSubmitted.value = true;
};

const resetTestForm = () => {
  testFormVisible.value = false;
  testSubmitted.value = false;
  testFormData.value = {
    name: '',
    email: '',
    phone: ''
  };
  selectedTestType.value = null;
};


// --- Data et Logique pour la FAQ ---
const faqItems = ref([
  { question: "Quelle est la fréquence recommandée pour un examen de vue ?", answer: "Généralement, une fois tous les deux ans. Toutefois, pour les enfants ou les personnes de plus de 65 ans, un examen annuel est souvent conseillé.", open: false },
  { question: "Qu'est-ce que le filtre anti-lumière bleue ?", answer: "C'est un traitement de surface qui filtre une partie de la lumière bleue-violette émise par les écrans numériques (téléphones, ordinateurs) pour réduire la fatigue oculaire.", open: false },
  { question: "Combien de temps faut-il pour s'habituer à de nouveaux verres progressifs ?", answer: "La période d'adaptation varie, mais elle est généralement de quelques jours à deux semaines. Nous sommes là pour vous accompagner si des difficultés persistent.", open: false },
  { question: "Puis-je utiliser une vieille ordonnance ?", answer: "Une ordonnance a généralement une validité limitée (souvent 3 ou 5 ans). Pour un renouvellement optimal, nous vous conseillons de planifier un examen de vue récent.", open: false },
]);

const toggleFaq = (index) => {
  faqItems.value[index].open = !faqItems.value[index].open;
};

// --- Data et Logique pour le Formulaire de Conseil ---
const adviceForm = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const adviceSending = ref(false);
const adviceStatus = ref({
  show: false,
  success: false,
  message: ''
});

const isAdviceFormValid = computed(() => {
  return adviceForm.value.name.trim() !== '' &&
    adviceForm.value.email.trim() !== '' &&
    adviceForm.value.subject !== '' &&
    adviceForm.value.message.trim().length >= 20;
});

const sendAdviceRequest = async () => {
  if (!isAdviceFormValid.value) return;

  adviceSending.value = true;
  adviceStatus.value.show = false;

  try {
    // Simulation d'envoi d'email (à remplacer par votre API)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Ici, vous pouvez intégrer votre service d'envoi d'email
    // Par exemple avec EmailJS ou votre backend API
    console.log('Demande de conseil:', adviceForm.value);

    adviceStatus.value = {
      show: true,
      success: true,
      message: '✨ Votre demande a été envoyée avec succès ! Nos experts vous répondront dans les 24h par email.'
    };

    // Réinitialiser le formulaire
    adviceForm.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };

  } catch (error) {
    adviceStatus.value = {
      show: true,
      success: false,
      message: '❌ Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'
    };
  } finally {
    adviceSending.value = false;

    // Masquer le message après 5 secondes
    setTimeout(() => {
      adviceStatus.value.show = false;
    }, 5000);
  }
};

// --- Fonctions de validation ---
const validateEmail = () => {
  const email = testFormData.value.email;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    emailError.value = '';
    return false;
  }

  if (!emailRegex.test(email)) {
    emailError.value = 'Format d\'email invalide';
    return false;
  }

  emailError.value = '';
  return true;
};

const validatePhone = () => {
  const phone = testFormData.value.phone;

  if (!phone) {
    phoneError.value = '';
    return true; // Optionnel
  }

  // Supprimer tous les espaces et caractères spéciaux pour la validation
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');

  // Format accepté: +221XXXXXXXXX, 221XXXXXXXXX, ou XXXXXXXXX (9 chiffres minimum)
  const phoneRegex = /^(\+?221)?[0-9]{9,10}$/;

  if (!phoneRegex.test(cleanPhone)) {
    phoneError.value = 'Format invalide (ex: 77 123 45 67)';
    return false;
  }

  phoneError.value = '';
  return true;
};

// Computed pour validation du formulaire
const isFormValid = computed(() => {
  return testFormData.value.name &&
    testFormData.value.email &&
    !emailError.value;
});

// --- Sauvegarde et récupération de progression ---
const saveProgressToLocalStorage = () => {
  try {
    const progressData = {
      // Quiz
      selectedQuizType: selectedQuizType.value,
      questions: questions.value,
      answers: answers.value,
      currentQuestionPage: currentQuestionPage.value,
      quizCompleted: quizCompleted.value,

      // Test
      selectedTestType: selectedTestType.value,
      testFormData: testFormData.value,
      testFormSubmitted: testFormSubmitted.value,
      testAnswers: testAnswers.value,
      currentTestStep: currentTestStep.value,
      testCompleted: testCompleted.value,

      timestamp: new Date().getTime()
    };

    localStorage.setItem('quizAdviceProgress', JSON.stringify(progressData));
  } catch (error) {
    console.error('Erreur sauvegarde localStorage:', error);
  }
};

const loadProgressFromLocalStorage = () => {
  try {
    const savedData = localStorage.getItem('quizAdviceProgress');
    if (!savedData) return;

    const progressData = JSON.parse(savedData);
    const now = new Date().getTime();
    const oneHour = 60 * 60 * 1000;

    // Vérifier si les données ont moins d'1 heure
    if (now - progressData.timestamp < oneHour) {
      // Restaurer les données
      if (progressData.selectedQuizType) {
        selectedQuizType.value = progressData.selectedQuizType;
        questions.value = progressData.questions || [];
        answers.value = progressData.answers || [];
        currentQuestionPage.value = progressData.currentQuestionPage || 0;
        quizCompleted.value = progressData.quizCompleted || false;
      }

      if (progressData.selectedTestType) {
        selectedTestType.value = progressData.selectedTestType;
        testFormData.value = progressData.testFormData;
        testFormSubmitted.value = progressData.testFormSubmitted;
        testAnswers.value = progressData.testAnswers;
        currentTestStep.value = progressData.currentTestStep;
        testCompleted.value = progressData.testCompleted;
      }

      console.log('✅ Progression restaurée');
    } else {
      // Données trop anciennes, les supprimer
      localStorage.removeItem('quizAdviceProgress');
    }
  } catch (error) {
    console.error('Erreur chargement localStorage:', error);
    localStorage.removeItem('quizAdviceProgress');
  }
};

const clearProgressFromLocalStorage = () => {
  localStorage.removeItem('quizAdviceProgress');
};

// --- Watchers pour sauvegarder automatiquement ---
watch([
  answers,
  currentQuestionPage,
  currentTestStep,
  testAnswers,
  testFormSubmitted,
  selectedQuizType,
  selectedTestType
], () => {
  saveProgressToLocalStorage();
}, { deep: true });

// --- Lifecycle hooks ---
onMounted(() => {
  // Charger la progression sauvegardée
  loadProgressFromLocalStorage();

  // Ajouter navigation clavier (accessibilité)
  document.addEventListener('keydown', handleKeyboardNavigation);
});

const handleKeyboardNavigation = (e) => {
  // Navigation dans les quiz avec les flèches
  if (selectedQuizType.value && !quizCompleted.value) {
    if (e.key === 'ArrowRight' && isCurrentPageValid.value) {
      nextPage();
    } else if (e.key === 'ArrowLeft' && currentQuestionPage.value > 0) {
      previousPage();
    }
  }

  // Navigation dans les tests
  if (selectedTestType.value && testFormSubmitted.value && !testCompleted.value) {
    if (e.key === 'ArrowRight' && testAnswers.value[currentTestStep.value]) {
      nextTestStep();
    } else if (e.key === 'ArrowLeft' && currentTestStep.value > 0) {
      previousTestStep();
    }
  }
};

// Fonction pour marquer que les résultats du quiz ont été envoyés
const markQuizResultSent = () => {
  quizResultSent.value = true;

  // Simuler l'envoi d'email
  setTimeout(() => {
    console.log('📧 Résultats du quiz envoyés par email');
  }, 1000);
};

// Appeler cette fonction après l'affichage des résultats
watch(quizCompleted, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      markQuizResultSent();
    }, 2000); // Attendre 2s après l'affichage des résultats
  }
});
</script>

<style scoped>
@keyframes progressBar {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}

/* Animation de pulsation pour le spinner */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

/* Animation de ping pour les points */
@keyframes ping {

  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* Animation de fade-in pour les messages */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

/* Transitions fluides entre les étapes */
.test-step-enter-active,
.test-step-leave-active {
  transition: all 0.3s ease;
}

.test-step-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.test-step-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Responsive pour SVG sur mobile */
@media (max-width: 640px) {
  svg {
    max-width: 100% !important;
    height: auto !important;
  }
}

/* Focus visible pour accessibilité */
button:focus-visible,
input:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Animation pour les boutons de réponse */
button {
  transition: all 0.2s ease;
}

button:active {
  transform: scale(0.98);
}
</style>
