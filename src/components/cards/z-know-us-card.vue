<template>
    <div v-for="card in knowUsCards" :key="card" class="col-6 col-md-3 mb-4 pt-4">
        <div class="card border-0">
            <img :src="card.imgSrc" alt="person" class="card-img-top rounded">
            <div class="card-body px-0 pt-3">
                <h6 class="know-card-subtitle text-gray card-subtitle mb-2">{{ card.role }}</h6>
                <h5 class="card-title mb-0 mt-3 text-black">{{ card.title }}</h5>
                <p class="text-gray card-text">{{ card.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            knowUsCards: [
                { title: 'Grigor Ayrumyan', desc: 'Co-founder & Executive Director', role: 'BOARD MEMBER & EXECUTIVE TEAM', imgSrc: require('@/assets/images/grigor-ayrumyan.jpg') },
                { title: 'Slavomír Terezka', desc: 'Co-founder', role: 'BOARD MEMBER', imgSrc: require('@/assets/images/slavomir-terezka.jpg') },
                { title: 'Roman Sekerka', desc: 'Co-founder & Tech Garant pre HybridLab a AppsLab', role: 'BOARD MEMBER & EXECUTIVE TEAM', imgSrc: require('@/assets/images/roman-sekerka.jpg') },
                { title: 'Ján Kožlej', desc: 'Tech Garant pre GamesLab', role: 'BOARD MEMBER & EXECUTIVE TEAM', imgSrc: require('@/assets/images/jan-kozlej.jpg') },
                { title: 'Veronika Radobická', desc: 'Marketing Manager', role: 'EXECUTIVE TEAM', imgSrc: require('@/assets/images/veronika-radobicka.jpg') },
                { title: 'Dominika Krullová', desc: 'Project Manager', role: 'EXECUTIVE TEAM', imgSrc: require('@/assets/images/dominika-krullova.jpg') },
                { title: 'Viktória Jakubovičová', desc: 'Relationship Manager', role: 'EXECUTIVE TEAM', imgSrc: require('@/assets/images/viktoria-jakubovicova.jpg') }
            ],
        }
    }
}
</script>

<style scoped>
.know-card-subtitle {
    font-size: 14px;
}
</style>