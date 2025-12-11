<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- 1. Section Héros (Bannière Principale) -->
    <section class="w-full relative py-10 sm:py-18 lg:py-26 shadow-inner overflow-hidden">
      <!-- Conteneur d'image d'arrière-plan -->
      <div class="absolute inset-0">
        <!-- 
          Image de placeholder (remplacez par votre URL d'image de haute qualité) 
          Classes: 'object-cover' pour couvrir l'espace, 'object-center' pour le centrage.
        -->
        <img src="@/assets/top-view-eyeglasses-with-case.jpg" alt="Image d'une optométrie moderne" loading="lazy"
          class="w-full h-full object-cover object-center" />
        <!-- 
          Overlay sombre avec opacité MINIMALE (bg-black/15) pour améliorer la visibilité de l'image.
          On est passé de /30 à /15.
        -->
        <div class="absolute inset-0 bg-black/15"></div>
        <!-- 
          Dégradé subtil en bas pour lier la section à la suivante.
          L'opacité est aussi réduite (from-green-50/70).
        -->
        <div class="absolute inset-0 bg-gradient-to-t from-green-50/70 to-transparent"></div>
      </div>


      <!-- Contenu de la Section Héro (Positionné au-dessus de l'image) -->
      <div
        class=" bg-gradient-to-r from-white to-transparent container mr-10 pb-10 px-4 max-w-7xl  rounded-2xl relative z-10">
        <div class="text-center">
          <h1 class="text-4xl sm:text-4xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-4 drop-shadow-lg">
            L'excellence au service de votre vision
          </h1>
          <p class="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto drop-shadow-md">
            Découvrez nos services {{ typedText }}
            <span class="animate-pulse">|</span>
          </p>
          <div class="mt-10 flex justify-center space-x-4">
            <!-- Boutons conservés, mais le bouton "Voir le Catalogue" est légèrement ajusté pour un fond d'image -->
            <RouterLink to="/rendez-vous"
              class="px-8 py-3 text-lg font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition duration-300 transform hover:scale-105 shadow-xl">
              Prendre Rendez-vous
            </RouterLink>
            <RouterLink to="/catalogue"
              class="px-8 py-3 text-lg font-semibold text-green-600 border-2 border-green-600 rounded-xl hover:bg-white/10 transition duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm">
              Voir le Catalogue
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Section de contenu standard (Services et Engagements) -->
    <section class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-4xl font-bold text-green-800 mb-8 border-b pb-2">Nos Engagements</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <h3 class="font-semibold text-2xl text-green-700">Expertise Certifiée</h3>
          <p class="text-gray-500 mt-2">Optométristes diplômés et équipement de pointe pour un diagnostic précis.<img
              src="@/assets/patient-ophthalmologist-s-office.jpg" alt="Image d'une optométrie moderne" loading="lazy"
              class="w-66 ml-8 h-full  mt-5 object-cover object-center rounded-2xl" /></p>
        </div>
        <div class="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <h3 class="font-semibold text-2xl text-green-700">Collections Uniques</h3>
          <p class="text-gray-500 mt-2">Des montures sélectionnées pour leur style et leur qualité, adaptées à tous les
            budgets.<img src="@/assets/Cecily Knight _ God of wrath _ Legacy of gods _ Rina Kent _ Books Aesthetic.jpeg"
              alt="Image d'une optométrie moderne" loading="lazy"
              class="w-80 h-full mt-5 object-cover object-center rounded-2xl" />
          </p>
        </div>
        <div class="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          <h3 class="font-semibold text-2xl text-green-700">Service Client Dédié</h3>
          <p class="text-gray-500 mt-2">Un suivi personnalisé de l'examen de la vue à l'ajustement de vos lunettes.<img
              src="@/assets/medium-shot-smiley-woman-teaching.jpg" alt="Image d'une optométrie moderne" loading="lazy"
              class="w-67 h-full ml-10 mt-5 object-cover object-center rounded-2xl" /></p>
        </div>
      </div>
    </section>

    <!-- 3. SECTION OFFRES EXCLUSIVES (PROMOTIONS FCFA MODERNES) -->
    <section class="py-20 px-4 bg-green-50">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          ⚡ Offres Exclusives du Moment
          <span class="block text-xl font-normal text-green-700 mt-2">Économisez sur la qualité et le style !</span>
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div v-for="offer in exclusiveOffers" :key="offer.id"
            :class="[offer.cardBgColor, 'relative p-6 md:p-8 rounded-xl shadow-lg flex flex-col justify-between transform hover:scale-[1.02] transition duration-300 border border-gray-100']">
            <!-- BADGE de Réduction/Offre -->
            <div
              class="absolute top-0 right-0 mt-[-10px] mr-[-10px] px-3 py-1 text-sm font-bold text-white rounded-full shadow-md z-10"
              :class="offer.badgeBgColor">
              {{ offer.badge }}
            </div>

            <!-- CONTENU PRINCIPAL -->
            <div>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug">{{ offer.title }}</h3>
              <p class="text-sm md:text-base text-gray-600 mb-6">{{ offer.description }}</p>

              <!-- Zone de Prix en FCFA -->
              <div class="mb-6">
                <p class="text-xl font-extrabold flex items-baseline" :class="offer.priceColor">
                  {{ offer.newPrice.toLocaleString('fr-FR') }}
                  <span class="text-base ml-1 font-semibold">FCFA</span>
                </p>
                <p v-if="offer.oldPrice" class="text-sm line-through text-gray-400 mt-1">
                  {{ offer.oldPrice.toLocaleString('fr-FR') }} FCFA
                </p>
              </div>

              <!-- Liste des Avantages (Checkmarks) -->
              <ul class="space-y-3 text-gray-700 mb-8">
                <li v-for="(benefit, i) in offer.benefits" :key="i" class="flex items-center text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0" :class="offer.priceColor"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ benefit }}
                </li>
              </ul>
            </div>

            <!-- Bouton d'Action -->
            <RouterLink :to="offer.to"
              class="block text-center px-8 py-3 text-lg font-bold text-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.01]"
              :class="offer.buttonBgColor">Découvrir l'offre
            </RouterLink>
          </div>

        </div>
      </div>
    </section>

    <!-- 4. SECTION Carrousel des Nouveautés Montures (Mode ÉVENTAIL 3D) - NOUVEL ORDRE -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Nouveautés Montures Tendance
          <span class="block text-xl font-normal text-green-600 mt-2">Découvrez les modèles que vous porterez
            demain</span>
        </h2>

        <div class="relative">

          <!-- Fenêtre d'affichage du carrousel avec Perspective 3D -->
          <div class="relative h-[550px] md:h-[650px] overflow-hidden carousel-viewport">

            <!-- Cartes des montures (Positionnées en absolu au centre, puis transformées en 3D) -->
            <div v-for="(frame, index) in newFrames" :key="frame.id" :style="getSlideStyle(index)"
              :class="['absolute w-full max-w-lg mx-auto top-4 left-1/2 transition-all duration-700 ease-in-out transform-style-preserve-3d cursor-pointer']"
              @click="currentSlide = index">
              <div
                class="w-full h-full bg-white rounded-2xl shadow-2xl hover:shadow-green-300 transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
                <!-- Image Placeholder -->
                <div class="h-60 md:h-72 bg-cover bg-center" :style="{ backgroundImage: `url(${frame.img})` }">
                </div>

                <div class="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 class="text-2xl font-bold text-gray-900 mb-2">{{ frame.name }}</h4>
                    <p class="text-sm text-gray-600 mb-4">{{ frame.description }}</p>

                  </div>
                  <div class="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
                    <!-- AFFICHAGE EN FCFA -->
                    <span class="text-3xl font-extrabold text-green-700">{{ frame.price }}</span>
                    <RouterLink :to="frame.to"
                      class="px-5 py-2 text-base bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition shadow-md"
                      @click.stop="">
                      Acheter
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- Flèche Gauche (Z-index élevé pour être au-dessus des cartes) -->
            <button @click="prevSlide" :disabled="currentSlide === 0"
              class="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white rounded-full shadow-xl border border-gray-300 disabled:opacity-50 hover:bg-green-50 transition duration-300 ml-4"
              aria-label="Diapositive précédente">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <!-- Flèche Droite (Z-index élevé) -->
            <button @click="nextSlide" :disabled="currentSlide === maxSlideIndex"
              class="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white rounded-full shadow-xl border border-gray-300 disabled:opacity-50 hover:bg-green-50 transition duration-300 mr-4"
              aria-label="Diapositive suivante">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Indicateurs de pagination (Dots) -->
          <div class="flex justify-center mt-6 space-x-2">
            <button v-for="(_, index) in Array(maxSlideIndex + 1).keys()" :key="index" @click="currentSlide = index"
              :class="['w-3 h-3 rounded-full transition-all duration-300', index === currentSlide ? 'bg-green-600 w-5' : 'bg-gray-300 hover:bg-green-300']"
              :aria-label="'Aller à la diapositive ' + (index + 1)"></button>
          </div>
        </div>

      </div>
    </section>

    <!-- 5. NOUVELLE SECTION: BLOG (Grid Mosaïque/Variable) - NOUVEL ORDRE -->
    <section class="py-20 px-4 bg-white">
      <div class="container mx-auto max-w-7xl">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          👀 Conseils et Actualités Optiques
        </h2>
        <p class="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Restez informés sur la santé visuelle, les nouvelles technologies et les tendances mode de la lunetterie.
        </p>

        <!-- Conteneur de la Grille Mosaïque (Grid à 3 colonnes sur desktop) -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-min">

          <div v-for="article in latestBlogArticles" :key="article.id"
            :class="[getArticleSizeClasses(article.size), 'flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition duration-300']">
            <!-- L'article en entier est un lien pour faciliter le clic -->
            <RouterLink :to="article.to" class="block h-full flex flex-col">

              <!-- Image de l'article -->
              <div :class="[article.size === 'large' ? 'h-60' : 'h-40', 'bg-gray-100 overflow-hidden']">
                <img :src="article.img" :alt="article.title" loading="lazy"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
              </div>

              <div class="p-4 md:p-6 flex flex-col flex-grow">
                <!-- Date et Catégorie -->
                <div class="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span class="font-semibold text-green-600">{{ article.category }}</span>
                  <span>{{ article.date }}</span>
                </div>

                <!-- Titre -->
                <h3
                  :class="[article.size === 'large' ? 'text-2xl' : 'text-xl', 'font-bold text-gray-900 mb-3 leading-tight']">
                  {{ article.title }}</h3>

                <!-- Extrait visible uniquement pour les cartes moyennes et grandes -->
                <p v-if="article.size !== 'small'" class="text-gray-700 text-base flex-grow mb-4">
                  {{ article.excerpt }}
                </p>

                <!-- Lien Lire la Suite -->
                <div class="mt-auto">
                  <span
                    class="inline-flex items-center text-green-600 font-semibold text-base hover:text-green-800 transition duration-300">
                    Lire la suite
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </RouterLink>
          </div>

        </div>

        <!-- Bouton pour voir tous les articles -->
        <div class="text-center mt-12">
          <RouterLink to="/blog"
            class="px-8 py-3 bg-gray-800 text-white font-semibold rounded-md text-lg hover:bg-gray-700 transition duration-300 shadow-lg">
            Voir Tous les Articles du Blog
          </RouterLink>
        </div>

      </div>
    </section>
    <!-- Section Nous Contacter -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nous Contacter
          </h3>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Un besoin particulier ? Notre équipe est à votre écoute
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <!-- Formulaire de contact -->
            <div class="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-8 lg:p-10 shadow-lg">
              <h4 class="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h4>

              <form class="space-y-5">
                <!-- Nom -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input type="text" placeholder="Votre nom"
                    class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required>
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input type="email" placeholder="votre.email@exemple.com"
                    class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required>
                </div>

                <!-- Téléphone -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input type="tel" placeholder="+237 6XX XXX XXX"
                    class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all">
                </div>

                <!-- Sujet -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    required>
                    <option value="">Sélectionnez un sujet</option>
                    <option value="info">Demande d'information</option>
                    <option value="rdv">Prise de rendez-vous</option>
                    <option value="produit">Question sur un produit</option>
                    <option value="sav">Service après-vente</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea rows="5" placeholder="Décrivez votre demande..."
                    class="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    required></textarea>
                </div>

                <!-- Bouton Envoyer -->
                <button type="submit"
                  class="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Envoyer le message
                </button>

                <p class="text-xs text-gray-500 text-center">
                  * Champs obligatoires. Nous vous répondrons dans les plus brefs délais.
                </p>
              </form>
            </div>

            <!-- Informations de contact -->
            <div class="space-y-8">
              <!-- Numéro de téléphone -->
              <div
                class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                      <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h5 class="text-lg font-bold text-gray-900 mb-2">Appelez-nous</h5>
                    <p class="text-gray-600 mb-3">Disponible du lundi au samedi de 9h à 18h</p>
                    <a href="tel:+237123456789"
                      class="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
                      +237 6XX XXX XXX
                    </a>
                  </div>
                </div>
              </div>

              <!-- Adresse -->
              <div
                class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h5 class="text-lg font-bold text-gray-900 mb-2">Adresse</h5>
                    <p class="text-gray-600">
                      Akwa, Douala<br>
                      Cameroun
                    </p>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div
                class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h5 class="text-lg font-bold text-gray-900 mb-2">Email</h5>
                    <p class="text-gray-600 mb-3">Réponse sous 24h</p>
                    <a href="mailto:contact@cabinetoptique.com"
                      class="text-lg font-semibold text-purple-600 hover:text-purple-700 transition-colors">
                      contact@cabinetoptique.com
                    </a>
                  </div>
                </div>
              </div>

              <!-- Horaires -->
              <div class="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 shadow-lg text-white">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h5 class="text-lg font-bold mb-3">Horaires d'ouverture</h5>
                    <div class="space-y-2 text-white/90">
                      <p><span class="font-semibold">Lundi - Vendredi:</span> 9h - 18h</p>
                      <p><span class="font-semibold">Samedi:</span> 9h - 14h</p>
                      <p><span class="font-semibold">Dimanche:</span> Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BANNIÈRES FLOTTANTES (inchangées) -->
    <Transition name="top-left-slide">
      <div v-if="isVisibleTopLeft" :key="currentIndex"
        class="fixed top-6 left-6 z-50 p-6 w-72 md:w-96 rounded-2xl shadow-2xl transition-all cursor-pointer transform origin-top-left bg-green-900/90 hover:scale-[1.02]">
        <RouterLink :to="currentMessage.to" class="block">
          <div class="text-white relative">

            <div class="flex items-start mb-3 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>

              <h3 class="text-xl md:text-2xl font-bold leading-snug">
                {{ currentMessage.text }}
              </h3>
            </div>

            <p class="text-sm md:text-base opacity-90 mb-4 ml-11">
              Ne remettez plus votre santé visuelle à demain !
            </p>

            <div class="text-right">
              <span
                class="inline-block px-5 py-2 text-base font-bold bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition duration-200 transform hover:scale-105">
                {{ currentMessage.action }}
              </span>
            </div>
          </div>
        </RouterLink>
      </div>
    </Transition>

    <Transition name="bottom-right-slide">
      <div v-if="isVisibleBottomRight" :key="'floating-banner-' + currentIndex"
        class="fixed bottom-6 right-6 z-50 p-6 w-72 md:w-96 rounded-2xl shadow-2xl transition-all cursor-pointer transform origin-bottom-right bg-green-900/90 hover:scale-[1.02]">
        <RouterLink :to="currentMessage.to" class="block">
          <div class="text-white relative">

            <div class="flex items-start mb-3 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>

              <h3 class="text-xl md:text-2xl font-bold leading-snug">
                {{ currentMessage.text }}
              </h3>
            </div>

            <p class="text-sm md:text-base opacity-90 mb-4 ml-11">
              {{ currentMessage.tagline }}
            </p>

            <div class="text-right">
              <span
                class="inline-block px-5 py-2 text-base font-bold bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition duration-200 transform hover:scale-105">
                {{ currentMessage.action }}
              </span>
            </div>
          </div>
        </RouterLink>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { RouterLink } from 'vue-router';

