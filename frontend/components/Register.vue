<template>
  <v-layout mt-1>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-container v-bind="{ [`grid-list-${0}`]: true }" fluid>
          <v-layout row wrap>
            <v-flex v-for="n in 1" :key="n" xs4>
              <v-card flat tile>
                <v-text-field v-model="email" label="E-mail" required></v-text-field>
              </v-card>
              <v-card flat tile>
                <v-text-field v-model="password" label="Password" :type="'password'" required></v-text-field>
              </v-card>
              <v-card flat tile>
                <v-text-field v-model="name" label="Full name" required></v-text-field>
              </v-card>
              <v-card flat tile>
                <v-text-field v-model="number" label="Phone number" required></v-text-field>
              </v-card>
              <v-card flat tile>
                <v-menu offset-x>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" flat> {{ location }}</v-btn>
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
    </v-card>
    <v-card flat>
          <v-btn @click="next(email, password, name, number)" flat>
              Next
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
        name: null,
        password: null,
        email: null,
        number: null,
        location: 'County',
        userInfo: null
      }
    },
    methods: {
      chooseCounty(index) {
        console.log(this.countyArray[index])
        this.location = this.countyArray[index]
      },
      next(email, password, name, number) {
        this.userInfo = {
          name: name,
          password: password,
          email: email,
          number: number,
          county: this.location
        }
        console.log(this.userInfo)
        this.saveUser(this.userInfo)
      },
      saveUser(userInfo) {
        fetch('http://localhost:8080/register', {
                body: '{ "name": "' + this.name + '", "password": ' + this.password + ', "email": ' + this.email + ', "location": ' + this.location + ', "number": ' + this.number + '}',
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
