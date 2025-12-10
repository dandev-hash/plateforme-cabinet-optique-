import axios from 'axios'

// ============================================
// CONFIGURATION D'AXIOS
// ============================================

// L'URL de base de votre API Laravel
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

// Créer une instance Axios réutilisable
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000, // 10 secondes
})

// ============================================
// INTERCEPTEURS
// ============================================

// Intercepteur de Requête - Ajouter le token d'authentification si disponible
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Intercepteur de Réponse - Gérer les erreurs globales
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Gestion globale des erreurs
    if (error.response?.status === 401) {
      // Non authentifié - rediriger vers login si nécessaire
      localStorage.removeItem('auth_token')
      // Vous pouvez déclencher un événement ici pour rediriger
    }
    return Promise.reject(error)
  },
)

// ============================================
// EXPORT DE L'INSTANCE
// ============================================

export default axiosInstance
