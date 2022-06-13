<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container p-2">
            <a class="navbar-brand" href="#">
            <img class="me-5" src="../assets/images/openlab-logo.svg" alt="openlab-logo">
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item me-lg-3">
                <a class="nav-link text-dark" aria-current="page" href="#">Úvod</a>
                </li>
                <li class="nav-item dropdown me-lg-3">
                <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    OpenLab
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item bg-transparent" href="#">HybridLab</a></li>
                    <li><a class="dropdown-item bg-transparent" href="#">GamesLab</a></li>
                    <li><a class="dropdown-item bg-transparent" href="#">AppsLab</a></li>
                </ul>
                </li>
                <li class="nav-item me-lg-3">
                <a class="nav-link text-dark" href="#">Pre učiteľov</a>
                </li>
                <li class="nav-item me-lg-3">
                <a class="nav-link text-dark" href="#">Partneri</a>
                </li>
                <li class="nav-item me-lg-3">
                <a class="nav-link text-dark" href="#">Moderná škola</a>
                </li>
            </ul>
                <a href="#" class="d-lg-block">
                    <button class="navBtn btn btn-primary border-0">Pridajte sa k nám</button>
                </a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar { 
    font-size: 14px;
}

.navbar a:hover {
    color: #3597FF !important;
}


.navBtn {
    background-color: #3597FF;
    border-radius: 6px;
    font-size: 14px;
    padding: 12px 20px;
}

.navBtn:hover {
    background-color: #3597FF;
}

.dropdown:hover .dropdown-menu {
    display: block;
}
</style>