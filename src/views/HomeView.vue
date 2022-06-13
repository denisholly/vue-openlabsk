<template>
    <site-section id="mainBanner" class="bg-primary position-relative mb-4 mb-md-5" rowClass="main-row">
        <z-jumbotron />
    </site-section>
    
    <site-section id="why" class="py-4 py-md-5" container-class="py-4" row-class="justify-content-center">
        <div class="text-center col-12">
            <h2 class="fw-light mb-5 display-6">
                Prečo
                <span class="fw-bold">
                OpenLab?
                </span>
            </h2>
            <p class="text-gray mx-md-5">
                V OpenLabe študentov učíme najnovšie technológie. Zároveň im dávame veľkú slobodu, 
                pričom ich vedieme k zodpovednosti a samostatnosti, 
                učíme ich princípy partnerského prístupu, pracovať v tíme, 
                trénujeme ich schopnosti sebareflexie a podnecujeme ich kreativitu. 
                Takto študentov pripravujeme osobnostne aj tech zručnosťami na veľké veci, 
                ktoré môžu v budúcnosti tvoriť.
            </p>
        </div>
            <div class="col-md-4 col-xl-3 text-md-start text-center pt-3 pt-md-5">
            <img src="../assets/images/select.svg" alt="select" class="my-3">
            <h5 class="fw-bold">Celospoločenský rozvoj</h5>
            <p>Osnovy aj učebné materiály pre všetky tech oblasti sú open source.</p>
        </div>
        <div class="col-md-4 col-xl-3 text-md-start text-center pt-3 pt-md-5">
            <img src="../assets/images/support.svg" alt="select" class="my-3">
            <h5 class="fw-bold">Učenie praxou</h5>
            <p>Študentov vedieme k tímovému riešeniu problémov.</p>
        </div>
        <div class="col-md-4 col-xl-3 text-md-start text-center pt-3 pt-md-5">
            <img src="../assets/images/intership.svg" alt="select" class="my-3">
            <h5 class="fw-bold">Rozvoj talentu</h5>
            <p>Vytvárame šikovné tímy schopné riešiť veľké problémy.</p>
        </div>
    </site-section>

    <site-section id="vision" class="py-4 py-md-5" containerClass="py-4" rowClass="align-items-center">
        <div class="col-lg-5 col-xl-6">
            <h2 class="fw-light mb-5 display-6">
            Naša vízia
            <span class="fw-bold">
                v OpenLabe
            </span>
            </h2>
            <p class="text-gray mb-4">
            Veríme, že otvorený prístup a kvalitné vzdelanie sú základom úspechu jednotlivca ako aj prosperujúcej spoločnosti.
            </p>
            <p class="text-gray">
            Uvedomujeme si, že ak chceme niečo zmeniť, musíme ísť príkladom. Našim cieľom je rozšíriť 
            princípy OpenLab-u na všetkých úrovniach škôl a nastaviť svetový štandard vzdelávania v školstve v technológiách.
            </p>
        </div>
        <a-vision-boxes />
    </site-section>

    <site-section id="labs" class="py-4 py-md-5" containerClass="py-4" rowClass="align-items-center">
        <div class="col-lg-4">
            <h2 class="fw-light mb-5 display-6">
                V akých laboch
                <br>
                <span class="fw-bold">
                    možeš študovať?
                </span>
            </h2>
        </div>
        <default-card 
            class="col-lg-8 d-block d-sm-flex"
            cardStyle="col-sm-4 border-0 card-shadow mb-2 me-sm-2 arrow-icon-change"
            cardBodyStyle="px-4 pt-4 pb-5 px-xl-5"
            textStyle="labs-card-text"
            data="labsCards"
        />
    </site-section>

    <site-section id="schools" class="py-4 py-md-5 position-relative" containerClass="py-4" rowClass="align-items-center justify-content-center">
        <div class="col-12 mb-3 text-center">
            <h2 class="fw-light mb-5 display-6">
            <span class="fw-bold">
                Nachádzame sa
            </span>
            na dvoch školách
            </h2>
        </div>
        <div class="col-lg-5 me-lg-5 mb-4 mb-md-0">
            <div class="card bg-transparent border-0">
                <img src="../assets/images/school1.png" class="img-fluid" alt="school1">
                <div class="card-body px-0 pt-4">
                    <h6 class="card-subtitle fw-light mb-2 text-gray mb-4">
                    <img src="../assets/images/place.svg" alt="place-icon">
                    Hálova 16, Bratislava
                    </h6>
                    <h5 class="card-title d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end">
                    <span class="fw-bold">Stredná Priemyselná Škola Elektrotechnická</span>
                    <a href="#" class="text-decoration-none text-primary mt-4 mt-md-0">www.spsehalova.sk</a>
                    </h5>
                </div>
            </div>
        </div>
        <div class="col-lg-5 ms-lg-5 z-index-1">
            <div class="card bg-transparent border-0">
                <img src="../assets/images/school2.png" class="img-fluid" alt="school1">
                <div class="card-body px-0 pt-4">
                    <h6 class="card-subtitle fw-light mb-2 text-gray mb-4">
                    <img src="../assets/images/place.svg" alt="place-icon">
                    Nábrežná 1325, Kysucké Nové Mesto
                    </h6>
                    <h5 class="card-title d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end">
                    <span class="fw-bold pe-2">Stredná Priemyselná Škola Informačných Technológií</span>
                    <a href="#" class="text-decoration-none text-primary mt-4 mt-md-0">www.spsknm.sk</a>
                    </h5>
                </div>
            </div>
        </div>
    </site-section>

    <site-section id="studyIt" class="pt-5 mb-4 mb-md-5" containerClass="pt-lg-5" rowClass="justify-content-center">
        <div class="col-lg-6 col-xl-5 mb-5">
            <h2 class="fw-light pb-4 mb-0 display-6">
                <span class="fw-bold">
                    Chceš ísť študovať odbor
                    <br>
                </span>
                kompletne zameraný na IT?
            </h2>
            <h5 class="fw-bold mt-5 mb-3 position-relative">
                <span class="position-absolute it-count">
                    2573M
                </span>
                <span>
                    Programovanie digitálnych technológií
                </span>
            </h5>
            <p class="text-gray mb-4">
                Čaká ťa tvorba aplikácií a hier, inovatívne myslenie, práca na reálnych projektoch. To všetko v spolupráci s tech odborníkmi z praxe, 
                ktorí budú študentov a študentky na ich ceste sprevádzať a podporovať.
            </p>
            <p class="text-gray mb-5">
                Staň sa súčasťou tohto inovatívneho študijného programu aj ty!
            </p>
            <a href="#" class="btn btn-primary btn-lg border-0">
                Chcem vedieť viac
            </a>
        </div>
        <div class="col-lg-6 col-xl-7 d-none d-lg-flex align-items-end">
            <img src="../assets/images/main-home.png" alt="main-home" class="img-fluid">
        </div>
    </site-section>

    <site-section id="join" class="py-4 py-md-5 position-relative" containerClass="pt-4 pt-md-5" rowClass="align-items-center justify-content-center">
        <div class="col-12 mb-3 text-center">
            <h2 class="fw-light mb-5 display-6">
            Pridajte sa k nám
            <br>
            <span class="fw-bold">
                My všetci sme OpenLab…
            </span>
            </h2>
        </div>
        <default-card 
            class="col-12 d-flex flex-nowrap overflow-scroll card-group justify-content-xl-center card-wrapper"
            cardStyle="card-join border-0 mx-2 my-3 arrow-icon-change card-shadow"
            cardBodyStyle="px-4 pt-4 pb-5 mt-2"
            textStyle="labs-card-text"   
        />
        <template v-slot:outOfContainer>
            <join-carousel :data="joinCarousel" />
        </template>
    </site-section>

    <site-section id="see-projects" class="py-4 py-md-5 z-index-1" containerClass="py-4 py-md-5 border-bottom" rowClass="justify-content-center">
        <div class="text-center col-12 mb-5 z-index-1">
            <h2 class="fw-light mb-5 display-6">
                Pozrite si
                <span class="fw-bold">
                    študentské projekty
                </span>
            </h2>
            <p class="text-gray mb-md-5">
                Stredoškoláci v OpenLaboch pracujú na reálnych projektoch v spolupráci s firmami 
                pričom získavajú praktické zručnosti a osvojujú si prístup, 
                ktorým neskôr posunú svet technológií a celú spoločnosť vpred.
            </p>
        </div>
        <see-projects-carousel />
    </site-section>

    <site-section id="special" class="pt-4 pt-md-5 position-relative" containerClass="py-4 py-md-5" rowClass="justify-content-center border-bottom pb-5">
            <div class="text-center col-12">
                <h2 class="mb-5 display-6">
                Čím sme
                <span class="fw-bold">
                  výnimoční?
                </span>
              </h2>
            </div>
            <div class="col-md-4 col-xl-3 ms-xl-5 pt-3 pt-md-5">
              <img src="../assets/images/special1.svg" alt="select" class="my-3">
              <h5 class="fw-bold mb-4">Partnerstvo</h5>
              <p class="text-gray">Dáva študentom slobodu, ktorú vyvažujú zodpovednosťou. Spolupráca LabMastra a študentov je v partnerskej rovine.</p>
            </div>
            <div class="col-md-4 col-xl-3 pt-3 pt-md-5">
              <img src="../assets/images/special2.svg" alt="select" class="my-3">
              <h5 class="fw-bold mb-4">LabMaster</h5>
              <p class="text-gray">Je mentor s expertízou v danej oblasti, ktorý nastavuje rámce a sprevádza študentov pri dosahovaní míľnikov.</p>
            </div>
            <div class="col-md-4 col-xl-3 me-xl-5 pt-3 pt-md-5">
              <img src="../assets/images/special3.svg" alt="select" class="my-3">
              <h5 class="fw-bold mb-4">Učebný blok</h5>
              <p class="text-gray">Je základný dokument, z ktorého sa študenti učia. Obsahuje všetky vzdelávacie podklady pre konkrétnu fázu.</p>
            </div>
            <div class="col-md-4 col-xl-3 pt-3 pt-md-5">
              <img src="../assets/images/special4.svg" alt="select" class="my-3">
              <h5 class="fw-bold mb-4">Problem driven</h5>
              <p class="text-gray">Je princíp učenia, vďaka ktorému sú študenti vedení ku kritickému mysleniu s cieľom vyriešiť konkrétne problémy.</p>
            </div>
            <div class="col-md-4 col-xl-3 pt-3 pt-md-5">
              <img src="../assets/images/special5.svg" alt="select" class="my-3">
              <h5 class="fw-bold mb-4">Project driven</h5>
              <p class="text-gray">Po teoretickej fáze sú študenti rozdelení do tímov, v ktorých v spolupráci s firmami tvoria konkrétny projekt pre zákazníka.</p>
            </div>
            <div class="col-md-4 col-xl-3 pt-3 pt-md-5">
              <img src="../assets/images/special6.svg" alt="select" class="my-3">
              <h5 class="fw-bold mb-4">Samoštúdium</h5>
              <p class="text-gray">Študenti trávia 80% času samoštúdiom a sú vedení k tímovej spolupráci. 20% teórie slúži iba ako odrazový mostík.</p>
            </div>
    </site-section>

    <site-section id="know-us" class="pb-4 pb-md-5" containerClass="py-4">
        <div class="text-center col-12">
            <h2 class="mb-5 display-6">
                <span class="fw-bold">
                    Spoznaj nás
                </span>
            </h2>
        </div>
        <z-know-us-card />
    </site-section>

    <site-section id="support-us" class="py-4 py-md-5" rowClass="align-items-center">
        <div class="col-md-6 mb-5 mb-md-0">
            <img src="../assets/images/people.png" alt="support-people" class="img-fluid">
        </div>
        <div class="col-md-6">
            <h2 class="fw-bold mb-4">Podporte nás</h2>
            <p class="text-gray mb-5">
                OpenLab postupne rozširujeme ako neziskový vzdelávací projekt s cieľom otvoriť OpenLab-y zamerané na rôzne IT 
                technológie na čo najväčší počet škôl vo všetkých slovenských regiónoch. Veríme, že OpenLab bude natoľko úspešný,
                že sa stane štandardom vzdelávania na Slovensku!
            </p>
            <a href="#" class="text-decoration-none see-projects-anchor z-index-1 position-relative">
                Chcem podporiť
                <img src="../assets/images/arrow-right-blue.svg" alt="arrow-right-blue" class="ms-2">
            </a>
        </div>
    </site-section>

    <site-section id="who-is-behind" class="py-4 py-md-5" containerClass="py-4" rowClass="align-items-center">
        <div class="col-lg-5 col-xl-4 mb-5 mb-lg-0">
            <h2 class="fw-light display-6">
                Kto stojí
                <br>
                <span class="fw-bold">
                    za Openlabom?
                </span>
            </h2>
        </div>
        <div class="col-lg-7 col-xl-8 d-flex flex-wrap justify-content-around position-relative">
            <img v-for="imgSrc in whoIsBehindLogos" :key="imgSrc" :src="imgSrc" alt="logo" class="img-fluid my-3 me-md-5">
        </div>
    </site-section>

    <site-section id="ig" class="py-5 row flex-wrap">
        <z-ig-feed />
    </site-section>

    <site-section id="modern-school" class="py-4 py-md-5" containerClass="py-4" rowClass="align-items-center" >
        <div class="col-md-6 col-xl-5 order-2 order-md-1">
            <h2 class="fw-light mb-3 display-6">
                Nie je moderná škola
                <br>
                <span class="fw-bold">
                    ako moderná škola
                </span>
            </h2>
            <p class="text-gray mb-3">
                Podcast Moderná škola vznikol v spolupráci s Romanom ”Yablkom” Hraškom, kde našim zámerom 
                je rozobrať svet štandardného vzdelávania a spôsob ako môže fungovať moderné vzdelávanie v technológiach.
            </p>
            <div class="align-items-center d-flex mb-4">
                <a href="#" class="me-3">
                    <img src="@/assets/images/youtube-color.svg" alt="youtube-logo">
                </a>
                <a href="#" class="me-3">
                    <img src="@/assets/images/spotify.svg" alt="spotify-logo">
                </a>
                <a href="#" class="me-3">
                    <img src="@/assets/images/podcast.svg" alt="podcasts-logo">
                </a>
                <a href="#" class="me-3">
                    <img src="@/assets/images/google.svg" alt="google-podcasts-logo">
                </a>
            </div>
            <a href="#" class="btn btn-lg btn-primary border-0">
                Moderná škola
            </a>
        </div>
        <div class="col-md-6 mb-5 mb-md-0 offset-xl-1 order-1 order-md-2">
            <img src="@/assets/images/modern.png" alt="modern" class="img-fluid">
        </div>        
    </site-section>

    <site-section id="thanks-for-support" class="py-4 py-md-5" containerClass="py-4" rowClass="justify-content-center">
        <div class="col-12 text-center">
            <h2 class="mb-5 display-6">
            Ďakujeme za 
            <span class="fw-bold">
                podporu v roku 2021!
            </span>
            </h2>
        </div>
        <z-img-grid class="col-12 mt-md-5 support-images" imgDivClass="d-flex justify-content-center align-items-center mx-2 my-3 my-md-0" />
    </site-section>

    <site-section id="newsletter" class="py-4 py-md-5" containerClass="newsletter rounded px-3 px-lg-5 mb-5 py-5 py-md-3 p-lg-5" rowClass="align-items-center">
        <z-newsletter />
    </site-section>
