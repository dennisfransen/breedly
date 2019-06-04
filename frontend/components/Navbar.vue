<template>
  <nav>
    <v-toolbar app>
  
      <router-link class="mr-3 underline" to="/">
        <v-toolbar-title class="text-uppercase display-1 grey--text">
          <span class="font-weight-bold">Breedly</span>
        </v-toolbar-title>
      </router-link>
  
      <router-link class="mr-3" v-for="link in links" :key="link.name" :to="link.path">
        <v-toolbar-title class="grey--text">
          <v-btn flat class="font-weight-light navItem">{{link.name}}</v-btn>
        </v-toolbar-title>
      </router-link>
  
      <v-spacer></v-spacer>
  
      <v-btn flat @click="login = !login">Login</v-btn>
      <router-link to="/register">
        <v-btn flat>Register</v-btn>
      </router-link>

    </v-toolbar>

    <v-layout row wrap right class="marginLogin">
      <v-card v-if="login">
        <v-card-title>
          <input type="text" placeholder="Email">
          <input type="text" placeholder="Password">
        </v-card-title>
        <v-card-actions>
          <v-btn>Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
    

  </nav>
</template>

<script>
  export default {
    data() {
      return {
        links: [{
            path: '/about',
            name: 'About us'
          },
          {
            path: '/info',
            name: 'How does Breedly work?'
          },
          {
            path: '/contact',
            name: 'Contact us'
          },
        ],
        login: false
      }
    }
  }
</script>

<style>
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
  
  a:hover,
  a:focus {
    color: #eee;
  }
  
  .underline {
    text-decoration: underline;
  }
  
  .marginLogin {
    margin-top: 70px;
  }
</style>
