<template>
  <section class="about-section py-5" id="about">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-8">
          <h2 class="dynamic-heading text-white fw-bold mb-3" data-aos="fade-in">
            I'm a <span class="text-purple">{{ displayText }}</span><span class="cursor">|</span>
          </h2>
          
          <p class="current-status text-white mb-5 fs-5" data-aos="fade-up">
            Currently, I'm an Informatics Engineering student at <span class="text-primary fw-medium">Universitas Nusa Mandiri</span>.
          </p>
          
          <p class="description-text fs-5 lh-lg" data-aos="fade-down">
            A self-taught Full-Stack Developer and UI/UX designer, functioning in the industry. 
            I make meaningful and delightful digital products using Vue.js, Laravel, and PHP that create an equilibrium between user needs and business goals.
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
</style>