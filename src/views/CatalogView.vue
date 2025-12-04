<template>
  <div class="py-10 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 max-w-7xl">
      
      <!-- Titre de la Page -->
      <h1 class="text-4xl font-extrabold text-gray-900 mb-2">
        Notre Catalogue de Montures
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Découvrez notre collection complète de lunettes, adaptées à tous les styles et budgets.
      </p>

      <!-- Contenu principal : Filtres + Produits -->
      <div class="flex flex-col lg:flex-row gap-8">
        
        <!-- Colonne Gauche : Filtres -->
        <aside class="lg:w-1/4 p-6 bg-white rounded-xl shadow-xl h-fit lg:sticky lg:top-8 border border-gray-100">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-3 border-gray-200">
            Filtrer
          </h2>

          <!-- Filtre 1: Type de Monture -->
          <div class="mb-6">
            <h3 class="font-semibold text-gray-700 mb-2">Type de Monture</h3>
            <div class="space-y-2">
              <label class="flex items-center text-gray-600 cursor-pointer">
                <input type="checkbox" value="vue" v-model="filters.types"
                  class="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500 border-gray-300">
                <span class="ml-3">Lunettes de vue ({{ countByType('vue') }})</span>
              </label>
              <label class="flex items-center text-gray-600 cursor-pointer">
                <input type="checkbox" value="soleil" v-model="filters.types"
                  class="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500 border-gray-300">
                <span class="ml-3">Lunettes de soleil ({{ countByType('soleil') }})</span>
              </label>
            </div>
          </div>

          <!-- Filtre 2: Marque -->
          <div class="mb-6">
            <h3 class="font-semibold text-gray-700 mb-2">Marque</h3>
            <select v-model="filters.brand"
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150">
              <option value="">Toutes les marques</option>
              <option v-for="brand in availableBrands" :key="brand" :value="brand">{{ brand }}</option>
            </select>
          </div>

          <!-- Filtre 3: Forme (NOUVEAU) -->
          <div class="mb-6">
            <h3 class="font-semibold text-gray-700 mb-2">Forme</h3>
            <div class="space-y-2">
              <label v-for="shape in availableShapes" :key="shape" class="flex items-center text-gray-600 cursor-pointer">
                <input type="checkbox" :value="shape" v-model="filters.shapes"
                  class="form-checkbox h-5 w-5 text-green-600 rounded focus:ring-green-500 border-gray-300">
                <span class="ml-3 capitalize">{{ shape }}</span>
              </label>
            </div>
          </div>

          <!-- Filtre 4: Couleur (NOUVEAU) -->
          <div class="mb-6">
            <h3 class="font-semibold text-gray-700 mb-2">Couleur</h3>
            <div class="flex flex-wrap gap-2">
              <div v-for="color in availableColors" :key="color" 
                   @click="toggleColorFilter(color)"
                   :class="['w-8 h-8 rounded-full border-2 cursor-pointer transition duration-150', 
                            colorClass(color), 
                            filters.colors.includes(color) ? 'ring-4 ring-green-400 ring-offset-1 scale-110' : 'hover:ring-2 hover:ring-gray-300']"
                   :title="color"
              ></div>
            </div>
          </div>
          
          <!-- Indicateurs de sélection -->
          <div v-if="activeFilterCount > 0" class="mt-4 p-3 bg-green-50 border-l-4 border-green-400 rounded-md">
            <p class="text-sm font-medium text-green-800">
              {{ activeFilterCount }} filtre(s) actif(s)
            </p>
          </div>

          <!-- Bouton de réinitialisation -->
          <button @click="resetFilters"
            class="w-full mt-4 py-2 text-md font-semibold bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-xl transition duration-150 shadow-md">
            Réinitialiser les Filtres
          </button>
        </aside>

        <!-- Colonne Droite : Résultats des Produits -->
        <div class="lg:w-3/4">
          
          <!-- En-tête des résultats (Tri et nombre) -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <p class="text-gray-700 font-medium mb-3 sm:mb-0">
              Résultats trouvés : <span class="font-bold text-green-600 text-xl">{{ filteredProducts.length }}</span>
            </p>
            <div class="flex items-center space-x-2">
              <label for="sort" class="text-sm text-gray-600 whitespace-nowrap">Trier par:</label>
              <select id="sort" v-model="filters.sortBy"
                class="p-2 border border-gray-300 rounded-lg text-sm focus:ring-green-500 focus:border-green-500 transition duration-150">
                <option value="relevance">Pertinence</option>
                <option value="price-asc">Prix: Moins cher d'abord</option>
                <option value="price-desc">Prix: Plus cher d'abord</option>
                <option value="newest">Nouveautés</option>
              </select>
            </div>
          </div>

          <!-- Grille des Produits -->
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <ProductCard
              v-for="product in paginatedProducts"
              :key="product.id"
              :product="product"
              @quickView="openQuickView(product)"
              @addToCart="handleAddToCart"
            />
          </div>
          
          <!-- Message si aucun produit n'est trouvé -->
          <div v-if="filteredProducts.length === 0" class="text-center p-10 bg-white rounded-xl shadow-lg mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="mt-2 text-xl font-medium text-gray-900">Aucun produit trouvé</h3>
            <p class="mt-1 text-gray-500">Veuillez ajuster vos critères de recherche ou réinitialiser les filtres.</p>
          </div>

          <!-- Pagination (CORRIGÉE) -->
          <div v-if="totalPages > 1" class="mt-12 text-center">
            <nav class="inline-flex rounded-xl shadow-md bg-white p-1 border border-gray-200" aria-label="Pagination">
              <button @click="currentPage--" :disabled="currentPage === 1"
                class="relative inline-flex items-center px-4 py-2 rounded-l-lg border-r border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50">
                Précédent
              </button>
              <button v-for="page in pagesToShow" :key="page" @click="currentPage = page"
                :class="['relative inline-flex items-center px-4 py-2 text-sm font-medium transition duration-150',
                  page === currentPage ? 'bg-green-600 text-white shadow-inner rounded-md mx-1' : 'bg-white text-gray-700 hover:bg-green-50 rounded-md mx-1']">
                {{ page }}
              </button>
              <button @click="currentPage++" :disabled="currentPage === totalPages"
                class="relative inline-flex items-center px-4 py-2 rounded-r-lg border-l border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50">
                Suivant
              </button>
            </nav>
          </div>

        </div>
      </div>
    </div>

    <!-- Modale de Vue Rapide -->
    <QuickViewModal :product="quickViewProduct" :isVisible="isQuickViewVisible" @close="isQuickViewVisible = false" />
    
    <!-- Bouton de Panier Flottant -->
    <CartFloatingButton 
        :itemCount="cartItemCount" 
        @openCart="isCartVisible = true" 
    />

    <!-- Modale du Panier -->
    <CartModal 
        :isVisible="isCartVisible" 
        :cartItems="cartItems"
        @close="isCartVisible = false"
        @removeItem="handleRemoveFromCart"
        @updateQuantity="handleUpdateQuantity"
    />

    <!-- Message de confirmation d'ajout au panier -->
    <div v-if="showCartSuccess" class="fixed bottom-20 right-8 lg:bottom-24 lg:right-12 p-4 bg-green-500 text-white rounded-xl shadow-2xl transition duration-500 transform translate-y-0"
      :class="{ 'opacity-0 translate-y-full': !showCartSuccess }">
      <p class="font-semibold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Monture ajoutée au panier !
      </p>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import QuickViewModal from '../components/QuickViewModal.vue';
