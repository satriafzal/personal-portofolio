<template>
    <header
        class="fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out bg-slate-950/50 backdrop-blur-md border-b border-purple-500/15"
        :class="{ '-translate-y-full': isHidden }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 sm:h-20">

                <!-- Inisial Logo (Kiri) -->
                <a href="#home" class="flex items-center gap-3 group no-underline">
                    <div
                        class="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-extrabold text-base tracking-wider group-hover:border-purple-400 group-hover:bg-purple-600/30 transition-all duration-300 shadow-lg shadow-purple-500/10">
                        SAZ
                    </div>
                    <span
                        class="text-white font-bold text-lg hidden sm:inline-block tracking-tight group-hover:text-purple-300 transition-colors">
                        Satria<span class="text-purple-400">.dev</span>
                    </span>
                </a>

                <!-- Desktop Navigation Menu (Tengah) -->
                <nav class="hidden md:flex items-center space-x-1 lg:space-x-2">
                    <a v-for="item in navItems" :key="item.name" :href="item.href"
                        class="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-purple-400 transition-colors duration-200 group no-underline">
                        {{ item.name }}
                        <!-- Animated Underline Effect -->
                        <span
                            class="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></span>
                    </a>
                </nav>

                <!-- Mobile Hamburger Button (Kanan) -->
                <div class="flex items-center md:hidden">
                    <button @click="isMobileMenuOpen = !isMobileMenuOpen" type="button"
                        class="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20 focus:outline-none transition-all"
                        aria-label="Toggle menu">
                        <!-- Hamburger Icon -->
                        <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <!-- Close Icon -->
                        <svg v-else class="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>

        <!-- Mobile Dropdown Menu -->
        <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
            <div v-if="isMobileMenuOpen"
                class="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-purple-500/20 px-4 pt-2 pb-6 space-y-1 shadow-2xl">
                <a v-for="item in navItems" :key="item.name" :href="item.href" @click="isMobileMenuOpen = false"
                    class="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-purple-300 hover:bg-purple-500/10 transition-all no-underline">
                    {{ item.name }}
                </a>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
]

const isHidden = ref(false)
const isMobileMenuOpen = ref(false)

let lastScrollPosition = 0
let scrollTimeout = null

const handleScroll = () => {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop

    if (currentScrollPosition < 50) {
        isHidden.value = false
        lastScrollPosition = currentScrollPosition
        return
    }

    if (currentScrollPosition > lastScrollPosition) {
        isHidden.value = true
        isMobileMenuOpen.value = false
    }

    lastScrollPosition = currentScrollPosition

    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
        isHidden.value = false
    }, 250)
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    clearTimeout(scrollTimeout)
})
</script>