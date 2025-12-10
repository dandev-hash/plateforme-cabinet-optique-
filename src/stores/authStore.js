import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authService } from '@/services'

/**
 * Store d'Authentification
 * Gère l'état de connexion et les données utilisateur
 */
export const useAuthStore = defineStore(
  'auth',
  () => {
    // --- ÉTAT ---
    const user = ref(null)
    const token = ref(localStorage.getItem('auth_token') || null)
    const isLoading = ref(false)
    const error = ref(null)

    // --- GETTERS ---
    const isAuthenticated = computed(() => !!token.value && !!user.value)
    const isAdmin = computed(() => user.value?.role === 'admin')

    // --- ACTIONS ---

    /**
     * Connexion utilisateur
     */
    async function login(email, password) {
      isLoading.value = true
      error.value = null

      try {
        const response = await authService.login(email, password)
        const { token: newToken, user: userData } = response.data

        // Stocker le token et l'utilisateur
        token.value = newToken
        user.value = userData
        localStorage.setItem('auth_token', newToken)

        return response.data
      } catch (err) {
        error.value = err.response?.data?.message || 'Erreur de connexion'
        throw err
      } finally {
        isLoading.value = false
      }
    }

    /**
     * Inscription utilisateur
     */
    async function register(userData) {
      isLoading.value = true
      error.value = null

      try {
        const response = await authService.register(userData)
        const { token: newToken, user: newUser } = response.data

        token.value = newToken
        user.value = newUser
        localStorage.setItem('auth_token', newToken)

        return response.data
      } catch (err) {
        error.value = err.response?.data?.message || "Erreur lors de l'inscription"
        throw err
      } finally {
        isLoading.value = false
      }
    }

    /**
     * Déconnexion
     */
    async function logout() {
      try {
        await authService.logout()
      } catch (err) {
        console.error('Erreur lors de la déconnexion:', err)
      } finally {
        user.value = null
        token.value = null
        localStorage.removeItem('auth_token')
      }
    }

    /**
     * Charger le profil utilisateur
     */
    async function fetchProfile() {
      if (!token.value) return

      isLoading.value = true
      error.value = null

      try {
        const response = await authService.getProfile()
        user.value = response.data
      } catch (err) {
        error.value = 'Erreur lors du chargement du profil'
        // Si le token est expiré, déconnecter l'utilisateur
        if (err.response?.status === 401) {
          logout()
        }
      } finally {
        isLoading.value = false
      }
    }

    /**
     * Mettre à jour le profil
     */
    async function updateProfile(profileData) {
      isLoading.value = true
      error.value = null

      try {
        const response = await authService.updateProfile(profileData)
        user.value = response.data
        return response.data
      } catch (err) {
        error.value = err.response?.data?.message || 'Erreur lors de la mise à jour'
        throw err
      } finally {
        isLoading.value = false
      }
    }

    /**
     * Réinitialiser le mot de passe
     */
    async function resetPassword(email) {
      isLoading.value = true
      error.value = null

      try {
        const response = await authService.resetPassword(email)
        return response.data
      } catch (err) {
        error.value = err.response?.data?.message || 'Erreur lors de la réinitialisation'
        throw err
      } finally {
        isLoading.value = false
      }
    }

    /**
     * Réinitialiser l'état d'erreur
     */
    function clearError() {
      error.value = null
    }

    // Restaurer le profil au chargement si le token existe
    if (token.value) {
      fetchProfile()
    }

    return {
      // État
      user,
      token,
      isLoading,
      error,
      // Getters
      isAuthenticated,
      isAdmin,
      // Actions
      login,
      register,
      logout,
      fetchProfile,
      updateProfile,
      resetPassword,
      clearError,
    }
  },
  {
    persist: {
      key: 'auth',
      storage: localStorage,
      paths: ['user', 'token'],
    },
  },
)
