<template>
    <div class="space-y-6">
        <!-- Informations du Compte -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
                <h3 class="text-xl font-bold flex items-center gap-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Informations du Compte
                </h3>
            </div>
            <div class="p-8 space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Nom
                            Complet</label>
                        <input type="text" v-model="userInfo.name" :disabled="!editMode.profile"
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors disabled:bg-gray-100" />
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Adresse
                            Email</label>
                        <input type="email" v-model="userInfo.email" :disabled="!editMode.profile"
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors disabled:bg-gray-100" />
                    </div>
                    <div>
                        <label
                            class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Téléphone</label>
                        <input type="tel" v-model="userInfo.phone" :disabled="!editMode.profile"
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors disabled:bg-gray-100" />
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Date de
                            Naissance</label>
                        <input type="date" v-model="userInfo.birthdate" :disabled="!editMode.profile"
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors disabled:bg-gray-100" />
                    </div>
                </div>
                <div>
                    <label
                        class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Adresse</label>
                    <textarea v-model="userInfo.address" :disabled="!editMode.profile" rows="3"
                        class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors disabled:bg-gray-100 resize-none"></textarea>
                </div>
                <div class="flex gap-3 pt-4 border-t-2 border-gray-200">
                    <button v-if="!editMode.profile" @click="editMode.profile = true"
                        class="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Modifier
                    </button>
                    <template v-else>
                        <button @click="saveProfile"
                            class="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            Enregistrer
                        </button>
                        <button @click="cancelEdit('profile')"
                            class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-xl transition-all">
                            Annuler
                        </button>
                    </template>
                </div>
            </div>
        </div>

        <!-- Sécurité -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                <h3 class="text-xl font-bold flex items-center gap-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Sécurité du Compte
                </h3>
            </div>
            <div class="p-8">
                <div class="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
                    <div class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <p class="text-sm font-semibold text-blue-900 mb-1">Conseil de Sécurité</p>
                            <p class="text-sm text-blue-700">Utilisez un mot de passe fort avec au moins 8 caractères,
                                incluant
                                majuscules, minuscules et chiffres.</p>
                        </div>
                    </div>
                </div>

                <div class="space-y-4 mb-6">
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Mot de
                            Passe
                            Actuel</label>
                        <input type="password" v-model="passwordForm.current"
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                            placeholder="••••••••" />
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Nouveau
                            Mot de
                            Passe</label>
                        <input type="password" v-model="passwordForm.new"
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                            placeholder="••••••••" />
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Confirmer
                            le
                            Nouveau Mot de Passe</label>
                        <input type="password" v-model="passwordForm.confirm"
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
                            placeholder="••••••••" />
                    </div>
                </div>

                <button
                    class="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    Changer le Mot de Passe
                </button>
            </div>
        </div>

        <!-- Préférences de Notification -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <h3 class="text-xl font-bold flex items-center gap-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    Préférences de Notification
                </h3>
            </div>
            <div class="p-8 space-y-4">
                <div v-for="pref in notificationPreferences" :key="pref.id"
                    class="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div class="flex items-start gap-3">
                        <component :is="pref.icon" class="w-6 h-6 text-gray-600 mt-1" />
                        <div>
                            <h4 class="font-bold text-gray-900">{{ pref.title }}</h4>
                            <p class="text-sm text-gray-600">{{ pref.description }}</p>
                        </div>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="pref.enabled" class="sr-only peer" />
                        <div
                            class="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-600">
                        </div>
                    </label>
                </div>
            </div>
        </div>

        <!-- Zone Danger -->
        <div class="bg-red-50 border-2 border-red-200 rounded-2xl shadow-xl overflow-hidden">
            <div class="bg-red-600 text-white p-6">
                <h3 class="text-xl font-bold flex items-center gap-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Zone Danger
                </h3>
            </div>
            <div class="p-8">
                <div class="mb-6">
                    <h4 class="font-bold text-gray-900 mb-2">Supprimer Mon Compte</h4>
                    <p class="text-sm text-gray-600 mb-4">Cette action est irréversible. Toutes vos données, rendez-vous
                        et
                        préférences seront définitivement supprimés.</p>
                    <button
                        class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Supprimer Mon Compte
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, h } from 'vue'

const props = defineProps({
    user: Object
})

const editMode = ref({
    profile: false
})

const userInfo = ref({
    name: props.user?.name || '',
    email: props.user?.email || '',
    phone: props.user?.phone || '',
    birthdate: '1985-05-15',
    address: '123 Avenue de la République, Brazzaville, Congo'
})

const passwordForm = ref({
    current: '',
    new: '',
    confirm: ''
})

const notificationPreferences = ref([
    {
        id: 1,
        title: 'Rappels de Rendez-vous',
        description: 'Recevoir des rappels par email avant vos rendez-vous',
        enabled: true,
        icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' })
        ])
    },
    {
        id: 2,
        title: 'Nouveautés & Promotions',
        description: 'Être informé des nouvelles collections et offres spéciales',
        enabled: true,
        icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' })
        ])
    },
    {
        id: 3,
        title: 'Nouveaux Articles de Blog',
        description: 'Recevoir une notification lors de la publication d\'articles',
        enabled: false,
        icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
        ])
    },
    {
        id: 4,
        title: 'Messages & Réponses',
        description: 'Notifications pour les nouveaux messages et réponses',
        enabled: true,
        icon: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
        ])
    }
])

const saveProfile = () => {
    // Logique de sauvegarde
    editMode.value.profile = false
    console.log('Profil sauvegardé:', userInfo.value)
}

const cancelEdit = (section) => {
    editMode.value[section] = false
    // Reset des valeurs
}
</script>
