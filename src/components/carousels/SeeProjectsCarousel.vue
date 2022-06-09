<template>
    <div>
        <p class="fw-light mb-5 student-project-title">
            Projekty študentov v
        <span class="fw-bold">
            OpenLabe
        </span>
        </p>
        <div id="carouselExampleIndicators2" class="carousel slide see-carousels z-index-1" data-bs-ride="carousel" data-bs-interval="false">
            <div class="carousel-indicators mb-0">
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active see-carousel-buttons" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" class="see-carousel-buttons" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" class="see-carousel-buttons" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="d-block d-md-flex">
                        <div class="col-md-6 col-xl-4 see-projects-text">
                            <h3 class="mb-5">
                                Študentský projekt Mapovanie z HybridLabu
                            </h3>
                            <p class="text-gray">
                                <span class="fw-bold">Mapovanie</span> je hybridná aplikácia, ktorá umožní ľuďom
                                so spoločnými záľubami deliť sa o svoje obľúbené miesta a
                                ukladať ich do komunitnej mapy. Aplikáciu tak môžu využívať ľudia z rôznych
                                komunít. Užívateľ sa jednoducho pridá do skupiny, ktorá ho zaujíma, a následne môže
                                    vidieť už “zmapované” miesta alebo pridávať nové. Prehľad príspevkov a skupín mu zobrazuje dostupná mapa. Do
                                    aplikácie sa užívateľ vie prihlásiť cez SSO, t.j. prihlásenie pomocou služby tretej strany, napr
                                    . Facebook alebo Apple ID účet. Na vývoj študenti použili technológie - Ionic, OctoberCMS a Vue. 
                                    Aktuálne je aplikácia v MVP verzii.
                            </p>
                        </div>
                        <div class="col-xl-2">

                        </div>
                        <div class="col-md-6">
                            <img src="@/assets/images/see-projects.jpg" class="see-projects-img" alt="see-projects">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-block d-md-flex">
                        <div class="col-md-6 col-xl-4 see-projects-text">
                            <h3 class="mb-5">
                                Študentský projekt Mapovanie z HybridLabu
                            </h3>
                            <p class="text-gray">
                                <span class="fw-bold">Realtopia</span> je fantasy hra s 2D grafikou, ktorá nesie environmentálne posolstvo. Je v nej zakomponovaných
                                množstvo faktov o ekológii, globalizácii a svete okolo nás. V jadre je jednoduchá Open World stratégia s Resource Managementom a 
                                Pixel Art grafikou. Študenti ju vyvíjali v multiplatformovom hernom engine - Unity s využitím jazyku C#.
                                Hra je dostupná pre Android. Tento študentský projekt prebehol v spolupráci s Ambrelou - platformou 
                                rozvojových organizácií v rámci ich medzinárodného projektu Bridge 47.
                            </p>
                        </div>
                        <div class="col-xl-2">

                        </div>
                        <div class="col-md-6">
                            <img src="@/assets/images/see-projects-realtopia.png" class="see-projects-img" alt="see-projects">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                <div class="d-block d-md-flex see-projects-text">
                    <div class="col-md-6 col-xl-4">
                        <h3 class="mb-5">
                            Študentský projekt RealTopia z GamesLabu
                        </h3>
                        <p class="text-gray">
                            <span class="fw-bold">Renmo</span> je softvérová aplikácia, ktorá slúži ako rezervačný systém. 
                            Užívateľ si vie prostredníctvom systému ľahko a rýchlo zarezervovať rôzne služby, napr. objednať sa ku kaderníkovi. 
                            V aplikácii si takisto firmy vedia nastaviť detailné informácie o sebe a ponuku svojich služieb. Aplikácia vie uľahčiť prácu aj 
                            zamestnancom, ktorí vidia aktívne rezervácie pre daný deň ale aj nasledujúce.
                            Na vývoj študenti použili technológie: MySQL, SpringBoot a Angular.
                        </p>
                    </div>
                    <div class="col-xl-2">

                    </div>
                    <div class="col-md-6">
                        <img src="@/assets/images/see-projects-renmo.jpg" class="see-projects-img" alt="see-projects">
                    </div>
                </div>
                </div>
            </div>
            <div class="see-nav pb-3 d-none d-md-block z-index-1">
                <a href="#">
                    <img src="@/assets/images/arrow-slide-left.svg" alt="arrow-slide-left.svg">
                </a>
                <a href="#">
                    <img src="@/assets/images/arrow-slide-right.svg" alt="arrow-slide-right.svg">
                </a>
            </div>
        </div>
        <a href="#" class="text-decoration-none see-projects-anchor z-index-1 position-relative">
        Pozrieť si všetky projekty
            <img src="@/assets/images/arrow-right-blue.svg" alt="arrow-right-blue" class="ms-2">
        </a>
    </div>
</template>