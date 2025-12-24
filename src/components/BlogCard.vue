<template>
  <RouterLink :to="`/blog/${article.slug}`"
    class="group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:border-green-500/50 border-2 border-transparent h-full">
    <!-- Image Container with Overlay -->
    <div class="relative h-56 bg-gradient-to-br from-green-100 to-emerald-100 overflow-hidden flex-shrink-0">
      <img :src="article.imageUrl" :alt="article.title"
        class="object-cover h-full w-full group-hover:scale-110 transition-transform duration-700 ease-out" />

      <!-- Overlay Gradient on Hover -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      </div>

      <!-- Badge catégorie sur l'image -->
      <div
        class="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
        {{ article.category }}
      </div>

      <!-- Date Badge -->
      <div
        class="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-semibold text-gray-700 shadow-md">
        {{ article.date }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-grow">
      <h3
        class="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
        {{ article.title }}
      </h3>

      <p v-if="article.excerpt" class="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
        {{ article.excerpt }}
      </p>

      <!-- Metadata Bar -->
      <div class="flex items-center justify-between text-xs text-gray-500 mb-4 py-3 border-t border-gray-100">
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1 hover:text-green-600 transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd" />
            </svg>
            <span class="font-semibold">{{ article.readTime }} min</span>
          </span>
          <span v-if="article.views" class="flex items-center gap-1 hover:text-green-600 transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd" />
            </svg>
            <span class="font-semibold">{{ article.views }}</span>
          </span>
        </div>
      </div>

      <!-- Read Button -->
      <button
        class="w-full mt-auto px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
        Lire l'article
        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </RouterLink>
</template>

<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  article: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Titre de l\'article',
      category: 'Santé',
      date: '01 Jan 2024',
      readTime: 5,
      slug: 'article-par-defaut',
      imageUrl: 'https://via.placeholder.com/600x400?text=Blog+Optique',
    })
  }
});
</script>