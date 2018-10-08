import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 },
    ]
  },
  getters: {
    saleProducts: state => {
      return state.products.map(product => {
        return {
          name: `**${product.name}**`,
          price: product.price / 2
        };
      });
    }
  },
  mutations: {
    reducePrice(state, amount) {
      debugger;
      state.products.forEach(product => {
        product.price -= amount;
      });
    }
  },
  actions: {
    reducePriceAsync({ commit }, amount) {
      setTimeout(() => commit('reducePrice', amount), 2000);
    }
  }
});
