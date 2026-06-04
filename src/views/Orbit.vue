<template>
    <section class="orbit-section py-5 overflow-hidden" id="orbit">
        <div class="container d-flex justify-content-center align-items-center h-100">
            <div class="orbit-wrapper">

                <div class="center-core">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20M4 4L12 12L4 20M4 20H20" stroke="#ffffff" stroke-width="3"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div class="ring ring-1">
                    <div class="node n-1"></div>
                </div>

                <div class="ring ring-2">
                    <div class="node n-2"></div>
                    <div class="node n-3"></div>
                </div>

                <div class="ring ring-3">
                    <div class="node n-4"></div>
                    <div class="node n-5"></div>
                    <div class="node n-6"></div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
    @import '@/assets/style/Orbit.css';
</style>