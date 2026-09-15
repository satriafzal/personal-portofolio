<template>
    <section class="py-20 sm:py-28 relative z-20" id="projects">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header Section -->
            <div class="mb-12 sm:mb-16" data-aos="fade-right">
                <p class="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-1">
                    My Portfolio
                </p>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    Selected Projects
                </h2>
            </div>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div v-for="project in projects" :key="project.id" data-aos="fade-up">
                    <div
                        class="h-full flex flex-col bg-slate-900/60 border border-purple-500/10 border-t-2 border-t-transparent hover:border-t-purple-500 hover:border-purple-500/30 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group">

                        <!-- Thumbnail Gambar -->
                        <div class="h-52 w-full overflow-hidden bg-slate-950">
                            <img :src="project.images[0]" :alt="project.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>

                        <!-- Project Content -->
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="text-white text-xl font-bold mb-3">
                                {{ project.title }}
                            </h3>

                            <p class="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                {{ project.desc }}
                            </p>

                            <!-- Tech Badges -->
                            <div class="flex flex-wrap gap-2 mb-6 mt-auto">
                                <span v-for="tech in project.tech" :key="tech"
                                    class="bg-purple-500/10 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/20">
                                    {{ tech }}
                                </span>
                            </div>

                            <!-- View Project Button -->
                            <button @click="openModal(project)"
                                class="text-purple-300 hover:text-purple-200 text-sm font-semibold inline-flex items-center gap-2 transition-colors duration-200 self-start group/btn">
                                View Project
                                <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 12h14m-7-7l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <!-- MODAL PROJECT POPUP -->
        <Teleport to="body">
            <div v-if="isModalOpen"
                class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
                @click="closeModal">
                <!-- Close Button -->
                <button
                    class="absolute top-4 right-4 z-20 p-2 bg-slate-800/80 text-white rounded-full hover:bg-purple-600 hover:rotate-90 transition-all duration-300"
                    @click.stop="closeModal">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>

                <!-- Modal Content Container -->
                <div class="bg-slate-900 border border-purple-500/20 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl shadow-purple-500/10"
                    @click.stop>

                    <!-- Image Slider / Viewer (Top Half) -->
                    <div
                        class="relative h-64 sm:h-96 bg-slate-950 flex items-center justify-center overflow-hidden shrink-0">
                        <img :src="activeProject.images[currentImageIndex]"
                            class="w-full h-full object-contain p-4 transition-all duration-300" alt="Project Showcase">

                        <!-- Navigation Controls (If multiple images) -->
                        <template v-if="activeProject.images.length > 1">
                            <button @click="prevImage"
                                class="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 hover:bg-purple-600 text-white transition-colors duration-200">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 19l-7-7 7-7"></path>
                                </svg>
                            </button>

                            <button @click="nextImage"
                                class="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 hover:bg-purple-600 text-white transition-colors duration-200">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>

                            <!-- Indicators Dots -->
                            <div
                                class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1 bg-slate-900/60 rounded-full backdrop-blur-sm">
                                <button v-for="(_, index) in activeProject.images" :key="index"
                                    @click="currentImageIndex = index"
                                    class="w-2 h-2 rounded-full transition-all duration-300"
                                    :class="currentImageIndex === index ? 'bg-purple-500 w-5' : 'bg-slate-500/50'"></button>
                            </div>
                        </template>
                    </div>

                    <!-- Info Details (Bottom Half - Scrollable) -->
                    <div class="p-6 sm:p-8 overflow-y-auto space-y-4">
                        <h3 class="text-2xl font-bold text-white">
                            {{ activeProject.title }}
                        </h3>

                        <div class="flex flex-wrap gap-2">
                            <span v-for="tech in activeProject.tech" :key="tech"
                                class="bg-purple-500/10 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/20">
                                {{ tech }}
                            </span>
                        </div>

                        <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                            {{ activeProject.desc }}
                        </p>
                    </div>

                </div>
            </div>
        </Teleport>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const projects = [
    {
        id: 1,
        title: "PropCentral Web",
        desc: "A comprehensive real estate marketplace application built entirely with Laravel. PropCentral features a dynamic dual-role system, allowing users to seamlessly switch between buying and selling properties. This robust platform is equipped with advanced location and price filtering, interactive negotiation features, secure authentication with email verification, and an integrated chatbot. Complete with a dedicated Admin Dashboard for efficient user and property management, delivering an end-to-end property trading experience.",
        images: [
            "/image/prop1.jpeg",
            "/image/prop2.jpeg",
            "/image/prop3.jpeg",
            "/image/prop4.jpeg",
            "/image/prop5.jpeg",
        ],
        tech: ["Laravel", "PHP"]
    },
    {
        id: 2,
        title: "Elevate Coffee Web",
        desc: "A full-stack e-commerce web application for Elevate Coffee, engineered with Vue.js and Golang. Integrated via RESTful API, the platform features secure user authentication, a seamless shopping and checkout experience, and a dedicated Admin Dashboard for efficient management of user profiles and menu inventories.",
        images: [
            "/image/home_caffe.png",
            "/image/about_caffe.png",
            "/image/fasilitas.png",
            "/image/menucafe.png",
            "/image/promocafe.png"
        ],
        tech: ["Vue.js", "Golang"]
    },
    {
        id: 3,
        title: "ECO PULSE Weather & AQI Tracker",
        desc: "A real-time weather forecasting and air quality monitoring platform. Built with a robust full-stack architecture utilizing Vue.js and Laravel. The application seamlessly integrates multiple public APIs—including BMKG, IQAir, and OpenWeather—to deliver highly accurate environmental data. Featuring a modern dark mode interface and a comprehensive admin dashboard for system and data monitoring.",
        images: [
            "/image/eco1.jpeg",
            "/image/eco2.jpeg",
            "/image/eco3.jpeg",
            "/image/eco4.jpeg",
            "/image/eco5.jpeg",
            "/image/eco6.jpeg",
            "/image/eco7.jpeg",
            "/image/eco8.jpeg",
            "/image/eco9.jpeg",
            "/image/eco10.jpeg",
            "/image/eco11.jpeg",
            "/image/eco12.jpeg",
            "/image/eco13.jpeg",
            "/image/eco14.jpeg",
        ],
        tech: ["Vue.js", "Laravel", "Tailwind CSS"]
    },
    {
        id: 4,
        title: "Smart Village Portal: Desa Cimulang",
        desc: "A collaborative project developed under the supervision of a university lecturer and alongside a dedicated development team to drive rural digital transformation. Serving as the Backend Developer using Laravel, I contributed to engineering a robust information system for Desa Cimulang. The platform features comprehensive village profiling, a citizen corner (Pojok Warga), and a local potential gallery, seamlessly harmonizing nature's resources with modern technological solutions.",
        images: [
            "/image/desa1.jpeg",
            "/image/desa2.jpeg",
            "/image/desa3.jpeg",
            "/image/desa4.jpeg",
            "/image/desa5.jpeg",
            "/image/desa6.jpeg",
            "/image/desa7.jpeg",
            "/image/desa8.jpeg",
            "/image/desa9.jpeg",
            "/image/desa10.jpeg",
            "/image/desa11.jpeg",
            "/image/desa12.jpeg",
            "/image/desa13.jpeg",
            "/image/desa14.jpeg",
            "/image/desa15.jpeg",
            "/image/desa16.jpeg",
            "/image/desa17.jpeg",
            "/image/desa18.jpeg",
            "/image/desa19.jpeg",
            "/image/desa20.jpeg",
        ],
        tech: ["Laravel"]
    }
]

// --- MESIN MODAL & SLIDER ---
const isModalOpen = ref(false)
const activeProject = ref(null)
const currentImageIndex = ref(0)

const openModal = (project) => {
    activeProject.value = project
    currentImageIndex.value = 0
    isModalOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    isModalOpen.value = false
    setTimeout(() => {
        activeProject.value = null
        currentImageIndex.value = 0
    }, 300)
    document.body.style.overflow = 'auto'
}

const nextImage = () => {
    if (!activeProject.value) return
    currentImageIndex.value = (currentImageIndex.value + 1) % activeProject.value.images.length
}

const prevImage = () => {
    if (!activeProject.value) return
    currentImageIndex.value = (currentImageIndex.value - 1 + activeProject.value.images.length) % activeProject.value.images.length
}

const handleEsc = (e) => {
    if (e.key === 'Escape' && isModalOpen.value) {
        closeModal()
    }
}

onMounted(() => { window.addEventListener('keydown', handleEsc) })
onUnmounted(() => { window.removeEventListener('keydown', handleEsc) })
</script>