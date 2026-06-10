<template>
  <section class="certificates-section py-5" id="certificates">
    <div class="container py-5">
      
      <div class="d-flex justify-content-between align-items-end mb-5">
        <div>
          <p class="text-purple fw-semibold mb-2">My Achievements</p>
          <h2 class="text-white fw-bold mb-0">Certificates</h2>
        </div>
      </div>

      <div class="row g-4">
        
        <div class="col-12 col-md-6 col-lg-4">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/certif1.png" alt="DevFest Jakarta 2025" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Intermediate Assistant Web Developer</h4>
              <p class="text-purple mb-3 fs-6">Kementrian Komunikasi Dan Digital</p>
              <p class="text-white-50 fs-6 mb-4">
                Participant in the DevFest Jakarta technology conference, exploring the latest in web development and Google technologies.
              </p>
              <button @click="openModal('/image/certif1.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/certif2.png" alt="Offline Masterclass" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Fundamentals Assistant Web Developer</h4>
              <p class="text-purple mb-3 fs-6">Kementrian Komunikasi Dan Digital</p>
              <p class="text-white-50 fs-6 mb-4">
                Completed the intensive offline masterclass focusing on modern tech industry practices and advanced development workflows.
              </p>
              <button @click="openModal('/image/certif2.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/certif3.png" alt="Google Student Ambassador" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Belajar Dasar AI</h4>
              <p class="text-purple mb-3 fs-6">Dicoding Academy</p>
              <p class="text-white-50 fs-6 mb-4">
                Selected participant for the Google Student Ambassador program, demonstrating leadership and technical proficiency.
              </p>
              <button @click="openModal('/image/certif3.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/google.png" alt="Google Student Ambassador" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Transforming Education Through AI: Innovation and Collaboration for a Digital Future</h4>
              <p class="text-purple mb-3 fs-6">Google Developer Groups Community UNM</p>
              <p class="text-white-50 fs-6 mb-4">
                Selected participant for the Google Student Ambassador program, demonstrating leadership and technical proficiency.
              </p>
              <button @click="openModal('/image/google.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/cisco.png" alt="Google Student Ambassador" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">Cisco Certificate Network</h4>
              <p class="text-purple mb-3 fs-6">CISCO</p>
              <p class="text-white-50 fs-6 mb-4">
                Selected participant for the Google Student Ambassador program, demonstrating leadership and technical proficiency.
              </p>
              <button @click="openModal('/image/cisco.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
                View
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="cert-card d-flex flex-column h-100 rounded-4 overflow-hidden">
            <div class="cert-img-wrapper">
              <img src="/image/dicoding.png" alt="Google Student Ambassador" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="text-white fw-bold mb-2">IDCAMP x Dicoding Certificate</h4>
              <p class="text-purple mb-3 fs-6">Dicoding</p>
              <p class="text-white-50 fs-6 mb-4">
                Selected participant for the Google Student Ambassador program, demonstrating leadership and technical proficiency.
              </p>
              <button @click="openModal('/image/dicoding.png')" class="cert-link mt-auto d-inline-flex align-items-center gap-2 border-0 bg-transparent p-0 text-start">
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