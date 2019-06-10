<template>
  <div class="register">
  
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
  
        <v-card class="mt-5" color="rgba(0, 0, 0, 0.2">
  
          <v-container v-bind="{ [`grid-list-${0}`]: true }" fluid>
            <v-layout justify-center>
              <v-flex v-for="n in 1" :key="n" xs4 text-xs-center>
  
                <!-- card for user registration info -->
                <v-card v-if="!nextInfo" color="rgba(0, 0, 0, 0.0" flat tile>
  
                  <v-text-field dark v-model="email" label="E-mail" required></v-text-field>
                  <v-text-field dark v-model="password" label="Password" :type="'password'" required></v-text-field>
                  <v-text-field dark v-model="name" label="Full name" required></v-text-field>
                  <v-text-field dark v-model="number" label="Phone number" required></v-text-field>
  
                  <!-- scroll list for location -->
                  <v-menu offset-x>
                    <template v-slot:activator="{ on }">
                      <v-btn  v-on="on" > {{ chosenCounty }} <v-icon color="red" right="" >location_on</v-icon> </v-btn>
                    </template>
                  <v-list style="max-height: 300px" class="scroll-y">
                    <v-list-tile v-for="(county, index) in countyArray" :key="index" @click="chooseCounty(index)">
                      <v-list-tile-title>{{ county }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                  </v-menu>

                  <v-btn  @click="next(email, password, name)">Next<v-icon color="green" right="" >arrow_forward</v-icon></v-btn>
              
              </v-card>
             
              <!-- Pet information form -->
              <v-card v-if="nextInfo" color="rgba(0, 0, 0, 0.0" flat tile>

                <v-text-field dark v-model="petType" label="Pet type" required></v-text-field>
                <v-text-field dark v-model="petName" label="Pet name" required></v-text-field>
                <v-text-field dark v-model="petAge" label="Pet age" required></v-text-field>
                
                <v-textarea dark v-model="petDescription" label="Describe your pet">Description</v-textarea>

                <v-switch dark v-model="pedigree" label="Pedigree"></v-switch>
                
                <v-switch dark @click="petGender(gender)" v-model="petMale" label="Male"></v-switch> 
                <v-switch dark @click="petGender(!gender)" v-model="petFemale" label="Female"></v-switch>
                
                <v-btn @click="back()"> Back <v-icon color="red" right="" >arrow_back</v-icon></v-btn>
                <v-btn @click="registerPet(petType, petName, petAge, petDescription, pedigree)"> Register <v-icon color="green" right="" >check_circle</v-icon></v-btn>

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
        this.chosenCounty = this.countyArray[index]
      },
      register(email, password, name) {
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
          gender: this.gender,
          age: age,
          description: description,
          pedigree: pedigree
        }
        this.savePet()
        console.log(this.petInfo)
      },
      petGender(gender) {
        // this.gender true for male false for female
        if(gender) {
          this.petMale = false
          this.petFemale = true
          this.gender = false
        } else if(!gender) {
          this.petMale = true
          this.petFemale = false
          this.gender = true
        }
      },
      saveUser() {
        fetch('http://localhost:3000/users', {
            body: '{ "name": "' + this.name + '", "password": "' + this.password + '", "email": "' + this.email + '", "location": "' + this.chosenCounty + '", "number": ' + this.number + '}',
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
          .then(result => {
            console.log('saved user', result)
          })
      },
      savePet() {
        fetch('http://localhost:3000/pets', {
          body: '{"name": "' + this.petName + '", "type": "' + this.petType + '", "description": "' + this.petDescription + '", "gender": ' + this.gender + ', "pedigree": ' + this.pedigree + ', "age": ' + this.petAge + '}',
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
        .then(result => {
          console.log(result)
        })
        this.$router.push('/Search')
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
