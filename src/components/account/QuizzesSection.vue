<template>
    <div class="space-y-6">
        <!-- Header avec Stats -->
        <div class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-6 text-white">
            <h2 class="text-2xl font-bold mb-4">Mes Quiz & Tests</h2>
            <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div class="text-3xl font-bold">{{ completedQuizzes.length }}</div>
                    <div class="text-sm text-purple-100">Quiz Complétés</div>
                </div>
                <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div class="text-3xl font-bold">{{ averageScore }}%</div>
                    <div class="text-sm text-purple-100">Score Moyen</div>
                </div>
                <div class="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div class="text-3xl font-bold">{{ totalPoints }}</div>
                    <div class="text-sm text-purple-100">Points Cumulés</div>
                </div>
            </div>
        </div>

        <!-- Liste des Quiz Complétés -->
        <div class="space-y-4">
            <div v-for="quiz in completedQuizzes" :key="quiz.id"
                class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div class="flex flex-col md:flex-row">
                    <div :class="[
                        'p-6 md:w-48 flex flex-col items-center justify-center',
                        quiz.score >= 80 ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                            quiz.score >= 60 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                                'bg-gradient-to-br from-orange-500 to-red-600',
                        'text-white'
                    ]">
                        <div class="text-6xl font-bold mb-2">{{ quiz.score }}%</div>
                        <div class="text-sm font-semibold uppercase">Score</div>
                        <div class="mt-4">
                            <svg v-if="quiz.score >= 80" class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <svg v-else-if="quiz.score >= 60" class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex-1 p-6">
                        <div class="flex items-start justify-between mb-4">
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ quiz.title }}</h3>
                                <p class="text-gray-600">{{ quiz.description }}</p>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-4 mb-4">
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{{ quiz.date }}</span>
                            </div>
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>{{ quiz.questions }} questions</span>
                            </div>
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <span>{{ quiz.correctAnswers }}/{{ quiz.questions }} correctes</span>
                            </div>
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{{ quiz.duration }}</span>
                            </div>
                        </div>

                        <!-- Recommandations basées sur le résultat -->
                        <div v-if="quiz.recommendation" class="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-4">
                            <h4 class="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                Recommandation
                            </h4>
                            <p class="text-sm text-blue-700">{{ quiz.recommendation }}</p>
                        </div>

                        <div class="flex gap-2">
                            <button
                                class="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Voir les Détails
                            </button>
                            <button
                                class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Refaire le Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quiz Disponibles -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Nouveaux Quiz Disponibles</h3>
            <div class="grid md:grid-cols-2 gap-4">
                <div v-for="available in availableQuizzes" :key="available.id"
                    class="border-2 border-gray-200 hover:border-purple-500 rounded-xl p-4 transition-all cursor-pointer group">
                    <div class="flex items-start gap-4">
                        <div
                            class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-gray-900 mb-1">{{ available.title }}</h4>
                            <p class="text-sm text-gray-600 mb-2">{{ available.description }}</p>
                            <div class="flex items-center gap-3 text-xs text-gray-500">
                                <span>{{ available.questions }} questions</span>
                                <span>•</span>
                                <span>{{ available.duration }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const completedQuizzes = ref([
    {
        id: 1,
        title: 'Test de Vue Complet',
        description: 'Évaluation complète de votre santé visuelle',
        score: 85,
        date: '10 Déc 2025',
        questions: 20,
        correctAnswers: 17,
        duration: '12 min',
        recommendation: 'Excellents résultats ! Votre vision est en bonne santé. Nous recommandons un contrôle annuel.'
    },
    {
        id: 2,
        title: 'Quiz Montures: Trouvez Votre Style',
        description: 'Découvrez les montures qui vous correspondent',
        score: 92,
        date: '5 Déc 2025',
        questions: 15,
        correctAnswers: 14,
        duration: '8 min',
        recommendation: 'Votre style: Classique Élégant. Les montures rectangulaires en métal vous correspondent parfaitement.'
    },
    {
        id: 3,
        title: 'Protection UV: Connaissances',
        description: 'Testez vos connaissances sur la protection solaire',
        score: 68,
        date: '1 Déc 2025',
        questions: 10,
        correctAnswers: 7,
        duration: '5 min',
        recommendation: 'Bon score ! Consultez nos articles de blog pour en apprendre davantage sur la protection UV.'
    }
])

const availableQuizzes = ref([
    {
        id: 4,
        title: 'Verres Progressifs: Guide Complet',
        description: 'Tout savoir sur les verres progressifs',
        questions: 12,
        duration: '7 min'
    },
    {
        id: 5,
        title: 'Fatigue Visuelle Numérique',
        description: 'Évaluez votre exposition aux écrans',
        questions: 8,
        duration: '4 min'
    }
])

const averageScore = computed(() => {
    const total = completedQuizzes.value.reduce((sum, quiz) => sum + quiz.score, 0)
    return Math.round(total / completedQuizzes.value.length)
})

const totalPoints = computed(() => {
    return completedQuizzes.value.reduce((sum, quiz) => sum + quiz.correctAnswers * 10, 0)
})
</script>
