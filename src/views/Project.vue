<template>
    <section class="projects-section pt-2 pb-5" id="projects">
        <div class="container">

            <div class="d-flex justify-content-between align-items-end mb-5" v-anim="'fade-left'">
                <div>
                    <p class="text-purple fw-semibold mb-2">My Portfolio</p>
                    <h2 class="text-white fw-bold mb-0">Selected Projects</h2>
                </div>
            </div>

            <div class="row g-4">

                <div class="col-12 col-lg-4 col-md-6" v-anim="'fade-up'">
                    <div class="project-card h-100 rounded-4 overflow-hidden">
                        <div id="carouselElevate" class="carousel slide project-carousel" data-bs-ride="false">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselEduReg" data-bs-slide-to="0"
                                    class="active"></button>
                                <button type="button" data-bs-target="#carouselEduReg" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#carouselEduReg" data-bs-slide-to="2"></button>
                                <button type="button" data-bs-target="#carouselEduReg" data-bs-slide-to="3"></button>
                                <button type="button" data-bs-target="#carouselEduReg" data-bs-slide-to="4"></button>
                            </div>
                            <div class="carousel-inner h-100">
                                <div class="carousel-item active h-100">
                                    <img src="/image/home_caffe.png"
                                        class="d-block w-100 h-100 project-img-slide" alt="Edu Reg 1">
                                </div>
                                <div class="carousel-item h-100">
                                    <img src="/image/about_caffe.png"
                                        class="d-block w-100 h-100 project-img-slide" alt="Edu Reg 2">
                                </div>
                                <div class="carousel-item h-100">
                                    <img src="/image/fasilitas.png"
                                        class="d-block w-100 h-100 object-fit-cover" alt="Edu Reg 3">
                                </div>
                                <div class="carousel-item h-100">
                                    <img src="/image/menucafe.png"
                                        class="d-block w-100 h-100 object-fit-cover" alt="Edu Reg 3">
                                </div>
                                <div class="carousel-item h-100">
                                    <img src="/image/promocafe.png"
                                        class="d-block w-100 h-100 object-fit-cover" alt="Edu Reg 3">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselEduReg"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselEduReg"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>

                        <div class="project-info p-4">
                            <h4 class="text-white fw-bold mb-3">Elevate Coffee Web</h4>
                            <p class="text-white-50 fs-6 mb-4">
                                A full-stack e-commerce web application for Elevate Coffee, engineered with Vue.js and Golang. Integrated via RESTful API, the platform features secure user authentication, a seamless shopping and checkout experience, and a dedicated Admin Dashboard for efficient management of user profiles and menu inventories
                            </p>
                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <div class="d-flex gap-2">
                                    <span class="tech-badge">Vue js</span>
                                    <span class="tech-badge">Golang</span>
                                </div>
                                <a href="https://elevate-coffee-92bb1.web.app" class="icon-link">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4c6ff"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-4 col-md-6" v-anim="'fade-up'">
                    <div class="project-card h-100 rounded-4 overflow-hidden">
                        <div id="carouselProfile" class="carousel slide project-carousel" data-bs-ride="false">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselProfile" data-bs-slide-to="0"
                                    class="active"></button>
                                <button type="button" data-bs-target="#carouselProfile" data-bs-slide-to="1"></button>
                            </div>
                            <div class="carousel-inner h-100">
                                <div class="carousel-item active h-100">
                                    <img src="https://via.placeholder.com/600x400/1a132b/9d7cff?text=Company+Profile+1"
                                        class="d-block w-100 h-100 object-fit-cover" alt="Company Profile 1">
                                </div>
                                <div class="carousel-item h-100">
                                    <img src="https://via.placeholder.com/600x400/1a132b/9d7cff?text=Company+Profile+2"
                                        class="d-block w-100 h-100 object-fit-cover" alt="Company Profile 2">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselProfile"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselProfile"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>

                        <div class="project-info p-4">
                            <h4 class="text-white fw-bold mb-3">Modern Company Profile</h4>
                            <p class="text-white-50 fs-6 mb-4">
                                A static company profile website sliced from a Figma UI/UX design into VS Code. Built to
                                be fully responsive and visually appealing.
                            </p>
                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <div class="d-flex gap-2">
                                    <span class="tech-badge">Vue.js</span>
                                    <span class="tech-badge">Figma</span>
                                </div>
                                <a href="#" class="icon-link">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4c6ff"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-4 col-md-6" v-anim="'fade-up'">
                    <div class="project-card h-100 rounded-4 overflow-hidden">
                        <div id="carouselKiosk" class="carousel slide project-carousel" data-bs-ride="false">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselKiosk" data-bs-slide-to="0"
                                    class="active"></button>
                                <button type="button" data-bs-target="#carouselKiosk" data-bs-slide-to="1"></button>
                            </div>
                            <div class="carousel-inner h-100">
                                <div class="carousel-item active h-100">
                                    <img src="https://via.placeholder.com/600x400/1a132b/9d7cff?text=Ordering+App+1"
                                        class="d-block w-100 h-100 object-fit-cover" alt="Kiosk 1">
                                </div>
                                <div class="carousel-item h-100">
                                    <img src="https://via.placeholder.com/600x400/1a132b/9d7cff?text=Ordering+App+2"
                                        class="d-block w-100 h-100 object-fit-cover" alt="Kiosk 2">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselKiosk"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselKiosk"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>

                        <div class="project-info p-4">
                            <h4 class="text-white fw-bold mb-3">Self-Service Ordering</h4>
                            <p class="text-white-50 fs-6 mb-4">
                                An object-oriented Java application featuring a GUI and database integration. Simulates
                                a kiosk ordering system similar to fast-food restaurants.
                            </p>
                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <div class="d-flex gap-2">
                                    <span class="tech-badge">Java</span>
                                    <span class="tech-badge">GUI</span>
                                </div>
                                <a href="#" class="icon-link">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4c6ff"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
    @import '@/assets/style/Project.css';

    #projects {
        scroll-margin-top: 80px;
    }
</style>