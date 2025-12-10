import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore } from '@/stores/notificationStore'

/**
 * Composable pour la protection des routes
 */
export function useRouteGuards() {
  const authStore = useAuthStore()
  const notificationStore = useNotificationStore()

  /**
   * Vérifie si l'utilisateur est authentifié
   * Redirige vers le login sinon
   */
  function requireAuth(to, from, next) {
    if (authStore.isAuthenticated) {
      next()
    } else {
      notificationStore.warning('Vous devez être connecté pour accéder à cette page')
      next('/login?redirect=' + to.path)
    }
  }

  /**
   * Vérifie si l'utilisateur est admin
   */
  function requireAdmin(to, from, next) {
    if (authStore.isAdmin) {
      next()
    } else {
      notificationStore.error(
        'Accès refusé. Seuls les administrateurs peuvent accéder à cette page',
      )
      next('/')
    }
  }

  /**
   * Empêche un utilisateur authentifié d'accéder au login
   */
  function redirectIfAuthenticated(to, from, next) {
    if (authStore.isAuthenticated) {
      next('/')
    } else {
      next()
    }
  }

  return {
    requireAuth,
    requireAdmin,
    redirectIfAuthenticated,
  }
}
