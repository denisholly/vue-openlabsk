<template>
    <div id="join-carousel" class="carousel slide mt-5 z-index-1" data-bs-ride="carousel" data-bs-interval="false">
        <div class="carousel-indicators join-carousel-indicators">
            <button type="button" data-bs-target="#join-carousel" data-bs-slide-to="0" class="active carousel-buttons" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#join-carousel" data-bs-slide-to="1" class="carousel-buttons" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#join-carousel" data-bs-slide-to="2" class="carousel-buttons" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#join-carousel" data-bs-slide-to="3" class="carousel-buttons" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner join-carousel">
            <div class="carousel-item active">
                <div class="d-sm-block carousel-card join-labmastri p-1 p-md-0 text-white">
                    <p class="join-carousel-title mt-4 ms-4 ps-2 mb-0 pt-3 h5">
                        Labmastri v
                        <span class="fw-bold">
                        OpenLabe
                        </span>
                    </p>
                    <h3 class="ms-4 ps-2 mt-4 me-3">V OpenLabe sa okrem technologických vedomostí a zručností snažíme rozvíjať aj iné dôležité parametre kvalitných ľudí.</h3>
                    <p class="ms-4 ps-2 me-2 fs-6 mt-4 mb-5 pt-3">Ako sú zodpovednosť, spoľahlivosť, samostatnosť, ale aj tímovosť a vzájomnú komunikáciu. Prijímame výzvy najmä voči svojím vlastným ja.</p>
                    <p class="ms-4 ps-2 mb-0">Roman Popper, AppsLab</p>
                    <p class="ms-4 ps-2 mb-5">Siemens Healthineers</p>
                </div>
                <img src="@/assets/images/join-labmastri.png" class="d-none d-md-block carousel-img m-auto mt-5" alt="join-labmastri">
            </div>
            <div class="carousel-item">
                <div class="carousel-card join-firm p-1 p-md-0 text-white">
                    <p class="join-carousel-title mt-4 ms-4 ps-2 mb-0 pt-3 h5">
                        Firmy v
                        <span class="fw-bold">
                        OpenLabe
                        </span>
                    </p>
                    <h3 class="ms-4 ps-2 mt-4 me-3">Technológie sa neustále menia. Preto to “čo” sa študenti učia je druhoradé.</h3>
                    <p class="ms-4 ps-2 me-2 fs-6 mt-4 mb-5 pt-3">V prvom rade riešime “prečo” a “ako” sa študenti vzdelávajú. Inými slovami, OpenLab je o prístupe. Ten keď si študenti osvoja, dokážu ho aplikovať na čokoľvek po zvyšok života.</p>
                    <img src="@/assets/images/signature1.png" alt="signature" class="signature ms-4 ps-2 mb-0">
                    <p class="ms-4 ps-2 mb-0 pt-5">Grigor Ayrumyan</p>
                    <p class="ms-4 ps-2 mb-5">CEO at WEZEO</p>
                </div>
                <img src="@/assets/images/join-firm.png" class="d-none d-md-block carousel-img m-auto mt-5" alt="join-firm">
            </div>
            <div class="carousel-item">
                <div class="carousel-card join-schools p-1 p-md-0 text-white">
                    <p class="join-carousel-title mt-4 ms-4 ps-2 mb-0 pt-3 h5">
                        Školy v
                        <span class="fw-bold">
                        OpenLabe
                        </span>
                    </p>
                    <h3 class="ms-4 ps-2 mt-4 me-3">Vďaka OpenLabu máme v škole špičkových odborníkov zo žilinského Siemens Healthineers.</h3>
                    <p class="ms-4 ps-2 me-2 fs-6 mt-4 mb-5 pt-3">Venujú sa vybraným 20-tim študentom, ktorí pracujú v tímoch na čiastokových úlohách a v spolupráci s týmito odborníkmi sa učia vyvíjať mobilné aplikácie. Vďaka ich vedeniu, založenom na moderných metódach overených v praxi, žiaci spoločne dosahujú výborné výsledky.</p>
                    <p class="ms-4 ps-2 mb-0">Milan Válek</p>
                    <p class="ms-4 ps-2 mb-5">Riaditeľ SPŠ IT, Kysucké Nové Mesto</p>
                </div>
                <img src="@/assets/images/join-schools.png" class="d-none d-md-block carousel-img m-auto mt-5" alt="join-schools">
            </div>
            <div class="carousel-item">
                <div class="carousel-card join-students p-1 p-md-0 text-white">
                    <p class="join-carousel-title mt-4 ms-4 ps-2 mb-0 pt-3 h5">
                        Študenti v
                        <span class="fw-bold">
                        OpenLabe
                        </span>
                    </p>
                    <h3 class="ms-4 ps-2 mt-4 me-3">GamesLab mi otvoril brány do sveta vývoja softvéru, technológií, ale aj osobného rozvoja.</h3>
                    <p class="ms-4 ps-2 me-2 fs-6 mt-4 mb-5 pt-3">Za podpory skvelých LabMastrov som neustále motivovaný pracovať na sebe, či už po technologickej alebo soft-skills stránke.</p>
                    <p class="ms-4 ps-2 mb-0">Viktor Nagy</p>
                    <p class="ms-4 ps-2 mb-5">GamesLab (SPŠE Hálova 16, Bratislava)</p>
                </div>
                <img src="@/assets/images/join-students.png" class="d-none d-md-block carousel-img m-auto mt-5" alt="join-students">
            </div>
        </div>
    </div>
</template>

<style scoped>
.join-carousel-title {
    position: relative;
    z-index: 1;
}

.join-carousel-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 8px;
    width: 50px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;
}

.carousel-img {
    height: 500px;
    width: 70%;
    border-radius: 20px;
    object-fit: cover;
}

.join-carousel {
    left: 150px;
}

.carousel-card {
    border-radius: 6px;
    width: 585px;
    position: absolute;
}

.join-labmastri {
    background: #A54FA2;
}

.join-firm {
    background: #3597FF;
}

.join-schools {
    background: #33A969;
}

.join-students {
    background: #F9A94A;
}

.signature {
    width: 179px;
    position: absolute;
    bottom: 70px;
}

@media only screen and (max-width: 1199px) {
    .join-carousel {
        left: 70px !important;
    }

    .carousel-card {
        width: 262px;
    }

    h3 {
        font-size: 20px;
    }
}

@media only screen and (max-width: 767px) {
    .join-carousel-indicators {
        top: -50px;
    }

    .join-carousel {
        left: 0 !important;
    }

    .carousel-card {
        border-radius: 0;
        width: 100%;
        position: relative;
    }

    .carousel-buttons {
        background-color: rgba(53, 151, 255, 0.2) !important;
    }
}

.carousel-indicators .active{
    background-color: #3597ff !important;
}

.carousel-buttons {
    width: 9px !important;
    height: 9px !important;
    border-radius: 100%;
}

.card-wrapper {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.card-wrapper::-webkit-scrollbar { 
    display: none;
}

.card-join {
    min-width: 190px;
}
</style>