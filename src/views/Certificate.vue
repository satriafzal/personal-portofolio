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

      <!-- Certificates Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div v-for="cert in certificates" :key="cert.id" class="gsap-cert opacity-0">
          <div
            class="h-full flex flex-col bg-slate-900/60 border border-purple-500/10 border-t-2 border-t-transparent hover:border-t-purple-500 hover:border-purple-500/30 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group">

            <!-- Certificate Image Thumbnail -->
            <div class="h-52 w-full overflow-hidden bg-slate-950 relative">
              <div class="absolute inset-0 bg-slate-800 animate-pulse -z-10"></div>
              <img :src="cert.image" :alt="cert.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>

            <!-- Certificate Info -->
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-white text-xl font-bold mb-1">
                {{ cert.title }}
              </h3>

              <p class="text-purple-400 font-medium text-sm mb-4">
                {{ cert.issuer }}
              </p>

              <p class="text-slate-400 text-sm leading-relaxed mb-6">
                {{ cert.desc }}
              </p>

              <!-- View Action Button -->
              <button @click="openModal(cert.image)"
                class="text-purple-300 hover:text-purple-200 text-sm font-semibold inline-flex items-center gap-2 transition-colors duration-200 mt-auto self-start group/btn">
                View
                <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7-7 7">
                  </path>
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>

    <!-- CERTIFICATE FULL IMAGE MODAL -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="isModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          @click="closeModal">
          
          <!-- Close Button -->
          <button
            class="absolute top-4 right-4 z-[60] p-2 bg-slate-800/80 text-white rounded-full hover:bg-purple-600 hover:rotate-90 transition-all duration-300 shadow-lg"
            @click.stop="closeModal">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Image Preview Container -->
          <div class="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center p-2" @click.stop>
            <img :src="activeImg" alt="Certificate Preview"
              class="w-full h-full max-h-[85vh] object-contain rounded-xl border border-purple-500/20 shadow-2xl shadow-purple-500/10" />
          </div>
          
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const certificatesRef = ref(null)
let ctx

const certificates = [
  {
    id: 1,
    title: "Full Stack Developer FWD Certificate",
    issuer: "Dibimbing",
    desc: "complete the 5-day Full Stack Developer class with @dibimbing.id! Throughout this intensive event, I had the opportunity to dive deep into modern web development concepts and get hands-on experience building applications using Next.js.",
    image: "/image/fwd.jpeg"
  },
  {
    id: 2,
    title: "Quality Assurance (QA) Testing Certificate",
    issuer: "Dibimbing",
    desc: "Thrilled to share a new milestone! 🎓 Today, I received my Quality Assurance certificate from an insightful session hosted by @dibimbing.id. As someone accustomed to using Java for building application logic and features, diving into Automation Testing provided a completely refreshing perspective.",
    image: "/image/dibimbing.jpeg"
  },
  {
    id: 3, 
    title: "Intermediate Assistant Web Developer",
    issuer: "Kementrian Komunikasi Dan Digital",
    desc: "Completed intermediate-level training from the Ministry of Communication and Digital. Mastered the implementation of modern web technologies, full-stack architecture, and best practices in building responsive, scalable applications.",
    image: "/image/certif1.png"
  },
  {
    id: 4, 
    title: "Fundamentals Assistant Web Developer",
    issuer: "Kementrian Komunikasi Dan Digital",
    desc: "Mastered the fundamentals of web programming through the comprehensive Digital Talent Academy program. Acquired a strong understanding of core web languages and industry-standard software engineering methodologies.",
    image: "/image/certif2.png"
  },
  {
    id: 5,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Academy",
    desc: "Achieved competency graduation from Dicoding Academy. Understood the fundamental concepts of Artificial Intelligence, machine learning, and data processing basics to analyze modern AI technological case studies.",
    image: "/image/certif3.png"
  },
  {
    id: 6,
    title: "Transforming Education Through AI, Innovation and Collaboration for a Digital Future",
    issuer: "Google Developer Groups Community UNM",
    desc: "Active participant in the Tech Talk hosted by Google Developer Groups (GDG) on Campus. Gained valuable insights into Artificial Intelligence innovations and digital collaboration to transform the future of education.",
    image: "/image/google.png"
  },
  {
    id: 7,
    title: "Cisco Certificate Network",
    issuer: "CISCO",
    desc: "Completed the foundational network infrastructure certification program from Cisco Networking Academy. Acquired practical skills in utilizing Cisco Packet Tracer to design, configure, and simulate computer network architectures.",
    image: "/image/cisco.png"
  },
  {
    id: 8,
    title: "IDCAMP x Dicoding",
    issuer: "Dicoding",
    desc: "Participated in the exclusive IDCamp x Dicoding program, focusing on mastering modern industry practices and accelerating professional career growth as a Full Stack Developer.",
    image: "/image/dicoding.png"
  },
  {
    id: 9,
    title: "Literasi Digital",
    issuer: "Kementrian Komunikasi Dan Informatika",
    desc: "Active participant in the Digital Literacy program hosted by the Ministry of Communication and Information Technology. Gained crucial insights into safe internet practices, focusing on cyber awareness and strategies to protect families and communities from the risks of online gambling and illegal online loans.",
    image: "/image/kominfo.png"
  },
  {
    id: 10,
    title: "Bootcamp C++",
    issuer: "Dilesin",
    desc: "Active participant in the intensive C++ Programming Bootcamp (Batch 5) hosted by Dilesin Academy. Successfully completed a total of 10 comprehensive sessions, building a solid foundation in core programming concepts, structural logic, object-oriented programming (OOP) principles, and algorithmic problem-solving using C++.",
    image: "/image/dilesin.png"
  }
]

// --- MESIN MODAL ---
const isModalOpen = ref(false)
const activeImg = ref('')

const openModal = (imgSrc) => {
  activeImg.value = imgSrc
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    activeImg.value = ''
  }, 300)
  document.body.style.overflow = 'auto'
}

const handleEsc = (e) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEsc)

  // Setup GSAP
  ctx = gsap.context(() => {
    // Animasi Header
    gsap.fromTo('.gsap-header',
      { opacity: 0, x: -50 },
      {
        scrollTrigger: {
          trigger: '.gsap-header',
          start: 'top 85%',
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out'
      }
    )

    // Animasi Certificates Card
    gsap.fromTo('.gsap-cert',
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: '.gsap-cert',
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15, // Efek muncul berurutan (kiri ke kanan, atas ke bawah)
        ease: 'back.out(1.2)'
      }
    )
  }, certificatesRef.value)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc)
  if (ctx) ctx.revert()
})
</script>