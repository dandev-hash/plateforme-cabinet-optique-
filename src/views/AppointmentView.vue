<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      
      <h1 class="text-4xl font-extrabold text-gray-900 mb-2 text-center">
        Planifiez votre Consultation
      </h1>
      <p class="text-xl text-gray-600 mb-10 text-center">
        Prenez rendez-vous facilement pour votre examen de vue ou l'ajustement de vos montures.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <!-- Colonne Gauche : Formulaire de Prise de Rendez-vous (lg:col-span-2) -->
        <div class="lg:col-span-2 bg-white p-8 rounded-xl shadow-2xl">
          <h2 class="text-3xl font-bold text-green-600 mb-6 border-b pb-3">
            Nouveau Rendez-vous 📅
          </h2>
          
          <form @submit.prevent="submitAppointment" class="space-y-6">

            <!-- Étape 1 : Type de Consultation -->
            <div>
              <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                Quel service recherchez-vous ?
              </label>
              <select 
                id="service" 
                v-model="appointment.service"
                required
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
              >
                <option disabled value="">-- Sélectionnez un service --</option>
                <option value="examen">Examen de vue complet</option>
                <option value="ajustement">Ajustement ou réparation de monture</option>
                <option value="choix">Aide au choix de nouvelles montures</option>
                <option value="controle">Contrôle annuel (si déjà client)</option>
              </select>
            </div>

            <!-- Étape 2 : Date et Heure -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="date" class="block text-sm font-medium text-gray-700 mb-2">
                  Date souhaitée
                </label>
                <input 
                  type="date" 
                  id="date"
                  v-model="appointment.date"
                  required
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label for="time" class="block text-sm font-medium text-gray-700 mb-2">
                  Heure souhaitée
                </label>
                <select 
                  id="time"
                  v-model="appointment.time"
                  required
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                >
                  <option disabled value="">-- Heure --</option>
                  <option v-for="h in availableTimes" :key="h" :value="h">{{ h }}</option>
                </select>
              </div>
            </div>

            <!-- Étape 3 : Informations de l'utilisateur (sera rempli automatiquement si connecté) -->
            <div class="pt-4 border-t">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Vos coordonnées (Connexion requise)</h3>
              <p class="text-sm text-gray-500 mb-4">
                Veuillez vous connecter pour que nous puissions enregistrer et confirmer votre rendez-vous.
              </p>
              
              <!-- Placeholder pour l'utilisateur non connecté -->
              <div v-if="!isConnected" class="bg-yellow-50 p-4 rounded-lg text-yellow-800 border border-yellow-200 flex justify-between items-center">
                <p>⚠️ Vous n'êtes pas connecté. Veuillez vous connecter pour continuer.</p>
                <RouterLink to="/login" class="text-yellow-700 font-bold hover:underline">Se Connecter</RouterLink>
              </div>

              <!-- Champs masqués/pré-remplis si connecté (Simulation) -->
              <div v-else class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom Complet</label>
                  <input type="text" id="name" :value="currentUser.name" disabled class="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg" />
                </div>
              </div>
            </div>
            
            <!-- Bouton de Soumission -->
            <button 
              type="submit" 
              :disabled="!isConnected"
              class="w-full py-3 mt-8 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Confirmer le Rendez-vous
            </button>
          </form>
        </div>

        <!-- Colonne Droite : Historique des Rendez-vous (lg:col-span-1) -->
        <div class="lg:col-span-1">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-3">
              Historique des RDV
            </h2>

            <div v-if="isConnected">
              <!-- Liste des RDV si connecté -->
              <div v-if="appointments.length > 0" class="space-y-4">
                <div v-for="rdv in appointments" :key="rdv.id" class="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p class="font-semibold text-gray-900">{{ rdv.serviceName }}</p>
                  <p class="text-sm text-gray-600">Le <span class="font-medium text-green-700">{{ rdv.date }}</span> à <span class="font-medium text-green-700">{{ rdv.time }}</span></p>
                  <span :class="{'bg-green-100 text-green-800': rdv.status === 'Confirmé', 'bg-red-100 text-red-800': rdv.status === 'Annulé', 'bg-yellow-100 text-yellow-800': rdv.status === 'En attente'}" class="inline-block mt-2 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {{ rdv.status }}
                  </span>
                </div>
              </div>
              <!-- Message si pas de RDV -->
              <p v-else class="text-gray-500 italic py-4 text-center">
                Aucun rendez-vous passé ou futur trouvé.
              </p>
            </div>

            <div v-else class="text-center py-10 bg-gray-100 rounded-lg">
              <p class="text-gray-500 mb-3">
                Connectez-vous pour voir vos rendez-vous.
              </p>
              <RouterLink to="/login" class="text-sm bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-150">
                Se Connecter
              </RouterLink>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// --- Simulation de l'état de l'utilisateur (à remplacer par Pinia/Firebase Auth) ---
const isConnected = ref(false); // Vrai si l'utilisateur est connecté
const currentUser = ref({
  name: 'Jean Dupont',
  email: 'jean.dupont@example.com'
});

// --- Données du formulaire ---
const appointment = ref({
  service: '',
  date: '',
  time: '',
});

// Horaires de base disponibles (à filtrer par le Backend)
const availableTimes = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
];

// Historique des RDV simulé
const appointments = ref([
  { id: 1, serviceName: 'Examen de vue complet', date: '10/11/2025', time: '15:30', status: 'Confirmé' },
  { id: 2, serviceName: 'Ajustement de monture', date: '05/09/2025', time: '11:00', status: 'Terminé' },
  { id: 3, serviceName: 'Aide au choix', date: '25/12/2025', time: '10:00', status: 'En attente' },
]);


// --- Logique de soumission ---
const submitAppointment = () => {
  if (!isConnected.value) {
    alert("Veuillez vous connecter pour prendre un rendez-vous.");
    return;
  }
  
  // Remplacer par un appel API vers le Backend (Firebase/Firestore)
  const serviceNameMap = {
    examen: 'Examen de vue complet',
    ajustement: 'Ajustement ou réparation de monture',
    choix: 'Aide au choix de nouvelles montures',
    controle: 'Contrôle annuel (si déjà client)',
  };

  const newAppointment = {
    id: appointments.value.length + 1,
    serviceName: serviceNameMap[appointment.value.service],
    date: appointment.value.date,
    time: appointment.value.time,
    status: 'En attente', // Statut par défaut avant confirmation du cabinet
  };

  appointments.value.unshift(newAppointment); // Ajout simulé
  
  alert(`Rendez-vous pris pour le ${newAppointment.date} à ${newAppointment.time} pour: ${newAppointment.serviceName}. En attente de confirmation du cabinet.`);

  // Réinitialisation du formulaire
  appointment.value = { service: '', date: '', time: '' };
};
</script>