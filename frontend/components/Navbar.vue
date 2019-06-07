<template>
  <nav>
    <v-toolbar app>
      <!-- Logo with link to rot -->
      <router-link class="underline" to="/">
        <v-toolbar-title class="text-uppercase display-1 grey--text">
          <span class="font-weight-bold">Breedly</span>
        </v-toolbar-title>
      </router-link>
  
      <!-- for-loop for about, info and contact with link to each path -->
      <router-link class="mr-3" v-for="link in links" :key="link.name" :to="link.path">
        <v-toolbar-items class="hidden-sm-and-down">
          <v-toolbar-title class="grey--text">
            <v-btn flat class="font-weight-light navItem">{{link.name}}</v-btn>
          </v-toolbar-title>
        </v-toolbar-items>
      </router-link>
  
      <v-spacer></v-spacer>
  
      <!-- for-loop for register and login with link to each path -->
      <router-link class="mr-3" v-for="link in linksLogin" :key="link.name" :to="link.path">
        <v-toolbar-items class="hidden-sm-and-down">
  
          <v-toolbar-title class="grey--text">
            <v-btn flat class="font-weight-light navItem">{{link.name}}</v-btn>
          </v-toolbar-title>
        </v-toolbar-items>
      </router-link>
  
      <!-- burger menu for smaller devices -->
      <v-toolbar-items class="hidden-md-and-up">
        <v-menu>
          <template v-slot:activator="{ on }">
              <v-btn flat v-on="on">
                <v-icon>list</v-icon>
              </v-btn>
          </template>
        <v-list>
          <v-list-tile v-for="link in linksAll" :key="link.path" route :to="link.path">
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
        linksLogin: [{
            path: '/register',
            name: 'Register account'
          },
          {
            path: '/login',
            name: 'Login'
          }
        ],
        linksAll: [{
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
          {
            path: '/register',
            name: 'Register account'
          },
          {
            path: '/login',
            name: 'Login'
          }
        ],
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
  
  .centerBtn {
    text-align: center;
  }
  
  a:hover,
  a:focus {
    color: #eee;
  }
  
  .underline {
    border-bottom: 1px solid green;
  }
  
  .border {
    border-bottom: 1px solid lightgrey;
  }
  
  .marginLogin {
    margin-top: 12em;
    margin-left: 23.3em;
  }
  
  .cardWidth {
    min-width: 20em;
  }
</style>
  