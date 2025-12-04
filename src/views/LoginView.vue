<template>
  <div class="flex items-center justify-center py-16 bg-gray-50 min-h-screen">
    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
      
      <!-- Bascule entre Connexion et Inscription -->
      <div class="flex mb-8 border-b border-gray-200">
        <button 
          @click="isLogin = true"
          :class="isLogin ? 'text-green-600 border-green-600 font-bold' : 'text-gray-500 border-transparent'"
          class="flex-1 py-3 text-lg border-b-2 transition duration-200"
        >
          Connexion
        </button>
        <button 
          @click="isLogin = false"
          :class="!isLogin ? 'text-green-600 border-green-600 font-bold' : 'text-gray-500 border-transparent'"
          class="flex-1 py-3 text-lg border-b-2 transition duration-200"
        >
          Inscription
        </button>
      </div>

      <!-- Titre de la section -->
      <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">
        {{ isLogin ? 'Connectez-vous à votre compte' : 'Créez votre compte' }}
      </h2>

      <!-- Formulaire -->
      <form @submit.prevent="submitAuth" class="space-y-6">

        <!-- Nom (uniquement pour l'Inscription) -->
        <div v-if="!isLogin">
          <label for="name" class="block text-sm font-medium text-gray-700">Nom Complet</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            required
            class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          >
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Adresse Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            required
            class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          >
        </div>

        <!-- Mot de passe -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Mot de Passe</label>
          <input 
            type="password" 
            id="password" 
            v-model="formData.password" 
            required
            class="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          >
        </div>

        <!-- Message d'erreur (Placeholder) -->
        <div v-if="errorMessage" class="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {{ errorMessage }}
        </div>

        <!-- Bouton de Soumission -->
        <button 
          type="submit" 
          class="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300 shadow-lg"
        >
          {{ isLogin ? 'Se Connecter' : 'Créer un Compte' }}
        </button>

        <!-- Lien Mot de passe oublié -->
        <div v-if="isLogin" class="text-center pt-2">
          <a href="#" class="text-sm text-green-600 hover:text-green-700 transition duration-150">
            Mot de passe oublié ?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLogin = ref(true); // true = Connexion, false = Inscription
const formData = ref({
  name: '',
  email: '',
  password: ''
});
const errorMessage = ref(null);

const submitAuth = () => {
  errorMessage.value = null; // Réinitialiser l'erreur

  const action = isLogin.value ? 'Connexion' : 'Inscription';
  
  // Remplacer par la logique d'authentification réelle (Firebase Auth)
  console.log(`${action} tenté avec l'email: ${formData.value.email}`);
  
  // Simulation de l'appel API
  setTimeout(() => {
    if (formData.value.password.length < 6) {
      errorMessage.value = "Le mot de passe doit contenir au moins 6 caractères.";
      return;
    }
    
    // Si succès
    alert(`${action} réussi. Bienvenue, ${formData.value.name || formData.value.email} ! (Redirection à venir)`);
    // Ici, on redirigerait l'utilisateur vers la page d'accueil ou son profil
  }, 500);
};
</script>