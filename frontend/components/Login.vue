<template>
  <div class="login" align-center justify-center fill-height>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="mt-5" color="rgba(0, 0, 0, 0.2">
          <v-layout justify-center>
            <v-flex xs4 text-xs-center>
              <!-- card for login -->
              <v-card  class="translucentBackground" flat tile>
                <v-text-field color="green" dark v-model="email" label="E-mail" required></v-text-field>
                <v-text-field color="green" dark v-model="password" label="Password" :type="'password'" required></v-text-field>
                <v-btn @click="fetchUser(email, password)">Login</v-btn>
              </v-card>
              <!-- card for error message when email dosen't exsist -->
              <v-card v-if="notRegistered" flat tile class="translucentBackground"> 
                <v-divider></v-divider>
                <div class="white--text">
                  We can't find an account with this email!
                </div>
              </v-card>
              <!-- car for error message when password is wrong -->
              <v-card v-if="wrongPassword" flat tile class="translucentBackground"> 
                <v-divider></v-divider>
                <div class="white--text">
                  That password ain't right, dog.
                </div>
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
      searchLink: "/search",
      notRegistered: null,
      wrongPassword: null
    }
  },
  methods: {
    checkAuthentication(status) {
      if (status === 404) {
        console.log('Not a registered user')
        this.notRegistered = true
      } else if(status === 401) {
        console.log('Wrong email or password')
        this.wrongPassword = true
      } else {
        console.log('logged in');
        this.$router.push(this.searchLink)
      }
    },
    fetchUser(email, password) {
      this.notRegistered = false
      this.wrongPassword = false
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
.login {
  background-image: url("../assets/Dog_Background.jpg");
  background-size: cover;
  height: 100%;
  width: 100%;
  align-items: top;
}

.translucentBackground {
  margin-top: 5px;
  background-color: rgba(0, 0, 0, 0.0);
}
</style>

