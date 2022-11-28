  <template>
    <v-container
    v-if="cart[0]"
    >
    <v-table border="1" cellspacing="1" cellpadding="1">
      <thead>
        <tr>
          <th class="text-left"
            v-for="header in headers"
            :key="header.text" 
            >
              {{header.text}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in cart"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.price }} $</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.allPrice }} $</td>
          <td >
          <v-btn
          color="grey lighten-2"
          elevation="2"
          text
          @click="removeItem(item)"
        >
          Удалить
        </v-btn></td>
        
        </tr>
      </tbody>
        <tfoot>
        <tr>
          <td colspan="3" class="font-weight-medium">
              Стоимость всего товара без налога
          </td>
          <td class="font-weight-medium">
                {{cartTotalCost}} $

          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3" class="font-weight-medium">
              Общая сумма налога на этот товар (20%)
          </td>
          <td class="font-weight-medium">
               {{tax}} $
          </td>
            <td></td>
        </tr>
        <tr >
          <td colspan="3" class="font-weight-medium" >
             Итоговая стоимость всех товаров
          </td>
          <td class="font-weight-medium">{{cartTotalCostWithTax}} $</td>
          <td></td>
        </tr>
    </tfoot>
    </v-table>
  </v-container>

  <v-container
  v-else
  >
    <v-card-text class="centeredCustom text-md-center font-weight-medium"> Ваша корзина пустая  <router-link
      class="routerLink"
      to="/">
      выберите товар
    </router-link></v-card-text>
</v-container>


  </template>


<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    headers: [
          { text: 'Название', value: 'name' },
          { text: 'Цена', value: 'price' },
          { text: 'Количество', value: 'quantity' },
          { text: 'Итоговая цена', value: 'allPrice' },
          { text: 'Действие', value: 'delete' },
        ],
        tax: 0,
        resultPrice:0,

  }),
  computed:{
    ...mapState(['cart']),
    cartTotalCost(){
      let resultPrice = 0;
      for(let item of this.cart){
        resultPrice += item.allPrice;
      }
      this.resultPrice = resultPrice;
      return resultPrice;
  },
    tax(){
      let resultPrice = 0;
      for(let item of this.cart){
        resultPrice += 20*(item.allPrice)/100;
      }
      this.tax=resultPrice;
      return resultPrice;
  },
  cartTotalCostWithTax(){
      return this.tax + this.resultPrice;
  }

},
  methods:{
      removeItem(item){
        this.$store.commit('REMOVE_PRODUCT_CART', item);
        console.log('remove');
      }
  }
}
</script>

<style scoped>
.centeredCustom {
  margin-left: auto;
  margin-right: 3%;
}
</style>