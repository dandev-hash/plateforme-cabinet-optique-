<template>
  <div class="py-10 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-extrabold text-gray-900">Catalogue</h1>
        <p class="text-gray-600 mt-1">Parcourez nos montures — filtrez, cherchez, ajoutez au panier.</p>
      </div>

      <!-- Top Filters (compact & collapsible) -->
      <div class="mb-6">
        <div class="p-3 bg-gradient-to-r from-green-50 to-white rounded-xl shadow-sm border border-green-100">
          <button @click="showFilters = !showFilters"
            class="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-green-100/40 transition">
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-600" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 12.414V16a1 1 0 01-1.447.894l-3-1.5A1 1 0 017 15.5V12.414L3.293 6.707A1 1 0 013 6V4z" />
              </svg>
              <span class="font-semibold text-gray-800">Filtres</span>
              <span v-if="activeFilterCount > 0"
                class="ml-1 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">{{ activeFilterCount
                }}</span>
            </div>
            <svg :class="['w-5 h-5 text-gray-600 transition-transform', showFilters ? 'rotate-180' : '']"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <transition name="expand">
            <div v-show="showFilters"
              class="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-3 border-t border-green-100">
              <!-- Type -->
              <div>
                <label class="text-xs font-bold text-green-700 uppercase tracking-wider">Type</label>
                <div class="mt-2 space-y-1">
                  <label class="flex items-center text-sm text-gray-700 cursor-pointer">
                    <input type="checkbox" value="vue" v-model="filters.types" class="w-4 h-4 text-green-600 rounded">
                    <span class="ml-2">Vue <span class="text-xs text-gray-500 ml-2">({{ countByType('vue')
                        }})</span></span>
                  </label>
                  <label class="flex items-center text-sm text-gray-700 cursor-pointer">
                    <input type="checkbox" value="soleil" v-model="filters.types"
                      class="w-4 h-4 text-green-600 rounded">
                    <span class="ml-2">Solaire <span class="text-xs text-gray-500 ml-2">({{ countByType('soleil')
                        }})</span></span>
                  </label>
                </div>
              </div>

              <!-- Brand -->
              <div>
                <label class="text-xs font-bold text-green-700 uppercase tracking-wider">Marque</label>
                <select v-model="filters.brand"
                  class="w-full mt-2 px-3 py-2 border border-green-200 rounded-lg text-sm bg-white">
                  <option value="">Toutes les marques</option>
                  <option v-for="b in availableBrands" :key="b" :value="b">{{ b }}</option>
                </select>
              </div>

              <!-- Shape badges -->
              <div>
                <label class="text-xs font-bold text-green-700 uppercase tracking-wider">Forme</label>
                <div class="mt-2 flex flex-wrap gap-2">
                  <button v-for="s in availableShapes" :key="s" @click="toggleShapeFilter(s)"
                    :class="['px-3 py-1 text-xs rounded-full transition', filters.shapes.includes(s) ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700']">{{
                    s }}</button>
                </div>
              </div>

              <!-- Colors -->
              <div>
                <label class="text-xs font-bold text-green-700 uppercase tracking-wider">Couleur</label>
                <div class="mt-2 flex flex-wrap gap-2">
                  <button v-for="c in availableColors" :key="c" @click="toggleColorFilter(c)"
                    :class="['w-6 h-6 rounded-full border-2 transition hover:scale-110', colorClass(c), filters.colors.includes(c) ? 'ring-2 ring-green-400' : '']"
                    :title="c"></button>
                </div>
              </div>
            </div>
          </transition>

          <div v-show="showFilters" class="mt-3 pt-3 border-t border-green-100 flex justify-end">
            <button @click="resetFilters"
              class="text-xs font-semibold text-green-600 px-3 py-1 rounded-lg hover:bg-green-50">↻
              Réinitialiser</button>
          </div>

        </div>
      </div>

      <!-- Search & Sort -->
      <div class="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input v-model="searchQuery" type="text" placeholder="Chercher une marque, modèle..."
          class="sm:col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
        <select v-model="filters.sortBy" class="px-4 py-3 border border-gray-300 rounded-lg text-sm">
          <option value="relevance">Pertinence</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
          <option value="newest">Nouveautés</option>
        </select>
      </div>

      <!-- Results count -->
      <div class="mb-6 text-gray-700 font-medium">Résultats : <span class="font-bold text-green-600 text-lg">{{
        filteredProducts.length }}</span></div>

      <!-- Product grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <ProductCard v-for="p in paginatedProducts" :key="p.id" :product="p" @quickView="openQuickView(p)"
          @addToCart="handleAddToCart" />
      </div>

      <!-- Empty state -->
      <div v-if="filteredProducts.length === 0" class="text-center p-10 bg-white rounded-xl shadow-lg">
        <h3 class="mt-2 text-xl font-medium text-gray-900">Aucun produit trouvé</h3>
        <p class="mt-1 text-gray-500">Ajustez vos filtres ou la recherche.</p>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="mt-8 text-center">
        <nav class="inline-flex rounded-xl shadow-md bg-white p-1 border border-gray-200" aria-label="Pagination">
          <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 rounded-l-lg">Précédent</button>
          <button v-for="page in pagesToShow" :key="page" @click="goToPage(page)"
            :class="page === currentPage ? 'bg-green-600 text-white rounded-md px-4 py-2 mx-1' : 'bg-white text-gray-700 rounded-md px-4 py-2 mx-1'">{{
            page }}</button>
          <button @click="nextPage" :disabled="currentPage === totalPages"
            class="px-4 py-2 rounded-r-lg">Suivant</button>
        </nav>
      </div>

      <!-- Quick view modal -->
      <QuickViewModal :product="quickViewProduct" :isVisible="isQuickViewVisible" @close="isQuickViewVisible = false" />

      <!-- Floating cart button & cart modal -->
      <CartFloatingButton :itemCount="cartItemCount" @openCart="isCartVisible = true" />
      <CartModal :isVisible="isCartVisible" :cartItems="cartItems" @close="isCartVisible = false"
        @removeItem="handleRemoveFromCart" @updateQuantity="handleUpdateQuantity" />

      <!-- Toasts (transparent green, text 'Ajouté') -->
      <transition-group name="toast-slide" tag="div" class="fixed top-6 right-6 z-50 pointer-events-none">
        <div v-for="t in addedToasts" :key="t.id" class="pointer-events-auto mb-2">
          <div
            class="flex items-center gap-2 rounded-lg px-3 py-2 bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
            <svg class="w-5 h-5 text-green-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-medium text-green-700">Ajouté</span>
          </div>
        </div>
      </transition-group>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import QuickViewModal from '../components/QuickViewModal.vue';