// --- Données des Nouveaux Articles de Blog (Taille Variable) ---
const latestBlogArticles = [
  {
    id: 1,
    title: 'Le rôle de la lumière bleue dans la fatigue oculaire',
    category: 'Santé Visuelle',
    date: '28 Nov. 2025',
    excerpt: 'De plus en plus exposés aux écrans, nos yeux subissent les effets de la lumière bleue artificielle. Découvrez pourquoi et comment s\'en protéger efficacement avec les bons verres.',
    img: '/src/assets/télécharger (5).jpeg',
    to: '/blog/lumiere-bleue-fatigue',
    size: 'large', // Prend plus de place (2 colonnes)
  },
  {
    id: 2,
    title: 'Comment choisir une monture adaptée à la forme de votre visage',
    category: 'Mode & Style',
    date: '15 Nov. 2025',
    excerpt: 'Rond, carré, ovale ou en cœur, chaque visage a sa monture idéale ! Suivez notre guide complet pour trouver la paire qui mettra vos traits en valeur.',
    img: '/src/assets/télécharger (2).jpeg',
    to: '/blog/choix-monture-visage',
    size: 'medium', // Taille standard (1 colonne)
  },
  {
    id: 3,
    title: '5 signes qu\'il est temps de changer de lunettes',
    category: 'Optométrie',
    date: '01 Nov. 2025',
    excerpt: 'Maux de tête fréquents, vision floue en fin de journée... Ne négligez pas ces signaux d\'alerte. Un contrôle régulier est essentiel pour votre confort visuel.',
    img: '/src/assets/télécharger (6).jpeg',
    to: '/blog/changer-lunettes-signes',
    size: 'medium', // Taille standard (1 colonne)
  },
  {
    id: 4,
    title: 'Entretien des verres : les erreurs à éviter',
    category: 'Conseils Pratiques',
    date: '20 Oct. 2025',
    excerpt: '',
    img: 'https://placehold.co/400x300/3B82F6/FFFFFF?text=Nettoyage',
    to: '/blog/entretien-verres',
    size: 'small', // Petit format, idéal pour un lien rapide
  },
  {
    id: 5,
    title: 'Les verres progressifs démystifiés',
    category: 'Technologie',
    date: '10 Oct. 2025',
    excerpt: '',
    img: 'https://placehold.co/400x300/6366F1/FFFFFF?text=Progressifs',
    to: '/blog/verres-progressifs',
    size: 'small', // Petit format
  },
];
//Animation de texte
const typedText = ref('');
const fullText = " d'optométrie, nos collections de montures exclusives et nos conseils personnalisés.";
let typingInterval = null;
let restartTimeout = null;

