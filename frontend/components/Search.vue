<template>
<div class="search">

    <!-- Menu -->
    <v-container grid-list-md text-xs-center mt-3>
        <v-layout mx-3 align-center justify-center row fill-height>
            <v-flex xs12>
                <v-toolbar color="success" dark tabs>
                    <v-toolbar-side-icon>
                        <v-icon></v-icon>
                    </v-toolbar-side-icon> <!-- Not in use atm, Taking space on the left of Search field -->
                    <v-text-field append-icon="mic" class="ml-3 mt-3" flat :label="searchLabel" prepend-inner-icon="search" solo-inverted></v-text-field>
                    <v-spacer></v-spacer> <!-- In case we don't want the search field to cover the whole menu -->

                    <template v-slot:extension>
                        <v-tabs v-model="tab" color="success" align-with-title>
                            <v-tabs-slider color="white"></v-tabs-slider>

                            <v-tab v-for="menuItem in menuItems" :key="menuItem"> {{ menuItem }} </v-tab>
                        </v-tabs>
                    </template>
                </v-toolbar>
            </v-flex>
        </v-layout>
    </v-container>

    <!-- List of items -->
    <v-container grid-list-md>
        <v-layout mx-3 justify-center row fill-height>
            <v-flex xs9>

                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="test in tests" :key="test.sell">

                        <v-card flat v-for="dog in test.sell.dogs" :key="dog.name">

                            <v-card-title class="text-uppercase title">{{ dog.name }}</v-card-title>
                            <v-card-text>{{ dog.breed + '  |  ' + dog.age + ' year(s)  |  ' + dog.gender + '  |  Pedigree: ' + dog.pedigree}}</v-card-text>
                            <v-divider></v-divider>

                        </v-card>

                    </v-tab-item>
                </v-tabs-items>

            <!-- Filter items -->
            </v-flex>

            <v-flex xs3>
                <v-card flat>

                    <v-card-text class="title text-uppercase grey--text"> Filter</v-card-text>
                    <v-divider class="mx-3"></v-divider>
                    <v-container fluid>
                        <v-switch color="success" v-model="switch1" :label="`Male`"></v-switch>
                        <v-switch color="success" v-model="switch2" :label="`Female`"></v-switch>
                        <v-divider></v-divider>
                        <v-switch color="success" v-model="switch3" :label="`Pedigree`"></v-switch>

                        <v-btn @click="resetFilter" large flat>Reset filter</v-btn>

                    </v-container>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

</div>
</template>

<script>
export default {
    name: "search",
    data() {
        return {
            tab: null,
            menuItems: ['buy', 'sell', 'news', 'become a breeder'],
            searchLabel: "Search for Breed, Gender, Age, Pedigree",
            switch1: true,
            switch2: true,
            switch3: true,
            tests: [{
                sell: {
                    dogs: [
                        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', breed: 'Amstaff', name: 'Charles', age: 4, gender: 'Female', pedigree: true },
                        { avatar: 'link', breed: 'Labrador', name: 'Kim', age: 6, gender: 'Male', pedigree: false },
                        { avatar: 'link', breed: 'Tax', name: 'Sofie', age: 1, gender: 'Female', pedigree: true },
                        { avatar: 'link', breed: 'Shepherd', name: 'Hammer', age: 7, gender: 'Female', pedigree: false },
                        { avatar: 'link', breed: 'Chiuaua', name: 'Spike', age: 1, gender: 'Male', pedigree: true },
                        { avatar: 'link', breed: 'Amstaff', name: 'Milton', age: 6, gender: 'Female', pedigree: false },
                        { avatar: 'link', breed: 'Pitbull', name: 'Micheal', age: 8, gender: 'Male', pedigree: false },
                        { avatar: 'link', breed: 'Amstaff', name: 'Mackan', age: 8, gender: 'Male', pedigree: false },
                        { avatar: 'link', breed: 'Chiuaua', name: 'Frank', age: 8, gender: 'Male', pedigree: false },
                        { avatar: 'link', breed: 'Pitbull', name: 'Caweh', age: 1, gender: 'Male', pedigree: false },
                        { avatar: 'link', breed: 'Amstaff', name: 'Isabel', age: 3, gender: 'Female', pedigree: false },
                        { avatar: 'link', breed: 'Pitbull', name: 'Benjy', age: 2, gender: 'Male', pedigree: false },
                        { avatar: 'link', breed: 'Chiuaua', name: 'Arash', age: 11, gender: 'Male', pedigree: false },
                    ],

                    cats: [
                        { avatar: 'link', breed: 'Swinx', name: 'Jane', age: 3, gender: 'Female', pedigree: true },
                        { avatar: 'link', breed: 'Norsk skogskatt', name: 'Tarzan', age: 2, gender: 'Male', pedigree: false }
                    ],
                },
                buy: {
                    dogs: [
                        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', breed: 'Amstaff', name: 'Charles', age: 4, gender: 'Female', pedigree: true },
                        { breed: 'Labrador', name: 'Kim', age: 6, gender: 'Male', pedigree: false },

                    ],
                    cats: [
                        { avatar: 'link', breed: 'Swinx', name: 'Tarzan', age: 3, pedigree: false },
                        { avatar: 'link', breed: 'Norsk skogskatt', name: 'Henrik', age: 2, pedigree: true }
                    ],
                }
            }],
        }
    },
    methods: {
        resetFilter() {
            this.switch1 = false
            this.switch2 = false
            this.switch3 = false
        }
    },
}
</script>

<style scoped>
    .search {
        background-image: url("../assets/grass-two.png");
        background-repeat: no-repeat;
        background-size: auto 40em;
        background-position: bottom; 
    }
</style>
