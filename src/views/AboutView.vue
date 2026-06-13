\<template>
  <section class="about-section py-5" id="about">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-8">
          <h2 class="dynamic-heading text-white fw-bold mb-3" v-anim="'fade-in'">
            I'm a <span class="text-purple">{{ displayText }}</span><span class="cursor">|</span>
          </h2>
          
          <p class="current-status text-white mb-2 fs-5" v-anim="'fade-up'">
            Currently, I'm an Informatics Engineering student at <span class="text-primary fw-medium">Universitas Nusa Mandiri</span>.
          </p>
          
          <p class="description-text fs-5 lh-lg" v-anim="'fade-down'">
            Hello! I'm Satria Afzal Zaydan, an Informatics Engineering student at Universitas Nusa Mandiri. My lifelong fascination with technology has evolved into a dedicated passion for web development. I specialize in crafting interactive, user-friendly interfaces using Vue.js, seamlessly bridging them with robust backend solutions like Laravel and PHP. Beyond technical execution, I am a highly collaborative team player who thrives in proactive brainstorming and problem-solving sessions. Whether I'm coding, playing music, or gaming, I constantly refine the balance between logic and creativity. I am currently seeking internship opportunities to make a tangible impact, apply my solutions, and grow alongside industry professionals
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const words = ["Full-Stack Developer", "Frontend Developer", "Software Engineer"]
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

<style scoped>
  @import '@/assets/style/About.css';

  @media (max-width: 767.98px) {
    .about-section {
      margin-top: 0;
      padding-top: 0 !important;
    }
  }
</style>