// Référence à la section
const counterSection = ref(null);
let observer = null;

// Fonction pour animer un compteur spécifique
function animateCounter(displayRef, target) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    displayRef.value = Math.floor(progress * target);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      displayRef.value = target;
    }
  }

  requestAnimationFrame(update);
}

// Fonction pour animer le texte lettre par lettre EN BOUCLE
function animateTyping() {
  // Nettoyer les anciens timers
  if (typingInterval) clearInterval(typingInterval);
  if (restartTimeout) clearTimeout(restartTimeout);

  typedText.value = '';
  let index = 0;
  const typingSpeed = 100;

  typingInterval = setInterval(() => {
    if (index < fullText.length) {
      typedText.value = fullText.substring(0, index + 1);
      index++;
    } else {
      clearInterval(typingInterval);
      // Recommencer après 2 secondes
      restartTimeout = setTimeout(() => {
        animateTyping();
      }, 2000);
    }
  }, typingSpeed);
}

// Fonction pour assigner les classes de taille à la carte de blog
const getArticleSizeClasses = (size) => {
  switch (size) {
    case 'large':
      // Prend 2 colonnes sur 3 sur les écrans moyens/grands
      return 'col-span-2 row-span-2 hidden md:flex'; // Masqué sur mobile pour garder la grille simple, prend 2x2 sur desktop
    case 'medium':
      // Taille standard (1 colonne)
      return 'col-span-2 md:col-span-1';
    case 'small':
      // Petit format, prend juste 1 colonne. 
      // On peut aussi jouer avec row-span-1 pour une hauteur plus courte si besoin.
      return 'col-span-1 hidden md:flex'; // Masqué sur mobile, prend 1x1 sur desktop
    default:
      return 'col-span-1';
  }
};

