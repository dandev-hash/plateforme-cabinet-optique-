<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <!-- Redirection si non connecté -->
        <div v-if="!isAuthenticated" class="py-12">
            <div class="container mx-auto px-4 max-w-2xl">
                <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                    <div
                        class="relative bg-gradient-to-br from-gray-900 via-green-800 to-black text-white overflow-hidden p-8">
                        <!-- Animated background patterns -->
                        <div class="absolute inset-0 overflow-hidden opacity-20">
                            <div
                                class="absolute top-0 left-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-blob">
                            </div>
                            <div
                                class="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-blob animation-delay-2000">
                            </div>
                        </div>

                        <div class="relative z-10 text-center">
                            <div class="inline-block mb-4">
                                <span
                                    class="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse-slow shadow-lg shadow-red-500/50">
                                    🔒 ACCÈS RESTREINT
                                </span>
                            </div>
                            <h1 class="text-3xl font-bold mb-2">Connexion Requise</h1>
                            <p class="text-gray-300 text-lg">Veuillez vous connecter pour accéder à votre compte</p>
                        </div>

                        <!-- Separator line -->
                        <div
                            class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent">
                        </div>
                    </div>

                    <div class="p-8 text-center">
                        <div class="mb-6">
                            <svg class="w-24 h-24 mx-auto text-gray-300" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <p class="text-gray-600 mb-8">
                            Pour accéder à votre espace personnel, gérer vos rendez-vous et consulter votre historique,
                            veuillez vous connecter ou créer un compte.
                        </p>

                        <!-- Bandeau Mode Test -->
                        <div class="mb-8 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-xl">
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <div class="flex-1">
                                    <p class="text-sm font-semibold text-yellow-900 mb-1">Mode Test</p>
                                    <p class="text-sm text-yellow-700 mb-3">Le backend n'est pas encore disponible.
                                        Utilisez le bouton ci-dessous pour simuler une connexion et prévisualiser
                                        l'interface.</p>
                                    <button @click="simulateLogin"
                                        class="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-4 py-2 rounded-lg transition-all text-sm">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                        </svg>
                                        <span>Activer Mode Test (Prévisualisation)</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <RouterLink to="/login"
                                class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                <span>Se Connecter</span>
                            </RouterLink>
                            <RouterLink to="/"
                                class="inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span>Retour à l'Accueil</span>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Interface pour utilisateur connecté -->
        <div v-else class="flex h-screen overflow-hidden">
            <!-- Sidebar Navigation -->
            <aside :class="[
                'fixed inset-y-0 left-0 z-50 w-80 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out shadow-2xl',
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            ]">
                <!-- Header Sidebar -->
                <div
                    class="relative bg-gradient-to-br from-gray-900 via-green-800 to-black p-6 border-b border-gray-700">
                    <!-- Animated background -->
                    <div class="absolute inset-0 overflow-hidden opacity-10">
                        <div class="absolute top-0 left-0 w-64 h-64 bg-green-500/30 rounded-full blur-3xl animate-blob">
                        </div>
                    </div>

                    <div class="relative z-10">
                        <div class="flex items-center gap-4 mb-4">
                            <div
                                class="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
                                {{ userInitials }}
                            </div>
                            <div class="flex-1 min-w-0">
                                <h2 class="font-bold text-lg truncate">{{ user.name }}</h2>
                                <p class="text-xs text-gray-300 truncate">{{ user.email }}</p>
                            </div>
                        </div>
                        <div class="inline-block">
                            <span
                                class="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                                ✨ MEMBRE ACTIF
                            </span>
                        </div>
                    </div>

                    <!-- Close button -->
                    <button @click="sidebarOpen = false"
                        class="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Navigation Menu -->
                <nav class="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-1">
                    <button v-for="item in menuItems" :key="item.id" @click="activeSection = item.id" :class="[
                        'w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group',
                        activeSection === item.id
                            ? 'bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg shadow-green-500/50'
                            : 'hover:bg-white/10'
                    ]">
                        <div :class="[
                            'w-10 h-10 rounded-lg flex items-center justify-center transition-transform',
                            activeSection === item.id
                                ? 'bg-white/20 scale-110'
                                : 'bg-white/5 group-hover:scale-110'
                        ]">
                            <component :is="item.icon" class="w-5 h-5" />
                        </div>
                        <div class="flex-1 text-left">
                            <div class="font-semibold">{{ item.label }}</div>
                            <div class="text-xs text-gray-400">{{ item.description }}</div>
                        </div>
                        <span v-if="item.badge" class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {{ item.badge }}
                        </span>
                    </button>
                </nav>

                <!-- Footer Sidebar -->
                <div class="p-4 border-t border-gray-700 space-y-2">
                    <button @click="handleLogout"
                        class="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition-all group">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span class="font-semibold">Déconnexion</span>
                    </button>
                </div>
            </aside>

            <!-- Overlay -->
            <div v-if="sidebarOpen" @click="sidebarOpen = false" class="fixed inset-0 bg-black/50 z-40"></div>

            <!-- Main Content Area -->
            <main class="flex-1 overflow-y-auto scrollbar-hide">
                <!-- Header with menu burger -->
                <header class="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
                    <div class="px-4 py-4 flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <button @click="sidebarOpen = !sidebarOpen"
                                class="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            <div>
                                <h1 class="text-2xl font-bold text-gray-900">{{ currentSectionTitle }}</h1>
                                <p class="text-sm text-gray-500">{{ currentSectionDescription }}</p>
                            </div>
                        </div>
                        <RouterLink to="/"
                            class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span class="font-semibold">Accueil</span>
                        </RouterLink>
                    </div>
                </header>

                <!-- Content Sections -->
                <div class="p-6">
                    <!-- Dashboard Overview -->
                    <div v-show="activeSection === 'dashboard'" class="space-y-6">
                        <DashboardSection :user="user" />
                    </div>

                    <!-- Rendez-vous -->
                    <div v-show="activeSection === 'appointments'" class="space-y-6">
                        <AppointmentsSection />
                    </div>

                    <!-- Montures Likées -->
                    <div v-show="activeSection === 'liked-frames'" class="space-y-6">
                        <LikedFramesSection />
                    </div>

                    <!-- Blog & Témoignages -->
                    <div v-show="activeSection === 'blog'" class="space-y-6">
                        <BlogSection />
                    </div>

                    <!-- Quiz & Tests -->
                    <div v-show="activeSection === 'quizzes'" class="space-y-6">
                        <QuizzesSection />
                    </div>

                    <!-- Messages -->
                    <div v-show="activeSection === 'messages'" class="space-y-6">
                        <MessagesSection />
                    </div>

                    <!-- Paramètres -->
                    <div v-show="activeSection === 'settings'" class="space-y-6">
                        <SettingsSection :user="user" />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, h } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

