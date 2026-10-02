<template>
  <section ref="aboutRef" class="py-20 sm:py-28 relative z-20" id="about">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="about-header opacity-0 text-center mb-12 sm:mb-16">
        <p class="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-3">
          Get To Know Me
        </p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          I'm a <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">{{ typedText }}</span><span class="text-purple-500 animate-pulse">|</span>
        </h2>
      </div>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- CARD 1: Kiri (About Me) -->
        <div class="about-card opacity-0 lg:col-span-2 bg-slate-900/50 border border-purple-500/10 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-sm shadow-xl shadow-purple-900/5">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            About Me
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
            Currently an Informatics Engineering student at <span class="text-purple-400">Universitas Nusa Mandiri</span>
          </h3>
          <div class="space-y-4 text-slate-300 text-base leading-relaxed">
            <p>
              Hello! I'm <span class="text-white font-semibold">Satria Afzal Zaydan</span>. My fascination with technology has evolved into a dedicated passion for web development. I specialize in crafting interactive, user-friendly interfaces using <span class="text-purple-400 font-medium">Vue.js</span>, seamlessly bridging them with robust backend solutions powered by <span class="text-purple-400 font-medium">Laravel & PHP</span>.
            </p>
            <p>
              Beyond technical execution, I thrive in collaborative environments and proactive problem-solving. Whether I'm writing clean code, playing guitar, or gaming, I constantly refine the balance between logic and creativity.
            </p>
          </div>
        </div>

        <!-- Kolom Kanan -->
        <div class="flex flex-col gap-6 lg:col-span-1">
          
          <!-- CARD 2: Core Stack -->
          <div class="about-card opacity-0 flex-1 bg-slate-900/50 border border-purple-500/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-xl shadow-purple-900/5">
            <div class="flex items-center gap-2 text-white font-semibold mb-6">
              <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              Core Stack
            </div>
            <div class="flex flex-wrap gap-2 sm:gap-3">
              <span v-for="tech in ['Vue.js', 'Laravel', 'PHP', 'Tailwind CSS', 'MySQL', 'REST API', 'Java-Script']" :key="tech" 
                    class="stack-pill opacity-0 scale-90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-slate-800/80 border border-slate-700/50 text-slate-300 text-sm hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors cursor-default">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- CARD 3: Current Focus -->
          <div class="about-card opacity-0 bg-slate-900/50 border border-purple-500/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-xl shadow-purple-900/5">
            <div class="flex items-center gap-2 text-white font-semibold mb-4">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
              </span>
              Current Focus
            </div>
            <p class="text-slate-400 text-sm leading-relaxed">
              Seeking internship & freelance opportunities to make a tangible impact, apply scalable web solutions, and grow alongside industry professionals.
            </p>
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

const aboutRef = ref(null)
let ctx

// === LOGIKA TYPING EFFECT ===
const typedText = ref('')
const roles = ['Full-Stack Developer','Web Development', 'Tech Enthusiast', 'Informatics Student']
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typingTimeout

const typeText = () => {
  const currentRole = roles[roleIndex]
  
  if (isDeleting) {
    // Kalau lagi mode menghapus (kurangi huruf)
    typedText.value = currentRole.substring(0, charIndex - 1)
    charIndex--
  } else {
    // Kalau lagi mode mengetik (tambah huruf)
    typedText.value = currentRole.substring(0, charIndex + 1)
    charIndex++
  }

  // Kecepatan ngetik vs kecepatan menghapus (hapus lebih cepat)
  let typeSpeed = isDeleting ? 50 : 100

  // Jika satu kata sudah selesai diketik utuh
  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000 // Berhenti 2 detik biar bisa dibaca user, baru mulai hapus
    isDeleting = true
  } 
  // Jika kata sudah selesai dihapus (kosong)
  else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.length // Pindah ke kata selanjutnya
    typeSpeed = 500 // Jeda 0.5 detik sebelum mulai ngetik kata baru
  }

  typingTimeout = setTimeout(typeText, typeSpeed)
}

onMounted(() => {
  // Mulai animasi ngetik
  typeText()

  // Mulai animasi GSAP
  ctx = gsap.context(() => {
    
    gsap.to('.about-header', {
      scrollTrigger: {
        trigger: '.about-header',
        start: 'top 85%',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    })
    
    gsap.set('.about-header', { y: 30 })
    gsap.set('.about-card', { y: 40 })

    gsap.to('.about-card', {
      scrollTrigger: {
        trigger: '.about-card',
        start: 'top 80%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.2)',
      onComplete: () => {
        gsap.to('.stack-pill', {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'back.out(2)'
        })
      }
    })

  }, aboutRef.value)
})

onUnmounted(() => {
  clearTimeout(typingTimeout) // Wajib dibersihkan biar gak bocor memory pas pindah halaman
  if (ctx) ctx.revert()
})
</script>