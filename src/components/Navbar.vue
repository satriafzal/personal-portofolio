<template>
    <nav class="navbar navbar-expand-lg custom-navbar">
        <div class="container">

            <a class="navbar-brand text-white d-flex align-items-center" href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20M4 4L12 12L4 20M4 20H20" stroke="white" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </a>

            <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavCenter">
                <span class="navbar-toggler-icon custom-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navbarNavCenter">
                <ul class="navbar-nav gap-2 gap-lg-5 text-center mt-3 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#certificates">Certificates</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

            <div class="d-none d-lg-block" style="width: 24px;"></div>

        </div>
    </nav>
</template>

<style scoped>
    @import '@/assets/style/Navbar.css';
</style>