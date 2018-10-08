<template>
  <div class="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePriceAsync(5)">Reduce price</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters(['saleProducts'])
  },
  methods: {
    ...mapActions(['reducePriceAsync'])
  }
};
</script>

<style lang="scss" scoped>
.product-list-one {
  margin-bottom: 30px;
  padding: 10px 20px;
  background: #FFF8B1;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);

  ul {
    padding: 0;

    li {
      margin-right: 10px;
      margin-top: 10px;
      display: inline-block;
      padding: 20px;
      background: rgba(255,255,255,0.7);
    }
  }
}

.price{
  font-weight: bold;
  color: #E8800C;
}
</style>