</template>

<script>
import ZJumbotron from  '../components/z-jumbotron.vue'
import SiteSection from '../components/layouts/SiteSection.vue'
import JoinCarousel from '../components/carousels/JoinCarousel.vue'
import SeeProjectsCarousel from '../components/carousels/SeeProjectsCarousel.vue'
import ZKnowUsCard from '../components/cards/z-know-us-card.vue'
import DefaultCard from '../components/cards/DefaultCard.vue'
import ZIgFeed from '../components/z-ig-feed.vue'
import ZImgGrid from '../components/z-img-grid.vue'
import ZNewsletter from '../components/z-newsletter.vue'
import AVisionBoxes from '../components/a-vision-boxes.vue'

export default {
    components: {
        ZJumbotron,
        SiteSection,
        JoinCarousel,
        SeeProjectsCarousel,
        ZKnowUsCard,
        DefaultCard,
        ZIgFeed,
        ZImgGrid,
        ZNewsletter,
        AVisionBoxes
    },
    data() {
        return {
            whoIsBehindLogos: [
                require('../assets/images/wezeo.svg'), 
                require('../assets/images/power.svg'),
                require('../assets/images/siemens.svg'),
                require('../assets/images/spsit.svg'),
                require('../assets/images/spse.svg'),
                require('../assets/images/hemisfera.svg')
            ],
        }
    }
}
</script>

<style scoped>
.z-index-1 {
    z-index: 1;
}

.bg-primary {
    background-color: #3597FF !important;
}

.btn-primary {
    background-color: #3597FF;
    border-radius: 6px;
    font-size: 14px;
    padding: 12px 20px;
}

.btn-lg {
    padding: 18px 50px;
    font-weight: bold;
}

.btn-lg:hover {
    background-color: #3597FF;
}

#studyIt {
    background-color: #f3f9ff;
}

.it-count {
    z-index: 0;
    color: rgba(209, 220, 231, 0.3);
    font-size: 62px;
    bottom: 0;
}
</style>