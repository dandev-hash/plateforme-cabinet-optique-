<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
    <!-- En-tête identique au Catalogue -->
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
              style="font-family: 'Montserrat', sans-serif;">Blog</h1>
            <p class="text-gray-600 text-lg">Découvrez nos conseils de santé visuelle et tendances en montures.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-0.5 bg-green-600"></div>

    <!-- Dark Section with Services Premium Style -->
    <div class="relative bg-gradient-to-br from-gray-900 via-green-800 to-black text-white py-6 overflow-visible">
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

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-visible">
        <!-- Titre Section -->
        <div class="mb-6 pb-6 border-b border-green-500/20">
          <h2 class="text-2xl font-black text-white mb-2" style="font-family: 'Montserrat', sans-serif;">Explorez nos
            Articles</h2>
          <p class="text-sm text-gray-400">Filtrez par catégorie ou recherchez un sujet</p>
        </div>

        <!-- Zone de Recherche et Filtres adaptée au style dark -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 overflow-visible">
          <!-- Barre de recherche -->
          <div class="lg:col-span-2">
            <label class="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Rechercher</label>
            <div class="relative">
              <input v-model="searchQuery" type="text" placeholder="Chercher un article..."
                class="w-full pl-10 pr-4 py-2.5 border-2 border-green-500/40 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all outline-none bg-white/8 text-white placeholder-gray-500 text-sm" />
              <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <!-- Filtre par catégorie -->
          <div>
            <label class="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Catégorie</label>
            <select v-model="selectedCategory"
              class="w-full px-3 py-2.5 border-2 border-green-500/40 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all outline-none bg-white/8 text-white text-sm">
              <option value="" class="bg-green-900 text-white">Toutes</option>
              <option value="Conseils" class="bg-green-900 text-white">Conseils</option>
              <option value="Tendances" class="bg-green-900 text-white">Tendances</option>
              <option value="Santé" class="bg-green-900 text-white">Santé</option>
              <option value="Technologie" class="bg-green-900 text-white">Technologie</option>
              <option value="Style" class="bg-green-900 text-white">Style</option>
              <option value="Entretien" class="bg-green-900 text-white">Entretien</option>
              <option value="Témoignage" class="bg-green-900 text-white">Témoignage</option>
            </select>
          </div>

          <!-- Tri -->
          <div>
            <label class="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Trier</label>
            <select v-model="sortOrder"
              class="w-full px-3 py-2.5 border-2 border-green-500/40 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all outline-none bg-white/8 text-white text-sm">
              <option value="recent" class="bg-green-900 text-white">Récent</option>
              <option value="popular" class="bg-green-900 text-white">Populaire</option>
              <option value="reading" class="bg-green-900 text-white">Lecture</option>
            </select>
          </div>
        </div>

        <!-- Stats rapides compactes -->
        <div class="grid grid-cols-4 gap-3 mt-4 pt-4 border-t border-green-500/20">
          <div
            class="relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center hover:bg-white/15 transition-all overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style="animation-duration: 2.5s;"></div>
            <div class="relative z-10">
              <div class="text-xl font-bold text-green-400">{{ filteredArticles.length }}</div>
              <div class="text-xs text-gray-300 mt-1">Articles</div>
            </div>
          </div>
          <div
            class="relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center hover:bg-white/15 transition-all overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style="animation-duration: 2.5s; animation-delay: 0.4s;"></div>
            <div class="relative z-10">
              <div class="text-xl font-bold text-emerald-400">6</div>
              <div class="text-xs text-gray-300 mt-1">Catégories</div>
            </div>
          </div>
          <div
            class="relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center hover:bg-white/15 transition-all overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style="animation-duration: 2.5s; animation-delay: 0.8s;"></div>
            <div class="relative z-10">
              <div class="text-xl font-bold text-teal-400">250+</div>
              <div class="text-xs text-gray-300 mt-1">Lecteurs</div>
            </div>
          </div>
          <div
            class="relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center hover:bg-white/15 transition-all overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style="animation-duration: 2.5s; animation-delay: 1.2s;"></div>
            <div class="relative z-10">
              <div class="text-xl font-bold text-cyan-400">12</div>
              <div class="text-xs text-gray-300 mt-1">Nouveaux</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Separator line -->
      <div
        class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent">
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-full py-16 relative z-10 bg-gradient-to-b from-white to-gray-50" id="blog-content">
      <div class="w-full px-2 sm:px-4 lg:px-6">

        <!-- Article à la Une (Featured) -->
        <div v-if="featuredArticle && !searchQuery && !selectedCategory" class="mb-16">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-1 h-8 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></div>
            <h2 class="text-3xl font-black text-gray-900" style="font-family: 'Montserrat', sans-serif;">Article à la
              Une</h2>
          </div>
          <div
            class="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 group cursor-pointer">
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <div class="h-72 lg:h-full bg-gradient-to-br from-green-100 to-emerald-100 overflow-hidden">
                <img :src="featuredArticle.imageUrl" :alt="featuredArticle.title"
                  class="object-cover h-full w-full group-hover:scale-110 transition-transform duration-700">
              </div>
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <div
                  class="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 font-bold text-xs rounded-lg mb-6 w-fit tracking-wide">
                  {{ featuredArticle.category }}
                </div>
                <h3
                  class="text-4xl font-black text-gray-900 mb-4 group-hover:text-green-600 transition-colors leading-tight"
                  style="font-family: 'Montserrat', sans-serif;">
                  {{ featuredArticle.title }}
                </h3>
                <div class="w-12 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mb-6 rounded-full"></div>
                <p class="text-gray-600 mb-8 leading-relaxed text-lg">
                  {{ featuredArticle.excerpt }}
                </p>
                <div class="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
                  <span class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd" />
                    </svg>
                    <span class="font-semibold text-gray-700">{{ featuredArticle.date }}</span>
                  </span>
                  <span class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd" />
                    </svg>
                    <span class="font-semibold text-gray-700">{{ featuredArticle.readTime }} min de lecture</span>
                  </span>
                  <span class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd" />
                    </svg>
                    <span class="font-semibold text-gray-700">{{ featuredArticle.views }} vues</span>
                  </span>
                </div>
                <RouterLink :to="`/blog/${featuredArticle.slug}`"
                  class="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-fit tracking-wide">
                  Découvrir l'article
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Section Témoignage - Formel & Minimaliste -->
        <div v-if="featuredArticle && !searchQuery && !selectedCategory"
          class="mb-10 p-6 bg-slate-900 rounded-xl border border-emerald-600/30">
          <h4 class="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Votre Avis / Témoignage</h4>
          <form @submit.prevent="submitTestimonial" class="flex gap-3 items-end">
            <input v-model="testimonialName" type="text" placeholder="Nom"
              class="w-32 px-3 py-2.5 text-sm border border-emerald-600/40 rounded-lg focus:border-emerald-500 outline-none bg-white/5 text-white placeholder-gray-500" />
            <textarea v-model="testimonialText" placeholder="Partagez votre expérience..." rows="1"
              class="flex-1 px-3 py-2.5 text-sm border border-emerald-600/40 rounded-lg focus:border-emerald-500 outline-none bg-white/5 text-white placeholder-gray-500 resize-none"></textarea>
            <button type="submit"
              class="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-all uppercase tracking-wide">
              Soumettre
            </button>
          </form>
        </div>

        <!-- Separator -->
        <div class="my-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      </div>

      <!-- Grille mixte façon Freepik -->
      <div v-if="mixedCards.length > 0">
        <div class="flex items-center gap-3 mb-10">
          <div class="w-1 h-8 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></div>
          <h2 class="text-3xl font-black text-gray-900" style="font-family: 'Montserrat', sans-serif;">
            {{ searchQuery || selectedCategory ? 'Résultats de recherche' : 'Sélection du moment' }}
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <template v-for="item in paginatedMixedCards" :key="item.key">
            <!-- Carte Article -->
            <BlogCard v-if="item.type === 'article'" :article="item.data" />
            <!-- Carte Témoignage -->
            <div v-else-if="item.type === 'testimonial'"
              class="relative group bg-slate-900 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform p-6">
              <div class="flex items-center gap-3 mb-2">
                <svg class="w-7 h-7 text-emerald-400 opacity-60" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a7.5 7.5 0 0113 0" />
                </svg>
                <span
                  class="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">Témoignage</span>
              </div>
              <p class="text-sm text-gray-200 flex-1 line-clamp-4 mb-2">"{{ item.data.text }}"</p>
              <span class="mt-2 text-xs text-emerald-200 font-semibold">- {{ item.data.name }}</span>
            </div>
            <!-- Carte Pub -->
            <div v-else-if="item.type === 'ad'"
              class="relative group bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform border border-green-100 p-6">
              <div class="flex items-center gap-3 mb-2">
                <svg class="w-7 h-7 text-green-400 opacity-60" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24">
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M16 3v4M8 3v4" />
                </svg>
                <span
                  class="inline-block bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded">Promotion</span>
              </div>
              <h4 class="text-base font-bold mb-1 line-clamp-2">{{ item.data.title }}</h4>
              <p class="text-xs text-green-900 flex-1 line-clamp-3">{{ item.data.description }}</p>
            </div>
          </template>
        </div>
        <!-- Pagination -->
        <div v-if="totalPagesMixed > 1" class="mt-12 flex justify-center items-center gap-2">
          <button @click="currentPage--" :disabled="currentPage === 1"
            class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl hover:border-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
            ← Précédent
          </button>
          <div class="flex gap-2">
            <button v-for="page in totalPagesMixed" :key="page" @click="currentPage = page"
              :class="currentPage === page ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:border-green-600'"
              class="w-10 h-10 border-2 border-gray-200 rounded-xl font-bold transition-all">
              {{ page }}
            </button>
          </div>
          <button @click="currentPage++" :disabled="currentPage === totalPagesMixed"
            class="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl hover:border-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
            Suivant →
          </button>
        </div>
      </div>

      <!-- Message si aucun résultat -->
      <div v-else class="text-center py-20">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
          <span class="text-6xl">🔍</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Aucun article trouvé</h3>
        <p class="text-gray-600 mb-6">Essayez de modifier vos critères de recherche</p>
        <button @click="resetFilters"
          class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all">
          Réinitialiser les filtres
        </button>
      </div>

      <!-- Newsletter Section -->
      <div
        class="mt-16 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 rounded-3xl shadow-2xl overflow-hidden">
        <div class="relative p-12 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer">
          </div>
          <div class="absolute inset-0 opacity-10"
            style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 20px 20px;">
          </div>

          <div class="relative z-10 text-center max-w-2xl mx-auto">
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full mb-6">
              <span class="text-4xl">✉️</span>
            </div>
            <h3 class="text-3xl font-bold text-white mb-4">Restez informé</h3>
            <p class="text-green-100 mb-8">
              Recevez nos derniers articles et conseils directement dans votre boîte mail
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <input type="email" placeholder="votre.email@exemple.com"
                class="px-6 py-3 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all" />
              <button
                class="px-8 py-3 bg-white text-green-900 font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import BlogCard from '../components/BlogCard.vue';

