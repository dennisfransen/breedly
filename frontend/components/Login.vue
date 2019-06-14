<template>
  <div class="login" align-center justify-center fill-height>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="mt-5" color="rgba(0, 0, 0, 0.2">
          <v-layout justify-center>
            <v-flex xs4 text-xs-center>
              <!-- card for login -->
              <v-card  class="translucentBackground" flat tile>
                <v-text-field dark v-model="email" label="E-mail" required></v-text-field>
                <v-text-field dark v-model="password" label="Password" :type="'password'" required></v-text-field>
                <v-btn dark outline  @click="fetchUser(email, password)">Login<v-icon color="green" right="" >vpn_key</v-icon></v-btn>
              </v-card>
              <!-- card for error message when email dosen't exsist -->
              <v-card v-if="notRegistered" flat tile class="translucentBackground"> 
                <v-divider></v-divider>
                <div class="white--text">
                  We can't find an account with this email!
                </div>
              </v-card>
              <!-- card for error message when password is wrong -->
              <v-card v-if="wrongPassword" flat tile class="translucentBackground"> 
                <v-divider></v-divider>
                <div class="white--text">
                  Wrong email or password
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
      wrongPassword: null,
      name: null
    }
  },
  methods: {
    checkAuthentication(status) {
      if (status === 200) {
        this.$router.push(this.searchLink)
      } else if(status === 401) {
        this.wrongPassword = true
      } else {
        this.notRegistered = true
      }
    },
    fetchUser(email, password) {
      this.notRegistered = false
      this.wrongPassword = false

      fetch("/api/users/" + email + "/" + password).then(response => {
        this.checkAuthentication(response.status)
        return response.text()
      }).then(result => {
        this.name = result
        this.$store.commit('WhosLoggedIn', this.name)
      })
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

