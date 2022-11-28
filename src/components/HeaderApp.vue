<template>
    <v-toolbar>
      
     
      <v-toolbar-title  v-if="this.$route.path!='/'">
        <router-link
        class="routerLink"
        to="/">
        Test Project
      </router-link>

      </v-toolbar-title>
      
      <v-toolbar-title  v-else>
        Test Project
      </v-toolbar-title>
   
  

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
          flat
          icon
          block
          link
          >
          <router-link to="/basket" 
          class="routerLink"
          >
                <v-icon
                color="grey"
                size = "50px"
                >
                mdi-basket
            </v-icon>
            
          </router-link>
          </v-btn>
            
        </v-toolbar-items>
      </v-toolbar>

</template>

<script>
export default {
    name: 'HeaderApp',
    methods:{
        }
    }

</script>

<style scoped>
.routerLink{
  text-decoration: none;
}
</style>
