<template>
    <section class="hero-section">
        <div class="container h-100 d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column flex-md-row align-items-center justify-content-lg-evenly gap-5 gap-lg-5 hero-wrapper w-100">
                <div class="photo-frame-container position-relative" data-aos="fade-right">
                    <div class="hello-pointer position-absolute">
                        <span class="text-white">Hello! I Am <span class="text-purple">Satria Afzal Zaydan</span></span>
                        <svg width="60" height="50" viewBox="0 0 50 40" class="pointer-arrow mt-1">
                            <path d="M40 5 Q 25 10 10 30" fill="none" stroke="#9d7cff" stroke-width="1.5"
                                stroke-linecap="round" />
                            <path d="M10 30 L 10 20 M 10 30 L 20 32" fill="none" stroke="#9d7cff" stroke-width="1.5"
                                stroke-linecap="round" />
                        </svg>
                    </div>
                    <div class="glow-effect"></div>
                    <div class="photo-frame">
                        <img src="/image/profil.jpeg" alt="Satria Afzal Zaydan" class="profile-img"/>
                    </div>
                </div>
                <div class="text-content w-100 text-center text-md-start mt-5 mt-md-0" data-aos="fade-up">
                    <p class="text-white mb-2 fw-light fs-5">A Developer who</p>
                    <h1 class="main-title fw-bold text-white mb-0">Don't Judges a book</h1>
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

<script setup>
</script>

<style scoped>
    @import '@/assets/style/Hero.css';

    .hero-section {
        overflow-x: hidden;
        width: 100%;
        position: relative;
    }

    .photo-frame {
        position: relative;
        overflow: hidden;
        z-index: 1;
    }

    .photo-frame::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        padding: 4px;
        background: conic-gradient(from 0deg, transparent, #ffffff, transparent 25%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        animation: spin 4s linear infinite;
        z-index: 5;
        pointer-events: none;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 767.98px) {
        .hero-section {
            min-height: 100dvh;
            padding-top: 80px; 
            display: flex;
            align-items: center;
        }
        .hero-wrapper {
            margin-top: 0 !important; 
            flex-direction: column; /* Pastiin numpuk ke bawah */
        }

        .photo-frame {
            width: 250px !important;
            height: 250px !important;
            flex-shrink: 0; /* Rahasia anti gepeng */
            margin: 0 auto;
        }

        .hello-pointer {
            position: absolute !important;
            top: -90px;
            left: 50%;
            transform: translateX(-50%); 
            width: max-content;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 10;
        }

        /* 3. Arahin Panah Pas ke Kepala */
        .pointer-arrow {
            display: block !important;
            margin-top: 5px;
            /* Kita rotasi panahnya biar nembak pas ke bawah (ke arah foto) */
            transform: rotate(20deg) scale(0.8) scaleX(-1); 
        }
    }
</style>