import { createStore } from 'vuex'

export default createStore({
  state: {
        products:[
              {
                id: 1,
                name: 'Пица',
                image: 'pizza.jpeg',
                count: 10,
                price : 5
              },
              {
                id: 2,
                name: 'Сок',
                image: 'juice.png',
                count: 10,
                price : 10
              },
              {
                id: 3,
                name: 'Бургер',
                image: 'burger.jpeg',
                count: 10,
                price : 15
              },
              {
                id: 4,
                name: 'Чай',
                image: 'tea.jpg',
                count: 10,
                price : 20
              },
              {
                id: 5,
                name: 'Кофе',
                image: 'coffe.jpeg',
                count: 10,
                price : 25
              }
            ],
            cart:[],
            tax:'',
            totalPrice: '',
            totalPriceWithTax: '',
  },
  getters: {
    getProducts: state => state.products,
    getBasket: state => state.cart,
    getProductInBasket: state => id => {
      return state.cart.find(product => product.id === id)
    }
  },
  mutations: {
    SET_CART:(state, data) =>{
      let product = state.cart.find(product => product.id == data.id);
        if(product){
          product.quantity++;
          product.allPrice = product.quantity * product.price;
        }else{
          data.allPrice = data.price;
          state.cart.push(data);
        }
    },
    REMOVE_PRODUCT_CART:(state, data) => {
      let product = state.cart.find(product => product.id == data.id);
      if(product){
        if(product.quantity==1){
          state.cart = state.cart.filter(product => product.id !== data.id)
        }else{
          product.quantity--;
          product.allPrice = product.quantity * product.price;
        }
      }
    }
  },
  actions: {
    ADD_TO_CART({commit}, data){
      commit('SET_CART', data);
    },
    REMOVE_IN_CART({commit}, data){
      commit('REMOVE_PRODUCT_CART', data);
    }
  },
  modules: {
  }
})
