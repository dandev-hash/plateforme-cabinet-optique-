import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * Store des Notifications
 * Gère les notifications toast/alerts globales
 */
export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref([])
  let nextId = 0

  /**
   * Ajouter une notification
   * @param {Object} options - { message, type, duration }
   * type: 'success', 'error', 'info', 'warning'
   * duration: milliseconds (0 = pas d'auto-fermeture)
   */
  function addNotification(options) {
    const { message, type = 'info', duration = 3000 } = options

    const id = nextId++
    const notification = {
      id,
      message,
      type,
    }

    notifications.value.push(notification)

    // Auto-fermeture après la durée spécifiée
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, duration)
    }

    return id
  }

  /**
   * Supprimer une notification
   */
  function removeNotification(id) {
    const index = notifications.value.findIndex((n) => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  /**
   * Raccourcis pour les types courants
   */
  function success(message, duration = 3000) {
    return addNotification({ message, type: 'success', duration })
  }

  function error(message, duration = 5000) {
    return addNotification({ message, type: 'error', duration })
  }

  function info(message, duration = 3000) {
    return addNotification({ message, type: 'info', duration })
  }

  function warning(message, duration = 4000) {
    return addNotification({ message, type: 'warning', duration })
  }

  function clearAll() {
    notifications.value = []
  }

  return {
    notifications,
    addNotification,
    removeNotification,
    success,
    error,
    info,
    warning,
    clearAll,
  }
})
