import api from './api'

// ============================================
// SERVICE POUR LES PRODUITS (MONTURES)
// ============================================

export const productService = {
  // Récupérer tous les produits avec filtres optionnels
  getAllProducts: (filters = {}) => {
    return api.get('/products', { params: filters })
  },

  // Récupérer un produit par ID
  getProductById: (id) => {
    return api.get(`/products/${id}`)
  },

  // Récupérer les produits en promotion
  getPromoProducts: () => {
    return api.get('/products/filter/promo')
  },

  // Rechercher les produits
  searchProducts: (query) => {
    return api.get('/products/search', { params: { q: query } })
  },

  // Filtrer les produits
  filterProducts: (filters) => {
    return api.post('/products/filter', filters)
  },
}

// ============================================
// SERVICE POUR LE PANIER
// ============================================

export const cartService = {
  // Ajouter un produit au panier
  addToCart: (productId, quantity = 1) => {
    return api.post('/cart/add', { product_id: productId, quantity })
  },

  // Récupérer le panier
  getCart: () => {
    return api.get('/cart')
  },

  // Mettre à jour la quantité d'un article
  updateCartItem: (cartItemId, quantity) => {
    return api.put(`/cart/${cartItemId}`, { quantity })
  },

  // Supprimer un article du panier
  removeFromCart: (cartItemId) => {
    return api.delete(`/cart/${cartItemId}`)
  },

  // Vider le panier
  clearCart: () => {
    return api.delete('/cart')
  },
}

// ============================================
// SERVICE POUR LES RENDEZ-VOUS
// ============================================

export const appointmentService = {
  // Créer un rendez-vous
  createAppointment: (appointmentData) => {
    return api.post('/appointments', appointmentData)
  },

  // Récupérer les rendez-vous de l'utilisateur
  getUserAppointments: () => {
    return api.get('/appointments/my-appointments')
  },

  // Récupérer un rendez-vous spécifique
  getAppointmentById: (id) => {
    return api.get(`/appointments/${id}`)
  },

  // Mettre à jour un rendez-vous
  updateAppointment: (id, data) => {
    return api.put(`/appointments/${id}`, data)
  },

  // Annuler un rendez-vous
  cancelAppointment: (id) => {
    return api.delete(`/appointments/${id}`)
  },

  // Récupérer les créneaux disponibles
  getAvailableSlots: (date) => {
    return api.get('/appointments/available-slots', { params: { date } })
  },
}

// ============================================
// SERVICE POUR LES ARTICLES DE BLOG
// ============================================

export const blogService = {
  // Récupérer tous les articles
  getAllArticles: (page = 1, perPage = 10) => {
    return api.get('/blog', { params: { page, per_page: perPage } })
  },

  // Récupérer un article par ID
  getArticleById: (id) => {
    return api.get(`/blog/${id}`)
  },

  // Récupérer les derniers articles
  getLatestArticles: (limit = 6) => {
    return api.get('/blog/latest', { params: { limit } })
  },

  // Récupérer les articles par catégorie
  getArticlesByCategory: (category) => {
    return api.get(`/blog/category/${category}`)
  },

  // Rechercher des articles
  searchArticles: (query) => {
    return api.get('/blog/search', { params: { q: query } })
  },
}

// ============================================
// SERVICE POUR LES CONSEILS/QUIZ
// ============================================

export const adviceQuizService = {
  // Soumettre une demande de conseil
  submitAdviceRequest: (adviceData) => {
    return api.post('/advice-requests', adviceData)
  },

  // Récupérer un quiz
  getQuiz: (quizId) => {
    return api.get(`/quizzes/${quizId}`)
  },

  // Soumettre les réponses du quiz
  submitQuizAnswers: (quizId, answers) => {
    return api.post(`/quizzes/${quizId}/submit`, { answers })
  },

  // Récupérer tous les quiz disponibles
  getAllQuizzes: () => {
    return api.get('/quizzes')
  },
}

// ============================================
// SERVICE POUR LE CONTACT
// ============================================

export const contactService = {
  // Envoyer un message de contact
  sendContactMessage: (contactData) => {
    return api.post('/contact', contactData)
  },
}

// ============================================
// SERVICE POUR L'AUTHENTIFICATION
// ============================================

export const authService = {
  // Connexion
  login: (email, password) => {
    return api.post('/auth/login', { email, password })
  },

  // Inscription
  register: (userData) => {
    return api.post('/auth/register', userData)
  },

  // Déconnexion
  logout: () => {
    return api.post('/auth/logout')
  },

  // Récupérer le profil utilisateur
  getProfile: () => {
    return api.get('/auth/profile')
  },

  // Mettre à jour le profil
  updateProfile: (profileData) => {
    return api.put('/auth/profile', profileData)
  },

  // Réinitialiser le mot de passe
  resetPassword: (email) => {
    return api.post('/auth/forgot-password', { email })
  },
}

// ============================================
// SERVICE POUR LES COMMANDES
// ============================================

export const orderService = {
  // Créer une commande
  createOrder: (orderData) => {
    return api.post('/orders', orderData)
  },

  // Récupérer les commandes de l'utilisateur
  getUserOrders: () => {
    return api.get('/orders/my-orders')
  },

  // Récupérer une commande spécifique
  getOrderById: (id) => {
    return api.get(`/orders/${id}`)
  },

  // Mettre à jour une commande
  updateOrder: (id, data) => {
    return api.put(`/orders/${id}`, data)
  },

  // Annuler une commande
  cancelOrder: (id) => {
    return api.delete(`/orders/${id}`)
  },
}

// ============================================
// SERVICE POUR LES SERVICES
// ============================================

export const servicesService = {
  // Récupérer tous les services
  getAllServices: () => {
    return api.get('/services')
  },

  // Récupérer un service par ID
  getServiceById: (id) => {
    return api.get(`/services/${id}`)
  },
}

// ============================================
// SERVICE POUR LES PROMOTIONS
// ============================================

export const promoService = {
  // Récupérer toutes les promotions actives
  getActivePromos: () => {
    return api.get('/promos/active')
  },

  // Récupérer une promotion par ID
  getPromoById: (id) => {
    return api.get(`/promos/${id}`)
  },
}
