<template>
    <nav class="navbar navbar-expand-lg custom-navbar">
        <div class="container">

            <button class="navbar-toggler border-0 shadow-none ms-auto" type="button" data-bs-toggle="collapse"
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

    .nav-link {
        position: relative;
        display: inline-block;
        transition: color 0.3s ease-in-out;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 2px;
        left: 0;
        background-color: #9d7cff;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
    }

    .nav-link:hover::after,
    .nav-link.active::after {
        transform: scaleX(1);
    }

    .nav-link:hover,
    .nav-link.active {
        color: #9d7cff !important;
    }
</style>