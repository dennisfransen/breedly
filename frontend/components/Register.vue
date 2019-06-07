<template>
  <div class="register">
  

        
    <v-layout mt-5>
      <v-flex xs12 sm6 offset-sm3>

          <v-card color="rgba(0, 0, 0, 0.2">


            <v-container v-bind="{ [`grid-list-${0}`]: true }" fluid>
              <v-layout justify-center>
                <v-flex v-for="n in 1" :key="n" xs4 text-xs-center>

                  <!-- card for user registration info -->
                  <v-card color="rgba(0, 0, 0, 0.0" flat tile>
                        
                        <v-text-field v-model="email" label="E-mail" required></v-text-field>
                        <v-text-field v-model="password" label="Password" :type="'password'" required></v-text-field>
                        <v-text-field v-model="name" label="Full name" required></v-text-field>
                        <v-text-field v-model="number" label="Phone number" required></v-text-field>
                        
                        <!-- scroll list for location -->
                        <v-menu offset-x> 
                        <template v-slot:activator="{ on }">
                          <v-btn v-on="on" flat> {{ location }}</v-btn>
                        </template>
                  <v-list style="max-height: 300px" class="scroll-y">
                    <v-list-tile v-for="(county, index) in countyArray" :key="index" @click="chooseCounty(index)">
                      <v-list-tile-title>{{ county }}</v-list-tile-title>
                    </v-list-tile>
                    </v-list>
                </v-menu>

                <v-btn @click="register(email, password, name)">Register<v-icon color="green" right="" >check_circle</v-icon></v-btn>
              
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>


    </v-flex>
  </v-layout>

  </div>
</template>


<script>
  export default {
    name: 'register',
    data() {
      return {
        countyArray: ['Blekinge',
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
          'Östergötland'
        ],
        email: null,
        name: null,
        password: null,
        chosenCounty: 'County',
        number: null,
        location: 'County',
        userInfo: null
      }
    },
    methods: {
      chooseCounty(index) {
        console.log(this.countyArray[index])
        this.chosenCounty = this.countyArray[index]
      },
      register(email, password, name) {
        this.location = this.countyArray[index]
      },
      next(email, password, name, number) {
        this.userInfo = {
            name: name,
            password: password,
            email: email,
            county: this.chosenCounty
          },
  
          console.log(this.userInfo)
      },
      saveUser(userInfo) {
        fetch('http://localhost:8080/register', {
            body: '{ ' + userInfo + '}',
            // body: '{ "name": "' + this.name + '", "password": ' + this.password + ', "email": ' + this.email + ', "location": ' + this.location + ', "number": ' + this.number + '}',
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
          .then(result => {
            console.log('saved user', result)
          })
      }
    }
  }
</script>

<style scoped>
  .register {
    background-image: url('../assets/Dog_Background.jpg');
    background-size: cover;
    height: 100%;
    width: 100%;
    align-items: top;
  }
</style>
