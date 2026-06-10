<template>
    <section class="hero-section">
        <div class="container h-100 d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column flex-md-row align-items-center gap-5 gap-lg-5 hero-wrapper">
                <div class="photo-frame-container position-relative">
                    <div class="hello-pointer position-absolute" data-aos="fade-up">
                        <span class="text-white">Hello! I Am <span class="text-purple">Satria Afzal Zaydan</span></span>
                        <svg width="60" height="50" viewBox="0 0 50 40" class="pointer-arrow mt-1">
                            <path d="M40 5 Q 25 10 10 30" fill="none" stroke="#9d7cff" stroke-width="1.5"
                                stroke-linecap="round" />
                            <path d="M10 30 L 10 20 M 10 30 L 20 32" fill="none" stroke="#9d7cff" stroke-width="1.5"
                                stroke-linecap="round" />
                        </svg>
                    </div>

                    <div class="glow-effect"></div>

                    <div class="photo-frame" data-aos="fade-up">
                        <img src="/image/avatar2.png" alt="Satria Afzal Zaydan" class="profile-img" />
                    </div>
                </div>

                <div class="text-content w-100 text-center text-md-start mt-5 mt-md-0" data-aos="fade-left">
                    <p class="text-white mb-2 fw-light fs-5">A Developer who</p>

                    <h1 class="main-title fw-bold text-white mb-0">Judges a book</h1>

                    <h1
                        class="main-title fw-bold text-white mb-4 d-flex align-items-center justify-content-center justify-content-md-start flex-wrap gap-2 gap-md-3">
                        by its <span class="circled-word">cover...</span>
                    </h1>

                    <p class="text-white-50 mt-4 fs-6 px-3 px-md-0">
                        Because if the cover does not impress you what else can?
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    @import '@/assets/style/Hero.css';
</style>
