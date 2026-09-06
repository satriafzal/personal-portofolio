<template>
    <section class="journey-section py-5" id="journey">
        <div class="container">
            
            <!-- Header Section -->
            <div class="d-flex justify-content-between align-items-end mb-5" data-aos="fade-right" data-aos-offset="0">
                <div>
                    <p class="text-purple fw-semibold mb-2">My Path</p>
                    <h2 class="text-white fw-bold mb-0">My Journey</h2>
                </div>
            </div>

            <!-- Timeline Container -->
            <div class="timeline-container position-relative">
                <!-- Garis Vertikal -->
                <div class="timeline-line"></div>

                <!-- Looping Data Journey -->
                <div 
                    v-for="(item, index) in journeyList" 
                    :key="index" 
                    class="timeline-item position-relative mb-5" 
                    data-aos="fade-up"
                >
                    <!-- Titik Ungu di Garis -->
                    <div class="timeline-dot"></div>
                    
                    <!-- Isi Card -->
                    <div class="timeline-card p-4 rounded-4 ms-4 ms-md-5">
                        <span class="badge bg-purple-subtle text-purple mb-3 px-3 py-2 rounded-pill fw-bold">
                            {{ item.period }}
                        </span>
                        <h4 class="text-white fw-bold mb-1">{{ item.title }}</h4>
                        <p class="text-purple mb-3 fw-medium fs-6">{{ item.role }}</p>
                        <p class="text-white-50 fs-6 mb-0 lh-lg">
                            {{ item.desc }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// Data Journey, lu bisa edit textnya sesuka hati di sini
const journeyList = [
    {
        period: "2026 - Present",
        title: "Lecturer Collaborative Project: Village Digitization",
        role: "Backend Developer (Laravel)",
        desc: "Selected to collaborate directly with a university lecturer and an academic development team to build a centralized web platform for four local villages. Serving as the core Backend Developer utilizing Laravel, I am responsible for designing robust database architectures, developing secure APIs, and ensuring efficient server-side performance to accelerate digital transformation at the village administration level."
    },
    {
        period: "2026 - Present",
        title: "Academic Research & PKM-KC",
        role: "Full-Stack Web Developer",
        desc: "Spearheading the development of an AI-driven sentiment analysis web platform for F&B MSMEs along Margonda Raya, Depok. By integrating Deep Learning and LLM models to analyze customer reviews, this project not only hones my full-stack engineering capabilities but also strengthens my complex problem-solving, intensive brainstorming, and teamwork skills in a highly collaborative research environment."
    },
    {
        period: "2024-2028 - Present",
        title: "Universitas Nusa Mandiri (UNM)",
        role: "Informatics Engineering Student",
        desc: "Pursuing a Bachelor's degree in Informatics Engineering at an 'Unggul' accredited program. Focusing on full-stack web, software engineering methodologies and database management."
    },
    {
        period: "2025-2026 - Present",
        title: "Tech Communities & Bootcamps",
        role: "Active Member at Google Developer Groups",
        desc: "Actively engaged in the Google Developer community, highlighted by participation in the 'Build with AI' offline event at Universitas Indonesia. Gained hands-on experience in building AI-powered applications and deploying them utilizing Google Cloud infrastructure. Continually expanding my expertise through intensive programs like IDCamp by Dicoding and Dilesin Academy."
    },
    {
        period: "2024-2026 - Present",
        title: "Tech Communities & Continuous Learning",
        role: "Active Tech Community Member",
        desc: "Engaged in the Google Developer community, notably participating in the 'Build with AI' offline event at Universitas Indonesia focusing on AI development and Google Cloud deployment. Furthermore, I am a highly dedicated learner at Dicoding Academy, consistently attending tech seminars and completing intensive classes—including the IDCamp program—to continuously sharpen my modern software engineering skills."
    }
]
</script>

<style scoped>

    .journey-section, .timeline-container {
        -ms-overflow-style: none;  /* Buat Edge/IE */
        scrollbar-width: none;     /* Buat Firefox */
    }

    .journey-section::-webkit-scrollbar, 
    .timeline-container::-webkit-scrollbar {
    display: none;
    }

    .journey-section {
        overflow-x: hidden;
        width: 100%;
        position: relative; /* Wajib ditambahin biar overflow-x bisa ngurung efek AOS */
    }

    .timeline-container {
        padding-left: 10px; /* Sebelumnya lu lupa naruh titik koma di sini */
        position: relative;
    }

    .timeline-line {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 16px;
        width: 2px;
        background: rgba(157, 124, 255, 0.2);
        border-radius: 2px;
    }

    .timeline-dot {
        position: absolute;
        top: 24px;
        left: 7px;
        width: 20px;
        height: 20px;
        background: #150f24;
        border: 4px solid #9d7cff; 
        border-radius: 50%;
        z-index: 2;
        box-shadow: 0 0 15px rgba(157, 124, 255, 0.5); 
    }

    .timeline-card {
        background: #150f24;
        border: 1px solid rgba(157, 124, 255, 0.1);
        border-top: 4px solid transparent; 
        transition: all 0.3s ease-in-out;
    }

    .timeline-card:hover {
        border-top: 4px solid #9d7cff; 
        transform: translateY(-8px); 
        box-shadow: 0 10px 25px rgba(157, 124, 255, 0.15); 
    }

    .bg-purple-subtle {
        background-color: rgba(157, 124, 255, 0.1) !important;
    }
    
    .text-purple {
        color: #9d7cff !important;
    }

    @media (max-width: 767.98px) {
        .timeline-line {
            left: 10px;
        }
        .timeline-dot {
            left: 1px;
            width: 16px;
            height: 16px;
            border-width: 3px;
        }
        .timeline-card {
            margin-left: 2rem !important;
            padding: 1.5rem !important;
        }
    }
</style>