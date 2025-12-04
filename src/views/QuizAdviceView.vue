<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      
      <h1 class="text-4xl font-extrabold text-gray-900 mb-2 text-center">
        Trouvez votre équipement idéal
      </h1>
      <p class="text-xl text-gray-600 mb-10 text-center">
        Répondez à quelques questions pour obtenir des recommandations personnalisées.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <!-- Colonne Gauche (lg:col-span-2) : Le Questionnaire (Quiz) -->
        <div class="lg:col-span-2 bg-white p-8 rounded-xl shadow-2xl">
          <h2 class="text-3xl font-bold text-green-600 mb-6 border-b pb-3">
            Questionnaire Personnalisé
          </h2>

          <div v-if="!quizCompleted" class="space-y-8">
            <div v-for="(q, index) in questions" :key="index" class="p-4 border-b last:border-b-0">
              <p class="text-xl font-semibold text-gray-800 mb-4">
                {{ index + 1 }}. {{ q.text }}
              </p>

              <div class="space-y-3">
                <label v-for="(option, oIndex) in q.options" :key="oIndex" class="flex items-start text-gray-700 cursor-pointer p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition duration-150">
                  <input 
                    type="radio" 
                    :name="`q-${index}`" 
                    :value="option.value"
                    v-model="answers[index]"
                    class="form-radio text-green-600 mt-1 flex-shrink-0"
                  >
                  <span class="ml-3">{{ option.text }}</span>
                </label>
              </div>
            </div>

            <!-- Bouton de Soumission du Quiz -->
            <div class="mt-8 pt-4 border-t">
              <button 
                @click="calculateResults"
                :disabled="!isQuizValid"
                class="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Obtenir mes Recommandations
              </button>
            </div>
          </div>
          
          <!-- Résultats du Quiz -->
          <div v-else class="text-center py-10">
            <h3 class="text-4xl font-extrabold text-green-700 mb-4">
              ✨ Votre Recommandation
            </h3>
            <p class="text-xl text-gray-800 mb-6">{{ resultMessage }}</p>
            
            <RouterLink 
              to="/catalogue"
              class="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition duration-300 shadow-lg transform hover:scale-105"
            >
              Voir les Montures Recommandées
            </RouterLink>
            <button @click="resetQuiz" class="ml-4 py-3 px-8 text-gray-600 hover:text-gray-900 transition duration-150">
              Refaire le Quiz
            </button>
          </div>
        </div>

        <!-- Colonne Droite (lg:col-span-1) : FAQ Thématique -->
        <div class="lg:col-span-1">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-3">
              FAQ Santé Visuelle
            </h2>
            
            <div class="space-y-4">
              <div v-for="(item, index) in faqItems" :key="index" class="border-b last:border-b-0 pb-3">
                <button @click="toggleFaq(index)" class="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-green-600 transition duration-150">
                  {{ item.question }}
                  <span>{{ item.open ? '−' : '+' }}</span>
                </button>
                <p v-if="item.open" class="mt-2 text-gray-600 text-sm bg-gray-50 p-3 rounded-md transition-all duration-300">
                  {{ item.answer }}
                </p>
              </div>
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

// --- Data pour le Quiz ---
const questions = ref([
  {
    text: "Quel est votre principal environnement d'utilisation ?",
    options: [
      { text: "Principalement à l'intérieur (bureau, écran)", value: 'indoor' },
      { text: "Principalement à l'extérieur (conduite, sport)", value: 'outdoor' },
      { text: "Les deux équitablement", value: 'mixed' },
    ]
  },
  {
    text: "Quel critère est le plus important pour vous ?",
    options: [
      { text: "La résistance et la durabilité", value: 'durability' },
      { text: "Le style et la mode", value: 'style' },
      { text: "Le poids et le confort (légèreté)", value: 'comfort' },
    ]
  },
  {
    text: "Quel est votre budget principal pour les montures ?",
    options: [
      { text: "Moins de 50 000 XOF (Bas)", value: 'low' },
      { text: "50 000 - 100 000 XOF (Moyen)", value: 'medium' },
      { text: "Plus de 100 000 XOF (Premium)", value: 'high' },
    ]
  }
]);

const answers = ref(new Array(questions.value.length).fill(null));
const quizCompleted = ref(false);
const resultMessage = ref('');

// Vérifie si toutes les questions ont reçu une réponse
const isQuizValid = computed(() => {
  return answers.value.every(answer => answer !== null);
});

// --- Logique du Quiz ---
const calculateResults = () => {
  if (!isQuizValid.value) return;

  const [env, crit, budget] = answers.value;
  let recommendation = "";

  // Logique simple de recommandation basée sur les réponses
  if (env === 'outdoor') {
    recommendation += "Nous recommandons des **Lunettes de Soleil polarisées** ou des verres avec protection UV maximale. ";
  } else if (env === 'indoor') {
    recommendation += "Des verres avec **filtre anti-lumière bleue** sont fortement conseillés. ";
  } else {
    recommendation += "Des **verres photochromiques** ou un ensemble double (vue + soleil) seraient parfaits. ";
  }

  if (crit === 'durability') {
    recommendation += "Optez pour des montures en **Titane** ou en **Acétate de haute qualité** pour la résistance. ";
  } else if (crit === 'comfort') {
    recommendation += "Les montures en **Titane flexible** ou sans cerclage sont les plus légères et confortables. ";
  } else {
    recommendation += "Explorez nos collections **Designer Premium** pour les dernières tendances. ";
  }

  if (budget === 'low' || budget === 'medium') {
    recommendation += "Vous trouverez d'excellentes options dans notre **gamme Standard** !";
  } else {
    recommendation += "Découvrez nos marques de **luxe** pour une qualité et un design inégalés.";
  }

  resultMessage.value = recommendation;
  quizCompleted.value = true;
};

const resetQuiz = () => {
  answers.value = new Array(questions.value.length).fill(null);
  quizCompleted.value = false;
  resultMessage.value = '';
};


// --- Data et Logique pour la FAQ ---
const faqItems = ref([
  { question: "Quelle est la fréquence recommandée pour un examen de vue ?", answer: "Généralement, une fois tous les deux ans. Toutefois, pour les enfants ou les personnes de plus de 65 ans, un examen annuel est souvent conseillé.", open: false },
  { question: "Qu'est-ce que le filtre anti-lumière bleue ?", answer: "C'est un traitement de surface qui filtre une partie de la lumière bleue-violette émise par les écrans numériques (téléphones, ordinateurs) pour réduire la fatigue oculaire.", open: false },
  { question: "Combien de temps faut-il pour s'habituer à de nouveaux verres progressifs ?", answer: "La période d'adaptation varie, mais elle est généralement de quelques jours à deux semaines. Nous sommes là pour vous accompagner si des difficultés persistent.", open: false },
  { question: "Puis-je utiliser une vieille ordonnance ?", answer: "Une ordonnance a généralement une validité limitée (souvent 3 ou 5 ans). Pour un renouvellement optimal, nous vous conseillons de planifier un examen de vue récent.", open: false },
]);

const toggleFaq = (index) => {
  faqItems.value[index].open = !faqItems.value[index].open;
};
</script>