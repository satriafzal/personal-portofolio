<template>
    <section class="projects-section pt-2 pb-5" id="projects">
        <div class="container">

            <div class="d-flex justify-content-between align-items-end mb-5" v-anim="'fade-left'">
                <div>
                    <p class="text-purple fw-semibold mb-2">My Portfolio</p>
                    <h2 class="text-white fw-bold mb-0">Selected Projects</h2>
                </div>
            </div>

            <div class="row g-4">
                <!-- Looping Otomatis Semua Project -->
                <div v-for="project in projects" :key="project.id" class="col-12 col-lg-4 col-md-6" v-anim="'fade-up'">
                    <div class="project-card d-flex flex-column h-100 rounded-4 overflow-hidden">
                        <div class="cert-img-wrapper" style="height: 220px; overflow: hidden;">
                            <img :src="project.images[0]" :alt="project.title" class="w-100 h-100 object-fit-cover">
                        </div>
                        
                        <div class="project-info p-4 d-flex flex-column flex-grow-1">
                            <h4 class="text-white fw-bold mb-3">{{ project.title }}</h4>
                            <p class="text-white-50 fs-6 mb-4 line-clamp-3">
                                {{ project.desc }}
                            </p>

                            <div class="d-flex flex-wrap gap-2 mb-3">
                                <span v-for="tech in project.tech" :key="tech" class="tech-badge">{{ tech }}</span>
                            </div>
                            
                            <button @click="openModal(project)" class="cert-link text-purple mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                                View Project
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODAL PROJECT POPUP -->
        <div v-if="isModalOpen" class="project-modal-overlay" @click="closeModal">
            <button class="project-modal-close" @click.stop="closeModal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div class="project-modal-content" @click.stop>
                <!-- Carousel Gambar di Dalam Modal -->
                <div id="modalCarousel" class="carousel slide h-50" data-bs-ride="false" v-if="activeProject.images.length > 1">
                    <div class="carousel-indicators">
                        <button v-for="(img, index) in activeProject.images" :key="index" type="button" data-bs-target="#modalCarousel" :data-bs-slide-to="index" :class="{ active: index === 0 }"></button>
                    </div>
                    
                    <div class="carousel-inner h-100" style="background-color: #0a0514;">
                        <div v-for="(img, index) in activeProject.images" :key="index" :class="['carousel-item h-100', { active: index === 0 }]">
                            <img :src="img" class="d-block w-100 h-100" style="object-fit: contain; padding: 10px;" alt="Project Image">
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#modalCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>

                    <button class="carousel-control-next" type="button" data-bs-target="#modalCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>

                <div v-else class="h-50 w-100 d-flex align-items-center justify-content-center" style="background-color: #0a0514;">
                    <img :src="activeProject.images[0]" class="d-block w-100 h-100" style="object-fit: contain; padding: 10px;" alt="Project Image">
                </div>

                <!-- Info Deskripsi di Bawah Gambar -->
                <div class="modal-info p-4 d-flex flex-column h-50 overflow-y-auto">
                    <h3 class="text-white fw-bold mb-3">{{ activeProject.title }}</h3>
                    <div class="d-flex flex-wrap gap-2 mb-4">
                        <span v-for="tech in activeProject.tech" :key="tech" class="tech-badge">{{ tech }}</span>
                    </div>
                    <p class="text-white-50 fs-6 lh-lg mb-0">
                        {{ activeProject.desc }}
                    </p>
                </div>
            </div>
        </div>
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
        title: "Modern Company Profile",
        desc: "A static company profile website sliced from a Figma UI/UX design into VS Code. Built to be fully responsive and visually appealing.",
        images: [
            "https://via.placeholder.com/600x400/1a132b/9d7cff?text=Company+Profile+1", 
            "https://via.placeholder.com/600x400/1a132b/9d7cff?text=Company+Profile+2"
        ],
        tech: ["Vue.js", "Figma"]
    },
    {
        id: 4,
        title: "Self-Service Ordering",
        desc: "An object-oriented Java application featuring a GUI and database integration. Simulates a kiosk ordering system similar to fast-food restaurants.",
        images: [
            "https://via.placeholder.com/600x400/1a132b/9d7cff?text=Ordering+App+1", 
            "https://via.placeholder.com/600x400/1a132b/9d7cff?text=Ordering+App+2"
        ],
        tech: ["Java", "GUI"]
    }
]

// --- MESIN MODAL ---
const isModalOpen = ref(false)
const activeProject = ref(null)

const openModal = (project) => {
    activeProject.value = project
    isModalOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    isModalOpen.value = false
    setTimeout(() => { activeProject.value = null }, 300)
    document.body.style.overflow = 'auto'
}

const handleEsc = (e) => {
    if (e.key === 'Escape' && isModalOpen.value) {
        closeModal()
    }
}

onMounted(() => { window.addEventListener('keydown', handleEsc) })
onUnmounted(() => { window.removeEventListener('keydown', handleEsc) })
</script>

<style scoped>
    @import '@/assets/style/Project.css';
</style>