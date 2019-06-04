<template>
  <v-layout mt-5>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 1"
              :key="n"
              xs4
            >
            <v-card flat tile>
                <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                ></v-text-field>
            </v-card>
            <v-card flat tile>
                <v-text-field
                    v-model="password"
                    label="Password"
                    :type="'password'"
                    required
                ></v-text-field>
            </v-card>
                <v-card flat tile>
                    <v-text-field
                    v-model="name"
                    label="Full name"
                    required
                    ></v-text-field>
                </v-card >
                <v-card flat tile>
                        <v-menu offset-y>
                <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
        >
          {{ chosenCounty }}
        </v-btn>
      </template>
      <v-list         
      style="max-height: 300px"
       class="scroll-y">
        <v-list-tile
          v-for="(county, index) in countyArray"
          :key="index"
          @click="chooseCounty(index)"
        >
          <v-list-tile-title>{{ county }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
          <v-btn @click="register(email, password, name)">
              Register
            </v-btn>
                </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
    export default {
        name: 'register',
        data() {
            return {
                countyArray :
                ['Blekinge', 
                'Dalarna', 
                'Gotland', 
                'Gävleborg', 
                'Halland', 
                'Jämtland', 
                'Jönköping', 
                'Kalmar', 
                'Kronoberg', 
                'Norrbotten', 
                'Skåne', 
                'Stockholm', 
                'Södermanland', 
                'Uppsala', 
                'Värmland', 
                'Västerbotten', 
                'Västernorrland', 
                'Västmanland', 
                'Västra Götaland', 
                'Örebro',
                'Östergötland'],
                email: null,
                name: null,
                password: null,
                chosenCounty: 'County',
                userInfo: null
            }
        },
        methods: {
            chooseCounty(index) {
                console.log(this.countyArray[index])
                this.chosenCounty = this.countyArray[index]
            },
            register(email, password, name) {
                this.userInfo = {name: name, password: password, email: email, county: this.chosenCounty}
                console.log(this.userInfo)
            }
        }
    }
</script>
