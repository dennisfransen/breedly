<template>
  <nav>
    <v-toolbar app>
      <!-- Logo with link to rot -->
      <router-link class="mr-3 underline" to="/">
        <v-toolbar-title class="text-uppercase display-1 grey--text">
          <span class="font-weight-bold">Breedly</span>
        </v-toolbar-title>
      </router-link>
  
      <!-- for loop for about, info and contact with link to each path -->
      <router-link class="mr-3" v-for="link in links" :key="link.name" :to="link.path">
        <v-toolbar-items class="hidden-sm-and-down">
          <v-toolbar-title class="grey--text">
            <v-btn flat class="font-weight-light navItem">{{link.name}}</v-btn>
          </v-toolbar-title>
        </v-toolbar-items>
      </router-link>
  
  
      <v-spacer></v-spacer>
  
  
      <v-card v-if="login" class="cardWidth marginLogin">
        <v-card-title>
          <input type="text" placeholder="Email">
          <input type="text" placeholder="Password">
        </v-card-title>
        <v-card-actions>
          <v-btn small>Login</v-btn>
        </v-card-actions>
      </v-card>
  
      <!-- buttons with link to register and boolean for login popup -->
      <v-toolbar-items>
        <v-btn flat class="font-weight-light navItem" @click="login = !login">Login</v-btn>
        <v-btn flat class="font-weight-light navItem" route to="/register">Register</v-btn>
      </v-toolbar-items>

      <!-- burger menu for smaller devices -->
      <v-toolbar-items class="hidden-md-and-up">
        <v-menu>
        <template v-slot:activator="{ on }">
            <v-btn flat v-on="on">
              <v-icon>list</v-icon>
            </v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.path" route :to="link.path">
            <v-list-tile-title>{{ link.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      </v-toolbar-items>
      
  
    </v-toolbar>
  
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
    border-bottom: 2px solid blue;
  }
  
  .marginLogin {
    margin-top: 12em;
    margin-left: 23.3em;
  }
  
  .cardWidth {
    min-width: 20em;
  }
</style>
  