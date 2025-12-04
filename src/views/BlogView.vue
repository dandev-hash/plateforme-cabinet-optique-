<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      
      <h1 class="text-4xl font-extrabold text-gray-900 mb-2 text-center">
        Toutes les Actualités OptiVision
      </h1>
      <p class="text-xl text-gray-600 mb-10 text-center">
        Des conseils de santé visuelle aux dernières tendances de montures.
      </p>

      <!-- Zone de Recherche et Filtre -->
      <div class="flex justify-center mb-10">
        <input 
          type="text" 
          placeholder="Rechercher un article..." 
          class="w-full max-w-2xl p-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:ring-green-500 transition duration-150"
        />
      </div>

      <!-- Liste des Articles (Utilise le composant BlogCard créé précédemment) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard
          v-for="article in blogArticles"
          :key="article.id"
          :article="article"
        />
        <!-- Carte pour un article en vedette ou un article supplémentaire -->
        <BlogCard :article="extraArticle" />
      </div>

      <!-- Pagination (Placeholder) -->
      <div class="mt-12 text-center">
        <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition duration-300 shadow-md">
          Charger plus d'articles
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import BlogCard from '../components/BlogCard.vue';
// Note: Le composant BlogCard doit être disponible dans src/components/

// Données d'exemple pour le blog
const blogArticles = [
  { id: 1, title: 'Comment bien choisir vos verres progressifs ?', category: 'Conseils', date: '20 Nov 2025', readTime: 5, slug: 'choisir-verres-progressifs', imageUrl: 'https://via.placeholder.com/600x400?text=Verres' },
  { id: 2, title: 'Les 5 tendances lunettes de soleil pour 2026', category: 'Tendances', date: '15 Nov 2025', readTime: 4, slug: 'tendances-lunettes-2026', imageUrl: 'https://via.placeholder.com/600x400?text=Soleil' },
  { id: 3, title: 'L\'importance de l\'examen de la vue régulier', category: 'Santé', date: '01 Nov 2025', readTime: 6, slug: 'examen-vue-regulier', imageUrl: 'https://via.placeholder.com/600x400?text=Examen' },
  { id: 4, title: 'La technologie derrière les verres antireflets', category: 'Technologie', date: '28 Oct 2025', readTime: 7, slug: 'verres-antireflets', imageUrl: 'https://via.placeholder.com/600x400?text=Traitement' },
  { id: 5, title: 'Adapter ses lunettes à la forme de son visage', category: 'Style', date: '10 Oct 2025', readTime: 5, slug: 'lunettes-forme-visage', imageUrl: 'https://via.placeholder.com/600x400?text=Visage' },
];

const extraArticle = { 
  id: 6, 
  title: 'Astuces pour prendre soin de ses lentilles de contact', 
  category: 'Entretien', 
  date: '05 Sep 2025', 
  readTime: 3, 
  slug: 'soin-lentilles', 
  imageUrl: 'https://via.placeholder.com/600x400?text=Lentilles' 
};
</script>