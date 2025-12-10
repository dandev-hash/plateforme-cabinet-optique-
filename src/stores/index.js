import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

// Enregistrer le plugin de persistance
pinia.use(piniaPluginPersistedstate)

export default pinia
