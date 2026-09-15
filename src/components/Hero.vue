<template>
    <section id="home" class="relative w-full min-h-screen pt-28 sm:pt-36 pb-16 flex items-center overflow-hidden">
        <!-- Background Glow Effect (Optional Ambient) -->
        <div
            class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none">
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                <!-- Left Column: Hero Content -->
                <div class="lg:col-span-7 flex flex-col space-y-6 text-left">

                    <!-- Badges Group -->
                    <div class="flex flex-wrap items-center gap-3">
                        <div
                            class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wide">
                            <span class="relative flex h-2 w-2">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            AVAILABLE FOR FREELANCE & WORK
                        </div>
                        <span class="text-slate-400 text-xs sm:text-sm font-medium">
                            Informatics Engineering
                        </span>
                    </div>

                    <!-- Main Title -->
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        <span class="text-slate-400 text-2xl sm:text-3xl font-semibold block mb-1">Hi, I'm</span>
                        <span
                            class="bg-gradient-to-r from-white via-slate-100 to-purple-300 bg-clip-text text-transparent">
                            Satria Afzal Zaydan
                        </span>
                    </h1>

                    <!-- Lead Paragraph -->
                    <p class="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                        Passionate <strong class="text-white font-semibold">Full-Stack Web Developer</strong>
                        specialization in building responsive user interfaces with <strong
                            class="text-purple-300 font-semibold">Vue.js</strong> and robust backend systems powered by
                        <strong class="text-white font-semibold">Laravel & PHP</strong>. Turning complex problems into
                        sleek, production-ready solutions.
                    </p>

                    <!-- Capabilities Tags -->
                    <div class="flex flex-wrap gap-2.5 pt-1">
                        <span
                            class="text-xs px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 font-medium">
                            Clean Architecture
                        </span>
                        <span
                            class="text-xs px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 font-medium">
                            REST Full API
                        </span>
                        <span
                            class="text-xs px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 font-medium">
                            AI Integrated Apps
                        </span>
                    </div>

                    <!-- Call to Action Buttons -->
                    <div class="flex flex-wrap items-center gap-4 pt-3">
                        <a href="#projects"
                            class="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all duration-300 no-underline flex items-center gap-2">
                            Explore Projects
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>

                        <a href="#contact"
                            class="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-purple-500/50 font-semibold text-sm transition-all duration-300 no-underline">
                            Let's Connect
                        </a>
                    </div>

                </div>

                <!-- Right Column: Interactive Code Terminal -->
                <div class="lg:col-span-5 w-full flex justify-center">
                    <div
                        class="terminal-card w-full max-w-lg bg-slate-900/80 border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">

                        <!-- Terminal Header -->
                        <div class="bg-slate-950/80 px-4 py-3 flex items-center border-b border-slate-800/80 relative">
                            <div class="flex items-center space-x-2">
                                <span
                                    class="w-3 h-3 rounded-full bg-rose-500 inline-block dot-red transition-all duration-300"></span>
                                <span
                                    class="w-3 h-3 rounded-full bg-amber-500 inline-block dot-yellow transition-all duration-300"></span>
                                <span
                                    class="w-3 h-3 rounded-full bg-emerald-500 inline-block dot-green transition-all duration-300"></span>
                            </div>
                            <span
                                class="absolute left-1/2 -translate-x-1/2 text-xs font-mono text-slate-400 tracking-wider">
                                developer-profile.config.ts
                            </span>
                        </div>

                        <!-- Terminal Body -->
                        <div class="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
                            <pre class="m-0"><code><span class="text-purple-400">const</span> <span class="text-blue-400">developer</span> = {
  <span class="text-orange-400">name</span>: <span class="text-amber-200">'Satria Afzal Zaydan'</span>,
  <span class="text-orange-400">role</span>: <span class="text-amber-200">'Full-Stack Web Developer'</span>,
  <span class="text-orange-400">coreTech</span>: [<span class="text-amber-200">'Vue.js'</span>, <span class="text-amber-200">'Laravel'</span>, <span class="text-amber-200">'JavaScript'</span>, <span class="text-amber-200">'MySQL'</span>],
  <span class="text-orange-400">status</span>: <span class="text-amber-200">'Ready to Build & Collaborate'</span>,
  <span class="text-orange-400">passionateAbout</span>: [
    <span class="text-amber-200">'Modern Web UX'</span>,
    <span class="text-amber-200">'Scalable APIs'</span>,
    <span class="text-amber-200">'AI Implementation'</span>
  ]
}</code></pre>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
/* Custom Interactive Terminal Hover 3D Effects */
.terminal-card {
    perspective: 1000px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.terminal-card:hover {
    transform: translateY(-8px) rotateX(3deg) rotateY(-3deg);
    border-color: rgba(168, 85, 247, 0.5);
    box-shadow: 0 20px 40px rgba(168, 85, 247, 0.15), 0 0 20px rgba(168, 85, 247, 0.1);
}

.terminal-card:hover .dot-red {
    box-shadow: 0 0 8px #f43f5e;
}

.terminal-card:hover .dot-yellow {
    box-shadow: 0 0 8px #f59e0b;
}

.terminal-card:hover .dot-green {
    box-shadow: 0 0 8px #10b981;
}

a {
    text-decoration: none !important;
}
</style>