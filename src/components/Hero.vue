<template>
  <section ref="heroRef" class="relative w-full min-h-screen flex items-center pt-20 pb-12 z-20 overflow-hidden" id="home">
    
    <!-- Efek Cahaya / Glow Background -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <!-- BAGIAN KIRI: Teks & Tombol -->
        <div class="text-left">
          
          <div class="gsap-text opacity-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span class="text-purple-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Available for Freelance & Work
            </span>
          </div>

          <h1 class="gsap-text opacity-0 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight mb-4">
            Hi, I'm <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              Satria Afzal Zaydan
            </span>
          </h1>

          <p class="gsap-text opacity-0 text-slate-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
            Passionate Full-Stack Web Developer specialized in building responsive user interfaces with <span class="text-white font-medium">Vue.js</span> and robust backend systems powered by <span class="text-white font-medium">Laravel & PHP</span>. Turning complex problems into sleek, production-ready solutions.
          </p>

          <div class="flex flex-wrap items-center gap-4">
            <a href="#projects" class="gsap-btn opacity-0 relative z-30 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-purple-600/25 transition-all duration-300 transform hover:-translate-y-1">
              Explore Projects
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>

            <a href="https://www.linkedin.com/in/satria-afzal-zaydan-64a190308" target="_blank" rel="noopener noreferrer" class="gsap-btn opacity-0 relative z-30 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 border border-purple-500/20 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 transform hover:-translate-y-1">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
              <span>Let's Connect</span>
            </a>
          </div>
        </div>

        <div class="lg:text-right flex justify-center lg:justify-end perspective-1000">
          
          <div class="gsap-image opacity-0 relative w-full max-w-lg bg-[#0d1117] border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 text-left">
            
            <!-- Window Header (Mac style) -->
            <div class="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-700/50">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div class="text-xs text-slate-400 font-mono text-center flex-1 pr-8">
                developer-profile.vue
              </div>
            </div>

            <!-- Syntax Content -->
            <div class="p-6 overflow-x-auto">
<pre class="text-sm font-mono leading-relaxed"><code class="text-slate-300"><span class="text-purple-400">const</span> developer = {
  name: <span class="text-green-400">'Satria Afzal Zaydan'</span>,
  role: <span class="text-green-400">'Full-Stack Web Developer'</span>,
  coreTech: [<span class="text-green-400">'Vue.js'</span>, <span class="text-green-400">'Laravel'</span>, <span class="text-green-400">'JavaScript'</span>, <span class="text-green-400">'MySQL'</span>],
  status: <span class="text-green-400">'Ready to Build & Collaborate'</span>,
  passionateAbout: [
    <span class="text-green-400">'Web Development'</span>,
    <span class="text-green-400">'Tech Enthusiast'</span>,
    <span class="text-green-400">'AI Implementation'</span>
  ]
}</code></pre>
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

const heroRef = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo('.gsap-text', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    )
    
    .fromTo('.gsap-btn',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
      "-=0.5" 
    )

    .fromTo('.gsap-image',
      { opacity: 0, x: 40, y: 40, rotationZ: 3, scale: 0.95 },
      { 
        opacity: 1, 
        x: 0, 
        y: 0, 
        rotationZ: 0, 
        scale: 1, 
        duration: 1.5, 
        ease: 'expo.out', 
        onComplete: () => {
          gsap.to('.gsap-image', {
            y: -15, 
            duration: 2.5,
            ease: 'sine.inOut',
            yoyo: true, 
            repeat: -1 
          })
        }
      },
      "-=1.2" 
    )

  }, heroRef.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>