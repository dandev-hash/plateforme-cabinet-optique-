import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // Importation ajoutée pour la clarté

// Définition du store du panier
export const useCartStore = defineStore('cart', () => {
    
    // État du panier: Un tableau d'objets articles
    const items = ref([]); 

    // --- PROPRIÉTÉS CALCULÉES ---

    /**
     * Calcule le nombre total d'articles (quantités cumulées) dans le panier.
     * Utilisé pour le badge du panier.
     */
    const totalItemsCount = computed(() => {
        return items.value.reduce((total, item) => total + item.quantity, 0);
    });
    
    /**
     * NOUVEAU: Calcule le prix total de tous les articles SANS aucune promotion.
     * C'est le prix brut avant réductions (utilisé dans le récapitulatif de paiement).
     */
    const totalPriceWithoutSavings = computed(() => {
        return items.value.reduce((total, item) => {
            // Utilise toujours le prix original ou le prix de base non-promo
            const basePrice = item.originalPrice || item.price; 
            return total + (Math.round(basePrice) * item.quantity);
        }, 0);
    });

    /**
     * Calcule le prix total de tous les articles dans le panier APRÈS promotions.
     * C'est le montant NET que le client doit payer (avant frais de livraison).
     */
    const totalPrice = computed(() => {
        return items.value.reduce((total, item) => {
            const finalPrice = item.isPromo && item.originalPrice ? 
                               item.originalPrice * (1 - item.promoPercentage / 100) : 
                               item.price;
            // Arrondir et multiplier par la quantité
            return total + (Math.round(finalPrice) * item.quantity);
        }, 0);
    });

    /**
     * Calcule le montant total des économies réalisées (différence entre prix original et prix final).
     */
    const totalSavings = computed(() => {
        return items.value.reduce((total, item) => {
            if (item.isPromo && item.originalPrice && item.promoPercentage > 0) {
                const finalPrice = item.originalPrice * (1 - item.promoPercentage / 100);
                const reductionAmount = item.originalPrice - finalPrice;
                // Arrondir et multiplier par la quantité
                return total + (Math.round(reductionAmount) * item.quantity);
            }
            return total;
        }, 0);
    });
    

    // --- ACTIONS ---

    /**
     * Ajoute un article au panier ou incrémente sa quantité s'il existe déjà.
     * @param {Object} product - L'objet produit à ajouter.
     */
    function addItem(product) {
        const existingItem = items.value.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            // Ajouter un nouvel article avec une quantité initiale de 1
            items.value.push({
                ...product,
                quantity: 1,
            });
        }
    }

    /**
     * Met à jour la quantité d'un article spécifique.
     * Si la nouvelle quantité est <= 0, l'article est retiré.
     * @param {number} id - ID de l'article.
     * @param {number} newQuantity - Nouvelle quantité.
     */
    function updateQuantity(id, newQuantity) {
        const itemIndex = items.value.findIndex(item => item.id === id);

        if (itemIndex > -1) {
            if (newQuantity > 0) {
                items.value[itemIndex].quantity = newQuantity;
            } else {
                // Retirer l'article si la quantité demandée est <= 0
                removeItem(id);
            }
        }
    }

    /**
     * Retire un article du panier.
     * @param {number} id - ID de l'article à retirer.
     */
    function removeItem(id) {
        items.value = items.value.filter(item => item.id !== id);
    }
    
    /**
     * Vide complètement le panier (utilisé après une commande réussie).
     */
    function clearCart() {
        items.value = [];
    }


    // Exposer l'état, les getters et les actions
    return { 
        items, 
        totalItemsCount, 
        totalPriceWithoutSavings, // NOUVEAU: Ajouté ici
        totalPrice, 
        totalSavings, 
        addItem, // Votre action originale est conservée
        updateQuantity, 
        removeItem,
        clearCart
    };
}, {
    // --- PERSISTANCE PINIA ---
    // Activation de la persistance pour que le panier survive aux rechargements de page
    persist: true, 
});