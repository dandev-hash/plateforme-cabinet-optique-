<template>
    <div class="space-y-6">
        <!-- Header -->
        <div class="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl shadow-xl p-6 text-white">
            <h2 class="text-2xl font-bold mb-2">Mes Montures Favoris</h2>
            <p class="text-red-100">{{ likedFrames.length }} montures dans vos favoris</p>
        </div>

        <!-- Filtres -->
        <div class="bg-white rounded-2xl shadow-lg p-4 flex flex-wrap gap-2">
            <button v-for="filter in filters" :key="filter" @click="activeFilter = filter" :class="[
                'px-4 py-2 rounded-xl font-semibold transition-all',
                activeFilter === filter
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]">
                {{ filter }}
            </button>
        </div>

        <!-- Grid des Montures -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="frame in likedFrames" :key="frame.id"
                class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group">
                <div class="relative overflow-hidden bg-gray-100 h-64">
                    <img :src="frame.image" :alt="frame.name"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <button
                        class="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                    </button>
                    <span
                        class="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                        {{ frame.category }}
                    </span>
                </div>
                <div class="p-6">
                    <div class="flex items-start justify-between mb-2">
                        <h3 class="text-lg font-bold text-gray-900">{{ frame.name }}</h3>
                        <span class="text-xl font-bold text-green-600">{{ frame.price }} FCFA</span>
                    </div>
                    <p class="text-sm text-gray-600 mb-4">{{ frame.description }}</p>
                    <div class="flex gap-2 mb-4">
                        <span v-for="color in frame.colors" :key="color"
                            :class="['w-6 h-6 rounded-full border-2 border-gray-300', color]"></span>
                    </div>
                    <div class="flex gap-2">
                        <button
                            class="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-all">
                            Voir Détails
                        </button>
                        <button
                            class="bg-red-100 hover:bg-red-200 text-red-600 font-bold py-3 px-4 rounded-xl transition-all">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- État vide -->
        <div v-if="likedFrames.length === 0" class="bg-white rounded-2xl shadow-lg p-12 text-center">
            <svg class="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Aucun favori pour le moment</h3>
            <p class="text-gray-600 mb-6">Explorez notre catalogue et ajoutez vos montures préférées !</p>
            <RouterLink to="/catalogue"
                class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Explorer le Catalogue
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeFilter = ref('Toutes')
const filters = ref(['Toutes', 'Soleil', 'Vue', 'Sport', 'Enfant'])

const likedFrames = ref([
    {
        id: 1,
        name: 'Ray-Ban RB2132',
        category: 'Soleil',
        price: '45 000',
        description: 'Classique Wayfarer, protection UV400',
        image: '/images/frames/frame1.jpg',
        colors: ['bg-black', 'bg-brown-700', 'bg-blue-900']
    },
    {
        id: 2,
        name: 'Oakley Holbrook',
        category: 'Sport',
        price: '62 000',
        description: 'Design sportif, verres polarisés',
        image: '/images/frames/frame2.jpg',
        colors: ['bg-gray-900', 'bg-red-600']
    },
    {
        id: 3,
        name: 'Persol PO3007',
        category: 'Vue',
        price: '38 000',
        description: 'Élégance italienne, monture légère',
        image: '/images/frames/frame3.jpg',
        colors: ['bg-amber-800', 'bg-black']
    }
])
</script>
