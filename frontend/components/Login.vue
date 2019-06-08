<template>
  <div class="register" align-center justify-center fill-height>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="mt-5" color="rgba(0, 0, 0, 0.2">
          <v-layout justify-center>
            <v-flex xs4 text-xs-center>
              <!-- card for login -->
              <v-card color="rgba(0, 0, 0, 0.0" flat tile>
                <v-text-field dark v-model="email" label="E-mail" required></v-text-field>
                <v-text-field dark v-model="password" label="Password" :type="'password'" required></v-text-field>
                <v-btn @click="fetchUser(email, password)">Login</v-btn>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Search from './Search.vue'

export default {
  components: {
    Search
  },
  data() {
    return {
      email: null,
      password: null,
      searchLink: "/search"
    };
  },
  methods: {
    checkAuthentication(status) {
      if (status === 404) {
        console.log('Not a registered user')
        alert('You are not registered')
      } else if(status === 401) {
        console.log('Wrong email or password');
        alert('Email or password is wrong')
      } else {
        console.log('logged in');
        this.$router.push(this.searchLink)
      }
    },
    fetchUser(email, password) {
      console.log("inside fetchCheckUser method");

      fetch("http://localhost:3000/users/" + email + "/" + password).then(
        response => {
          console.log("fetchCheckUser worked");
          console.log(response.status);
          this.checkAuthentication(response.status)
          
        }
      )
    }
  }
};
</script>

<style scoped>
.register {
  background-image: url("../assets/Dog_Background.jpg");
  background-size: cover;
  height: 100%;
  width: 100%;
  align-items: top;
}
</style>

