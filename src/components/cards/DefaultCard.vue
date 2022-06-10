<template>
    <div>
        <div v-for="card in whatData()" :key="card" class="card" :class="cardStyle">
            <div class="card-body" :class="cardBodyStyle">
                <h5 class="card-title">
                    <span class="fw-bold">{{ card.boldTitle }}</span>
                    {{ card.title }}
                </h5>
                <p class="card-text text-gray " :class="textStyle">
                    {{ card.text }}
                </p>
                <img src="@/assets/images/arrow-right.svg" alt="arrow-icon" class="position-absolute arrow-icon">
                <img src="@/assets/images/arrow-right-blue.svg" alt="arrow-icon" class="position-absolute arrow-icon-blue">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['cardStyle', 'cardBodyStyle', 'textStyle', 'data'],
    data() {
        return {
            labsCards: [
                { boldTitle: 'Hybrid', title: 'Lab', text: 'Študenti sa učia vyvíjať hybridné aplikácie v HTML, PHP, CSS, JavaScript, Ionicu, Vue a OctoberCMS.' },
                { boldTitle: 'Games', title: 'Lab', text: 'Študenti vyvíjajú mobilné hry v Unity a GDevelop, učia sa tvoriť 2D grafiku v programe Piskel, 3D grafiku v programe Blender a herný dizajn.' },
                { boldTitle: 'Apps', title: 'Lab', text: 'Študenti sa učia vyvíjať mobilné aplikácie v C# a Xamarin.forms a webové aplikácie v Java a Angular JS.' },
            ],
            joinCards: [
                { boldTitle: 'Labmastri', text: 'Odborníci z praxe, ktorí odovzdávajú študentom svoj know-how v roli mentora 5 hodín týždenne celý školský rok.' },
                { boldTitle: 'Firmy', text: 'Technologické firmy sú garantmi obsahu jednotlivých labov, spolupracujú so študentmi na projektoch a v rámci študentských stáží.' },
                { boldTitle: 'Školy', text: 'Stredné odborné školy zamerané na digitálne technológie v jednotlivých regiónoch inovujú svoje technologické vzdelávanie.' },
                { boldTitle: 'Študenti', text: 'Stredoškoláci so záujmom o najnovšie technológie a silnou vnútornou motiváciou učiť sa nové veci a rozvíjať svoje schopnosti.' },
            ]
        }
    },
    methods: {
        whatData() {
            return this.data == 'labsCards' ? this.labsCards : this.joinCards;
        }
    }
}
</script>

<style scoped>
.arrow-icon {
    z-index: 0;
    bottom: 30px;
}

.arrow-icon-blue {
    z-index: 1;
    display: none;
    bottom: 30px;
}


.card-shadow:hover {
    cursor: pointer;
    box-shadow: 1px 1px 8px 4px rgba(114, 114, 114, 0.1); 
    transition: all .3s;
}

.arrow-icon-change:hover .arrow-icon-blue {
    display: block;
}

.labs-card-text {
    font-size: 14px;
}

.card-join {
    min-width: 190px;
}

.card-wrapper {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.card-wrapper::-webkit-scrollbar { 
    display: none;
}
</style>