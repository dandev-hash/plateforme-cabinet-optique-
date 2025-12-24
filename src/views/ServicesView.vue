<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <!-- Cercles décoratifs en arrière-plan -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Très grands cercles -->
            <div
                class="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-100 rounded-full opacity-60 animate-float">
            </div>
            <div
                class="absolute bottom-0 right-0 w-[480px] h-[480px] bg-black/10 rounded-full opacity-70 animate-float-slow">
            </div>

            <!-- Grands cercles -->
            <div class="absolute top-40 right-10 w-96 h-96 bg-gray-200 rounded-full opacity-50 animate-float-delayed">
            </div>
            <div class="absolute top-96 left-1/4 w-80 h-80 bg-green-50 rounded-full opacity-70 animate-float-slow">
            </div>
            <div class="absolute top-1/2 -right-32 w-72 h-72 bg-emerald-100 rounded-full opacity-55 animate-float">
            </div>
            <div
                class="absolute bottom-20 left-1/2 w-96 h-96 bg-gray-100 rounded-full opacity-60 animate-float-delayed">
            </div>
            <div
                class="absolute top-1/4 right-1/3 w-[420px] h-[420px] bg-white/80 rounded-full opacity-50 animate-float">
            </div>

            <!-- Cercles moyens -->
            <div class="absolute top-1/3 right-1/4 w-56 h-56 bg-emerald-100 rounded-full opacity-60 animate-float">
            </div>
            <div
                class="absolute bottom-1/3 left-10 w-64 h-64 bg-gray-100 rounded-full opacity-55 animate-float-delayed">
            </div>
            <div class="absolute top-2/3 right-20 w-48 h-48 bg-green-200 rounded-full opacity-65 animate-float-slow">
            </div>
            <div class="absolute top-80 left-2/3 w-52 h-52 bg-green-50 rounded-full opacity-50 animate-float"></div>
            <div class="absolute bottom-1/2 right-1/3 w-52 h-52 bg-gray-200 rounded-full opacity-60 animate-float-slow">
            </div>
            <div class="absolute top-20 left-1/3 w-60 h-60 bg-black/10 rounded-full opacity-55 animate-float-delayed">
            </div>
            <div class="absolute bottom-40 right-10 w-56 h-56 bg-white rounded-full opacity-60 animate-float"></div>

            <!-- Petits cercles -->
            <div class="absolute top-1/4 left-1/2 w-36 h-36 bg-green-100 rounded-full opacity-50 animate-float-delayed">
            </div>
            <div class="absolute bottom-40 right-1/3 w-28 h-28 bg-gray-200 rounded-full opacity-60 animate-float"></div>
            <div class="absolute bottom-96 left-1/3 w-36 h-36 bg-emerald-50 rounded-full opacity-55 animate-float-slow">
            </div>
            <div class="absolute top-1/2 left-20 w-24 h-24 bg-green-50 rounded-full opacity-65 animate-float"></div>
            <div
                class="absolute top-20 right-1/4 w-32 h-32 bg-emerald-100 rounded-full opacity-50 animate-float-delayed">
            </div>
            <div class="absolute bottom-60 left-2/3 w-28 h-28 bg-green-200 rounded-full opacity-55 animate-float-slow">
            </div>
            <div class="absolute top-10 left-10 w-32 h-32 bg-black/10 rounded-full opacity-50 animate-float"></div>
            <div
                class="absolute bottom-20 right-1/2 w-36 h-36 bg-white/80 rounded-full opacity-55 animate-float-delayed">
            </div>

            <!-- Très petits cercles d'accent -->
            <div class="absolute top-60 right-1/2 w-20 h-20 bg-green-300 rounded-full opacity-45 animate-float-delayed">
            </div>
            <div class="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gray-300 rounded-full opacity-50 animate-float-slow">
            </div>
            <div class="absolute top-1/3 left-1/3 w-20 h-20 bg-emerald-200 rounded-full opacity-45 animate-float"></div>
            <div
                class="absolute bottom-1/3 right-1/4 w-18 h-18 bg-green-200 rounded-full opacity-50 animate-float-delayed">
            </div>
            <div class="absolute top-2/3 left-10 w-16 h-16 bg-gray-200 rounded-full opacity-45 animate-float-slow">
            </div>
            <div class="absolute top-3/4 right-1/3 w-20 h-20 bg-black/15 rounded-full opacity-50 animate-float"></div>
            <div class="absolute bottom-10 left-1/3 w-18 h-18 bg-white rounded-full opacity-45 animate-float-delayed">
            </div>
            <div class="absolute top-1/2 right-20 w-16 h-16 bg-emerald-100 rounded-full opacity-50 animate-float-slow">
            </div>
            <div class="absolute top-3/4 right-1/3 w-20 h-20 bg-black/10 rounded-full opacity-30 animate-float"></div>
            <div
                class="absolute bottom-10 left-1/3 w-18 h-18 bg-white/80 rounded-full opacity-25 animate-float-delayed">
            </div>
            <div class="absolute top-1/2 right-20 w-16 h-16 bg-emerald-100 rounded-full opacity-30 animate-float-slow">
            </div>
        </div>

        <!-- Stylish Header with Gradient Accent (style Catalogue) -->
        <div class="bg-white border-b border-green-100 py-6 sm:py-8 relative z-10 overflow-hidden">
            <!-- Cercles décoratifs de l'en-tête -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <!-- Gros cercle noir qui recouvre les premières lettres -->
                <div
                    class="absolute -top-20 -left-20 w-[280px] h-[280px] bg-black/15 rounded-full opacity-70 animate-float-slow">
                </div>

                <!-- Cercles d'accent -->
                <div class="absolute top-10 left-1/3 w-32 h-32 bg-green-200 rounded-full opacity-50 animate-float">
                </div>
                <div
                    class="absolute -bottom-10 left-1/4 w-40 h-40 bg-emerald-100 rounded-full opacity-60 animate-float-delayed">
                </div>
                <div class="absolute top-1/2 right-20 w-24 h-24 bg-gray-200 rounded-full opacity-55 animate-float-slow">
                </div>
                <div class="absolute -top-5 right-1/4 w-36 h-36 bg-black/10 rounded-full opacity-50 animate-float">
                </div>
                <div
                    class="absolute bottom-0 right-10 w-28 h-28 bg-green-100 rounded-full opacity-60 animate-float-delayed">
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 relative z-10">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex-1">
                        <h1 class="text-6xl sm:text-7xl font-extrabold text-green-900 tracking-tight mb-2"
                            style="font-family: 'Montserrat', sans-serif;">Services</h1>
                        <p class="text-gray-600 text-lg">Excellence et expertise pour votre santé visuelle avec
                            technologie de pointe.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Separator line -->
        <div class="w-full h-0.5 bg-green-600"></div>

        <!-- Hero Section avec CTA -->
        <div class="relative bg-gradient-to-br from-gray-900 via-green-800 to-black text-white overflow-hidden py-16">
            <!-- Animated background patterns -->
            <div class="absolute inset-0 overflow-hidden opacity-20">
                <div class="absolute top-0 left-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-blob"></div>
                <div
                    class="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-blob animation-delay-2000">
                </div>
                <div
                    class="absolute bottom-0 left-1/3 w-96 h-96 bg-green-600/30 rounded-full blur-3xl animate-blob animation-delay-4000">
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center">
                    <div class="inline-block mb-4">
                        <span
                            class="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-6 py-2 rounded-full text-sm font-bold animate-pulse-slow shadow-lg shadow-green-500/50">
                            ✨ SERVICES PREMIUM
                        </span>
                    </div>
                    <p class="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Des soins d'exception avec technologie de pointe et équipe experte
                    </p>
                    <div class="flex flex-wrap justify-center gap-4">
                        <a href="#services"
                            class="group bg-gradient-to-r from-green-500 to-emerald-500 text-black px-8 py-3 rounded-full font-bold hover:from-green-400 hover:to-emerald-400 transition-all transform hover:scale-110 shadow-2xl hover:shadow-green-500/50">
                            <span class="flex items-center gap-2">
                                Découvrir nos services
                                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </a>
                        <RouterLink to="/rendez-vous"
                            class="group bg-white/10 backdrop-blur-sm text-white border-2 border-green-400 px-8 py-3 rounded-full font-bold hover:bg-green-400 hover:text-black transition-all transform hover:scale-110 shadow-2xl">
                            <span class="flex items-center gap-2">
                                📅 Prendre rendez-vous
                                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </RouterLink>
                    </div>
                </div>
            </div>

            <!-- Separator line -->
            <div
                class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent">
            </div>
        </div>

        <!-- Services Section -->
        <div id="services" class="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative">
            <!-- Cercles décoratifs dans la section services -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
                <div class="absolute top-10 right-10 w-40 h-40 bg-green-100 rounded-full animate-float-slow"></div>
                <div class="absolute top-1/2 left-5 w-32 h-32 bg-gray-200 rounded-full animate-float"></div>
                <div class="absolute bottom-20 right-1/4 w-48 h-48 bg-emerald-50 rounded-full animate-float-delayed">
                </div>
            </div>

            <div class="text-center mb-16 relative z-10">
                <h2
                    class="text-4xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-green-500 bg-clip-text text-transparent mb-4">
                    NOS SERVICES EXPERTS
                </h2>
                <p class="text-xl text-gray-600">Excellence et expertise pour votre santé visuelle</p>
                <div class="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-4"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                <!-- Service 1: Examens -->
                <div
                    class="group bg-white rounded-2xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer border border-gray-200 hover:border-green-500">
                    <div
                        class="bg-gradient-to-br from-green-600 to-emerald-700 p-6 text-center relative overflow-hidden">
                        <div
                            class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,.05)_75%)] bg-[size:20px_20px]">
                        </div>
                        <div
                            class="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                            <svg class="w-10 h-10 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white relative z-10">Examens de Vue</h3>
                    </div>
                    <div class="p-8 bg-gray-50">
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Examen complet</span>
                                    avec technologie avancée</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Dépistage
                                        précoce</span> glaucome et DMLA</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Rapport
                                        détaillé</span> et conseils personnalisés</p>
                            </div>
                        </div>
                        <div class="mt-8 pt-6 border-t border-gray-200">
                            <a href="#tarifs"
                                class="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 group/link">
                                Voir les tarifs
                                <svg class="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Service 2: Lentilles -->
                <div
                    class="group bg-white rounded-2xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer border border-gray-200 hover:border-green-500">
                    <div
                        class="bg-gradient-to-br from-emerald-600 to-green-700 p-6 text-center relative overflow-hidden">
                        <div
                            class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,.05)_75%)] bg-[size:20px_20px]">
                        </div>
                        <div
                            class="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                            <svg class="w-10 h-10 text-emerald-300" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white relative z-10">Lentilles de Contact</h3>
                    </div>
                    <div class="p-8 bg-gray-50">
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Large gamme</span> de
                                    lentilles adaptées</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Essai gratuit</span>
                                    avant achat</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Formation</span> à la
                                    pose et entretien</p>
                            </div>
                        </div>
                        <div class="mt-8 pt-6 border-t border-gray-200">
                            <a href="#tarifs"
                                class="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 group/link">
                                Voir les tarifs
                                <svg class="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Service 3: Ajustements -->
                <div
                    class="group bg-white rounded-2xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer border border-gray-200 hover:border-green-500">
                    <div
                        class="bg-gradient-to-br from-green-600 to-emerald-600 p-6 text-center relative overflow-hidden">
                        <div
                            class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,.05)_75%)] bg-[size:20px_20px]">
                        </div>
                        <div
                            class="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                            <svg class="w-10 h-10 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white relative z-10">Ajustements</h3>
                    </div>
                    <div class="p-8 bg-gray-50">
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Ajustement
                                        gratuit</span> pour nos clients</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Nettoyage</span> par
                                    ultrasons</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Réparations</span>
                                    express disponibles</p>
                            </div>
                        </div>
                        <div class="mt-8 pt-6 border-t border-gray-200">
                            <a href="#tarifs"
                                class="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 group/link">
                                Voir les tarifs
                                <svg class="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Service 4: Réparations -->
                <div
                    class="group bg-white rounded-2xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer border border-gray-200 hover:border-green-500">
                    <div class="bg-gradient-to-br from-orange-500 to-red-500 p-6 text-center relative overflow-hidden">
                        <div
                            class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,.05)_75%)] bg-[size:20px_20px]">
                        </div>
                        <div
                            class="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                            <svg class="w-10 h-10 text-orange-100" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white relative z-10">Réparations</h3>
                    </div>
                    <div class="p-8 bg-gray-50">
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Réparation
                                        express</span> en moins de 30 minutes</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Remplacement</span>
                                    vis, plaquettes, branches</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Soudure laser</span>
                                    pour montures cassées</p>
                            </div>
                        </div>
                        <div class="mt-8 pt-6 border-t border-gray-200">
                            <a href="#tarifs"
                                class="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 group/link">
                                Voir les tarifs
                                <svg class="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Service 5: Conseils -->
                <div
                    class="group bg-white rounded-2xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer border border-gray-200 hover:border-green-500">
                    <div class="bg-gradient-to-br from-pink-500 to-purple-600 p-6 text-center relative overflow-hidden">
                        <div
                            class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,.05)_75%)] bg-[size:20px_20px]">
                        </div>
                        <div
                            class="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                            <svg class="w-10 h-10 text-pink-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white relative z-10">Conseils Experts</h3>
                    </div>
                    <div class="p-8 bg-gray-50">
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Conseils
                                        personnalisés</span> selon votre style</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Aide au choix</span>
                                    montures et verres</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Entretien</span> et
                                    astuces d'utilisation</p>
                            </div>
                        </div>
                        <div class="mt-8 pt-6 border-t border-gray-200">
                            <a href="#tarifs"
                                class="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 group/link">
                                Voir les tarifs
                                <svg class="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Service 6: Urgences -->
                <div
                    class="group bg-white rounded-2xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer border border-gray-200 hover:border-green-500">
                    <div class="bg-gradient-to-br from-red-600 to-red-700 p-6 text-center relative overflow-hidden">
                        <div
                            class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,.05)_75%)] bg-[size:20px_20px]">
                        </div>
                        <div
                            class="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                            <svg class="w-10 h-10 text-red-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-white relative z-10">Service d'Urgence</h3>
                    </div>
                    <div class="p-8 bg-gray-50">
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Disponibilité</span>
                                    7j/7 sur rendez-vous</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Lunettes de
                                        secours</span> disponibles</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <p class="text-gray-700"><span class="font-semibold text-gray-900">Intervention
                                        rapide</span> en cas de casse</p>
                            </div>
                        </div>
                        <div class="mt-8 pt-6 border-t border-gray-200">
                            <RouterLink to="/rendez-vous"
                                class="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 group/link">
                                Appeler maintenant
                                <svg class="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Timeline Process Section -->
        <div class="bg-gradient-to-br from-gray-50 to-white py-20 border-t border-gray-200 relative">
            <!-- Cercles décoratifs -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
                <div class="absolute top-10 right-1/4 w-48 h-48 bg-green-100 rounded-full animate-float"></div>
                <div class="absolute bottom-20 left-1/4 w-56 h-56 bg-emerald-50 rounded-full animate-float-slow"></div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-16 relative">
                    <!-- Route pleine largeur en arrière-plan -->
                    <div class="hidden lg:block absolute pointer-events-none overflow-visible z-0"
                        style="top: -120px; height: 350px; left: -100vw; right: -100vw; width: 200vw;">
                        <svg class="w-full h-full" viewBox="0 0 2400 350" preserveAspectRatio="none"
                            style="overflow: visible;">
                            <defs>
                                <!-- Gradient pour la route -->
                                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style="stop-color:#9ca3af;stop-opacity:1" />
                                    <stop offset="50%" style="stop-color:#d1d5db;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#9ca3af;stop-opacity:1" />
                                </linearGradient>
                                <!-- Ombre de la route -->
                                <filter id="roadShadow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                                    <feOffset dx="2" dy="3" result="offsetblur" />
                                    <feComponentTransfer>
                                        <feFuncA type="linear" slope="0.35" />
                                    </feComponentTransfer>
                                    <feMerge>
                                        <feMergeNode />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            <!-- Route simple avec une légère courbe - PLEINE LARGEUR -->
                            <path d="M 0 270 Q 800 310, 1200 270 Q 1600 230, 2400 270" stroke="url(#roadGradient)"
                                stroke-width="80" fill="none" filter="url(#roadShadow)" opacity="0.75" />

                            <!-- Ligne centrale blanche en pointillés - PLEINE LARGEUR -->
                            <path d="M 0 270 Q 800 310, 1200 270 Q 1600 230, 2400 270" stroke="white" stroke-width="5"
                                fill="none" stroke-dasharray="30,18" opacity="0.85" />
                        </svg>
                    </div>

                    <!-- Personnage et éléments décoratifs avec aspect ratio préservé -->
                    <div class="hidden lg:block absolute inset-0 pointer-events-none overflow-visible z-50"
                        style="top: -120px; height: 350px;">
                        <svg class="w-full h-full" viewBox="0 0 1200 350" preserveAspectRatio="xMidYMid meet"
                            style="overflow: visible;">

                            <!-- Personnage - Image externe avec tête qui sort et pieds sur la route -->
                            <g transform="translate(180, 120)">
                                <image href="/images/character.png" x="-150" y="-150" width="300" height="300"
                                    preserveAspectRatio="xMidYMid meet" />
                            </g>

                            <!-- Nuages légers près du soleil -->
                            <g opacity="0.4">
                                <ellipse cx="950" cy="40" rx="35" ry="14" fill="#e5e7eb" />
                                <ellipse cx="970" cy="42" rx="28" ry="11" fill="#e5e7eb" />
                                <ellipse cx="1000" cy="70" rx="30" ry="12" fill="#e5e7eb" />
                                <ellipse cx="1020" cy="72" rx="25" ry="10" fill="#e5e7eb" />
                            </g>

                            <!-- Soleil -->
                            <circle cx="1100" cy="50" r="22" fill="#fbbf24" opacity="0.6" />
                            <circle cx="1100" cy="50" r="16" fill="#fde047" opacity="0.7" />
                        </svg>
                    </div>

                    <h2
                        class="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 relative z-10">
                        VOTRE PARCOURS CLIENT
                    </h2>
                    <p class="text-xl text-gray-600 relative z-10">Un processus simple et professionnel en 5 étapes</p>
                    <div class="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-4 relative z-10">
                    </div>
                </div>

                <div class="relative">
                    <!-- Ligne de connexion -->
                    <div
                        class="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 transform -translate-y-1/2">
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        <!-- Étape 1 -->
                        <div class="relative group">
                            <div
                                class="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all hover:-translate-y-2 h-full flex flex-col">
                                <div
                                    class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                                    <span class="text-3xl font-bold text-white">1</span>
                                </div>
                                <h3 class="text-lg font-bold text-gray-900 mb-2 text-center">Prise de RDV</h3>
                                <p class="text-sm text-gray-600 text-center flex-grow">En ligne ou par téléphone</p>
                            </div>
                        </div>

                        <!-- Étape 2 -->
                        <div class="relative group">
                            <div
                                class="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all hover:-translate-y-2 h-full flex flex-col">
                                <div
                                    class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                                    <span class="text-3xl font-bold text-white">2</span>
                                </div>
                                <h3 class="text-lg font-bold text-gray-900 mb-2 text-center">Examen Complet</h3>
                                <p class="text-sm text-gray-600 text-center flex-grow">Test de vue avec équipements de
                                    pointe</p>
                            </div>
                        </div>

                        <!-- Étape 3 -->
                        <div class="relative group">
                            <div
                                class="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all hover:-translate-y-2 h-full flex flex-col">
                                <div
                                    class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                                    <span class="text-3xl font-bold text-white">3</span>
                                </div>
                                <h3 class="text-lg font-bold text-gray-900 mb-2 text-center">Choix Monture</h3>
                                <p class="text-sm text-gray-600 text-center flex-grow">Conseils personnalisés pour votre
                                    style</p>
                            </div>
                        </div>

                        <!-- Étape 4 -->
                        <div class="relative group">
                            <div
                                class="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all hover:-translate-y-2 h-full flex flex-col">
                                <div
                                    class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                                    <span class="text-3xl font-bold text-white">4</span>
                                </div>
                                <h3 class="text-lg font-bold text-gray-900 mb-2 text-center">Fabrication</h3>
                                <p class="text-sm text-gray-600 text-center flex-grow">Montage précis de vos verres</p>
                            </div>
                        </div>

                        <!-- Étape 5 -->
                        <div class="relative group">
                            <div
                                class="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-green-500 transition-all hover:-translate-y-2 h-full flex flex-col">
                                <div
                                    class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                                    <span class="text-3xl font-bold text-white">5</span>
                                </div>
                                <h3 class="text-lg font-bold text-gray-900 mb-2 text-center">Suivi & SAV</h3>
                                <p class="text-sm text-gray-600 text-center flex-grow">Ajustements gratuits à vie</p>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Timeline -->
                    <div class="mt-12 text-center">
                        <RouterLink to="/rendez-vous"
                            class="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-green-500 hover:to-emerald-500 transition-all shadow-2xl hover:shadow-green-500/50 transform hover:scale-110">
                            🚀 Commencer mon parcours
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pricing Section -->
        <div id="tarifs" class="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative">
            <!-- Cercles décoratifs dans la section tarifs -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
                <div class="absolute top-0 left-10 w-56 h-56 bg-emerald-100 rounded-full animate-float"></div>
                <div class="absolute bottom-10 right-20 w-44 h-44 bg-green-200 rounded-full animate-float-slow"></div>
                <div class="absolute top-1/2 right-10 w-36 h-36 bg-gray-100 rounded-full animate-float-delayed"></div>
            </div>

            <div class="text-center mb-16 relative z-10">
                <h2
                    class="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                    TARIFS TRANSPARENTS
                </h2>
                <p class="text-xl text-gray-600">Des prix clairs pour tous nos services</p>
                <div class="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-4"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                <!-- Prix Examens -->
                <div class="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                    <div class="bg-gradient-to-r from-green-600 to-emerald-600 p-6">
                        <h3 class="text-2xl font-bold text-white">Examens & Diagnostics</h3>
                    </div>
                    <div class="p-8 space-y-6">
                        <div class="flex justify-between items-center pb-6 border-b border-gray-200">
                            <div>
                                <h4 class="font-semibold text-gray-900 text-lg">Examen de vue complet</h4>
                                <p class="text-sm text-gray-600 mt-1">Acuité, réfraction, pression oculaire</p>
                            </div>
                            <span class="text-2xl font-bold text-green-600">15.000 XOF</span>
                        </div>
                        <div class="flex justify-between items-center pb-6 border-b border-gray-200">
                            <div>
                                <h4 class="font-semibold text-gray-900 text-lg">Dépistage glaucome/DMLA</h4>
                                <p class="text-sm text-gray-600 mt-1">Fond d'œil + OCT</p>
                            </div>
                            <span class="text-2xl font-bold text-green-600">10.000 XOF</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-semibold text-gray-900 text-lg">Adaptation lentilles</h4>
                                <p class="text-sm text-gray-600 mt-1">Mesures, essais, formation</p>
                            </div>
                            <span class="text-2xl font-bold text-green-600">25.000 XOF</span>
                        </div>
                    </div>
                </div>

                <!-- Prix Ajustements -->
                <div class="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                    <div class="bg-gradient-to-r from-emerald-600 to-green-600 p-6">
                        <h3 class="text-2xl font-bold text-white">Ajustements & Entretien</h3>
                    </div>
                    <div class="p-8 space-y-6">
                        <div class="flex justify-between items-center pb-6 border-b border-gray-200">
                            <div>
                                <h4 class="font-semibold text-gray-900 text-lg">Ajustement monture (client)</h4>
                                <p class="text-sm text-gray-600 mt-1">Illimité et gratuit à vie</p>
                            </div>
                            <span class="text-2xl font-bold text-green-600">Gratuit</span>
                        </div>
                        <div class="flex justify-between items-center pb-6 border-b border-gray-200">
                            <div>
                                <h4 class="font-semibold text-gray-900 text-lg">Ajustement externe</h4>
                                <p class="text-sm text-gray-600 mt-1">Service professionnel</p>
                            </div>
                            <span class="text-2xl font-bold text-green-600">3.000 XOF</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="font-semibold text-gray-900 text-lg">Remplacement coussinets</h4>
                                <p class="text-sm text-gray-600 mt-1">Silicone hypoallergénique</p>
                            </div>
                            <span class="text-2xl font-bold text-green-600">2.500 XOF</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Note remboursement -->
            <div
                class="mt-12 -mx-4 sm:-mx-6 lg:-mx-8 relative bg-gradient-to-br from-gray-900 via-green-800 to-black p-6 sm:p-8 shadow-2xl overflow-hidden group">
                <!-- Pattern overlay -->
                <div
                    class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,.05)_75%)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity">
                </div>

                <!-- Cercles décoratifs dans la note -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div
                        class="absolute -top-10 -left-10 w-32 h-32 bg-green-500/40 rounded-full blur-2xl animate-float">
                    </div>
                    <div
                        class="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/30 rounded-full blur-2xl animate-float-slow">
                    </div>
                    <div
                        class="absolute top-1/2 right-1/4 w-24 h-24 bg-green-600/40 rounded-full blur-xl animate-float-delayed">
                    </div>
                </div>

                <div class="flex items-start gap-3 relative z-10">
                    <svg class="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <h4 class="text-lg font-bold text-white mb-2">💡 Remboursements & Mutuelles</h4>
                        <p class="text-gray-300">
                            Certaines prestations peuvent être remboursées par votre mutuelle. Consultez-nous pour
                            connaître vos droits.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Guarantees Section -->
        <div class="bg-gradient-to-br from-gray-50 to-white py-20 border-t border-gray-200 relative">
            <!-- Cercles décoratifs dans la section garanties -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
                <div class="absolute top-20 left-1/4 w-52 h-52 bg-green-100 rounded-full animate-float-delayed"></div>
                <div class="absolute bottom-10 right-1/4 w-40 h-40 bg-emerald-50 rounded-full animate-float"></div>
                <div class="absolute top-1/2 left-10 w-48 h-48 bg-gray-200 rounded-full animate-float-slow"></div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-16">
                    <h2
                        class="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                        NOS GARANTIES
                    </h2>
                    <p class="text-xl text-gray-600">Votre satisfaction est notre priorité</p>
                    <div class="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-4"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Garantie 1 -->
                    <div
                        class="bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-500 transition-all transform hover:-translate-y-2 shadow-lg">
                        <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Garantie Montures 2 ans</h3>
                        <p class="text-gray-600">Protection complète contre les défauts de fabrication avec remplacement
                            gratuit.</p>
                    </div>

                    <!-- Garantie 2 -->
                    <div
                        class="bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-500 transition-all transform hover:-translate-y-2 shadow-lg">
                        <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Garantie Verres 1 an</h3>
                        <p class="text-gray-600">Couverture contre les rayures et défauts de traitement avec
                            remplacement sous 48h.</p>
                    </div>

                    <!-- Garantie 3 -->
                    <div
                        class="bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-500 transition-all transform hover:-translate-y-2 shadow-lg">
                        <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Satisfaction 30 jours</h3>
                        <p class="text-gray-600">Échange ou remboursement intégral sous 30 jours sans justification.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Final -->
        <div class="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative">
            <!-- Cercles décoratifs dans la section CTA -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
                <div class="absolute top-0 left-5 w-36 h-36 bg-emerald-100 rounded-full animate-float"></div>
                <div class="absolute bottom-5 right-10 w-44 h-44 bg-green-200 rounded-full animate-float-slow"></div>
            </div>

            <div
                class="relative bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-center overflow-hidden group z-10">
                <div
                    class="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.1)_25%,transparent_25%,transparent_75%,rgba(255,255,255,.1)_75%)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity">
                </div>

                <div class="relative z-10">
                    <h2 class="text-4xl font-bold text-white mb-4">Prêt à Prendre Soin de Vos Yeux ?</h2>
                    <p class="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Réservez votre rendez-vous dès maintenant et bénéficiez de notre expertise professionnelle.
                    </p>
                    <div class="flex flex-wrap justify-center gap-4">
                        <RouterLink to="/rendez-vous"
                            class="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-110">
                            📅 Prendre Rendez-vous
                        </RouterLink>
                        <RouterLink to="/catalogue"
                            class="bg-black/30 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all shadow-2xl transform hover:scale-110">
                            🛍️ Voir le Catalogue
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
@keyframes blob {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    25% {
        transform: translate(20px, -20px) scale(1.1);
    }

    50% {
        transform: translate(-20px, 20px) scale(0.9);
    }

    75% {
        transform: translate(20px, 20px) scale(1.05);
    }
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

@keyframes float {

    0%,
    100% {
        transform: translateY(0px) translateX(0px);
    }

    25% {
        transform: translateY(-20px) translateX(10px);
    }

    50% {
        transform: translateY(-10px) translateX(-10px);
    }

    75% {
        transform: translateY(-25px) translateX(5px);
    }
}

@keyframes float-delayed {

    0%,
    100% {
        transform: translateY(0px) translateX(0px) scale(1);
    }

    33% {
        transform: translateY(-15px) translateX(-15px) scale(1.05);
    }

    66% {
        transform: translateY(-25px) translateX(10px) scale(0.95);
    }
}

@keyframes float-slow {

    0%,
    100% {
        transform: translateY(0px) translateX(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-30px) translateX(-20px) rotate(5deg);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}

.animate-float {
    animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float-delayed 10s ease-in-out infinite;
}

.animate-float-slow {
    animation: float-slow 12s ease-in-out infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}
</style>
