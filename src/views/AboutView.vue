<template>
  <section id="about" class="relative w-full py-20 sm:py-28 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span class="text-purple-400 text-xs font-bold tracking-widest uppercase block mb-2">
          GET TO KNOW ME
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          I'm a <span class="text-purple-400">{{ displayText }}</span><span class="text-purple-400 animate-pulse">|</span>
        </h2>
      </div>

      <!-- Bento Grid Content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        <!-- Main Bio Card (Left Column) -->
        <div class="lg:col-span-8 flex">
          <div class="w-full bg-slate-900/60 border border-purple-500/20 hover:border-purple-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 flex flex-col justify-between">
            
            <div class="space-y-4">
              <!-- Card Badge -->
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
                <svg class="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>About Me</span>
              </div>

              <!-- Status -->
              <p class="text-white font-medium text-lg sm:text-xl leading-snug">
                Currently an Informatics Engineering student at 
                <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent font-bold">
                  Universitas Nusa Mandiri
                </span>.
              </p>

              <!-- Description Paragraphs -->
              <div class="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Hello! I'm <strong class="text-white font-semibold">Satria Afzal Zaydan</strong>. My fascination with technology has evolved into a dedicated passion for web development. I specialize in crafting interactive, user-friendly interfaces using <strong class="text-purple-300 font-semibold">Vue.js</strong>, seamlessly bridging them with robust backend solutions powered by <strong class="text-white font-semibold">Laravel & PHP</strong>.
                </p>
                <p>
                  Beyond technical execution, I thrive in collaborative environments and proactive problem-solving. Whether I'm writing clean code, playing guitar, or gaming, I constantly refine the balance between logic and creativity.
                </p>
              </div>
            </div>

          </div>
        </div>

        <!-- Highlight Cards (Right Column) -->
        <div class="lg:col-span-4 flex flex-col gap-6 justify-between">
          
          <!-- Core Stack Card -->
          <div class="bg-slate-900/60 border border-purple-500/20 hover:border-purple-500/40 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5">
            <h3 class="text-white font-bold text-base mb-4 flex items-center gap-2">
              <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Core Stack
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in techStack" :key="tech" class="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/80 border border-slate-700/60 text-purple-200">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Current Focus / Internship Card -->
          <div class="bg-slate-900/60 border border-purple-500/20 hover:border-purple-500/40 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 flex-1 flex flex-col justify-center">
            <div class="flex items-center gap-2.5 mb-2">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span class="text-white font-semibold text-sm">Current Focus</span>
            </div>
            <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-0">
              Seeking internship & freelance opportunities to make a tangible impact, apply scalable web solutions, and grow alongside industry professionals.
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const words = ["Full-Stack Developer", "Frontend Developer", "Web Developer"]
const techStack = ["Vue.js", "Laravel", "PHP", "Tailwind CSS", "MySQL", "REST API", "Java-Script"]

const displayText = ref('')
const isDeleting = ref(false)
let wordIndex = 0
let charIndex = 0

const typeEffect = () => {
  const currentWord = words[wordIndex]

  if (isDeleting.value) {
    displayText.value = currentWord.substring(0, charIndex - 1)
    charIndex--
  } else {
    displayText.value = currentWord.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting.value ? 50 : 100

  if (!isDeleting.value && charIndex === currentWord.length) {
    typeSpeed = 2000
    isDeleting.value = true
  } else if (isDeleting.value && charIndex === 0) {
    isDeleting.value = false
    wordIndex = (wordIndex + 1) % words.length
    typeSpeed = 500
  }

  setTimeout(typeEffect, typeSpeed)
}

onMounted(() => {
  setTimeout(typeEffect, 500)
})
</script>