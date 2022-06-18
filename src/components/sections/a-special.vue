<template>
    <z-site-section id="special" class="pt-4 pt-md-5 position-relative" containerClass="py-4 py-md-5" rowClass="justify-content-center border-bottom pb-5">
            <div class="text-center col-12">
                <h2 class="mb-5 display-6">
                Čím sme
                <span class="fw-bold">
                  výnimoční?
                </span>
              </h2>
            </div>
            <div class="col-md-4 col-xl-3 ms-xl-5 pt-3 pt-md-5">
              <img src="@/assets/images/special1.svg" alt="select" class="my-3">
              <h5 class="fw-bold mb-4">Partnerstvo</h5>
              <p class="text-gray">Dáva študentom slobodu, ktorú vyvažujú zodpovednosťou. Spolupráca LabMastra a študentov je v partnerskej rovine.</p>
            </div>
            <div class="col-md-4 col-xl-3 pt-3 pt-md-5">
              <img src="@/assets/images/special2.svg" alt="select" class="my-3">
              <h5 class="fw-bold mb-4">LabMaster</h5>
              <p class="text-gray">Je mentor s expertízou v danej oblasti, ktorý nastavuje rámce a sprevádza študentov pri dosahovaní míľnikov.</p>
            </div>
            <div class="col-md-4 col-xl-3 me-xl-5 pt-3 pt-md-5">
              <img src="@/assets/images/special3.svg" alt="select" class="my-3">
              <h5 class="fw-bold mb-4">Učebný blok</h5>
              <p class="text-gray">Je základný dokument, z ktorého sa študenti učia. Obsahuje všetky vzdelávacie podklady pre konkrétnu fázu.</p>
            </div>
            <div class="col-md-4 col-xl-3 pt-3 pt-md-5">
              <img src="@/assets/images/special4.svg" alt="select" class="my-3">
              <h5 class="fw-bold mb-4">Problem driven</h5>
              <p class="text-gray">Je princíp učenia, vďaka ktorému sú študenti vedení ku kritickému mysleniu s cieľom vyriešiť konkrétne problémy.</p>
            </div>
            <div class="col-md-4 col-xl-3 pt-3 pt-md-5">
              <img src="@/assets/images/special5.svg" alt="select" class="my-3">
              <h5 class="fw-bold mb-4">Project driven</h5>
              <p class="text-gray">Po teoretickej fáze sú študenti rozdelení do tímov, v ktorých v spolupráci s firmami tvoria konkrétny projekt pre zákazníka.</p>
            </div>
            <div class="col-md-4 col-xl-3 pt-3 pt-md-5">
              <img src="@/assets/images/special6.svg" alt="select" class="my-3">
              <h5 class="fw-bold mb-4">Samoštúdium</h5>
              <p class="text-gray">Študenti trávia 80% času samoštúdiom a sú vedení k tímovej spolupráci. 20% teórie slúži iba ako odrazový mostík.</p>
            </div>

            <template #outOfContainer> 
              <div class="letter-a overflow-hidden">
                <img src="@/assets/images/a_letter.png" alt="letter" class="d-none d-md-block position-absolute">
              </div>
            </template>
    </z-site-section>
</template>

<style scoped>
.letter-a img {
    width: 482px;
    left: -241px;
    top: -241px;
    z-index: 0;
}

@media only screen and (max-width: 1199px) {
    .letter-a img {
        width: 241px;
        left: -120.5px;
        top: 0;
    }
}
</style>