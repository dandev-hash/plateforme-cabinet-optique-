<template>
  <!-- 
    Conteneur principal de la NavBar: 
    - Fixé en haut (fixed top-0) pour rester visible au défilement.
    - Largeur maximale pour couvrir l'écran (w-full).
    - Z-index élevé (z-50) pour être au-dessus du contenu.
    - Style moderne: fond blanc translucide avec flou d'arrière-plan (backdrop-blur).
    - Ombre subtile pour la profondeur.
  -->
  <header class="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">

        <!-- 1. ZONE LOGO ET NOM D'ENTREPRISE -->
        <RouterLink to="/" class="flex items-center space-x-3 text-2xl font-extrabold text-gray-900 group">
          <!-- Icône/Logo stylisé -->
          <svg xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-green-600 transition duration-300 group-hover:text-green-800" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <!-- Chemin SVG représentant un œil ou une lentille pour le thème optique -->
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <!-- Nom de l'Entreprise -->
          <span class="tracking-tighter">OPTIK+</span>
        </RouterLink>

        <!-- 2. MENU DE NAVIGATION PRINCIPAL (Desktop) -->
        <nav class="hidden md:flex space-x-6 lg:space-x-10 items-center">
          <RouterLink v-for="item in navItems" :key="item.name" :to="item.path" :class="linkClass(item.path)">
            {{ item.name }}
          </RouterLink>

          <!-- Le bouton Prendre RDV a été retiré car Rendez-vous est maintenant dans navItems -->
        </nav>

        <!-- 3. ICÔNE COMPTE UTILISATEUR & BOUTON MOBILE (Alignés à droite) -->
        <div class="flex items-center space-x-3">
          <!-- Icône Compte Utilisateur (Visible sur Desktop et Mobile) -->
          <RouterLink to="/mon-compte"
            class="p-2 rounded-full text-gray-600 hover:bg-gray-100 hover:text-green-600 transition duration-200"
            aria-label="Mon Compte / Connexion">
            <!-- Icône de profil -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </RouterLink>
          
        </div>

        <!-- Bouton Menu Mobile (Uniquement sur Mobile) -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu"
            class="text-gray-600 hover:text-green-600 focus:outline-none p-2 rounded-md transition duration-200"
            aria-label="Toggle navigation menu">
            <!-- Icône Hamburger (Ou Fermer si ouvert) -->
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

    </div>


    <!-- 4. MENU MOBILE DÉROULANT -->
    <!-- Utilise une transition pour un effet fluide -->
    <Transition name="slide-down">
      <div v-if="isMenuOpen" class="md:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100 pb-2">
        <RouterLink v-for="item in navItems" :key="item.name" :to="item.path" @click="isMenuOpen = false"
          :class="mobileLinkClass(item.path)">
          {{ item.name }}
        </RouterLink>

        <!-- Lien Mon Compte/Connexion dans le menu mobile pour une meilleure visibilité -->
        <RouterLink to="/mon-compte" @click="isMenuOpen = false" :class="mobileLinkClass('/mon-compte')"
          class="mt-1 border-t border-gray-100">
          Mon Compte / Connexion
        </RouterLink>
      </div>
    </Transition>

  </header>

  <!-- Ajout d'une marge de compensation pour éviter que le contenu soit caché sous la barre fixe -->
  <div class="h-20"></div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);



// Mise à jour de la liste navItems selon la demande de l'utilisateur + ajout de 'Services'
const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Catalogue', path: '/catalogue' },
  { name: 'Services', path: '/services' }, // Ajouté comme demandé
  { name: 'Rendez-vous', path: '/rendez-vous' },
  { name: 'Conseils & Quiz', path: '/conseils-quiz' },
  { name: 'Blog', path: '/blog' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Fonction pour styliser le lien desktop actif
const linkClass = (path) => {
  const base = 'text-lg font-medium transition duration-200 hover:text-green-600';
  if (route.path === path) {
    // Style actif: gras, couleur verte, soulignement subtil
    return `${base} text-green-700 font-bold border-b-2 border-green-600 pb-1`;
  }
  // Style inactif: gris, non souligné
  return `${base} text-gray-700`;
};

// Fonction pour styliser le lien mobile
const mobileLinkClass = (path) => {
  const base = 'block px-4 py-3 text-base font-medium transition duration-200 border-l-4';
  if (route.path === path) {
    // Style actif: couleur verte, bordure gauche
    return `${base} text-green-700 bg-green-50 border-green-600`;
  }
  // Style inactif: gris clair
  return `${base} text-gray-700 border-transparent hover:bg-gray-50`;
};

// Fermer le menu mobile si la route change
watch(
  () => route.path,
  () => {
    isMenuOpen.value = false;
  }
);
</script>

<style scoped>
/* Transition pour le menu déroulant mobile (slide-down) */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-in-out;
  max-height: 500px;
  /* Grande valeur pour permettre le "slide" */
  opacity: 1;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>