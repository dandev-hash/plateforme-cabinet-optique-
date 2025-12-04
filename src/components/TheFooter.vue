<template>
  <footer class="bg-gray-800 text-white mt-16 pt-12 pb-6">
    <div class="container mx-auto px-4">
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
        
        <div>
          <h3 class="text-2xl font-extrabold text-green-400">OptiVision</h3>
          <p class="text-sm text-gray-400 mt-2">
            La vision de votre confort.
          </p>
          <div class="mt-4 space-y-2 text-sm text-gray-300">
            <p>Tel: +237 XXX XX XX XX</p>
            <p>Email: contact@optivision.com</p>
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4 text-white">Navigation</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><RouterLink to="/" class="hover:text-green-400 transition duration-150">Accueil</RouterLink></li>
            <li><RouterLink to="/catalogue" class="hover:text-green-400 transition duration-150">Catalogue</RouterLink></li>
            <li><RouterLink to="/rendez-vous" class="hover:text-green-400 transition duration-150">Rendez-vous</RouterLink></li>
            <li><RouterLink to="/blog" class="hover:text-green-400 transition duration-150">Blog</RouterLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4 text-white">Aide & Infos</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#" class="hover:text-green-400 transition duration-150">FAQ</a></li>
            <li><a href="#" class="hover:text-green-400 transition duration-150">Termes & Conditions</a></li>
            <li><a href="#" class="hover:text-green-400 transition duration-150">Politique de Confidentialité</a></li>
            <li><a href="#" class="hover:text-green-400 transition duration-150">Mentions Légales</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4 text-white">Newsletter</h4>
          <p class="text-sm text-gray-400 mb-4">
            Recevez nos dernières offres et conseils.
          </p>
          <form @submit.prevent="submitNewsletter">
            <input 
              type="email" 
              placeholder="Votre email" 
              class="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
            >
            <button 
              type="submit" 
              class="w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition duration-150"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>

      <div class="text-center pt-6 text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} OptiVision. Tous droits réservés.
      </div>

    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';

// Pour le pied de page, on peut ajouter une fonction simple pour simuler l'envoi de la newsletter
const submitNewsletter = () => {
  // Logique d'envoi à l'API à implémenter plus tard
  alert("Merci de votre inscription à la Newsletter !");
};
</script>