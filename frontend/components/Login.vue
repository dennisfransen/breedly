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
                <v-btn @click="fetchCheckUser(email, password)">Login
                  <div v-if="login" route :to="searchLink"></div>
                </v-btn>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      login: null,
      searchLink: '/search'
    };
  },
  methods: {
    loginBtnPressed() {
      alert("You pressed login button");
    },
    fetchCheckUser(email, password) {
      // this.login = false
      console.log("inside fetchCheckUser method");

      fetch("http://localhost:3000/users/" + email + "/" + password).then(
        response => {
          console.log("fetchCheckUser worked");
          console.log(response);
          this.login = true
        }
      );
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

