<template>
  <v-app>
   <HeaderApp/>
    <v-main>
      <router-view/>
    </v-main>
    <FooterApp/>
  </v-app>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FooterApp from "@/components/FooterApp.vue";
export default {
  name: 'App',
  components:{
    HeaderApp,
    FooterApp
  },
  data: () => ({
    //
  }),
}
</script>