import CartFloatingButton from '../components/CartFloatingButton.vue';
import CartModal from '../components/CartModal.vue';

// --- Data (mock fallback) ---
const rawProducts = ref([
  { id: 1, name: 'Classique Noir', brand: 'Ray-Ban', type: 'vue', price: 75000, isNew: false, isPromo: true, promoPercentage: 25, originalPrice: 100000, imageUrl: 'https://placehold.co/300x400/2c3e50/FFFFFF?text=RB', shape: 'carrée', color: 'noir' },
  { id: 2, name: 'Aviateur Bleu', brand: 'Oakley', type: 'soleil', price: 95000, isNew: true, isPromo: false, imageUrl: 'https://placehold.co/300x400/3498db/FFFFFF?text=Oak', shape: 'aviateur', color: 'bleu' },
  { id: 3, name: 'Ronde Vintage', brand: 'Gucci', type: 'vue', price: 120000, isNew: true, isPromo: false, imageUrl: 'https://placehold.co/300x400/f1c40f/000000?text=GC', shape: 'ronde', color: 'doré' },
  { id: 4, name: 'Papillon Écaille', brand: 'Dior', type: 'soleil', price: 80000, isNew: false, isPromo: true, promoPercentage: 19, originalPrice: 99000, imageUrl: 'https://placehold.co/300x400/e74c3c/FFFFFF?text=DR', shape: 'papillon', color: 'marron' },
  { id: 5, name: 'Sportif Rouge', brand: 'Oakley', type: 'soleil', price: 65000, isNew: false, isPromo: false, imageUrl: 'https://placehold.co/300x400/e74c3c/FFFFFF?text=OK', shape: 'sport', color: 'rouge' },
  { id: 6, name: 'Oeil de Chat', brand: 'Chanel', type: 'vue', price: 140000, isNew: true, isPromo: false, imageUrl: 'https://placehold.co/300x400/34495e/FFFFFF?text=CH', shape: 'oeil de chat', color: 'noir' },
  { id: 7, name: 'Légères Acier', brand: 'Silhouette', type: 'vue', price: 115000, isNew: false, isPromo: true, promoPercentage: 12, originalPrice: 130000, imageUrl: 'https://placehold.co/300x400/95a5a6/FFFFFF?text=SL', shape: 'rectangulaire', color: 'gris' },
  { id: 8, name: 'Carrées Bicolores', brand: 'Prada', type: 'vue', price: 98000, isNew: false, isPromo: false, imageUrl: 'https://placehold.co/300x400/9b59b6/FFFFFF?text=PR', shape: 'carrée', color: 'bicolore' },
  { id: 9, name: 'Métal Doré', brand: 'Gucci', type: 'soleil', price: 105000, isNew: false, isPromo: false, imageUrl: 'https://placehold.co/300x400/f1c40f/000000?text=GC', shape: 'ronde', color: 'doré' },
  { id: 10, name: 'Transparent', brand: 'No Name', type: 'vue', price: 45000, isNew: true, isPromo: false, imageUrl: 'https://placehold.co/300x400/ecf0f1/000000?text=NoName', shape: 'carrée', color: 'transparent' },
  { id: 11, name: 'Grandes Lunettes', brand: 'Dior', type: 'soleil', price: 135000, isNew: false, isPromo: false, imageUrl: 'https://placehold.co/300x400/c0392b/FFFFFF?text=DR', shape: 'oversize', color: 'rouge' },
  { id: 12, name: 'Demi-Cerclées', brand: 'Ray-Ban', type: 'vue', price: 85000, isNew: false, isPromo: false, imageUrl: 'https://placehold.co/300x400/34495e/FFFFFF?text=RB', shape: 'demi-cercle', color: 'argenté' },
]);