// --- Données des Offres Exclusives (FCFA) ---
const exclusiveOffers = [
  {
    id: 1,
    title: 'Montures de Vue Classiques',
    description: 'Profitez de 30% de réduction sur toutes nos montures de vue classiques pour un style intemporel.',
    badge: '-30%',
    oldPrice: 150000,
    newPrice: 105000, // 30% de réduction sur 150 000
    to: '/promotions/montures-classiques',
    cardBgColor: 'bg-white',
    badgeBgColor: 'bg-red-500',
    priceColor: 'text-green-600',
    buttonBgColor: 'bg-green-600 hover:bg-green-700',
    benefits: ['Large choix de styles', 'Garantie de 2 ans incluse', 'Ajustement gratuit'],
  },
  {
    id: 2,
    title: 'Lunettes de Soleil Tendance',
    description: 'Réduction exceptionnelle sur notre collection de lunettes de soleil polarisées de marques premium.',
    badge: '-25%',
    oldPrice: 180000,
    newPrice: 135000, // 25% de réduction sur 180 000
    to: '/promotions/solaires',
    cardBgColor: 'bg-indigo-50/50', // Légèrement bleuté
    badgeBgColor: 'bg-red-500',
    priceColor: 'text-indigo-600',
    buttonBgColor: 'bg-indigo-600 hover:bg-indigo-700',
    benefits: ['Protection UV 100%', 'Verres polarisés disponibles', 'Étui de luxe offert'],
  },
  {
    id: 3,
    title: 'Pack Examen + Monture',
    description: 'Examen de vue complet + une monture de choix pour un tarif groupé très avantageux.',
    badge: 'Meilleure Offre',
    oldPrice: 100000,
    newPrice: 89000,
    to: '/promotions/pack-examen',
    cardBgColor: 'bg-white',
    badgeBgColor: 'bg-red-500',
    priceColor: 'text-purple-600',
    buttonBgColor: 'bg-purple-600 hover:bg-purple-700',
    benefits: ['Examen complet', 'Monture au choix (valeur max 50.000 FCFA)', 'Un service après-vente dédié'],
  },
];


