<template>
  <div class="search">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="success" class="px-2 pt-4">
            <v-text-field append-icon="mic" class="mx-3" flat label="Search" prepend-inner-icon="search" solo-inverted v-model="searchText"></v-text-field>
          </v-card>
        </v-flex>
  
        <v-layout row wrap>
          <v-flex mt-3 xs9>
            <div>
              <v-expansion-panel expand>
                <v-expansion-panel-content v-for="animal in pets" :key="animal.name">
                  <template v-slot:actions>
                        <v-icon small>fas fa-chevron-up</v-icon>
                  </template>
  
                  <template v-slot:header>
<<<<<<< HEAD
                      <img style="min-height: 1.2em; max-width: 6em; padding-right: 2em;" :src="'http://localhost:3000/images/' + animal.imageName"/>
=======
                      <img style="min-height: 1.2em; max-width: 6em; padding-right: 2em;"/>
>>>>>>> 2923e6e9dbb86b96fcbb37501439d40434dfba10
                    <div>
                      <h2>{{ animal.name }}</h2>
                      <p>{{ animal.type }}</p>
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
            <v-card color>
              <v-card-title class="text-uppercase">Filter</v-card-title>
              <v-divider class="mx-3"></v-divider>

              <v-container fluid>
                <v-switch color="success" @click="displayPets" v-model="switchFemale" :label="`Female`"></v-switch>
                <v-switch color="success" @click="displayPets" v-model="switchMale" :label="`Male`"></v-switch>

                <v-divider></v-divider>

                <v-switch color="success" @click="displayPets" v-model="switchPedigree" :label="`Pedigree`"></v-switch>

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
    created() {
      this.fetchPets();
    },
    data() {
      return {
        switchFemale: false,
        switchMale: false,
        switchPedigree: false,
  
        constPets: null,
        pets: null,
        searchText: null,
        tempPet: []
      };
    },
    methods: {
      clearFilter() {
        this.switchFemale = false;
        this.switchMale = false;
        this.switchPedigree = false;
      },
  
      displayPets() {
        this.pets = this.constPets.filter((pet) => {
  
          if (!this.switchMale && !this.switchFemale && !this.switchPedigree) {
            return true
          }
  
          if (!this.switchPedigree && this.switchFemale && pet.gender === 0) {
            return true
          }
  
          if (!this.switchPedigree && this.switchMale && pet.gender === 1) {
            return true
          }
  
          if (!this.switchFemale && !this.switchMale && this.switchPedigree && pet.pedigree === 1) {
            return true
          }
  
          if (this.switchPedigree && this.switchMale && pet.gender === 1 && pet.pedigree === 1) {
            return true
          }
  
          if (this.switchPedigree && this.switchFemale && pet.gender === 0 && pet.pedigree === 1) {
            return true
          }
  
          if (this.switchPedigree && this.switchFemale && this.switchMale && pet.pedigree === 1) {
            return true
          }
  
          return false
        })
      },
  
      clearFilter() {
        this.switchFemale = false;
        this.switchMale = false;
        this.switchPedigree = false;
        this.displayPets()
      },
  
      fetchPets() {
        fetch("/api/pets")
          .then(response => response.json())
          .then(result => {
            this.pets = result;
            this.constPets = result;
            console.log("fetchPets works!");
          });
      }
    },
    watch: {
      searchText: function() {
        let text = this.searchText
  
        this.pets = this.constPets.filter((pet) => {
          if (text.length < 1 || pet.name.includes(text)) {
            return true
          }
  
          return false
        })
      }
    },
  };
</script>
