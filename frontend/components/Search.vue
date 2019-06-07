<template>
    <div class="search">
    
        <v-container grid-list-md>
            <v-layout row wrap>
    
                <v-flex xs12>
                    <v-card dark color="success" class="px-2 pt-4">
                        <v-text-field append-icon="mic" class="mx-3" flat label="Search" prepend-inner-icon="search" solo-inverted></v-text-field>
                    </v-card>
                </v-flex>
    
                <v-layout row wrap>
    
                    <v-flex mt-3 xs9>
    
                        <div>
                            <v-expansion-panel v-model="panel" expand>
                                <v-expansion-panel-content v-for="animal in animals" :key="animal.name">
                                    <template v-slot:actions>
                                        <v-icon small>fas fa-chevron-up</v-icon>
                                    </template>
                                    <template v-slot:header>
                                        <div>
                                            <h2>{{ animal.name }}</h2>
                                            <p>{{ animal.breed }}</p>
                                        </div>
                                    </template>
                                    <v-card>
                                        <v-card-text class="grey lighten-3">{{ animal.description }}</v-card-text>
                                    </v-card>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </div>

                    </v-flex>

                    <v-flex mt-3 xs3>
                        <v-card color="">
                            <v-card-title class="text-uppercase">Filter</v-card-title>
                            <v-divider class="mx-3"></v-divider>
    
                            <v-container fluid>
                                <v-switch color="success" v-model="switch1" :label="`Female`"></v-switch>
                                <v-switch color="success" v-model="switch2" :label="`Male`"></v-switch>
    
                                <v-divider></v-divider>
    
                                <v-switch color="success" v-model="switch3" :label="`Pedigree`"></v-switch>

                                <v-btn @click="clearFilter">Clear filter</v-btn>
                            </v-container>
    
                        </v-card>
                    </v-flex>

                </v-layout>
    
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                switch1: true,
                switch2: true,
                switch3: true,
                animals: [
                    { avatar: 'link', userid: '', type: 'Dog', breed: 'Labrador', name: 'Kim', age: 6, gender: 'Male', pedigree: false, description: 'This is a description' },
                    { avatar: 'link', userid: '', type: 'Dog', breed: 'Rottweiler', name: 'Gawat', age: 6, gender: 'Male', pedigree: false, description: 'This is a description' },
                    { avatar: 'link', userid: '', type: 'Cat', breed: 'Amstaff', name: 'Timmy', age: 6, gender: 'Male', pedigree: false, description: 'This is a description' },
                    { avatar: 'link', userid: '', type: 'Dog', breed: 'Pitbull', name: 'Mike', age: 6, gender: 'Male', pedigree: false, description: 'This is a description' },
                    { avatar: 'link', userid: '', type: 'Cat', breed: 'Amstaff', name: 'Arash', age: 6, gender: 'Male', pedigree: false, description: 'This is a description' },
                    { avatar: 'link', userid: '', type: 'Dog', breed: 'Chiuaua', name: 'Benjy', age: 6, gender: 'Male', pedigree: false, description: 'This is a description' },
                    { avatar: 'link', userid: '', type: 'Cat', breed: 'Shepherd', name: 'Isabel', age: 6, gender: 'Male', pedigree: false, description: 'This is a description' },
                    { avatar: 'link', userid: '', type: 'Cat', breed: 'Pitbull', name: 'Caweh', age: 6, gender: 'Male', pedigree: false, description: 'This is a description' },
                ]
            }
        },
        methods: {
            clearFilter() {
                this.switch1 = false
                this.switch2 = false
                this.switch3 = false
            }
        }
    }
</script>
