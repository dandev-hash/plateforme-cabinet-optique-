<template>
    <div class="space-y-6">
        <!-- Header avec Actions -->
        <div class="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div class="flex-1">
                <h2 class="text-2xl font-bold text-gray-900 mb-2">Ma Messagerie</h2>
                <p class="text-gray-600">Gérez vos emails et brouillons</p>
            </div>
            <button @click="showComposeModal = true"
                class="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Nouveau Message
            </button>
        </div>

        <!-- Stats Messagerie -->
        <div class="grid md:grid-cols-4 gap-4">
            <div class="bg-white rounded-xl shadow-lg p-4 border-l-4 border-green-600">
                <div class="text-3xl font-bold text-gray-900">{{ sentMessages.length }}</div>
                <div class="text-sm text-gray-600">Messages Envoyés</div>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-4 border-l-4 border-blue-600">
                <div class="text-3xl font-bold text-gray-900">{{ receivedMessages.length }}</div>
                <div class="text-sm text-gray-600">Messages Reçus</div>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-4 border-l-4 border-yellow-600">
                <div class="text-3xl font-bold text-gray-900">{{ drafts.length }}</div>
                <div class="text-sm text-gray-600">Brouillons</div>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-4 border-l-4 border-red-600">
                <div class="text-3xl font-bold text-gray-900">{{ failedMessages.length }}</div>
                <div class="text-sm text-gray-600">Non Envoyés</div>
            </div>
        </div>

        <!-- Tabs -->
        <div class="bg-white rounded-2xl shadow-lg p-2 inline-flex gap-2">
            <button @click="activeTab = 'sent'" :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all',
                activeTab === 'sent'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
            ]">
                Envoyés ({{ sentMessages.length }})
            </button>
            <button @click="activeTab = 'received'" :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all',
                activeTab === 'received'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
            ]">
                Reçus ({{ receivedMessages.length }})
            </button>
            <button @click="activeTab = 'drafts'" :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all',
                activeTab === 'drafts'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
            ]">
                Brouillons ({{ drafts.length }})
            </button>
            <button @click="activeTab = 'failed'" :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all',
                activeTab === 'failed'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
            ]">
                Non Envoyés ({{ failedMessages.length }})
            </button>
        </div>

        <!-- Messages Envoyés -->
        <div v-show="activeTab === 'sent'" class="space-y-3">
            <div v-for="message in sentMessages" :key="message.id"
                class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-start gap-4 flex-1">
                        <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h4 class="font-bold text-gray-900 mb-1">{{ message.subject }}</h4>
                            <p class="text-sm text-gray-600 mb-2">À: {{ message.to }}</p>
                            <p class="text-sm text-gray-700 line-clamp-2">{{ message.content }}</p>
                        </div>
                    </div>
                    <div class="text-right flex-shrink-0 ml-4">
                        <div class="text-xs text-gray-500 mb-2">{{ message.date }}</div>
                        <span class="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                            Envoyé
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Messages Reçus -->
        <div v-show="activeTab === 'received'" class="space-y-3">
            <div v-for="message in receivedMessages" :key="message.id" :class="[
                'rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer',
                message.read ? 'bg-white' : 'bg-blue-50 border-2 border-blue-200'
            ]">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-start gap-4 flex-1">
                        <div :class="[
                            'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                            message.read ? 'bg-gray-100' : 'bg-blue-100'
                        ]">
                            <svg class="w-6 h-6" :class="message.read ? 'text-gray-600' : 'text-blue-600'" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h4
                                :class="['mb-1', message.read ? 'font-semibold text-gray-900' : 'font-bold text-gray-900']">
                                {{ message.subject }}
                            </h4>
                            <p class="text-sm text-gray-600 mb-2">De: {{ message.from }}</p>
                            <p class="text-sm text-gray-700 line-clamp-2">{{ message.content }}</p>
                        </div>
                    </div>
                    <div class="text-right flex-shrink-0 ml-4">
                        <div class="text-xs text-gray-500 mb-2">{{ message.date }}</div>
                        <span v-if="!message.read"
                            class="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            Nouveau
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Brouillons -->
        <div v-show="activeTab === 'drafts'" class="space-y-3">
            <div v-for="draft in drafts" :key="draft.id"
                class="bg-yellow-50 border-2 border-yellow-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-start gap-4 flex-1">
                        <div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h4 class="font-bold text-gray-900 mb-1">{{ draft.subject || '(Sans objet)' }}</h4>
                            <p class="text-sm text-gray-600 mb-2">À: {{ draft.to || '(Destinataire non défini)' }}</p>
                            <p class="text-sm text-gray-700 line-clamp-2">{{ draft.content || '(Contenu vide)' }}</p>
                        </div>
                    </div>
                    <div class="text-right flex-shrink-0 ml-4">
                        <div class="text-xs text-gray-500 mb-3">{{ draft.savedAt }}</div>
                        <div class="flex flex-col gap-2">
                            <button
                                class="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-all text-xs">
                                Continuer
                            </button>
                            <button
                                class="bg-red-100 hover:bg-red-200 text-red-600 font-semibold px-4 py-2 rounded-lg transition-all text-xs">
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Non Envoyés -->
        <div v-show="activeTab === 'failed'" class="space-y-3">
            <div v-for="failed in failedMessages" :key="failed.id"
                class="bg-red-50 border-2 border-red-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-start gap-4 flex-1">
                        <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h4 class="font-bold text-gray-900 mb-1">{{ failed.subject }}</h4>
                            <p class="text-sm text-gray-600 mb-2">À: {{ failed.to }}</p>
                            <p class="text-sm text-red-600 font-semibold mb-2">
                                <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {{ failed.error }}
                            </p>
                            <p class="text-sm text-gray-700 line-clamp-2">{{ failed.content }}</p>
                        </div>
                    </div>
                    <div class="text-right flex-shrink-0 ml-4">
                        <div class="text-xs text-gray-500 mb-3">{{ failed.attemptDate }}</div>
                        <button
                            class="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-all text-xs mb-2 w-full">
                            Réessayer
                        </button>
                        <button
                            class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-lg transition-all text-xs w-full">
                            Modifier
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('sent')
const showComposeModal = ref(false)