// --- Filters & search state ---
const searchQuery = ref('');
const showFilters = ref(false);
const filters = ref({ types: [], brand: '', shapes: [], colors: [], sortBy: 'relevance' });

const availableBrands = computed(() => Array.from(new Set(rawProducts.value.map(p => p.brand))).sort());
const availableShapes = computed(() => Array.from(new Set(rawProducts.value.map(p => p.shape))).sort());
const availableColors = computed(() => Array.from(new Set(rawProducts.value.map(p => p.color))).sort());

const colorClass = (color) => {
  const map = {
    'noir': 'bg-black border-white', 'bleu': 'bg-blue-600 border-white', 'doré': 'bg-yellow-600 border-yellow-800',
    'marron': 'bg-amber-800 border-white', 'rouge': 'bg-red-600 border-white', 'gris': 'bg-gray-600 border-white',
    'bicolore': 'bg-gradient-to-tr from-black to-red-400 border-white', 'transparent': 'bg-white border-gray-300',
    'argenté': 'bg-gray-400 border-gray-700', 'sport': 'bg-green-600 border-white'
  };
  return map[color?.toLowerCase()] || 'bg-white border-gray-300';
};

const toggleColorFilter = (c) => { const i = filters.value.colors.indexOf(c); if (i > -1) filters.value.colors.splice(i, 1); else filters.value.colors.push(c); };
const toggleShapeFilter = (s) => { const i = filters.value.shapes.indexOf(s); if (i > -1) filters.value.shapes.splice(i, 1); else filters.value.shapes.push(s); };

const countByType = (t) => rawProducts.value.filter(p => p.type === t).length;

const activeFilterCount = computed(() => { let c = 0; if (filters.value.types.length) c++; if (filters.value.brand) c++; if (filters.value.shapes.length) c++; if (filters.value.colors.length) c++; return c; });

