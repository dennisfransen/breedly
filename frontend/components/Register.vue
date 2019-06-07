<template>
  <v-layout mt-1>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container v-bind="{ [`grid-list-${0}`]: true }" fluid>
          <v-layout justify-center>
            <v-flex v-for="n in 1" :key="n" xs4 text-xs-center>
              <!-- card for user registration info -->
              <v-card v-if="!nextInfo" flat tile>
                
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

                <v-btn @click="next(email, password, name, number)" flat> Next </v-btn>
              
              </v-card>
             
              <!-- Pet information form -->
              <v-card v-if="nextInfo" flat tile>

                <v-text-field v-model="petType" label="Pet type" required></v-text-field>
                <v-text-field v-model="petName" label="Pet name" required></v-text-field>
                <v-text-field v-model="petAge" label="Pet age" required></v-text-field>
                
                <v-textarea v-model="petDescription" label="Describe your pet">Description</v-textarea>

                <v-switch v-model="pedigree" label="Pedigree"></v-switch>
                
                <v-switch @click="petGender(gender)" v-model="petMale" label="Male"></v-switch> 
                <v-switch @click="petGender(!gender)" v-model="petFemale" label="Female"></v-switch>
                
                <v-btn @click="back()" flat> Back </v-btn>
                <v-btn @click="registerPet(petType, petName, petAge, petDescription, pedigree)" flat> Register </v-btn>

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
        countyArray: 
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
          'Östergötland'
        ],
        name: null,
        password: null,
        email: null,
        number: null,
        location: 'County',
        userInfo: null,
        nextInfo: false,
        petName: null,
        petType: null,
        petAge: null,
        petDescription: null,
        pedigree: null,
        gender: null,
        petMale: null,
        petFemale: null,
        petInfo: null,
      }
    },
    methods: {
      chooseCounty(index) {
        console.log(this.countyArray[index])
        this.location = this.countyArray[index]
      },
      // Get user information and save to user object
      next(email, password, name, number) {
        this.userInfo = {
          name: name,
          password: password,
          email: email,
          number: number,
          location: this.location
        }
        this.nextInfo = true
        this.saveUser(this.userInfo)
      },
      back() {
        this.nextInfo = false
      },
      registerPet(type, name, age, description, pedigree) {
        this.petInfo = {
          type: type,
          name: name,
          age: age,
          description: description,
          pedigree: pedigree
        }
        console.log(this.petInfo)
      },
      petGender(gender) {
        if(gender) {
          this.petMale = false
          this.petFemale = true
        } else if(!gender) {
          this.petMale = true
          this.petFemale = false
        }
      },
      // Save user to database
      saveUser(userInfo) {
        fetch('/register', {
                body: '{ "name": "' + this.name + '", "password": ' + this.password + ', "email": ' + this.email + ', "location": ' + this.location + ', "number": ' + this.number + '}',
                headers: {
                'Content-Type': 'application/json'
                },
                method: 'POST'
            })
            .then(result => {
                console.log('saved user', result)
            })
      },
    }
  }
</script>