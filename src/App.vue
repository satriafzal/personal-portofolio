<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import AboutView from './views/AboutView.vue';
import Skills from './views/Skills.vue';
import Myjourney from './views/Myjourney.vue';
import Project from './views/Project.vue';
import Certificate from './views/Certificate.vue';
import Contact from './views/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="portfolio-wrapper">
    <Navbar />
    <Hero />
    <AboutView/>
    <Myjourney/>
    <Skills/>
    <Project/>
    <Certificate/>
    <Contact/>
    <Footer/>
  </div>
</template>

<style>
html, body {
  overflow-x: hidden !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0;
  padding: 0;
  background-color: #120c1f !important; /* Nah ini biang keroknya, wajib pakai !important */
}

#app {
  overflow-x: hidden !important;
  width: 100%;
  position: relative;
  background-color: #120c1f !important; /* Sekalian kunci di sini */
}

.portfolio-wrapper {
  overflow-x: hidden !important;
  width: 100%;
  background-color: #120c1f !important; /* Sama di sini */
}
</style>
