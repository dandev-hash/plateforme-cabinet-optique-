import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'
import AppointmentView from '../views/AppointmentView.vue'
import QuizAdviceView from '../views/QuizAdviceView.vue'
import BlogView from '../views/BlogView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/catalogue',
      name: 'catalog',
      component: CatalogView
    },
    {
      // La route pour les services/rendez-vous pointe vers le composant AppointmentView
      path: '/rendez-vous', 
      name: 'appointment',
      component: AppointmentView
    },
    {
      path: '/conseils-quiz',
      name: 'quiz-advice',
      component: QuizAdviceView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ],
  // S'assurer que chaque nouvelle page s'ouvre en haut
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router