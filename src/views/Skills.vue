<template>
    <section class="skills-section py-5 position-relative" id="skills" style="z-index: 999;">
        <div class="container">
            <h2 class="text-white fw-bold mb-5 text-start" v-anim="'fade-right'">Personal Skills</h2>

            <div class="d-flex justify-content-center flex-wrap gap-3 gap-md-4 mb-4" v-anim="'fade-up'">
                <div class="skill-icon-wrapper">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                        alt="Vue.js">
                </div>
                <div class="skill-icon-wrapper">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                        alt="Laravel">
                </div>
                <div class="skill-icon-wrapper">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP">
                </div>
                <div class="skill-icon-wrapper">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                        alt="Figma">
                </div>
                <div class="skill-icon-wrapper">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        alt="github" class="git-icon">
                </div>
            </div>

            <div class="d-flex justify-content-center flex-wrap gap-3 gap-md-4" v-anim="'fade-up'">
                <div class="skill-icon-wrapper">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                        alt="HTML5">
                </div>
                <div class="skill-icon-wrapper">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                        alt="CSS3">
                </div>
                <div class="skill-icon-wrapper">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                        alt="JavaScript">
                </div>
                <div class="skill-icon-wrapper">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                        alt="Bootstrap">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    @import '@/assets/style/Skills.css';

    .git-icon {
        filter: invert(1) brightness(2);
    }

    @media (max-width: 767.98px) {
        .skills-section {
            padding-bottom: 2rem !important;
            position: relative;
            z-index: 10;
        }
    }
</style>