<template>
  <section ref="certificatesRef" class="py-20 sm:py-28 relative z-20" id="certificates">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header Section -->
      <div class="gsap-header opacity-0 mb-12 sm:mb-16">
        <p class="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-1">
          My Achievements
        </p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Certificates
        </h2>
      </div>

      <!-- Featured Certificates Grid (Hanya 3) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        <div v-for="cert in featuredCertificates" :key="cert.id" class="gsap-cert opacity-0">
          <div
            class="h-full flex flex-col bg-slate-900/60 border border-purple-500/10 border-t-2 border-t-transparent hover:border-t-purple-500 hover:border-purple-500/30 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group cursor-pointer"
            @click="openCertDetailModal(cert)">

            <!-- Certificate Image Thumbnail -->
            <div class="h-52 w-full overflow-hidden bg-slate-950 relative">
              <div class="absolute inset-0 bg-slate-800 animate-pulse -z-10"></div>
              <img :src="cert.image" :alt="cert.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>

            <!-- Certificate Info -->
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-white text-xl font-bold mb-1 group-hover:text-purple-300 transition-colors">
                {{ cert.title }}
              </h3>

              <p class="text-purple-400 font-medium text-sm mb-4">
                {{ cert.issuer }}
              </p>

              <p class="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {{ cert.desc }}
              </p>

              <!-- View Action Button -->
              <span
                class="text-purple-300 text-sm font-semibold inline-flex items-center gap-2 mt-auto self-start group-hover:text-purple-200">
                View Details
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7-7 7">
                  </path>
                </svg>
              </span>
            </div>

          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="gsap-btn opacity-0 flex justify-center">
        <button @click="openListModal"
          class="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-500 hover:bg-purple-600/20 transition-all duration-300 font-semibold tracking-wide shadow-lg shadow-purple-900/20 hover:-translate-y-1">
          Lihat Sertifikat Lainnya
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </div>

    </div>

    <!-- MODAL 1: ALL CERTIFICATES LIST -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div v-if="isListModalOpen"
          class="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md"
          @click="closeListModal">
          
          <!-- Modal Container -->
          <div class="bg-slate-900 border border-purple-500/20 rounded-3xl overflow-hidden w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl shadow-purple-500/20"
            @click.stop>
            
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-6 border-b border-purple-500/10 bg-slate-900/95 sticky top-0 z-10">
              <div>
                <h3 class="text-2xl font-bold text-white">All Certificates</h3>
                <p class="text-purple-400 text-sm mt-1">My complete learning and achievement history</p>
              </div>
              <button @click="closeListModal" class="p-2 bg-slate-800 text-white rounded-full hover:bg-purple-600 hover:rotate-90 transition-all duration-300">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <!-- Modal Scrollable Content -->
            <div class="p-6 overflow-y-auto bg-slate-950/50">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="cert in certificates" :key="cert.id">
                  <div
                    class="h-full flex flex-col bg-slate-900 border border-purple-500/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                    @click="openCertDetailModal(cert)">
                    
                    <div class="h-48 w-full overflow-hidden bg-slate-950">
                      <img :src="cert.image" :alt="cert.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    
                    <div class="p-5 flex flex-col flex-grow">
                      <h4 class="text-white font-bold mb-1 text-lg group-hover:text-purple-300 transition-colors">{{ cert.title }}</h4>
                      <p class="text-purple-400 font-medium text-xs mb-3">{{ cert.issuer }}</p>
                      <p class="text-slate-400 text-xs leading-relaxed line-clamp-2">{{ cert.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- MODAL 2: FULL CERTIFICATE DETAIL & IMAGE PREVIEW (WADAH GAMBAR SUDAH DI-FITTED) -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="isDetailModalOpen"
          class="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl"
          @click="closeDetailModal">
          
          <!-- Close Button -->
          <button
            class="absolute top-4 right-4 z-[90] p-2 bg-slate-800/80 text-white rounded-full hover:bg-purple-600 hover:rotate-90 transition-all duration-300 shadow-lg"
            @click.stop="closeDetailModal">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Detail Container -->
          <div class="bg-slate-900 border border-purple-500/20 rounded-3xl overflow-hidden w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl shadow-purple-500/20"
            @click.stop>
            
            <!-- Gambar Sertifikat (Ukuran Wadah Mengikuti Tinggi Gambar) -->
            <div class="relative max-h-[55vh] bg-slate-950/80 flex items-center justify-center p-3 sm:p-4 shrink-0 overflow-hidden border-b border-slate-800">
              <img :src="activeCert?.image" :alt="activeCert?.title"
                class="max-h-[50vh] w-auto max-w-full object-contain rounded-lg shadow-xl" />
            </div>

            <!-- Detail Info & Full Description (Bawah - Scrollable) -->
            <div class="p-6 sm:p-8 overflow-y-auto space-y-3 bg-slate-900">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <h3 class="text-xl sm:text-2xl font-bold text-white">
                  {{ activeCert?.title }}
                </h3>
                <span class="px-3.5 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-semibold rounded-full">
                  {{ activeCert?.issuer }}
                </span>
              </div>

              <p class="text-slate-300 text-sm sm:text-base leading-relaxed pt-3 border-t border-slate-800/80">
                {{ activeCert?.desc }}
              </p>
            </div>

          </div>
          
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const certificatesRef = ref(null)
let ctx

const certificates = [
  {
    id: 1,
    title: "OpenCv Bootcamp Certificate",
    issuer: "OpenCv",
    desc: "Successfully completed an intensive Computer Vision training program from OpenCV University, earning a Certificate of Excellence with a final score of 96%.",
    image: "/image/opencv.jpeg"
  },
  {
    id: 2,
    title: "Full Stack Developer FWD Certificate",
    issuer: "Dibimbing",
    desc: "complete the 5-day Full Stack Developer class with @dibimbing.id! Throughout this intensive event, I had the opportunity to dive deep into modern web development concepts and get hands-on experience building applications using Next.js.",
    image: "/image/fwd.jpeg"
  },
  {
    id: 3,
    title: "Quality Assurance (QA) Testing Certificate",
    issuer: "Dibimbing",
    desc: "Thrilled to share a new milestone! 🎓 Today, I received my Quality Assurance certificate from an insightful session hosted by @dibimbing.id. As someone accustomed to using Java for building application logic and features, diving into Automation Testing provided a completely refreshing perspective.",
    image: "/image/dibimbing.jpeg"
  },
  {
    id: 4, 
    title: "Intermediate Assistant Web Developer",
    issuer: "Kementrian Komunikasi Dan Digital",
    desc: "Completed intermediate-level training from the Ministry of Communication and Digital. Mastered the implementation of modern web technologies, full-stack architecture, and best practices in building responsive, scalable applications.",
    image: "/image/certif1.png"
  },
  {
    id: 5, 
    title: "Fundamentals Assistant Web Developer",
    issuer: "Kementrian Komunikasi Dan Digital",
    desc: "Mastered the fundamentals of web programming through the comprehensive Digital Talent Academy program. Acquired a strong understanding of core web languages and industry-standard software engineering methodologies.",
    image: "/image/certif2.png"
  },
  {
    id: 6,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Academy",
    desc: "Achieved competency graduation from Dicoding Academy. Understood the fundamental concepts of Artificial Intelligence, machine learning, and data processing basics to analyze modern AI technological case studies.",
    image: "/image/certif3.png"
  },
  {
    id: 7,
    title: "Transforming Education Through AI, Innovation and Collaboration for a Digital Future",
    issuer: "Google Developer Groups Community UNM",
    desc: "Active participant in the Tech Talk hosted by Google Developer Groups (GDG) on Campus. Gained valuable insights into Artificial Intelligence innovations and digital collaboration to transform the future of education.",
    image: "/image/google.png"
  },
  {
    id: 8,
    title: "Cisco Certificate Network",
    issuer: "CISCO",
    desc: "Completed the foundational network infrastructure certification program from Cisco Networking Academy. Acquired practical skills in utilizing Cisco Packet Tracer to design, configure, and simulate computer network architectures.",
    image: "/image/cisco.png"
  },
  {
    id: 9,
    title: "IDCAMP x Dicoding",
    issuer: "Dicoding",
    desc: "Participated in the exclusive IDCamp x Dicoding program, focusing on mastering modern industry practices and accelerating professional career growth as a Full Stack Developer.",
    image: "/image/dicoding.png"
  },
  {
    id: 10,
    title: "Literasi Digital",
    issuer: "Kementrian Komunikasi Dan Informatika",
    desc: "Active participant in the Digital Literacy program hosted by the Ministry of Communication and Information Technology. Gained crucial insights into safe internet practices, focusing on cyber awareness and strategies to protect families and communities from the risks of online gambling and illegal online loans.",
    image: "/image/kominfo.png"
  },
  {
    id: 11,
    title: "Bootcamp C++",
    issuer: "Dilesin",
    desc: "Active participant in the intensive C++ Programming Bootcamp (Batch 5) hosted by Dilesin Academy. Successfully completed a total of 10 comprehensive sessions, building a solid foundation in core programming concepts, structural logic, object-oriented programming (OOP) principles, and algorithmic problem-solving using C++.",
    image: "/image/dilesin.png"
  },
  {
    id: 12,
    title: "AI Implementation for Digital Business Transformation Workshop",
    issuer: "Nusa Mandiri University",
    desc: "Participated in an academic workshop hosted by the Faculty of Information Technology at Universitas Nusa Mandiri. Gained practical insights into building smart applications powered by Artificial Intelligence to accelerate digital transformation in modern business operations.",
    image: "/image/nusman1.jpg"
  },
  {
    id: 13,
    title: "Integration of Generative AI in Modern Software Development Webinar",
    issuer: "Nusa Mandiri University",
    desc: "Participated in an online academic webinar hosted by the Faculty of Information Technology at Universitas Nusa Mandiri. Explored key methodologies, best practices, and practical workflows for integrating Generative Artificial Intelligence into modern software engineering pipelines.",
    image: "/image/nusman2.jpg"
  },
]

// Featured 3 item
const featuredCertificates = computed(() => certificates.slice(0, 3))

// State Modals
const isListModalOpen = ref(false)
const isDetailModalOpen = ref(false)
const activeCert = ref(null)

const openListModal = () => {
  isListModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeListModal = () => {
  isListModalOpen.value = false
  if (!isDetailModalOpen.value) {
    document.body.style.overflow = 'auto'
  }
}

// Buka modal detail sertifikat utuh
const openCertDetailModal = (cert) => {
  activeCert.value = cert
  isDetailModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeDetailModal = () => {
  isDetailModalOpen.value = false
  setTimeout(() => {
    activeCert.value = null
  }, 300)
  
  if (!isListModalOpen.value) {
    document.body.style.overflow = 'auto'
  }
}

const handleEsc = (e) => {
  if (e.key === 'Escape') {
    if (isDetailModalOpen.value) {
      closeDetailModal()
    } 
    else if (isListModalOpen.value) {
      closeListModal()
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEsc)

  ctx = gsap.context(() => {
    gsap.fromTo('.gsap-header',
      { opacity: 0, x: -50 },
      {
        scrollTrigger: { trigger: '.gsap-header', start: 'top 85%' },
        opacity: 1, x: 0, duration: 1, ease: 'power3.out'
      }
    )

    gsap.fromTo('.gsap-cert',
      { opacity: 0, y: 50 },
      {
        scrollTrigger: { trigger: '.gsap-cert', start: 'top 80%' },
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)'
      }
    )

    gsap.fromTo('.gsap-btn',
      { opacity: 0, scale: 0.9 },
      {
        scrollTrigger: { trigger: '.gsap-btn', start: 'top 90%' },
        opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)', delay: 0.4
      }
    )
  }, certificatesRef.value)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc)
  if (ctx) ctx.revert()
})
</script>