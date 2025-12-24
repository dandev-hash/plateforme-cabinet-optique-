<template>
    <div class="space-y-6">
        <!-- Tabs -->
        <div class="bg-white rounded-2xl shadow-lg p-2 inline-flex gap-2">
            <button @click="activeTab = 'upcoming'" :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all',
                activeTab === 'upcoming'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
            ]">
                À Venir (2)
            </button>
            <button @click="activeTab = 'past'" :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all',
                activeTab === 'past'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
            ]">
                Passés (3)
            </button>
        </div>

        <!-- Rendez-vous À Venir -->
        <div v-show="activeTab === 'upcoming'" class="space-y-4">
            <div v-for="appointment in upcomingAppointments" :key="appointment.id"
                class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div class="flex flex-col md:flex-row">
                    <div
                        class="bg-gradient-to-br from-green-600 to-emerald-600 text-white p-6 md:w-48 flex flex-col items-center justify-center">
                        <div class="text-6xl font-bold">{{ appointment.day }}</div>
                        <div class="text-lg font-semibold uppercase">{{ appointment.month }}</div>
                        <div class="text-sm opacity-90">{{ appointment.year }}</div>
                        <div class="mt-4 text-2xl font-bold">{{ appointment.time }}</div>
                    </div>
                    <div class="flex-1 p-6">
                        <div class="flex items-start justify-between mb-4">
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ appointment.type }}</h3>
                                <p class="text-gray-600 flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    {{ appointment.practitioner }}
                                </p>
                            </div>
                            <span class="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-bold">
                                {{ appointment.status }}
                            </span>
                        </div>
                        <div class="grid md:grid-cols-2 gap-4 mb-4">
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Durée: {{ appointment.duration }}</span>
                            </div>
                            <div class="flex items-center gap-2 text-gray-600">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                <span>{{ appointment.location }}</span>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button
                                class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-xl transition-all">
                                Modifier
                            </button>
                            <button
                                class="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-all">
                                Annuler
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Rendez-vous Passés -->
        <div v-show="activeTab === 'past'" class="space-y-4">
            <div v-for="appointment in pastAppointments" :key="appointment.id"
                class="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div class="flex flex-col md:flex-row">
                    <div
                        class="bg-gradient-to-br from-gray-700 to-gray-900 text-white p-6 md:w-48 flex flex-col items-center justify-center">
                        <div class="text-6xl font-bold">{{ appointment.day }}</div>
                        <div class="text-lg font-semibold uppercase">{{ appointment.month }}</div>
                        <div class="text-sm opacity-90">{{ appointment.year }}</div>
                        <div class="mt-4 text-2xl font-bold">{{ appointment.time }}</div>
                    </div>
                    <div class="flex-1 p-6">
                        <div class="flex items-start justify-between mb-4">
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ appointment.type }}</h3>
                                <p class="text-gray-600 flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    {{ appointment.practitioner }}
                                </p>
                            </div>
                            <span class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-bold">
                                Terminé
                            </span>
                        </div>
                        <p class="text-gray-600 mb-4">{{ appointment.notes }}</p>
                        <button
                            class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all inline-flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Télécharger le Rapport
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('upcoming')

const upcomingAppointments = ref([
    {
        id: 1,
        day: '18',
        month: 'DÉC',
        year: '2025',
        time: '14:30',
        type: 'Examen de Vue Complet',
        practitioner: 'Dr. Martin Kouadio',
        duration: '45 minutes',
        location: 'Cabinet Principal',
        status: 'Confirmé'
    },
    {
        id: 2,
        day: '22',
        month: 'DÉC',
        year: '2025',
        time: '10:00',
        type: 'Ajustement de Lunettes',
        practitioner: 'Service Client',
        duration: '15 minutes',
        location: 'Boutique Centre-ville',
        status: 'Confirmé'
    }
])

const pastAppointments = ref([
    {
        id: 3,
        day: '05',
        month: 'DÉC',
        year: '2025',
        time: '15:00',
        type: 'Examen de Vue',
        practitioner: 'Dr. Sophie Mbemba',
        notes: 'Prescription mise à jour. Nouvelle ordonnance pour verres progressifs.'
    },
    {
        id: 4,
        day: '20',
        month: 'NOV',
        year: '2025',
        time: '11:30',
        type: 'Contrôle de Suivi',
        practitioner: 'Dr. Martin Kouadio',
        notes: 'Adaptation aux nouvelles lunettes réussie. Aucun problème signalé.'
    },
    {
        id: 5,
        day: '10',
        month: 'OCT',
        year: '2025',
        time: '14:00',
        type: 'Choix de Monture',
        practitioner: 'Conseiller Style',
        notes: 'Monture Ray-Ban RB2132 sélectionnée et commandée.'
    }
])
</script>
