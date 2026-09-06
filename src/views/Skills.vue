<template>
    <section class="skills-section py-5 position-relative" id="skills" style="z-index: 999;">
        <div class="container">
            
            <div class="d-flex justify-content-between align-items-end mb-5" data-aos="fade-right">
                <div>
                    <p class="text-purple fw-semibold mb-2">My Expertise</p>
                    <h2 class="text-white fw-bold mb-0">Personal Skills</h2>
                </div>
            </div>

            <div class="row g-4">
                
                <!-- CARD FRONTEND -->
                <div class="col-12 col-md-4" data-aos="fade-up">
                    <div class="skill-category-card d-flex flex-column h-100 p-4 rounded-4">
                        <h4 class="text-white fw-bold mb-4 text-center border-bottom border-secondary pb-3">Frontend</h4>
                        <div class="d-flex justify-content-center flex-wrap gap-3 mt-auto mb-auto">
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" title="HTML5">
                            </div>
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" title="CSS3">
                            </div>
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript">
                            </div>
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue.js" title="Vue.js">
                            </div>
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" title="Bootstrap">
                            </div>
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" title="Tailwind">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CARD BACKEND -->
                <div class="col-12 col-md-4" data-aos="fade-up">
                    <div class="skill-category-card d-flex flex-column h-100 p-4 rounded-4">
                        <h4 class="text-white fw-bold mb-4 text-center border-bottom border-secondary pb-3">Backend</h4>
                        <div class="d-flex justify-content-center flex-wrap gap-3 mt-auto mb-auto">
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" title="Laravel">
                            </div>
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" title="PHP">
                            </div>
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" alt="Go" title="Go">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CARD TOOLS -->
                <div class="col-12 col-md-4" data-aos="fade-up">
                    <div class="skill-category-card d-flex flex-column h-100 p-4 rounded-4">
                        <h4 class="text-white fw-bold mb-4 text-center border-bottom border-secondary pb-3">Tools</h4>
                        <div class="d-flex justify-content-center flex-wrap gap-3 mt-auto mb-auto">
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" title="Figma">
                            </div>
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" class="git-icon" title="GitHub">
                            </div>
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" title="VS Code">
                            </div>
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" title="Postman">
                            </div>
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.simpleicons.org/discord/5865F2" alt="Discord" title="Discord">
                            </div>
                            <div class="skill-icon-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase" title="Firebase">
                            </div>
                        </div>
                    </div>
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

    .skill-category-card {
        background: #150f24; 
        border: 1px solid rgba(157, 124, 255, 0.1);
        transition: all 0.3s ease-in-out;
        border-top: 4px solid transparent; 
    }

    .skill-category-card:hover {
        border-top: 4px solid #9d7cff; 
        transform: translateY(-8px); 
        box-shadow: 0 10px 25px rgba(157, 124, 255, 0.15); 
    }

    .border-secondary {
        border-color: rgba(255, 255, 255, 0.1) !important;
    }

    @media (max-width: 767.98px) {
        .skills-section {
            padding-bottom: 2rem !important;
            position: relative;
            z-index: 10;
        }
    }

    .text-purple {
        color: #9d7cff !important;
    }
</style>