// --- Logique des Bannières Alternées (inchangée) ---

const bannerMessages = [
  { id: 0, text: 'Testez votre vue en 2 minutes chrono !', action: 'Démarrer le Quiz', to: '/conseils-quiz', tagline: 'Gratuit et sans engagement. Découvrez votre acuité visuelle.' },
  { id: 1, text: 'Nouvelles montures optiques : Tendance 2025 !', action: 'Voir le Catalogue', to: '/catalogue', tagline: 'Découvrez notre sélection exclusive de créateurs.' },
  { id: 2, text: 'Besoin de lunettes de soleil adaptées ?', action: 'Trouvez la paire idéale', to: '/catalogue', tagline: 'Protection UV maximale et style assuré.' },
  { id: 3, text: 'Vos yeux sont souvent fatigués ?', action: 'Prendre Rendez-vous', to: '/rendez-vous', tagline: 'Consultation rapide pour un diagnostic complet.' },
  { id: 4, text: 'Myopie, astigmatisme... Avez-vous un doute ?', action: 'Accédez au Quiz Santé', to: '/conseils-quiz', tagline: 'Des conseils personnalisés vous attendent.' },
  { id: 5, text: 'Profitez de notre offre spéciale !', action: 'Voir les Promotions', to: '/catalogue', tagline: 'Jusqu\'à 20% de réduction sur une sélection de verres.' },
];

