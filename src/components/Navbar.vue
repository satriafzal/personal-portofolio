<template>
    <div>
        <!-- ========================================== -->
        <!-- DESKTOP FLOATING PILL NAVBAR (md and up)   -->
        <!-- ========================================== -->
        <header
            class="hidden md:flex fixed top-4 inset-x-0 justify-center z-50 pointer-events-none px-4 transition-all duration-300">
            <div class="pointer-events-auto flex items-center bg-slate-950/75 backdrop-blur-xl border border-purple-500/20 shadow-2xl shadow-purple-950/40 rounded-full px-3 py-2 transition-all duration-500 ease-out group"
                :class="[
                    isScrolled && !isDesktopHovered
                        ? 'max-w-[210px] pl-4 pr-3 py-2'
                        : 'max-w-[1050px] px-4 py-2'
                ]" @mouseenter="handlePillMouseEnter" @mouseleave="handlePillMouseLeave">
                <!-- Logo / Brand (Kiri) -->
                <a href="#home"
                    class="flex items-center gap-2 text-white font-bold text-sm tracking-tight hover:text-purple-300 transition-colors shrink-0 no-underline py-1">
                    <span
                        class="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse shadow-sm shadow-purple-400"></span>
                    <span>Satriafzal<span class="text-purple-400">.dev</span></span>
                </a>

                <!-- Indicator Mini Pill saat Compact (Scroll) -->
                <div v-if="isScrolled && !isDesktopHovered"
                    class="ml-auto flex items-center pl-2 text-xs text-purple-300/80 animate-fade-in cursor-pointer select-none"
                    title="Arahkan kursor untuk melihat menu">
                    <span class="text-[10px] uppercase font-semibold tracking-wider mr-1">Menu</span>
                    <svg class="w-3.5 h-3.5 animate-bounce-horizontal" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                <!-- Menu Links & Dropdown (Tengah) -->
                <div class="flex items-center transition-all duration-500 ease-in-out" :class="[
                    isScrolled && !isDesktopHovered
                        ? 'max-w-0 opacity-0 pointer-events-none ml-0 overflow-hidden'
                        : 'max-w-[850px] opacity-100 ml-5 overflow-visible'
                ]">
                    <nav class="flex items-center space-x-1 lg:space-x-1.5 text-xs lg:text-sm font-medium">
                        <!-- Home -->
                        <a href="#home"
                            class="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-purple-500/15 transition-all no-underline whitespace-nowrap">
                            Home
                        </a>

                        <!-- About -->
                        <a href="#about"
                            class="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-purple-500/15 transition-all no-underline whitespace-nowrap">
                            About
                        </a>

                        <!-- Dropdown Career / Background -->
                        <div class="relative career-dropdown-container py-1" @mouseenter="openCareerDropdown"
                            @mouseleave="closeCareerDropdown">
                            <button type="button" @click="toggleCareerDropdown"
                                class="flex items-center gap-1 px-3 py-1.5 rounded-full transition-all whitespace-nowrap focus:outline-none cursor-pointer"
                                :class="isCareerDropdownOpen ? 'text-white bg-purple-500/20' : 'text-slate-300 hover:text-white hover:bg-purple-500/15'">
                                <span>Career</span>
                                <svg class="w-3.5 h-3.5 transition-transform duration-200"
                                    :class="{ 'rotate-180 text-purple-400': isCareerDropdownOpen }" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <!-- Dropdown Content -->
                            <transition enter-active-class="transition duration-200 ease-out"
                                enter-from-class="opacity-0 translate-y-1 scale-95"
                                enter-to-class="opacity-100 translate-y-0 scale-100"
                                leave-active-class="transition duration-150 ease-in"
                                leave-from-class="opacity-100 translate-y-0 scale-100"
                                leave-to-class="opacity-0 translate-y-1 scale-95">
                                <div v-if="isCareerDropdownOpen"
                                    class="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 w-48"
                                    @mouseenter="openCareerDropdown" @mouseleave="closeCareerDropdown">
                                    <div
                                        class="rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-purple-500/25 p-1.5 shadow-2xl shadow-purple-950/80 flex flex-col gap-1">
                                        <a href="#education" @click="isCareerDropdownOpen = false"
                                            class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-purple-500/20 transition-all no-underline">
                                            <svg class="w-4 h-4 text-purple-400 shrink-0" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            </svg>
                                            <span>Education</span>
                                        </a>

                                        <a href="#experience" @click="isCareerDropdownOpen = false"
                                            class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-purple-500/20 transition-all no-underline">
                                            <svg class="w-4 h-4 text-purple-400 shrink-0" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span>Experience</span>
                                        </a>

                                        <a href="#journey" @click="isCareerDropdownOpen = false"
                                            class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-purple-500/20 transition-all no-underline">
                                            <svg class="w-4 h-4 text-purple-400 shrink-0" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                            </svg>
                                            <span>My Journey</span>
                                        </a>
                                    </div>
                                </div>
                            </transition>
                        </div>

                        <!-- Skills -->
                        <a href="#skills"
                            class="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-purple-500/15 transition-all no-underline whitespace-nowrap">
                            Skills
                        </a>

                        <!-- Projects -->
                        <a href="#projects"
                            class="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-purple-500/15 transition-all no-underline whitespace-nowrap">
                            Projects
                        </a>

                        <!-- Certificates -->
                        <a href="#certificates"
                            class="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-purple-500/15 transition-all no-underline whitespace-nowrap">
                            Certificates
                        </a>
                    </nav>

                    <!-- Contact CTA Button (Kanan) -->
                    <a href="#contact"
                        class="ml-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold tracking-wide shadow-md shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all no-underline whitespace-nowrap">
                        Contact
                    </a>
                </div>
            </div>
        </header>

        <!-- ========================================== -->
        <!-- MOBILE / TABLET TOP BRAND PILL (md:hidden) -->
        <!-- ========================================== -->
        <header class="md:hidden fixed top-3 left-4 z-40">
            <a href="#home"
                class="inline-flex items-center gap-2 bg-slate-950/80 backdrop-blur-xl border border-purple-500/25 px-3.5 py-1.5 rounded-full text-white font-bold text-xs tracking-tight shadow-lg shadow-purple-950/30 no-underline">
                <span class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span>Satriafzal<span class="text-purple-400">.dev</span></span>
            </a>
        </header>

        <!-- ====================================================== -->
        <!-- MOBILE / TABLET FLOATING BOTTOM DOCK BAR (md:hidden)   -->
        <!-- ====================================================== -->
        <div class="md:hidden fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav
                class="pointer-events-auto w-full max-w-sm bg-slate-950/85 backdrop-blur-2xl border border-purple-500/25 rounded-2xl px-2 py-1.5 shadow-2xl shadow-purple-950/70 flex items-center justify-around">
                <!-- Home -->
                <a href="#home"
                    class="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-400 hover:text-purple-400 active:scale-95 transition-all no-underline group">
                    <svg class="w-5 h-5 mb-0.5 group-hover:text-purple-400 transition-colors" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span class="text-[10px] font-medium tracking-tight">Home</span>
                </a>

                <!-- About -->
                <a href="#about"
                    class="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-400 hover:text-purple-400 active:scale-95 transition-all no-underline group">
                    <svg class="w-5 h-5 mb-0.5 group-hover:text-purple-400 transition-colors" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span class="text-[10px] font-medium tracking-tight">About</span>
                </a>

                <!-- Projects -->
                <a href="#projects"
                    class="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-400 hover:text-purple-400 active:scale-95 transition-all no-underline group">
                    <svg class="w-5 h-5 mb-0.5 group-hover:text-purple-400 transition-colors" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span class="text-[10px] font-medium tracking-tight">Projects</span>
                </a>

                <!-- Contact -->
                <a href="#contact"
                    class="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-400 hover:text-purple-400 active:scale-95 transition-all no-underline group">
                    <svg class="w-5 h-5 mb-0.5 group-hover:text-purple-400 transition-colors" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="text-[10px] font-medium tracking-tight">Contact</span>
                </a>

                <!-- More Button (Toggle Bottom Sheet) -->
                <button type="button" @click="isMobileDrawerOpen = !isMobileDrawerOpen"
                    class="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all focus:outline-none group active:scale-95 cursor-pointer"
                    :class="isMobileDrawerOpen ? 'text-purple-400' : 'text-slate-400 hover:text-purple-400'"
                    aria-label="More menus">
                    <div class="relative w-5 h-5 mb-0.5 flex items-center justify-center">
                        <svg class="w-5 h-5 transition-transform duration-200"
                            :class="{ 'rotate-90 text-purple-400': isMobileDrawerOpen }" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <span class="text-[10px] font-medium tracking-tight">More</span>
                </button>
            </nav>
        </div>

        <!-- ====================================================== -->
        <!-- MOBILE DRAWER / BOTTOM SHEET OVERLAY (md:hidden)       -->
        <!-- ====================================================== -->
        <!-- Backdrop Overlay -->
        <transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200 ease-in"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="isMobileDrawerOpen" @click="isMobileDrawerOpen = false"
                class="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"></div>
        </transition>

        <!-- Bottom Sheet Content Modal -->
        <transition enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-8 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-8 scale-95">
            <div v-if="isMobileDrawerOpen"
                class="md:hidden fixed bottom-20 inset-x-4 max-w-sm mx-auto z-50 bg-slate-950/95 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-4 shadow-2xl shadow-purple-950/80">
                <div class="flex items-center justify-between pb-3 mb-3 border-b border-purple-500/15 px-1">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                        <span class="text-xs font-semibold text-white tracking-wide uppercase">All Sections</span>
                    </div>
                    <button @click="isMobileDrawerOpen = false"
                        class="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-purple-500/20 focus:outline-none transition-all cursor-pointer"
                        aria-label="Close drawer">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Grid Menu Items -->
                <div class="grid grid-cols-2 gap-2">
                    <!-- Education -->
                    <a href="#education" @click="isMobileDrawerOpen = false"
                        class="flex items-center gap-2.5 p-2.5 rounded-xl bg-purple-950/20 hover:bg-purple-600/20 border border-purple-500/15 text-slate-200 hover:text-white transition-all no-underline">
                        <div class="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                        </div>
                        <span class="text-xs font-medium">Education</span>
                    </a>

                    <!-- Experience -->
                    <a href="#experience" @click="isMobileDrawerOpen = false"
                        class="flex items-center gap-2.5 p-2.5 rounded-xl bg-purple-950/20 hover:bg-purple-600/20 border border-purple-500/15 text-slate-200 hover:text-white transition-all no-underline">
                        <div class="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span class="text-xs font-medium">Experience</span>
                    </a>

                    <!-- Journey -->
                    <a href="#journey" @click="isMobileDrawerOpen = false"
                        class="flex items-center gap-2.5 p-2.5 rounded-xl bg-purple-950/20 hover:bg-purple-600/20 border border-purple-500/15 text-slate-200 hover:text-white transition-all no-underline">
                        <div class="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                        </div>
                        <span class="text-xs font-medium">Journey</span>
                    </a>

                    <!-- Skills -->
                    <a href="#skills" @click="isMobileDrawerOpen = false"
                        class="flex items-center gap-2.5 p-2.5 rounded-xl bg-purple-950/20 hover:bg-purple-600/20 border border-purple-500/15 text-slate-200 hover:text-white transition-all no-underline">
                        <div class="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span class="text-xs font-medium">Skills</span>
                    </a>

                    <!-- Certificates -->
                    <a href="#certificates" @click="isMobileDrawerOpen = false"
                        class="flex items-center gap-2.5 p-2.5 rounded-xl bg-purple-950/20 hover:bg-purple-600/20 border border-purple-500/15 text-slate-200 hover:text-white transition-all no-underline col-span-2">
                        <div class="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <span class="text-xs font-medium">Certificates</span>
                    </a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isDesktopHovered = ref(false)
