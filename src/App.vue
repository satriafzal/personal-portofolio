<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import AboutView from './views/AboutView.vue';
import Skills from './views/Skills.vue';
import Orbit from './views/Orbit.vue';
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
    <Skills/>
    <Orbit/>
    <Project/>
    <Certificate/>
    <Contact/>
    <Footer/>
  </div>
</template>

<style>
body {
  background-color: #120c1f !important;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
