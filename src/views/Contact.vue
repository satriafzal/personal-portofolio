<template>
    <section class="contact-section py-5" id="contact">
        <div class="container py-5">

            <div class="row justify-content-center">
                <div class="col-12 col-lg-8 text-center mb-5">
                    <p class="text-purple fw-semibold mb-2">Get In Touch</p>
                    <h2 class="text-white fw-bold mb-3">Let's Collaborate</h2>
                    <p class="text-white-50 fs-6">
                        Have a project in mind or want to work together? Send me a message and I'll get back to you as
                        soon as possible.
                    </p>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-12 col-lg-8">
                    <form action="https://formspree.io/f/xwvjknqr" method="POST"
                        class="contact-form glass-panel p-4 p-md-5 rounded-4">

                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="form-group text-start">
                                    <label for="name" class="text-white-50 mb-2 fs-6">Your Name</label>
                                    <input type="text" id="name" name="name" class="form-control custom-input" required
                                        placeholder="enter your name">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group text-start">
                                    <label for="email" class="text-white-50 mb-2 fs-6">Email Address</label>
                                    <input type="email" id="email" name="email" class="form-control custom-input"
                                        required placeholder="enter yor email">
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="form-group text-start">
                                    <label for="subject" class="text-white-50 mb-2 fs-6">Subject</label>
                                    <input type="text" id="subject" name="subject" class="form-control custom-input"
                                        required placeholder="enter your subject">
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="form-group text-start">
                                    <label for="message" class="text-white-50 mb-2 fs-6">Message</label>
                                    <textarea id="message" name="message" class="form-control custom-input" rows="5"
                                        required placeholder="Tell me about your project..."></textarea>
                                </div>
                            </div>

                            <div class="col-12 text-center mt-4">
                                <button type="submit"
                                    class="btn submit-btn px-5 py-3 fw-bold w-100 d-flex justify-content-center align-items-center gap-2">
                                    Send Message
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
    @import '@/assets/style/Contact.css';
</style>