<template>  
    <v-card 
    color="#f2f0eb"
    class="my-15 centeredCustomForCatalog" 
    max-width="100%"
  >

    <v-img
      height="250"
      :src="getImgUrl"
    ></v-img>

    <v-card-title class="my-5">{{product.name}}</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1"
      >
        Доступно {{checkCount(product.id)}}
      </div>

      <div class="my-4 text-subtitle-1">
        {{product.price}} $ 
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>


    <v-card-actions aria-colcount="">
      <v-btn
        color="deep-purple lighten-2"
        elevation="4"

        text
        @click="addToCart(product.id)"
      >
        Купить
      </v-btn>
      
      <v-spacer></v-spacer>
      <v-btn
        color="deep-purple lighten-2"
        elevation="4"

        text

        @click="removeCart(product.id)"
       
      >
        Убрать с корзины
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
import { mapActions} from "vuex";
export default ({
  data: () => ({
    alert: {
      status: '',
      color: '',
      text: ''

    },
      data:{
        id: '',
        quantity: 1,
        name: '',
        price: ''
      },
      storeItem: ''

  }),
  props: {
    product: Object
  },
  emits: ["alert"],
  methods:{
    ...mapActions(['ADD_TO_CART', 'REMOVE_IN_CART']),

    addToCart(id){
      // передю отдельные параметры, так как у продукта может быть параметров больше 20 и незачем брать их в корзину
      this.data.id=id;
      this.data.name = this.product.name;
      this.data.price = this.product.price;
      if(this.$store.getters.getProductInBasket(id)){
        this.storeItem = this.$store.getters.getProductInBasket(id);
             if(this.storeItem.quantity < this.product.count){
              this.ADD_TO_CART(this.data);
              this.$emit('alert', [true, 'green', 'Успешно добавлен товар']);
             }else{
              this.$emit('alert', [true, 'red', 'Превышено количество товара']);
             }
      }else{
        this.ADD_TO_CART(this.data);
        this.$emit('alert', [true, 'green', 'Успешно добавлен товар']);
      }

    },
    removeCart(id){
      this.data.id=id;
      if(this.$store.getters.getProductInBasket(id)){
              this.REMOVE_IN_CART(this.data);
              this.$emit('alert', [true, 'green', 'Успешно убрали 1 товар']);             
      }else{
        this.$emit('alert', [true, 'red', 'Данного товара у вас нет в корзине']);
      }
    },
    checkCount(id){
      // проверка допустимого количества в режиме онлайн
      if(this.$store.getters.getProductInBasket(id)){
       this.storeItem = this.$store.getters.getProductInBasket(id)
        return this.product.count- this.storeItem.quantity
      }else{
          return this.product.count
      }
    }
  },
  computed:{ 
    getImgUrl() {
    return require('../assets/' +this.product.image);
    },
     }
})
</script>

<style scoped>
.centeredCustomForCatalog {
  margin-left: auto;
  margin-right: auto;
  background: 00000;
}

</style>

