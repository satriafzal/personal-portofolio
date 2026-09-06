<template>
  <section class="certificates-section py-5" id="certificates">
    <div class="container py-5">
      
      <div class="d-flex justify-content-between align-items-end mb-5" data-aos="fade-right">
        <div v-anim="'fade-left'">
          <p class="text-purple fw-semibold mb-2">My Achievements</p>
          <h2 class="text-white fw-bold mb-0">Certificates</h2>
        </div>
      </div>

      <div class="row g-4">

        <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/dibimbing.jpeg" alt="DevFest Jakarta 2025" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Quality Assurance (QA) Testing Certificate</h4>
              <p class="text-purple mb-3 fs-6">Dibimbing</p>
              <p class="text-white-50 fs-6 mb-4">
                Thrilled to share a new milestone! 🎓
              Today, I received my Quality Assurance certificate from an insightful session hosted by @dibimbing.id.
              As someone accustomed to using Java for building application logic and features, diving into Automation Testing provided a completely refreshing perspective.
              </p>
              <button @click="openModal('/image/dibimbing.jpeg')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
        
        <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/certif1.png" alt="DevFest Jakarta 2025" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Intermediate Assistant Web Developer</h4>
              <p class="text-purple mb-3 fs-6">Kementrian Komunikasi Dan Digital</p>
              <p class="text-white-50 fs-6 mb-4">
                Completed intermediate-level training from the Ministry of Communication and Digital. Mastered the implementation of modern web technologies, full-stack architecture, and best practices in building responsive, scalable applications
              </p>
              <button @click="openModal('/image/certif1.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/certif2.png" alt="Offline Masterclass" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Fundamentals Assistant Web Developer</h4>
              <p class="text-purple mb-3 fs-6">Kementrian Komunikasi Dan Digital</p>
              <p class="text-white-50 fs-6 mb-4">
                Mastered the fundamentals of web programming through the comprehensive Digital Talent Academy program. Acquired a strong understanding of core web languages and industry-standard software engineering methodologies
              </p>
              <button @click="openModal('/image/certif2.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/certif3.png" alt="Google Student Ambassador" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Belajar Dasar AI</h4>
              <p class="text-purple mb-3 fs-6">Dicoding Academy</p>
              <p class="text-white-50 fs-6 mb-4">
                Achieved competency graduation from Dicoding Academy. Understood the fundamental concepts of Artificial Intelligence, machine learning, and data processing basics to analyze modern AI technological case studies
              </p>
              <button @click="openModal('/image/certif3.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/google.png" alt="Google Student Ambassador" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Transforming Education Through AI,Innovation and Collaboration for a Digital Future</h4>
              <p class="text-purple mb-3 fs-6">Google Developer Groups Community UNM</p>
              <p class="text-white-50 fs-6 mb-4">
                Active participant in the Tech Talk hosted by Google Developer Groups (GDG) on Campus. Gained valuable insights into Artificial Intelligence innovations and digital collaboration to transform the future of education
              </p>
              <button @click="openModal('/image/google.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/cisco.png" alt="Google Student Ambassador" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Cisco Certificate Network</h4>
              <p class="text-purple mb-3 fs-6">CISCO</p>
              <p class="text-white-50 fs-6 mb-4">
                Completed the foundational network infrastructure certification program from Cisco Networking Academy. Acquired practical skills in utilizing Cisco Packet Tracer to design, configure, and simulate computer network architectures
              </p>
              <button @click="openModal('/image/cisco.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/dicoding.png" alt="Google Student Ambassador" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">IDCAMP x Dicoding</h4>
              <p class="text-purple mb-3 fs-6">Dicoding</p>
              <p class="text-white-50 fs-6 mb-4">
                Participated in the exclusive IDCamp x Dicoding program, focusing on mastering modern industry practices and accelerating professional career growth as a Full Stack Developer
              </p>
              <button @click="openModal('/image/dicoding.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/kominfo.png" alt="Google Student Ambassador" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Literasi Digital</h4>
              <p class="text-purple mb-3 fs-6">Kementrian Komunikasi Dan Informatika</p>
              <p class="text-white-50 fs-6 mb-4">
                Active participant in the Digital Literacy program hosted by the Ministry of Communication and Information Technology. Gained crucial insights into safe internet practices, focusing on cyber awareness and strategies to protect families and communities from the risks of online gambling and illegal online loans
              </p>
              <button @click="openModal('/image/kominfo.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/dilesin.png" alt="Google Student Ambassador" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Bootcamp C++</h4>
              <p class="text-purple mb-3 fs-6">Dilesin</p>
              <p class="text-white-50 fs-6 mb-4">
                Active participant in the intensive C++ Programming Bootcamp (Batch 5) hosted by Dilesin Academy. Successfully completed a total of 10 comprehensive sessions, building a solid foundation in core programming concepts, structural logic, object-oriented programming (OOP) principles, and algorithmic problem-solving using C++
              </p>
              <button @click="openModal('/image/dilesin.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div v-if="isModalOpen" class="cert-modal-overlay" @click="closeModal">
      <button class="cert-modal-close" @click.stop="closeModal">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <div class="cert-modal-content" @click.stop>
        <img :src="activeImg" alt="Certificate Full View" class="img-fluid rounded-3 shadow-lg w-100">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isModalOpen = ref(false)
const activeImg = ref('')

const openModal = (imgSrc) => {
  activeImg.value = imgSrc
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  activeImg.value = ''
  document.body.style.overflow = 'auto'
}

const handleEsc = (e) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc)
})
</script>

<style scoped>
  @import '@/assets/style/Certificate.css';
</style>