// --- Filtres et Recherche ---
const searchQuery = ref('');
const selectedCategory = ref('');
const sortOrder = ref('recent');
const currentPage = ref(1);
const articlesPerPage = 6;

// --- Témoignage ---
const testimonialName = ref('');
const testimonialText = ref('');

const submitTestimonial = () => {
  if (testimonialName.value.trim() && testimonialText.value.trim()) {
    alert(`Merci ${testimonialName.value}! Votre témoignage a été enregistré.`);
    testimonialName.value = '';
    testimonialText.value = '';
  } else {
    alert('Veuillez remplir tous les champs');
  }
};
// --- Témoignages et Pubs (exemple) ---
const testimonials = ref([
  { id: 1, name: 'Jean Dupont', text: 'Service impeccable et rapide !' },
  { id: 2, name: 'Marie Curie', text: 'Très satisfaite de mes nouvelles lunettes.' },
  { id: 3, name: 'Alioune Ndiaye', text: 'Accueil chaleureux et conseils professionnels.' }
]);
const ads = ref([
  { id: 1, title: 'Promo 1', description: '-20% sur toutes les montures !' },
  { id: 2, title: 'Examen offert', description: 'Examen de vue offert pour tout achat.' },
  { id: 3, title: 'Nouveau service', description: 'Essayez nos lunettes en réalité augmentée !' }
]);

