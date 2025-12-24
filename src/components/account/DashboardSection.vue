<template>
    <div class="space-y-6">
        <!-- Statistiques Rapides -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-600">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span class="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">+2 ce
                        mois</span>
                </div>
                <div class="text-3xl font-bold text-gray-900 mb-1">5</div>
                <div class="text-sm text-gray-500 font-medium">Rendez-vous</div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </div>
                    <span class="text-xs font-semibold text-red-500 bg-red-100 px-2 py-1 rounded-full">12 favoris</span>
                </div>
                <div class="text-3xl font-bold text-gray-900 mb-1">12</div>
                <div class="text-sm text-gray-500 font-medium">Montures Favoris</div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-600">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <span class="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">3
                        terminés</span>
                </div>
                <div class="text-3xl font-bold text-gray-900 mb-1">3</div>
                <div class="text-sm text-gray-500 font-medium">Quiz Complétés</div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-600">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span class="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">5 non
                        lus</span>
                </div>
                <div class="text-3xl font-bold text-gray-900 mb-1">18</div>
                <div class="text-sm text-gray-500 font-medium">Messages</div>
            </div>
        </div>

        <!-- Activité Récente -->
        <div class="grid lg:grid-cols-2 gap-6">
            <!-- Prochains Rendez-vous -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div class="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                    <h3 class="text-xl font-bold flex items-center gap-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Prochains Rendez-vous
                    </h3>
                </div>
                <div class="p-6 space-y-4">
                    <div
                        class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                        <div
                            class="w-12 h-12 bg-green-100 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                            <span class="text-xs text-green-600 font-bold">DÉC</span>
                            <span class="text-lg font-bold text-green-600">18</span>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-gray-900">Examen de Vue</h4>
                            <p class="text-sm text-gray-600">14h30 - Dr. Martin</p>
                            <span
                                class="inline-block mt-1 text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">Dans
                                4 jours</span>
                        </div>
                    </div>
                    <div
                        class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                        <div
                            class="w-12 h-12 bg-blue-100 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                            <span class="text-xs text-blue-600 font-bold">DÉC</span>
                            <span class="text-lg font-bold text-blue-600">22</span>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-gray-900">Ajustement Lunettes</h4>
                            <p class="text-sm text-gray-600">10h00 - Service Client</p>
                            <span
                                class="inline-block mt-1 text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Dans
                                8 jours</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Activité Récente -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div class="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white">
                    <h3 class="text-xl font-bold flex items-center gap-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Activité Récente
                    </h3>
                </div>
                <div class="p-6 space-y-3">
                    <div class="flex items-start gap-3 pb-3 border-b border-gray-200">
                        <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <p class="text-sm font-semibold text-gray-900">Monture ajoutée aux favoris</p>
                            <p class="text-xs text-gray-500">Ray-Ban RB2132 - Il y a 2 heures</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 pb-3 border-b border-gray-200">
                        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <p class="text-sm font-semibold text-gray-900">Quiz complété</p>
                            <p class="text-xs text-gray-500">Test de Vue - Score: 85% - Hier</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 pb-3 border-b border-gray-200">
                        <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <p class="text-sm font-semibold text-gray-900">Commentaire publié</p>
                            <p class="text-xs text-gray-500">Article: "Les tendances 2025" - Il y a 2 jours</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <p class="text-sm font-semibold text-gray-900">Rendez-vous confirmé</p>
                            <p class="text-xs text-gray-500">18 Déc 2025 à 14h30 - Il y a 3 jours</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Actions Rapides -->
        <div class="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-6">Actions Rapides</h3>
            <div class="grid md:grid-cols-3 gap-4">
                <button
                    class="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-xl transition-all transform hover:scale-105">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span class="font-semibold">Nouveau Rendez-vous</span>
                </button>
                <button
                    class="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-xl transition-all transform hover:scale-105">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span class="font-semibold">Explorer le Catalogue</span>
                </button>
                <button
                    class="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-xl transition-all transform hover:scale-105">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="font-semibold">Faire un Quiz</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    user: Object
})
</script>
