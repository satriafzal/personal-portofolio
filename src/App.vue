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
  <div class="min-h-screen bg-[#120c1f] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-purple-500 selection:text-white">
    <Navbar />
    <main>
      <Hero />
      <AboutView />
      <Myjourney />
      <Skills />
      <Project />
      <Certificate />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>