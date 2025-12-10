<template>
    <div class="fixed top-4 right-4 z-50 space-y-2 pointer-events-none">
        <transition-group name="notification-list" tag="div">
            <div v-for="notification in notificationStore.notifications" :key="notification.id" :class="[
                'p-4 rounded-lg shadow-lg text-white pointer-events-auto max-w-md animate-in fade-in slide-in-from-top-2 duration-300',
                notificationClasses(notification.type),
            ]">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <component :is="getIcon(notification.type)" class="h-5 w-5 flex-shrink-0" />
                        <span>{{ notification.message }}</span>
                    </div>
                    <button @click="notificationStore.removeNotification(notification.id)"
                        class="ml-2 text-white/70 hover:text-white transition" aria-label="Fermer">
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script setup>
import { useNotificationStore } from '@/stores/notificationStore';

const notificationStore = useNotificationStore();

function notificationClasses(type) {
    const classes = {
        success: 'bg-green-500 dark:bg-green-600',
        error: 'bg-red-500 dark:bg-red-600',
        info: 'bg-blue-500 dark:bg-blue-600',
        warning: 'bg-yellow-500 dark:bg-yellow-600',
    };
    return classes[type] || classes.info;
}

function getIcon(type) {
    const icons = {
        success: 'IconCheckCircle',
        error: 'IconExclamationCircle',
        info: 'IconInformationCircle',
        warning: 'IconExclamationTriangle',
    };
    return icons[type] || icons.info;
}
</script>

<style scoped>
.notification-list-enter-active,
.notification-list-leave-active {
    transition: all 0.3s ease;
}

.notification-list-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.notification-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