const sentMessages = ref([
    {
        id: 1,
        to: 'contact@lagloire.cg',
        subject: 'Demande de Renseignements - Verres Progressifs',
        content: 'Bonjour, je souhaiterais obtenir plus d\'informations concernant vos verres progressifs et les tarifs associés. Merci de votre retour.',
        date: '10 Déc 2025, 14:30',
        status: 'sent'
    },
    {
        id: 2,
        to: 'support@lagloire.cg',
        subject: 'Confirmation de Rendez-vous',
        content: 'Je confirme mon rendez-vous du 18 décembre à 14h30 pour un examen de vue complet.',
        date: '8 Déc 2025, 10:15',
        status: 'sent'
    }
])

const receivedMessages = ref([
    {
        id: 3,
        from: 'contact@lagloire.cg',
        subject: 'RE: Demande de Renseignements - Verres Progressifs',
        content: 'Bonjour Jean-Pierre, merci pour votre message. Nos verres progressifs sont disponibles à partir de 85 000 FCFA. Je reste à votre disposition pour toute information complémentaire.',
        date: '11 Déc 2025, 09:20',
        read: false
    },
    {
        id: 4,
        from: 'newsletter@lagloire.cg',
        subject: 'Nouveautés Décembre 2025 - Collection Exclusive',
        content: 'Découvrez notre nouvelle collection de montures design avec 20% de réduction pour les membres...',
        date: '9 Déc 2025, 08:00',
        read: true
    }
])

const drafts = ref([
    {
        id: 5,
        to: 'contact@lagloire.cg',
        subject: 'Question sur les Montures Ray-Ban',
        content: 'Bonjour, je voudrais savoir si vous avez en stock...',
        savedAt: '12 Déc 2025, 16:45'
    },
    {
        id: 6,
        to: '',
        subject: '',
        content: 'Je souhaiterais prendre rendez-vous pour...',
        savedAt: '11 Déc 2025, 11:20'
    }
])

const failedMessages = ref([
    {
        id: 7,
        to: 'info@lagloire.cg',
        subject: 'Réclamation - Délai de Livraison',
        content: 'Bonjour, ma commande n\'a toujours pas été livrée malgré le délai annoncé...',
        attemptDate: '13 Déc 2025, 18:30',
        error: 'Échec d\'envoi: Problème de connexion'
    }
])
</script>