const isCareerDropdownOpen = ref(false)
const isMobileDrawerOpen = ref(false)

let lastScrollY = 0
let dropdownTimer = null
let pillHoverTimer = null

const handlePillMouseEnter = () => {
    clearTimeout(pillHoverTimer)
    isDesktopHovered.value = true
}

const handlePillMouseLeave = () => {
    clearTimeout(pillHoverTimer)
    pillHoverTimer = setTimeout(() => {
        if (!isCareerDropdownOpen.value) {
            isDesktopHovered.value = false
        }
    }, 400)
}

const openCareerDropdown = () => {
    clearTimeout(dropdownTimer)
    isCareerDropdownOpen.value = true
    isDesktopHovered.value = true
}

const closeCareerDropdown = () => {
    dropdownTimer = setTimeout(() => {
        isCareerDropdownOpen.value = false
    }, 200)
}

const toggleCareerDropdown = () => {
    clearTimeout(dropdownTimer)
    isCareerDropdownOpen.value = !isCareerDropdownOpen.value
}

const handleScroll = () => {
    const currentScrollY = window.scrollY || document.documentElement.scrollTop

    if (currentScrollY > 60) {
        if (currentScrollY > lastScrollY && currentScrollY > 120) {
            isScrolled.value = true
            isCareerDropdownOpen.value = false
        } else if (currentScrollY < lastScrollY) {
            isScrolled.value = false
        }
    } else {
        isScrolled.value = false
    }

    lastScrollY = currentScrollY
}

const handleDocumentClick = (event) => {
    if (!event.target.closest('.career-dropdown-container')) {
        isCareerDropdownOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleDocumentClick)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('click', handleDocumentClick)
    clearTimeout(dropdownTimer)
    clearTimeout(pillHoverTimer)
})
</script>

<style scoped>
@keyframes bounceHorizontal {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(3px);
    }
}

.animate-bounce-horizontal {
    animation: bounceHorizontal 1.2s infinite;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
}
</style>