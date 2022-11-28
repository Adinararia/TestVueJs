<template>
   <v-container>
        <ItemList/>
   </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HeaderApp from "@/components/HeaderApp.vue";
import ItemList from "@/components/ItemList.vue";
export default defineComponent({
  name: 'HomeView',

  components: {
    HeaderApp,
    ItemList

  }
});
</script>