import CartFloatingButton from '../components/CartFloatingButton.vue';
import CartModal from '../components/CartModal.vue';


// --- Logique du Panier (inchangé) ---
const isCartVisible = ref(false); 
const cartItems = ref([]); 
const showCartSuccess = ref(false);

const cartItemCount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});

const handleAddToCart = (product) => {
  const existingItem = cartItems.value.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    // Note: Utiliser le spread pour cloner l'objet et y ajouter la quantité
    cartItems.value.push({ ...product, quantity: 1 });
  }
  
  // Afficher le message de confirmation
  showCartSuccess.value = true;
  setTimeout(() => {
    showCartSuccess.value = false;
  }, 2000);
};

const handleRemoveFromCart = (productId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId);
}

const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
        handleRemoveFromCart(productId);
        return;
    }
    const item = cartItems.value.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
    }
}


// --- Données du Catalogue (MISES À JOUR avec forme/couleur) ---
const rawProducts = ref([
  { id: 1, name: 'Modèle Classique Noir', brand: 'Rayban', type: 'vue', price: 75000, isNew: false, isPromo: true, promoPercentage: 25, originalPrice: 100000, imageUrl: 'https://placehold.co/250x250/F0F0F0/000000?text=RB75K', shape: 'carrée', color: 'noir' },
  { id: 2, name: 'Aviateur Titane Bleu', brand: 'Oakley', type: 'soleil', price: 95000, isNew: true, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/E0F7FA/000000?text=Oak95B', shape: 'aviateur', color: 'bleu' },
  { id: 3, name: 'Ronde Vintage Or', brand: 'Gucci', type: 'vue', price: 120000, isNew: true, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/FFFDE7/000000?text=GC120', shape: 'ronde', color: 'doré' },
  { id: 4, name: 'Papillon Écaille', brand: 'Dior', type: 'soleil', price: 80000, isNew: false, isPromo: true, promoPercentage: 19, originalPrice: 99000, imageUrl: 'https://placehold.co/250x250/FBE9E7/000000?text=DR80P', shape: 'papillon', color: 'marron' },
  { id: 5, name: 'Sportif Rouge Performance', brand: 'Oakley', type: 'soleil', price: 65000, isNew: false, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/FFEBEE/000000?text=OK65R', shape: 'sport', color: 'rouge' },
  { id: 6, name: 'Oeil de Cat Classique', brand: 'Chanel', type: 'vue', price: 140000, isNew: true, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/F0F4C3/000000?text=CH140', shape: 'oeil de chat', color: 'noir' },
  { id: 7, name: 'Légères Acier Gris', brand: 'Silhouette', type: 'vue', price: 115000, isNew: false, isPromo: true, promoPercentage: 12, originalPrice: 130000, imageUrl: 'https://placehold.co/250x250/ECEFF1/000000?text=SL115', shape: 'rectangulaire', color: 'gris' },
  { id: 8, name: 'Carrées Bicolores', brand: 'Prada', type: 'vue', price: 98000, isNew: false, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/E1BEE7/000000?text=PR98K', shape: 'carrée', color: 'bicolore' },
  { id: 9, name: 'Métal Doré Fin', brand: 'Gucci', type: 'soleil', price: 105000, isNew: false, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/FFF8E1/000000?text=GC105', shape: 'ronde', color: 'doré' },
  { id: 10, name: 'Plastique Transparent', brand: 'No Name', type: 'vue', price: 45000, isNew: true, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/E0F7FA/000000?text=NN45T', shape: 'carrée', color: 'transparent' },
  { id: 11, name: 'Grandes Lunettes Soleil', brand: 'Dior', type: 'soleil', price: 135000, isNew: false, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/FFCDD2/000000?text=DR135', shape: 'oversize', color: 'rouge' },
  { id: 12, name: 'Demi-Cerclées Fines', brand: 'Rayban', type: 'vue', price: 85000, isNew: false, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/D1C4E9/000000?text=RB85D', shape: 'demi-cercle', color: 'argenté' },
]);


// --- Logique des Filtres et du Tri ---
const filters = ref({
  types: [],
  brand: '',
  shapes: [], // Nouveau filtre
  colors: [], // Nouveau filtre
  sortBy: 'relevance',
});

// Options disponibles pour les filtres
const availableBrands = computed(() => {
  const brands = new Set(rawProducts.value.map(p => p.brand));
  return Array.from(brands).sort();
});

const availableShapes = computed(() => {
  const shapes = new Set(rawProducts.value.map(p => p.shape));
  return Array.from(shapes).sort();
});

const availableColors = computed(() => {
  const colors = new Set(rawProducts.value.map(p => p.color));
  return Array.from(colors).sort();
});

// Fonction utilitaire pour Tailwind CSS
const colorClass = (color) => {
  const colorMap = {
    'noir': 'bg-black border-white',
    'bleu': 'bg-blue-600 border-white',
    'doré': 'bg-yellow-600 border-yellow-800',
    'marron': 'bg-amber-800 border-white',
    'rouge': 'bg-red-600 border-white',
    'gris': 'bg-gray-600 border-white',
    'bicolore': 'bg-gradient-to-tr from-black to-red-400 border-white',
    'transparent': 'bg-white border-gray-300',
    'argenté': 'bg-gray-400 border-gray-700',
    'sport': 'bg-green-600 border-white'
  };
  // Fallback au cas où une couleur n'est pas mappée
  return colorMap[color.toLowerCase()] || 'bg-white border-gray-300';
};

// Logique pour basculer la sélection d'une couleur
const toggleColorFilter = (color) => {
  const index = filters.value.colors.indexOf(color);
  if (index > -1) {
    filters.value.colors.splice(index, 1); // Retirer
  } else {
    filters.value.colors.push(color); // Ajouter
  }
};


const countByType = (type) => {
  return rawProducts.value.filter(p => p.type === type).length;
};

const activeFilterCount = computed(() => {
  let count = 0;
  if (filters.value.types.length > 0) count++;
  if (filters.value.brand !== '') count++;
  if (filters.value.shapes.length > 0) count++;
  if (filters.value.colors.length > 0) count++;
  return count;
});

const filteredProducts = computed(() => {
  let products = rawProducts.value.slice();

  products = products.filter(product => {
    const matchesType = filters.value.types.length === 0 || filters.value.types.includes(product.type);
    const matchesBrand = filters.value.brand === '' || product.brand === filters.value.brand;
    // Nouveaux filtres de forme et couleur
    const matchesShape = filters.value.shapes.length === 0 || filters.value.shapes.includes(product.shape);
    const matchesColor = filters.value.colors.length === 0 || filters.value.colors.includes(product.color);
    
    return matchesType && matchesBrand && matchesShape && matchesColor;
  });

  // Logique de tri
  if (filters.value.sortBy === 'price-asc') {
    products.sort((a, b) => a.price - b.price);
  } else if (filters.value.sortBy === 'price-desc') {
    products.sort((a, b) => b.price - a.price);
  } else if (filters.value.sortBy === 'newest') {
    products.sort((a, b) => (b.isNew - a.isNew) || (b.id - a.id));
  }

  return products;
});

const resetFilters = () => {
  // Mise à jour de la réinitialisation pour les nouveaux filtres
  filters.value = {
    types: [],
    brand: '',
    shapes: [],
    colors: [],
    sortBy: 'relevance',
  };
};

// --- Logique de Pagination (CORRIGÉE) ---
const itemsPerPage = 9;
const currentPage = ref(1);

const totalPages = computed(() => {
  // S'assurer qu'on gère le cas où il n'y a pas de produits (division par zéro)
  if (filteredProducts.value.length === 0) return 1;
  return Math.ceil(filteredProducts.value.length / itemsPerPage);
});

const paginatedProducts = computed(() => {
  // Empêcher l'accès à une page non existante
  if (currentPage.value > totalPages.value) currentPage.value = totalPages.value;
  if (currentPage.value < 1) currentPage.value = 1;

  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredProducts.value.slice(start, end);
});

// Pour afficher uniquement les boutons de page pertinents
const pagesToShow = computed(() => {
    const pages = [];
    for (let i = 1; i <= totalPages.value; i++) {
        pages.push(i);
    }
    return pages;
});

watch(filteredProducts, () => {
  currentPage.value = 1;
});


// --- Logique de la Modale Vue Rapide (inchangée) ---
const isQuickViewVisible = ref(false);
const quickViewProduct = ref(null);

const openQuickView = (product) => {
  quickViewProduct.value = product;
  isQuickViewVisible.value = true;
};
</script>

<style scoped>
.h-fit {
  max-height: calc(100vh - 4rem); 
  overflow-y: auto;
}
/* Pas de style custom de range-slider car le filtre de prix est enlevé */
</style>