// --- Mélange harmonieux façon Freepik ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const mixedCards = computed(() => {
  // On mélange tous les types de cartes
  const cards = [
    ...filteredArticles.value.map(a => ({ type: 'article', data: a, key: 'a-' + a.id })),
    ...testimonials.value.map(t => ({ type: 'testimonial', data: t, key: 't-' + t.id })),
    ...ads.value.map(ad => ({ type: 'ad', data: ad, key: 'ad-' + ad.id }))
  ];
  return shuffleArray(cards);
});

const cardsPerPage = articlesPerPage;
const totalPagesMixed = computed(() => {
  return Math.ceil(mixedCards.value.length / cardsPerPage);
});
const paginatedMixedCards = computed(() => {
  const start = (currentPage.value - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  return mixedCards.value.slice(start, end);
});

// --- Données d'exemple pour le blog ---
const blogArticles = ref([
  {
    id: 1,
    title: 'Comment bien choisir vos verres progressifs ?',
    category: 'Conseils',
    date: '20 Nov 2025',
    readTime: 5,
    views: 1234,
    slug: 'choisir-verres-progressifs',
    imageUrl: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=400&fit=crop',
    excerpt: 'Les verres progressifs sont une solution idéale pour corriger la presbytie. Découvrez comment faire le bon choix selon vos besoins.',
    featured: true
  },
  {
    id: 2,
    title: 'Les 5 tendances lunettes de soleil pour 2026',
    category: 'Tendances',
    date: '15 Nov 2025',
    readTime: 4,
    views: 987,
    slug: 'tendances-lunettes-2026',
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    excerpt: 'Découvrez les styles qui vont marquer l\'année 2026 en matière de lunettes de soleil.'
  },
  {
    id: 3,
    title: 'L\'importance de l\'examen de la vue régulier',
    category: 'Santé',
    date: '01 Nov 2025',
    readTime: 6,
    views: 2156,
    slug: 'examen-vue-regulier',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop',
    excerpt: 'Un examen régulier permet de détecter précocement les problèmes visuels et d\'adapter votre correction.'
  },
  {
    id: 4,
    title: 'La technologie derrière les verres antireflets',
    category: 'Technologie',
    date: '28 Oct 2025',
    readTime: 7,
    views: 654,
    slug: 'verres-antireflets',
    imageUrl: 'https://images.unsplash.com/photo-1576931494743-5fc823da2948?w=600&h=400&fit=crop',
    excerpt: 'Comprendre comment fonctionnent les traitements antireflets et leurs avantages au quotidien.'
  },
  {
    id: 5,
    title: 'Adapter ses lunettes à la forme de son visage',
    category: 'Style',
    date: '10 Oct 2025',
    readTime: 5,
    views: 1876,
    slug: 'lunettes-forme-visage',
    imageUrl: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    excerpt: 'Visage rond, carré, ovale ou en cœur ? Trouvez la monture qui sublime vos traits.'
  },
  {
    id: 6,
    title: 'Astuces pour prendre soin de ses lentilles de contact',
    category: 'Entretien',
    date: '05 Sep 2025',
    readTime: 3,
    views: 543,
    slug: 'soin-lentilles',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop',
    excerpt: 'Les bonnes pratiques d\'hygiène pour porter vos lentilles en toute sécurité.'
  },
  {
    id: 7,
    title: 'Lunettes pour enfants : comment choisir ?',
    category: 'Conseils',
    date: '22 Août 2025',
    readTime: 6,
    views: 1432,
    slug: 'lunettes-enfants',
    imageUrl: 'https://images.unsplash.com/photo-1631131215336-bbf2675fb6b5?w=600&h=400&fit=crop',
    excerpt: 'Confort, résistance et style : tous nos conseils pour équiper vos enfants.'
  },
  {
    id: 8,
    title: 'Le filtre anti-lumière bleue est-il vraiment utile ?',
    category: 'Technologie',
    date: '10 Août 2025',
    readTime: 5,
    views: 2341,
    slug: 'filtre-lumiere-bleue',
    imageUrl: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=600&h=400&fit=crop',
    excerpt: 'Analyse scientifique des bienfaits réels du filtre anti-lumière bleue.'
  },
  {
    id: 9,
    title: 'Sport et lunettes : trouvez votre équipement',
    category: 'Sport',
    date: '28 Juil 2025',
    readTime: 4,
    views: 876,
    slug: 'sport-lunettes',
    imageUrl: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=600&h=400&fit=crop',
    excerpt: 'Des lunettes adaptées à chaque pratique sportive pour allier performance et protection.'
  }
]);

// --- Article à la Une (Featured) ---
const featuredArticle = computed(() => {
  return blogArticles.value.find(article => article.featured);
});

// --- Articles filtrés ---
const filteredArticles = computed(() => {
  let articles = blogArticles.value.filter(article => !article.featured);

  // Filtre par recherche
  if (searchQuery.value) {
    articles = articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // Filtre par catégorie
  if (selectedCategory.value) {
    articles = articles.filter(article => article.category === selectedCategory.value);
  }

  // Tri
  if (sortOrder.value === 'recent') {
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortOrder.value === 'popular') {
    articles.sort((a, b) => b.views - a.views);
  } else if (sortOrder.value === 'reading') {
    articles.sort((a, b) => a.readTime - b.readTime);
  }

  return articles;
});

// --- Pagination ---
const totalPages = computed(() => {
  return Math.ceil(filteredArticles.value.length / articlesPerPage);
});

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage;
  const end = start + articlesPerPage;
  return filteredArticles.value.slice(start, end);
});

// --- Reset des filtres ---
const resetFilters = () => {
  searchQuery.value = '';
  selectedCategory.value = '';
  sortOrder.value = 'recent';
  currentPage.value = 1;
};
</script>