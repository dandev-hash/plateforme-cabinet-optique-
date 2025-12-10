<template>
  <div class="min-h-screen bg-gray-50 font-inter">
    <!-- 1. Bannière d'Introduction et Titre -->
    <header class="bg-white shadow-lg border-b border-gray-200">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
          Votre Vision, Notre Expertise.
        </h1>
        <p class="mt-4 text-xl text-gray-600 max-w-3xl">
          Découvrez la gamme complète de services d'optométrie et de support offerts par OPTIK+, conçus pour la santé durable de vos yeux. Transparence des tarifs et excellence des soins garanties.
        </p>
      </div>
    </header>

    <!-- 2. Vue d'Ensemble des Services Clés (Cartes) -->
    <section class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 border-l-4 border-green-600 pl-4">Nos Piliers de Service</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Carte 1: Examens et Santé Oculaire -->
        <div class="bg-white rounded-xl shadow-2xl p-6 transition duration-300 hover:shadow-green-300/50 hover:scale-[1.02]">
          <div class="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
            <!-- Icone de l'oeil/examen -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Examens de Vue Avancés</h3>
          <p class="text-gray-600">Technologie de pointe pour des diagnostics précis. Contrôle de la vision, de la tension oculaire et dépistage.</p>
          <a href="#tarifs" class="mt-4 text-green-600 font-medium inline-flex items-center hover:text-green-800">
            Voir les tarifs 
            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

        <!-- Carte 2: Ajustement et Personnalisation -->
        <div class="bg-white rounded-xl shadow-2xl p-6 transition duration-300 hover:shadow-green-300/50 hover:scale-[1.02]">
          <div class="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
            <!-- Icone d'ajustement/outil -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Ajustement & Entretien</h3>
          <p class="text-gray-600">Ajustement personnalisé des montures, nettoyage professionnel par ultrasons et conseils pour lentilles.</p>
          <a href="#reparations" class="mt-4 text-green-600 font-medium inline-flex items-center hover:text-green-800">
            Détails des ajustements
            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

        <!-- Carte 3: Support et Réparations -->
        <div class="bg-white rounded-xl shadow-2xl p-6 transition duration-300 hover:shadow-green-300/50 hover:scale-[1.02]">
          <div class="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
            <!-- Icone de réparation/clé -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m4-5h8m-8 4h4" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Support et Garantie</h3>
          <p class="text-gray-600">Réparations rapides en atelier, service après-vente dédié et application de nos garanties produits.</p>
          <a href="#reparations" class="mt-4 text-green-600 font-medium inline-flex items-center hover:text-green-800">
            En savoir plus
            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- 3. Détails des Prestations (Tarifs) -->
    <section id="tarifs" class="bg-white max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-2xl mb-16">
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Tarifs de Nos Prestations Optiques</h2>
        <p class="text-lg text-gray-600">
          Clarté et transparence : tous nos tarifs sont indiqués ci-dessous (hors prise en charge mutuelle ou assurance).
        </p>
      </div>

      <!-- Bloc 1: Examens et Consultations -->
      <h3 class="text-2xl font-semibold text-green-700 border-b pb-2 mb-6">1. Examens de Vue et Ophtalmiques</h3>
      <div class="space-y-4">
        <ServiceItem 
          title="Examen de Vue Complet (Standard)" 
          description="Évaluation de l'acuité visuelle, réfraction et contrôle de la pression intraoculaire (environ 30 min)." 
          price="55,00 €" 
          note="Remboursé selon conditions mutuelles."
          color="green"
        />
        <ServiceItem 
          title="Dépistage Précoce Glaucome/DMLA" 
          description="Examen du fond d'œil et OCT (Tomographie par Cohérence Optique) en supplément." 
          price="35,00 €" 
          note="Nécessite un examen de vue standard au préalable."
          color="green"
        />
        <ServiceItem 
          title="Adaptation Lentilles de Contact (Initial)" 
          description="Mesures, essais de lentilles et formation à la manipulation et à l'entretien." 
          price="80,00 €" 
          note="Inclut le kit de démarrage."
          color="green"
        />
      </div>

      <div class="mt-12">
        <!-- Bloc 2: Ajustements et Maintenance -->
        <h3 id="reparations" class="text-2xl font-semibold text-blue-700 border-b pb-2 mb-6">2. Ajustement et Support Technique</h3>
        <div class="space-y-4">
          <ServiceItem 
            title="Ajustement de Monture (Achat OPTIK+)" 
            description="Réalignement, resserrage des vis et nettoyage par ultrasons." 
            price="Gratuit" 
            note="À vie pour tous nos clients."
            color="blue"
          />
          <ServiceItem 
            title="Ajustement de Monture (Achat Externe)" 
            description="Ajustement professionnel et nettoyage. (Service sous réserve de faisabilité technique)." 
            price="15,00 €" 
            note="Si une réparation majeure est nécessaire, un devis sera établi."
            color="blue"
          />
          <ServiceItem 
            title="Remplacement de Coussinets de Nez" 
            description="Fourniture et installation de nouveaux coussinets en silicone hypoallergénique." 
            price="10,00 €" 
            note="Gratuit si votre monture est sous garantie."
            color="blue"
          />
        </div>
      </div>
      
      <div class="mt-12">
        <!-- Bloc 3: Réparations et Services Spéciaux -->
        <h3 class="text-2xl font-semibold text-red-700 border-b pb-2 mb-6">3. Réparations et Urgences</h3>
        <div class="space-y-4">
          <ServiceItem 
            title="Réparation Mineure en Atelier (Soudure/Vis)" 
            description="Réparation simple (ex. : soudure laser mineure, remplacement de charnière)." 
            price="À partir de 45,00 €" 
            note="Devis obligatoire après inspection."
            color="red"
          />
          <ServiceItem 
            title="Remplacement de Verre Cassé (Identique)" 
            description="Commande et installation d'un verre ayant les mêmes caractéristiques que l'original." 
            price="Selon devis verre" 
            note="Vérifiez votre assurance bris de glace. Frais d'installation : 15,00 €."
            color="red"
          />
        </div>
      </div>

    </section>
    
    <!-- 4. Section CTA (Appel à l'action) -->
    <section class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="bg-green-700 rounded-2xl p-10 sm:p-16 text-center shadow-2xl">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Prêt(e) pour un Examen ?
        </h2>
        <p class="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
          La meilleure façon d'assurer la santé de vos yeux est de planifier une consultation régulière. Prenez rendez-vous en ligne, c'est simple et rapide.
        </p>
        <!-- Le RouterLink doit pointer vers la route /rendez-vous que vous avez déjà dans la NavBar -->
        <RouterLink to="/rendez-vous" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-green-700 bg-white hover:bg-gray-100 transition duration-300 transform hover:scale-105">
          Prendre Rendez-vous Maintenant
        </RouterLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

// Composant interne pour structurer chaque ligne de service/tarif
// Note: Dans une application réelle, ce serait dans un fichier séparé (e.g., ServiceItem.vue)
const ServiceItem = {
  props: {
    title: String,
    description: String,
    price: String,
    note: String,
    color: {
      type: String,
      default: 'gray' // green, blue, red
    }
  },
  // Template du composant interne
  template: `
    <div class="border-b last:border-b-0 py-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center transition duration-200 hover:bg-gray-50/70 p-2 rounded-lg">
      
      <!-- Titre et Description -->
      <div class="md:col-span-2">
        <h4 :class="['text-lg font-semibold', {'text-green-800': color === 'green', 'text-blue-800': color === 'blue', 'text-red-800': color === 'red'}]">
          {{ title }}
        </h4>
        <p class="text-sm text-gray-500">{{ description }}</p>
      </div>
      
      <!-- Prix -->
      <div class="text-right">
        <span class="text-xl font-bold text-gray-900">{{ price }}</span>
      </div>
      
      <!-- Note/Précision -->
      <div class="text-left md:text-right">
        <p class="text-xs italic text-gray-500 bg-gray-100/50 p-1 rounded-md">{{ note }}</p>
      </div>
    </div>
  `
};
</script>

<style scoped>
/* Utilisation de la police Inter si disponible (assumée par Tailwind) */
</style>