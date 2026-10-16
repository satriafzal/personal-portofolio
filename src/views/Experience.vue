<template>
    <section ref="experienceRef" class="py-20 sm:py-28 relative z-20" id="experience">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header Section -->
            <div class="gsap-exp-header opacity-0 mb-12 sm:mb-16">
                <p class="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-1">
                    Professional Track
                </p>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    Experience
                </h2>
            </div>

            <!-- Experience List Container -->
            <div class="space-y-6 sm:space-y-8">
                
                <div v-for="exp in experiences" :key="exp.id" class="gsap-exp-card opacity-0">
                    <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-8 bg-slate-900/60 border border-purple-500/10 border-l-4 border-l-transparent hover:border-l-purple-500 hover:border-purple-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 group">
                        
                        <!-- Logo Instansi/Perusahaan -->
                        <div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-950/80 border border-slate-700/50 rounded-xl p-3 flex items-center justify-center shadow-inner">
                            <img :src="exp.logo" :alt="exp.company" class="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300">
                        </div>

                        <!-- Info Experience -->
                        <div class="flex-grow flex flex-col justify-center">
                            
                            <!-- Header Info: Role & Period -->
                            <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-2 gap-2">
                                <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                                    {{ exp.role }}
                                </h3>

                                <div class="flex flex-wrap items-center gap-2">
                                    <!-- Work Type Badge (Hybrid/Remote/On-site) -->
                                    <span v-if="exp.type" class="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide border border-emerald-500/20 whitespace-nowrap">
                                        <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        {{ exp.type }}
                                    </span>
                                    
                                    <!-- Period Badge -->
                                    <span class="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs sm:text-sm font-semibold tracking-wide border border-purple-500/20 whitespace-nowrap">
                                        <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        {{ exp.period }}
                                    </span>
                                </div>
                                
                            </div>

                            <!-- Company / Location -->
                            <h4 class="text-purple-400 font-medium text-sm sm:text-base mb-4 flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                {{ exp.company }}
                            </h4>

                            <!-- Description (Bulleted List) -->
                            <ul class="text-slate-400 text-sm sm:text-base leading-relaxed list-disc ml-5 space-y-2 marker:text-purple-500">
                                <li v-for="(point, idx) in exp.desc" :key="idx">
                                    {{ point }}
                                </li>
                            </ul>

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

const experienceRef = ref(null)
let ctx

const experiences = [
    {
        id: 1,
        role: "Frontend Developer",
        company: "Universitas Nusa Mandiri -  Smart Village Program",
        type: "Hybrid",
        period: "June 2026 - Present",
        logo: "/image/nusman.jpeg", 
        desc: [
            "Developed web interfaces using Laravel and Blade based on project requirements.",
            "Implemented responsive and interactive interfaces based on UI/UX designs.",
            "Integrated frontend interfaces with backend features and data.",
            "Collaborated with the Back-End Developer to develop and improve website features.",
            "Contributed to a real-world web application intended for public use.",
        ]
    }
]

onMounted(() => {
    ctx = gsap.context(() => {
        
        gsap.fromTo('.gsap-exp-header',
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: '.gsap-exp-header',
                    start: 'top 85%',
                },
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out'
            }
        )

        gsap.fromTo('.gsap-exp-card',
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.gsap-exp-card',
                    start: 'top 80%',
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.2)'
            }
        )

    }, experienceRef.value)
})

onUnmounted(() => {
    if (ctx) ctx.revert()
})
</script>