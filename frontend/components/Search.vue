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
                <v-switch color="success" v-model="switchFemale" :label="`Female`"></v-switch>
                <v-switch color="success" v-model="switchMale" :label="`Male`"></v-switch>

                <v-divider></v-divider>

                <v-switch color="success" v-model="switchPedigree" :label="`Pedigree`"></v-switch>

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
        switchFemale: true,
        switchMale: true,
        switchPedigree: true,
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
      fetchPets() {
        fetch("http://localhost:3000/pets")
          .then(response => response.json())
          .then(result => {
            this.pets = result;
            this.constPets = result;
            console.log("fetchPets works!");
          });
      }
    },
     watch: {
      searchText: function () {
        let text = this.searchText
        let dict = this.tempPet
        dict = []

        this.pets.filter( (pet) => {
          if (text.length < 1) {
            this.pets = this.constPets
          } else if (pet.name.includes(text)) {
            dict.push(pet)
            this.pets = dict
          }

        })
      }
    },
  };
</script>

<style scoped>
  .search {
    /* Multer */
    /* background-image: url("../assets/grass-two.png"); */
    background-repeat: no-repeat;
    background-size: auto 40em;
    background-position: bottom;
  }
</style>
