<template>
  <div class="search">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="success" class="px-2 pt-4">
            <v-text-field
              append-icon="mic"
              class="mx-3"
              flat
              label="Search"
              prepend-inner-icon="search"
              solo-inverted
            ></v-text-field>
          </v-card>
        </v-flex>

        <v-layout row wrap>
          <v-flex mt-3 xs9>
            <div>
              <v-expansion-panel v-model="panel" expand>
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
  created() {
    this.fetchPets();
  },
  data() {
    return {
      switch1: true,
      switch2: true,
      switch3: true,
      pets: null
    };
  },
  methods: {
    clearFilter() {
      this.switch1 = false;
      this.switch2 = false;
      this.switch3 = false;
    },
    fetchPets() {
      fetch("http://localhost:3000/pets")
        .then(response => response.json())
        .then(result => {
          this.pets = result;
          console.log("fetchPets works!");
        });
    }
  }
};
</script>

<style scoped>
     .search {
         background-image: url("../assets/grass-two.png");
         background-repeat: no-repeat;
         background-size: auto 40em;
         background-position: bottom; 
     } 
</style>
