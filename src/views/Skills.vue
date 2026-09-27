<template>
    <section ref="skillsRef" class="py-20 sm:py-28 relative z-20" id="skills">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header Section -->
            <div class="gsap-header opacity-0 mb-12 sm:mb-16">
                <p class="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-1">
                    My Expertise
                </p>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    Personal Skills
                </h2>
            </div>

            <!-- Skills Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

                <!-- CARD FRONTEND -->
                <div class="gsap-card opacity-0">
                    <div
                        class="h-full flex flex-col p-6 sm:p-8 bg-slate-900/60 border border-purple-500/10 border-t-2 border-t-transparent hover:border-t-purple-500 hover:border-purple-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
                        <h3 class="text-white text-xl font-bold mb-6 text-center border-b border-slate-800 pb-4">
                            Frontend
                        </h3>
                        <div class="flex justify-center flex-wrap gap-4 my-auto">
                            <div v-for="skill in frontendSkills" :key="skill.name"
                                class="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl hover:border-purple-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center w-14 h-14"
                                :title="skill.name">
                                <img :src="skill.icon" :alt="skill.name" class="w-8 h-8 object-contain">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CARD BACKEND -->
                <div class="gsap-card opacity-0">
                    <div
                        class="h-full flex flex-col p-6 sm:p-8 bg-slate-900/60 border border-purple-500/10 border-t-2 border-t-transparent hover:border-t-purple-500 hover:border-purple-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
                        <h3 class="text-white text-xl font-bold mb-6 text-center border-b border-slate-800 pb-4">
                            Backend & Database
                        </h3>
                        <div class="flex justify-center flex-wrap gap-4 my-auto">
                            <div v-for="skill in backendSkills" :key="skill.name"
                                class="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl hover:border-purple-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center w-14 h-14"
                                :title="skill.name">
                                <img :src="skill.icon" :alt="skill.name" class="w-8 h-8 object-contain">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CARD TOOLS -->
                <div class="gsap-card opacity-0">
                    <div
                        class="h-full flex flex-col p-6 sm:p-8 bg-slate-900/60 border border-purple-500/10 border-t-2 border-t-transparent hover:border-t-purple-500 hover:border-purple-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
                        <h3 class="text-white text-xl font-bold mb-6 text-center border-b border-slate-800 pb-4">
                            Tools
                        </h3>
                        <div class="flex justify-center flex-wrap gap-4 my-auto">
                            <div v-for="skill in toolsSkills" :key="skill.name"
                                class="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl hover:border-purple-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center w-14 h-14"
                                :title="skill.name">
                                <img :src="skill.icon" :alt="skill.name" class="w-8 h-8 object-contain"
                                    :class="{ 'invert brightness-200': skill.name === 'GitHub' }">
                            </div>
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

const skillsRef = ref(null)
let ctx

const frontendSkills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
]

const backendSkills = [
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'Mysql', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
]

const toolsSkills = [
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    { name: 'Discord', icon: 'https://cdn.simpleicons.org/discord/5865F2' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' }
]

onMounted(() => {
    ctx = gsap.context(() => {
        gsap.fromTo('.gsap-header',
            { opacity: 0, x: -50 },
            {
                scrollTrigger: {
                    trigger: '.gsap-header',
                    start: 'top 85%'
                },
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out'
            }
        )

        gsap.fromTo('.gsap-card',
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: '.gsap-card',
                    start: 'top 80%'
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2, 
                ease: 'back.out(1.2)'
            }
        )
    }, skillsRef.value)
})

onUnmounted(() => {
    if (ctx) ctx.revert()
})
</script>