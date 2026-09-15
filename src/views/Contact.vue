<template>
    <section class="py-20 sm:py-28 relative z-20" id="contact" data-aos="fade-up">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Section Header -->
            <div class="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                <p class="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-2">
                    Get In Touch
                </p>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                    Let's Collaborate
                </h2>
                <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
                    Have a project in mind or want to work together? Send me a message and I'll get back to you as soon
                    as possible.
                </p>
            </div>

            <!-- Contact Form Container -->
            <div class="max-w-3xl mx-auto">
                <form action="https://formspree.io/f/xwvjknqr" method="POST"
                    class="bg-slate-900/60 border border-purple-500/10 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-xl shadow-purple-500/5 hover:border-purple-500/20 transition-all duration-300">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <!-- Name Input -->
                        <div class="flex flex-col text-left">
                            <label for="name" class="text-slate-300 text-sm font-medium mb-2">
                                Your Name
                            </label>
                            <input type="text" id="name" name="name" required placeholder="Enter your name"
                                class="w-full bg-slate-950/60 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200" />
                        </div>

                        <!-- Email Input -->
                        <div class="flex flex-col text-left">
                            <label for="email" class="text-slate-300 text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email"
                                class="w-full bg-slate-950/60 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200" />
                        </div>

                        <!-- Subject Input -->
                        <div class="md:col-span-2 flex flex-col text-left">
                            <label for="subject" class="text-slate-300 text-sm font-medium mb-2">
                                Subject
                            </label>
                            <input type="text" id="subject" name="subject" required placeholder="Enter your subject"
                                class="w-full bg-slate-950/60 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200" />
                        </div>

                        <!-- Message Textarea -->
                        <div class="md:col-span-2 flex flex-col text-left">
                            <label for="message" class="text-slate-300 text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea id="message" name="message" rows="5" required
                                placeholder="Tell me about your project..."
                                class="w-full bg-slate-950/60 border border-purple-500/20 rounded-xl p-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200 resize-none"></textarea>
                        </div>

                        <!-- Submit Button -->
                        <div class="md:col-span-2 mt-2">
                            <button type="submit"
                                class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                                <span>Send Message</span>
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                            </button>
                        </div>

                    </div>
                </form>
            </div>

        </div>
    </section>
</template>

<script setup>
// Komponen murni form penampung tanpa logic berat
</script>