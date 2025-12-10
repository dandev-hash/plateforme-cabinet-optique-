import { defineStore } from 'pinia';
import axios from 'axios';

// --- MOCK DE DONNÉES (Pour simuler la réponse de l'API) ---
// Note: Ces données ont été déplacées ici pour que le Store gère la source de vérité
const MOCK_PRODUCTS_DATA = [
    { id: 1, name: 'Modèle Classique Noir', brand: 'Rayban', type: 'vue', price: 75000, isNew: false, isPromo: true, promoPercentage: 25, originalPrice: 100000, imageUrl: 'https://placehold.co/250x250/F0F0F0/000000?text=RB75K', shape: 'carrée', color: 'noir' },
    { id: 2, name: 'Aviateur Titane Bleu', brand: 'Oakley', type: 'soleil', price: 95000, isNew: true, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/E0F7FA/000000?text=Oak95B', shape: 'aviateur', color: 'bleu' },
    { id: 3, name: 'Ronde Vintage Or', brand: 'Gucci', type: 'vue', price: 120000, isNew: true, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/FFFDE7/000000?text=GC120', shape: 'ronde', color: 'doré' },
    { id: 4, name: 'Papillon Écaille', brand: 'Dior', type: 'soleil', price: 80000, isNew: false, isPromo: true, promoPercentage: 19, originalPrice: 99000, imageUrl: 'https://placehold.co/250x250/FBE9E7/000000?text=DR80P', shape: 'papillon', color: 'marron' },
    { id: 5, name: 'Sportif Rouge Performance', brand: 'Oakley', type: 'soleil', price: 65000, isNew: false, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/FFEBEE/000000?text=OK65R', shape: 'sport', color: 'rouge' },
    { id: 6, name: 'Oeil de Cat Classique', brand: 'Chanel', type: 'vue', price: 140000, isNew: true, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/F0F4C3/000000?text=CH140', shape: 'oeil de chat', color: 'noir' },
    { id: 7, name: 'Légères Acier Gris', brand: 'Silhouette', type: 'vue', price: 115000, isNew: false, isPromo: true, promoPercentage: 12, originalPrice: 130000, imageUrl: 'https://placehold.co/250x250/ECEFF1/000000?text=SL115', shape: 'rectangulaire', color: 'gris' },
    { id: 8, name: 'Carrées Bicolores', brand: 'Prada', type: 'vue', price: 98000, isNew: false, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/E1BEE7/000000?text=PR98K', shape: 'carrée', color: 'bicolore' },
    { id: 9, name: 'Métal Doré Fin', brand: 'Gucci', type: 'soleil', price: 105000, isNew: false, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/FFF8E1/000000?text=GC105', shape: 'ronde', color: 'doré' },
    { id: 10, name: 'Plastique Transparent', brand: 'No Name', type: 'vue', price: 45000, isNew: true, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/E0F7FA/000000?text=NN45T', shape: 'carrée', color: 'transparent' },
    { id: 11, name: 'Grandes Lunettes Soleil', brand: 'Dior', type: 'soleil', price: 135000, isNew: false, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/FFCDD2/000000?text=DR135', shape: 'oversize', color: 'rouge' },
    { id: 12, name: 'Demi-Cerclées Fines', brand: 'Rayban', type: 'vue', price: 85000, isNew: false, isPromo: false, promoPercentage: 0, originalPrice: null, imageUrl: 'https://placehold.co/250x250/D1C4E9/000000?text=RB85D', shape: 'demi-cercle', color: 'argenté' },
];

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [], // L'état principal pour stocker les produits
        loading: false, // Indicateur de chargement
        error: null,    // Message d'erreur
    }),
    
    getters: {
        // Retourne la liste des produits
        allProducts: (state) => state.products,

        // Calcule les marques uniques disponibles
        availableBrands: (state) => {
            const brands = new Set(state.products.map(p => p.brand));
            return Array.from(brands).sort();
        },

        // Calcule les formes uniques disponibles
        availableShapes: (state) => {
            const shapes = new Set(state.products.map(p => p.shape));
            return Array.from(shapes).sort();
        },

        // Calcule les couleurs uniques disponibles
        availableColors: (state) => {
            const colors = new Set(state.products.map(p => p.color));
            return Array.from(colors).sort();
        },
    },

    actions: {
        async loadProducts() {
            if (this.products.length > 0) return; // Ne charge les données qu'une seule fois
            
            this.loading = true;
            this.error = null;

            try {
                // Simulation d'un appel API avec Axios, comme dans la vue précédente
                await new Promise(resolve => setTimeout(resolve, 1500)); 

                // Ici, on utiliserait le résultat de l'appel Axios (response.data)
                // this.products = (await axios.get('/api/products')).data; 
                
                // Utilisation des données mockées
                this.products = MOCK_PRODUCTS_DATA;

            } catch (e) {
                console.error("Erreur lors du chargement des produits:", e);
                this.error = "Une erreur de connexion est survenue lors du chargement du catalogue.";
            } finally {
                this.loading = false;
            }
        },
    },
});