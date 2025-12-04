<template>
  <RouterLink 
    :to="`/blog/${article.slug}`" 
    class="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
  >
    <div class="h-48 bg-gray-100 overflow-hidden">
      <img :src="article.imageUrl" :alt="article.title" class="object-cover h-full w-full transition duration-300 group-hover:scale-105">
    </div>

    <div class="p-5">
      <p class="text-sm font-semibold text-green-600 uppercase mb-1">{{ article.category }}</p>
      
      <h3 class="text-xl font-bold text-gray-900 line-clamp-2">
        {{ article.title }}
      </h3>
      
      <p class="text-gray-500 text-sm mt-2">
        {{ article.date }} • {{ article.readTime }} min de lecture
      </p>
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