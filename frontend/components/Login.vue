<template>
  <v-layout mt-1>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container v-bind="{ [`grid-list-${0}`]: true }" fluid>
          <v-layout justify-center>
            <v-flex v-for="n in 1" :key="n" xs4 text-xs-center>
              <!-- card for login -->
              <v-card flat tile>
                
                <v-text-field v-model="email" label="E-mail" required></v-text-field>
                <v-text-field v-model="password" label="Password" :type="'password'" required></v-text-field>

                <v-btn @click="loginBtnPressed" flat> Login </v-btn>
              
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
    methods: {
    loginBtnPressed() {
      alert('You pressed login button')
    }
  }
    
}
</script>

<style scoped>

</style>

