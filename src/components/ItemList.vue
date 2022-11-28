<template>
<div>
 
  
<v-dialog
      v-model="this.viewAlert.status"
      width="23%"
      height="5%"
      class="justify-end align-start"

>
<v-alert class=" text-md-center" 
  v-if="this.viewAlert.status"
  :color="this.viewAlert.color"
  border="top"
  width="100%" 
    >
     {{this.viewAlert.text}}
</v-alert>
</v-dialog>
    <v-container class="container"> 
      <v-row >
        <v-col
          v-for="product in products"
          :key="product.id"
        >

          <ItemCartVue
          @alert="alert"
          :product="product"/>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>
<script>
import ItemCartVue from '@/components/ItemCart.vue';
import { mapState } from 'vuex';

export default ({
  components:{
    ItemCartVue
  },  
  emits: ["alert"],
  data: () => ({
        viewAlert: {
          status : false,
          color: '',
          text: ''
        }
  }),
  computed:{
      ...mapState(['products'])
    },
  methods:{
      alert(data){
        this.viewAlert.status=data[0]
        this.viewAlert.color=data[1]
        this.viewAlert.text=data[2]
        setTimeout(() => {this.viewAlert.status=false}, 1000);
      }
  }
})
</script>
<style scoped>
.centeredCustom {
  margin-left: auto;
  margin-right: 3%;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #FFF;
  padding: 50px;
}
</style>

