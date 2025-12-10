# Architecture Frontend - La Gloire Optique

## 📂 Structure des Dossiers

```
src/
├── assets/              # Images et fichiers statiques
├── components/          # Composants réutilisables (Header, Footer, etc.)
├── composables/         # Hooks/Composables réutilisables (useRouteGuards, etc.)
├── router/             # Configuration Vue Router
├── services/           # Services API (Axios)
│   ├── api.js         # Instance Axios configurée
│   └── index.js       # Services métier (products, cart, etc.)
├── stores/            # Pinia stores (gestion d'état)
│   ├── authStore.js
│   ├── cartStore.js
│   ├── productStore.js
│   ├── notificationStore.js
│   └── index.js       # Configuration Pinia avec persistance
├── views/            # Pages complètes
├── App.vue
└── main.js
```

## 🔌 Configuration API

### Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet :

```env
VITE_API_URL=http://localhost:8000/api
VITE_ENV=development
VITE_APP_TITLE=La Gloire Optique
```

### Utilisation des Services API

```javascript
// Dans un composant
import { productService, cartService } from '@/services'

// Récupérer les produits
const products = await productService.getAllProducts()

// Ajouter au panier
await cartService.addToCart(productId, quantity)
```

## 🔐 Authentification

### Structure du Token

Le token est stocké dans `localStorage` et automatiquement envoyé dans les headers API.

```javascript
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

// Connexion
await authStore.login(email, password)

// Vérifier l'authentification
if (authStore.isAuthenticated) {
  console.log('Utilisateur connecté:', authStore.user)
}

// Déconnexion
await authStore.logout()
```

## 📦 Gestion d'État (Pinia)

### Stores Disponibles

1. **authStore** - Gestion utilisateur et authentification
2. **cartStore** - Panier avec persistance
3. **productStore** - Catalogue de produits
4. **notificationStore** - Notifications globales

### Persistance

Les stores suivants persiste leurs données automatiquement :

- `authStore` (user, token)
- `cartStore` (items)

## 🎨 Composants Réutilisables

### NotificationCenter

Affiche les notifications globales. À intégrer dans `App.vue` :

```vue
<template>
  <NotificationCenter />
</template>

<script setup>
import NotificationCenter from '@/components/NotificationCenter.vue'
</script>
```

### Utilisation dans un composant

```javascript
import { useNotificationStore } from '@/stores/notificationStore'

const notificationStore = useNotificationStore()

// Succès
notificationStore.success('Opération réussie!')

// Erreur
notificationStore.error('Une erreur est survenue')

// Info
notificationStore.info('Information importante')

// Avertissement
notificationStore.warning('Attention!')
```

## 🛡️ Protection des Routes

Utilisez le composable `useRouteGuards` pour protéger les routes :

```javascript
import { useRouteGuards } from '@/composables/useRouteGuards'

const { requireAuth, requireAdmin } = useRouteGuards()

export const router = createRouter({
  routes: [
    {
      path: '/mon-compte',
      component: MyAccountView,
      beforeEnter: requireAuth,
    },
    {
      path: '/admin',
      component: AdminDashboard,
      beforeEnter: requireAdmin,
    },
  ],
})
```

## 📡 Intercepteurs Axios

Les intercepteurs sont automatiquement configurés dans `src/services/api.js` :

- **Requête** : Ajoute le token d'authentification si disponible
- **Réponse** : Gère les erreurs 401 (déconnexion automatique)

## 🚀 Démarrage du Projet

```bash
# Installation des dépendances
npm install

# Développement
npm run dev

# Build pour production
npm run build

# Prévisualisation du build
npm run preview
```

## 📝 Conventions de Codage

### Nommage des Services

- Noms au pluriel : `productService`, `cartService`, `authService`
- Méthodes en camelCase : `getAllProducts()`, `addToCart()`
- Verbes explicites : `get`, `create`, `update`, `delete`, `fetch`

### Noms des Stores

- Suffixe `-Store` : `useAuthStore`, `useCartStore`
- Fonction composable avec `use` : `useAuthStore()`

### Structure des Composants

```vue
<template>
  <!-- Contenu du template -->
</template>

<script setup>
// Imports
import { useRouter } from 'vue-router'
import { useNotificationStore } from '@/stores/notificationStore'

// Stores et composables
const router = useRouter()
const notificationStore = useNotificationStore()

// État réactif
const data = ref('')

// Computed properties
const computedValue = computed(() => {})

// Fonctions
function myFunction() {}

// Lifecycle
onMounted(() => {})
</script>

<style scoped>
/* Styles spécifiques au composant */
</style>
```

## ✅ Checklist d'Intégration

- [ ] `.env.local` créé avec `VITE_API_URL`
- [ ] NotificationCenter ajouté à `App.vue`
- [ ] Services API testés avec Postman/Insomnia
- [ ] Stores Pinia intégrés
- [ ] Routes protégées configurées
- [ ] Intercepteurs Axios vérifiés

## 🐛 Dépannage

### Le token n'est pas envoyé

Vérifiez que :

- Le token est bien stocké dans `localStorage`
- L'intercepteur Axios est actif
- Le header `Authorization` est correct : `Bearer {token}`

### Les notifications n'apparaissent pas

- Vérifiez que `NotificationCenter` est dans `App.vue`
- Vérifiez que le store est correctement initialisé

### L'API retourne 401

- Le token a expiré
- L'utilisateur a été déconnecté côté serveur
- Vérifiez l'implémentation du logout

## 📚 Documentation Supplémentaire

- [Vue 3 Documentation](https://vuejs.org)
- [Pinia Documentation](https://pinia.vuejs.org)
- [Vue Router Documentation](https://router.vuejs.org)
- [Axios Documentation](https://axios-http.com)
