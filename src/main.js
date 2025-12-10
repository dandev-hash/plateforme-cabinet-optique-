import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 1. Importation du plugin de persistance
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' 

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 2. Création de l'instance Pinia
const pinia = createPinia()

// 3. Utilisation du plugin de persistance sur Pinia
pinia.use(piniaPluginPersistedstate)

// Utilisation de l'instance Pinia dans l'application
app.use(pinia) 
app.use(router)

app.mount('#app')