const filteredProducts = computed(() => {
  let products = rawProducts.value.slice();
  products = products.filter(p => {
    const matchesType = !filters.value.types.length || filters.value.types.includes(p.type);
    const matchesBrand = !filters.value.brand || p.brand === filters.value.brand;
    const matchesShape = !filters.value.shapes.length || filters.value.shapes.includes(p.shape);
    const matchesColor = !filters.value.colors.length || filters.value.colors.includes(p.color);
    const matchesSearch = !searchQuery.value || (p.name + ' ' + p.brand).toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesType && matchesBrand && matchesShape && matchesColor && matchesSearch;
  });
  if (filters.value.sortBy === 'price-asc') products.sort((a, b) => a.price - b.price);
  else if (filters.value.sortBy === 'price-desc') products.sort((a, b) => b.price - a.price);
  else if (filters.value.sortBy === 'newest') products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  return products;
});

const resetFilters = () => { filters.value = { types: [], brand: '', shapes: [], colors: [], sortBy: 'relevance' }; searchQuery.value = ''; };

// --- Pagination (windowed) ---
const itemsPerPage = 9; const currentPage = ref(1);
const totalPages = computed(() => Math.max(1, Math.ceil(filteredProducts.value.length / itemsPerPage)));
const paginatedProducts = computed(() => { if (currentPage.value > totalPages.value) currentPage.value = totalPages.value; if (currentPage.value < 1) currentPage.value = 1; const s = (currentPage.value - 1) * itemsPerPage; return filteredProducts.value.slice(s, s + itemsPerPage); });

const pagesToShow = computed(() => { const total = totalPages.value; const max = 5; const pages = []; if (total <= max) { for (let i = 1; i <= total; i++) pages.push(i); return pages; } const half = Math.floor(max / 2); let start = Math.max(1, currentPage.value - half); let end = Math.min(total, start + max - 1); if (end - start < max - 1) start = Math.max(1, end - max + 1); for (let i = start; i <= end; i++) pages.push(i); return pages; });

watch(filteredProducts, () => currentPage.value = 1);
const goToPage = (p) => { currentPage.value = p; window.scrollTo({ top: 0, behavior: 'auto' }); };
const prevPage = () => goToPage(Math.max(1, currentPage.value - 1));
const nextPage = () => goToPage(Math.min(totalPages.value, currentPage.value + 1));

// --- Quick view ---
const isQuickViewVisible = ref(false); const quickViewProduct = ref(null);
const openQuickView = (p) => { quickViewProduct.value = p; isQuickViewVisible.value = true; };

// --- Cart + toasts ---
const isCartVisible = ref(false); const cartItems = ref([]);
const cartItemCount = computed(() => cartItems.value.reduce((t, i) => t + (i.quantity || 0), 0));

let toastIdCounter = 0; const addedToasts = ref([]);
const handleAddToCart = (product) => {
  const existing = cartItems.value.find(i => i.id === product.id);
  if (existing) existing.quantity++; else cartItems.value.push({ ...product, quantity: 1 });
  const id = ++toastIdCounter; addedToasts.value.push({ id }); setTimeout(() => { addedToasts.value = addedToasts.value.filter(t => t.id !== id); }, 2500);
};
const handleRemoveFromCart = (id) => { cartItems.value = cartItems.value.filter(i => i.id !== id); };
const handleUpdateQuantity = (id, q) => { const it = cartItems.value.find(i => i.id === id); if (!it) return; if (q < 1) handleRemoveFromCart(id); else it.quantity = q; };

onMounted(() => { if (currentPage.value < 1) currentPage.value = 1; });

</script>

<style scoped>
.h-fit {
  max-height: calc(100vh - 4rem);
  overflow-y: auto
}

.expand-enter-active,
.expand-leave-active {
  transition: all .28s ease
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 500px
}

.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all .35s ease
}

.toast-slide-enter-from,
.toast-slide-leave-to {
  transform: translateX(120px);
  opacity: 0
}

.toast-slide-enter-to,
.toast-slide-leave-from {
  transform: translateX(0);
  opacity: 1
}
</style>