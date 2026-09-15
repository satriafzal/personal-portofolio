<template>
    <section class="py-20 sm:py-28 overflow-x-hidden w-full relative" id="journey">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header Section -->
            <div class="mb-12 sm:mb-16" data-aos="fade-right" data-aos-offset="0">
                <p class="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-1">
                    My Path
                </p>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    My Journey
                </h2>
            </div>

            <!-- Timeline Container -->
            <div class="relative pl-2 sm:pl-4">

                <!-- Garis Vertikal Timeline -->
                <div class="absolute top-0 bottom-0 left-[15px] sm:left-[19px] w-[2px] bg-purple-500/20 rounded-full">
                </div>

                <!-- Looping Data Journey -->
                <div v-for="(item, index) in journeyList" :key="index" class="relative mb-10 sm:mb-12 group"
                    data-aos="fade-up">
                    <!-- Titik Ungu Glowing di Garis -->
                    <div
                        class="absolute top-6 left-0 sm:left-[2px] -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-slate-950 border-4 border-purple-500 rounded-full z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform duration-300">
                    </div>

                    <!-- Isi Card -->
                    <div
                        class="ml-8 sm:ml-12 p-6 sm:p-8 bg-slate-900/60 border border-purple-500/10 border-t-2 border-t-transparent hover:border-t-purple-500 hover:border-purple-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">

                        <div class="mb-3">
                            <span
                                class="inline-block bg-purple-500/10 text-purple-300 text-xs font-bold px-3.5 py-1.5 rounded-full border border-purple-500/20">
                                {{ item.period }}
                            </span>
                        </div>

                        <h3 class="text-xl sm:text-2xl font-bold text-white mb-1">
                            {{ item.title }}
                        </h3>

                        <p class="text-purple-400 font-semibold text-sm sm:text-base mb-3">
                            {{ item.role }}
                        </p>

                        <p class="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                            {{ item.desc }}
                        </p>

                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
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
        period: "2024 - 2028",
        title: "Universitas Nusa Mandiri (UNM)",
        role: "Informatics Engineering Student",
        desc: "Pursuing a Bachelor's degree in Informatics Engineering at an 'Unggul' accredited program. Focusing on full-stack web, software engineering methodologies and database management."
    },
    {
        period: "2025 - 2026",
        title: "Tech Communities & Bootcamps",
        role: "Active Member at Google Developer Groups",
        desc: "Actively engaged in the Google Developer community, highlighted by participation in the 'Build with AI' offline event at Universitas Indonesia. Gained hands-on experience in building AI-powered applications and deploying them utilizing Google Cloud infrastructure. Continually expanding my expertise through intensive programs like IDCamp by Dicoding and Dilesin Academy."
    },
    {
        period: "2024 - 2026",
        title: "Tech Communities & Continuous Learning",
        role: "Active Tech Community Member",
        desc: "Engaged in the Google Developer community, notably participating in the 'Build with AI' offline event at Universitas Indonesia focusing on AI development and Google Cloud deployment. Furthermore, I am a highly dedicated learner at Dicoding Academy, consistently attending tech seminars and completing intensive classes—including the IDCamp program—to continuously sharpen my modern software engineering skills."
    }
]
</script>