// Sections Components (inline pour l'instant)
import DashboardSection from '@/components/account/DashboardSection.vue'
import AppointmentsSection from '@/components/account/AppointmentsSection.vue'
import LikedFramesSection from '@/components/account/LikedFramesSection.vue'
import BlogSection from '@/components/account/BlogSection.vue'
import QuizzesSection from '@/components/account/QuizzesSection.vue'
import MessagesSection from '@/components/account/MessagesSection.vue'
import SettingsSection from '@/components/account/SettingsSection.vue'

const router = useRouter()
const authStore = useAuthStore()

const isAuthenticated = computed(() => authStore.isAuthenticated)
const user = computed(() => authStore.user)
const sidebarOpen = ref(false)
const activeSection = ref('dashboard')

// Calcule les initiales de l'utilisateur
const userInitials = computed(() => {
    if (!user.value?.name) return '?'
    const names = user.value.name.split(' ')
    if (names.length >= 2) {
        return (names[0][0] + names[1][0]).toUpperCase()
    }
    return names[0][0].toUpperCase()
})

// Icons as components
const DashboardIcon = h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })
])

// Menu Items
const menuItems = ref([
    {
        id: 'dashboard',
        label: 'Tableau de Bord',
        description: 'Vue d\'ensemble',
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' })
        ]),
        badge: null
    },
    {
        id: 'appointments',
        label: 'Mes Rendez-vous',
        description: 'À venir & passés',
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' })
        ]),
        badge: 2
    },
    {
        id: 'liked-frames',
        label: 'Montures Favoris',
        description: 'Mes coups de cœur',
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' })
        ]),
        badge: null
    },
    {
        id: 'blog',
        label: 'Blog & Témoignages',
        description: 'Mes interactions',
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' })
        ]),
        badge: null
    },
    {
        id: 'quizzes',
        label: 'Quiz & Tests',
        description: 'Mes résultats',
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' })
        ]),
        badge: null
    },
    {
        id: 'messages',
        label: 'Messagerie',
        description: 'Emails & brouillons',
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
        ]),
        badge: 5
    },
    {
        id: 'settings',
        label: 'Paramètres',
        description: 'Mon compte',
        icon: () => h('svg', { class: 'w-5 h-5', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' })
        ]),
        badge: null
    }
])

// Current section info
const currentSectionTitle = computed(() => {
    const item = menuItems.value.find(m => m.id === activeSection.value)
    return item ? item.label : ''
})

const currentSectionDescription = computed(() => {
    const item = menuItems.value.find(m => m.id === activeSection.value)
    return item ? item.description : ''
})

// Gestion de la déconnexion
const handleLogout = async () => {
    try {
        await authStore.logout()
        router.push('/login')
    } catch (error) {
        console.error('Erreur lors de la déconnexion:', error)
    }
}

// Fonction pour simuler une connexion (MODE TEST uniquement)
const simulateLogin = () => {
    // Simulation d'un utilisateur test
    authStore.user = {
        name: 'Jean-Pierre Makaya',
        email: 'jean.makaya@example.cg',
        phone: '+242 06 555 12 34',
        role: 'user'
    }
    authStore.token = 'test-token-demo-mode'
    console.log('✅ Mode Test activé - Utilisateur simulé connecté')
}
</script>

<style scoped>
/* Masquer les scrollbars tout en gardant le scroll fonctionnel */
.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE et Edge */
    scrollbar-width: none;
    /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari et Opera */
}

@keyframes blob {
    0% {
        transform: translate(0px, 0px) scale(1);
    }

    33% {
        transform: translate(30px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }

    100% {
        transform: translate(0px, 0px) scale(1);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

@keyframes pulse-slow {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.8;
    }
}

.animate-pulse-slow {
    animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