const currentIndex = ref(0);
const currentMessage = computed(() => bannerMessages[currentIndex.value]);
const isVisibleTopLeft = computed(() => currentIndex.value % 2 === 0);
const isVisibleBottomRight = computed(() => currentIndex.value % 2 !== 0);

onMounted(() => {
  const interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % bannerMessages.length;
  }, 6000);
  onUnmounted(() => {
    clearInterval(interval);
  });
  animateTyping();
});
// Nettoyer les timers lors de la destruction du composant
onUnmounted(() => {
  if (typingInterval) clearInterval(typingInterval);
  if (restartTimeout) clearTimeout(restartTimeout);
  if (observer) observer.disconnect();
});


// --- Logique du Carrousel de Montures (Mode ÉVENTAIL 3D - PRIX FCFA) ---

const newFrames = [
  // Conversion approximative: 1 EUR ≈ 655.957 FCFA
  { id: 1, name: 'Modèle Eclipse', description: 'Design minimaliste en titane, ultra-léger.', price: '3.000 FCFA', img: '/src/assets/télécharger (1).jpeg', to: '/catalogue/eclipse' }, // ~249€
  { id: 2, name: 'Collection Gaia', description: 'Acétate recyclé, branches larges et confortables.', price: '13.000 FCFA', img: '/src/assets/télécharger (2).jpeg', to: '/catalogue/gaia' }, // ~199€
  { id: 3, name: 'Vintage 77', description: 'Forme papillon classique, couleur havane intense.', price: '13.750 FCFA', img: '/src/assets/top-view-eyeglasses-with-case.jpg', to: '/catalogue/vintage77' }, // ~210€
  { id: 4, name: 'Futura Light', description: 'Modèle sans monture apparente, vision périphérique.', price: '8.500 FCFA', img: 'https://placehold.co/400x300/3B82F6/FFFFFF?text=Monture+Futura', to: '/catalogue/futura' }, // ~280€
  { id: 5, name: 'Urban Luxe', description: 'Style carré noir mat, charnières flexibles.', price: '7.500 FCFA', img: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=Monture+Urban', to: '/catalogue/urbanluxe' }, // ~225€
  { id: 6, name: 'Sport Pro', description: 'Conçues pour l\'activité, légères et robustes.', price: '1.000 FCFA', img: 'https://placehold.co/400x300/6366F1/FFFFFF?text=Monture+Sport', to: '/catalogue/sportpro' }, // ~185€
];

const currentSlide = ref(0);
const totalFrames = computed(() => newFrames.length);
const maxSlideIndex = computed(() => totalFrames.value > 0 ? totalFrames.value - 1 : 0);

const nextSlide = () => {
  currentSlide.value = Math.min(currentSlide.value + 1, maxSlideIndex.value);
};

const prevSlide = () => {
  currentSlide.value = Math.max(currentSlide.value - 1, 0);
};

const getSlideStyle = (index) => {
  const distance = index - currentSlide.value;
  let translateX = 0;
  let translateZ = 0;
  let opacity = 0;
  let scale = 1.0;
  let zIndex = 1;
  let filter = 'none';

  const cardWidth = 320;
  const overlapRatio = 0.35;
  const overlapX = cardWidth * (1 - overlapRatio);
  const depthZ = 120;
  const scaleStep = 0.1;

  if (distance === 0) {
    translateX = -50;
    translateZ = 0;
    scale = 1.0;
    zIndex = 100;
    opacity = 1;
    filter = 'none';
  } else if (distance > 0) {
    const d = distance;
    translateX = -50 + d * overlapX;
    translateZ = -d * depthZ;
    scale = 1.0 - d * scaleStep;
    zIndex = 100 - d;
    opacity = 1;
    filter = `blur(${d * 1.5}px)`;
    if (d > 2) {
      opacity = 0;
      zIndex = 1;
    }
  } else {
    const d = Math.abs(distance);
    translateX = -50 - d * overlapX;
    translateZ = -d * depthZ;
    scale = 1.0 - d * scaleStep;
    zIndex = 100 - d;
    opacity = 1;
    filter = `blur(${d * 1.5}px)`;
    if (d > 2) {
      opacity = 0;
      zIndex = 1;
    }
  }

  const transformValue = `translateX(-50%) translateX(${translateX + 50}px) translateZ(${translateZ}px) scale(${scale})`;

  return {
    transform: transformValue,
    zIndex: zIndex,
    opacity: opacity,
    filter: filter,
  };
};

</script>

<style scoped>
/*
 * Styles spécifiques à la grille blog
 * Sur mobile (col-span-2 par défaut), l'affichage reste en colonne simple pour la lisibilité.
 * La magie opère sur desktop (md:grid-cols-3)
 */
.auto-rows-min {
  grid-auto-rows: minmax(min-content, max-content);
}

/*
 * Styles spécifiques à l'Éventail/Stacking 3D (inchangés)
 */
.carousel-viewport {
  perspective: 1500px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

/*
 * Styles de Transition pour les bannières flottantes (maintenus)
 */

.top-left-slide-enter-active,
.top-left-slide-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.top-left-slide-enter-from {
  opacity: 0;
  transform: translateX(-50px) translateY(-50px);
}

.top-left-slide-leave-to {
  opacity: 0;
  transform: translateX(-50px) translateY(-50px);
}


.bottom-right-slide-enter-active,
.bottom-right-slide-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.bottom-right-slide-enter-from {
  opacity: 0;
  transform: translateX(50px) translateY(50px);
}

.bottom-right-slide-leave-to {
  opacity: 0;
  transform: translateX(50px) translateY(50px);
}
</style>