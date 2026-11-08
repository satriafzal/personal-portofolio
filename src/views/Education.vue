<template>
    <section ref="educationRef" class="py-20 sm:py-28 relative z-20" id="education">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header Section -->
            <div class="gsap-edu-header opacity-0 mb-12 sm:mb-16">
                <p class="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-1">
                    Academic Background
                </p>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    Education
                </h2>
            </div>

            <!-- Education List Container -->
            <div class="space-y-6 sm:space-y-8">

                <div v-for="edu in educationList" :key="edu.id" class="gsap-edu-card opacity-0">
                    <div
                        class="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-8 bg-slate-900/60 border border-purple-500/10 border-l-4 border-l-transparent hover:border-l-purple-500 hover:border-purple-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 group">

                        <!-- Logo Kampus / Instansi -->
                        <div
                            class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-950/80 border border-slate-700/50 rounded-xl p-3 flex items-center justify-center shadow-inner">
                            <img :src="edu.logo" :alt="edu.university"
                                class="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300">
                        </div>

                        <!-- Info Education -->
                        <div class="flex-grow flex flex-col justify-center">

                            <!-- Header Info: Degree, Badges, & Period -->
                            <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-2 gap-3">
                                <h3
                                    class="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                                    {{ edu.degree }}
                                </h3>

                                <div class="flex flex-wrap items-center gap-2">
                                    <!-- Period Badge -->
                                    <span
                                        class="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs sm:text-sm font-semibold tracking-wide border border-purple-500/20 whitespace-nowrap">
                                        <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                            </path>
                                        </svg>
                                        {{ edu.period }}
                                    </span>
                                </div>
                            </div>

                            <!-- University & Faculty -->
                            <h4 class="text-purple-400 font-medium text-sm sm:text-base mb-4 flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                    </path>
                                </svg>
                                {{ edu.university }} — {{ edu.faculty }}
                            </h4>

                            <!-- Description -->
                            <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
                                {{ edu.desc }}
                            </p>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const educationRef = ref(null)
let ctx

const educationList = [
    {
        id: 1,
        degree: "Bachelor's Degree Informatics",
        faculty: "Faculty Of Information Technology",
        university: "Nusa Mandiri University",
        period: "September 2024 - Present",
        logo: "/image/nusman.jpeg",
        desc: "Currently pursuing a Bachelor's Degree in Informatics Engineering. Focusing on full-stack web application development, software engineering methodologies, database systems, and practical AI implementation."
    }
]

onMounted(() => {
    ctx = gsap.context(() => {

        // Animasi Header
        gsap.fromTo('.gsap-edu-header',
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: '.gsap-edu-header',
                    start: 'top 85%',
                },
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out'
            }
        )

        // Animasi Education Card
        gsap.fromTo('.gsap-edu-card',
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.gsap-edu-card',
                    start: 'top 80%',
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.2)'
            }
        )

    }, educationRef.value)
})

onUnmounted(() => {
    if (ctx) ctx.revert()
})
</script>