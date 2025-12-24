<template>
    <div class="space-y-6">
        <!-- Tabs -->
        <div class="bg-white rounded-2xl shadow-lg p-2 inline-flex gap-2">
            <button @click="activeTab = 'comments'" :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all',
                activeTab === 'comments'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
            ]">
                Mes Commentaires (4)
            </button>
            <button @click="activeTab = 'testimonials'" :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all',
                activeTab === 'testimonials'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
            ]">
                Mes Témoignages (2)
            </button>
            <button @click="activeTab = 'liked'" :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all',
                activeTab === 'liked'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
            ]">
                Articles Likés (8)
            </button>
        </div>

        <!-- Mes Commentaires -->
        <div v-show="activeTab === 'comments'" class="space-y-4">
            <div v-for="comment in comments" :key="comment.id"
                class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div class="flex items-start gap-4 mb-4">
                    <img :src="comment.articleImage" :alt="comment.articleTitle"
                        class="w-24 h-24 object-cover rounded-xl" />
                    <div class="flex-1">
                        <h3 class="text-lg font-bold text-gray-900 mb-1">{{ comment.articleTitle }}</h3>
                        <p class="text-sm text-gray-500">{{ comment.date }}</p>
                    </div>
                </div>
                <div class="bg-gray-50 rounded-xl p-4 mb-4">
                    <p class="text-gray-700">{{ comment.content }}</p>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4 text-sm text-gray-600">
                        <span class="flex items-center gap-1">
                            <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                            {{ comment.likes }}
                        </span>
                        <span class="flex items-center gap-1">
                            <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            {{ comment.replies }} réponses
                        </span>
                    </div>
                    <div class="flex gap-2">
                        <button
                            class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-all">
                            Modifier
                        </button>
                        <button
                            class="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 font-semibold rounded-lg transition-all">
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mes Témoignages -->
        <div v-show="activeTab === 'testimonials'" class="space-y-4">
            <div v-for="testimonial in testimonials" :key="testimonial.id"
                class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-6 border-2 border-green-200">
                <div class="flex items-start justify-between mb-4">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-1">{{ testimonial.title }}</h3>
                        <p class="text-sm text-gray-600">Publié le {{ testimonial.date }}</p>
                    </div>
                    <span
                        class="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        ✓ Vérifié
                    </span>
                </div>
                <div class="flex items-center gap-1 mb-4">
                    <svg v-for="n in 5" :key="n" class="w-6 h-6"
                        :class="n <= testimonial.rating ? 'text-yellow-500' : 'text-gray-300'" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>
                <p class="text-gray-700 mb-4">{{ testimonial.content }}</p>
                <div class="flex items-center justify-between pt-4 border-t border-green-200">
                    <span class="text-sm text-gray-600">{{ testimonial.views }} vues</span>
                    <button
                        class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all">
                        Modifier
                    </button>
                </div>
            </div>

            <!-- Bouton Nouveau Témoignage -->
            <button
                class="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Rédiger un Nouveau Témoignage
            </button>
        </div>

        <!-- Articles Likés -->
        <div v-show="activeTab === 'liked'" class="grid md:grid-cols-2 gap-6">
            <div v-for="article in likedArticles" :key="article.id"
                class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                <div class="relative overflow-hidden h-48">
                    <img :src="article.image" :alt="article.title"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <button
                        class="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </button>
                </div>
                <div class="p-6">
                    <span class="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-3">
                        {{ article.category }}
                    </span>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ article.title }}</h3>
                    <p class="text-gray-600 text-sm mb-4">{{ article.excerpt }}</p>
                    <div class="flex items-center justify-between text-sm text-gray-500">
                        <span>{{ article.date }}</span>
                        <button class="text-blue-600 hover:text-blue-700 font-semibold">
                            Lire l'article →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('comments')

const comments = ref([
    {
        id: 1,
        articleTitle: 'Les Tendances Lunettes 2025',
        articleImage: '/images/blog/article1.jpg',
        date: '10 Déc 2025',
        content: 'Article très intéressant ! J\'ai particulièrement apprécié la section sur les montures rétro. Cela m\'a aidé à choisir ma nouvelle paire.',
        likes: 12,
        replies: 3
    },
    {
        id: 2,
        articleTitle: 'Comment Choisir ses Verres Progressifs',
        articleImage: '/images/blog/article2.jpg',
        date: '5 Déc 2025',
        content: 'Merci pour ces conseils précieux. Je vais suivre vos recommandations pour mon prochain rendez-vous.',
        likes: 8,
        replies: 1
    }
])

const testimonials = ref([
    {
        id: 1,
        title: 'Excellent Service et Produits de Qualité',
        date: '15 Nov 2025',
        rating: 5,
        content: 'J\'ai été impressionné par le professionnalisme de l\'équipe. L\'examen de vue était très complet et les conseils pour choisir ma monture étaient parfaits. Je recommande vivement !',
        views: 234
    },
    {
        id: 2,
        title: 'Une Expérience Client Remarquable',
        date: '3 Oct 2025',
        rating: 5,
        content: 'Service impeccable du début à la fin. Les délais ont été respectés et la qualité des verres est exceptionnelle. Bravo à toute l\'équipe !',
        views: 189
    }
])

const likedArticles = ref([
    {
        id: 1,
        title: 'Les Tendances Lunettes 2025',
        category: 'Mode',
        excerpt: 'Découvrez les styles qui vont marquer l\'année...',
        image: '/images/blog/article1.jpg',
        date: '10 Déc 2025'
    },
    {
        id: 2,
        title: 'Protection UV: Ce que Vous Devez Savoir',
        category: 'Santé',
        excerpt: 'L\'importance de protéger vos yeux contre les rayons UV...',
        image: '/images/blog/article2.jpg',
        date: '5 Déc 2025'
    }
])
</script>
