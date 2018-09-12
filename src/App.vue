<template>
  <div id="app">
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne';
import ProductListTwo from './components/ProductListTwo';

export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    ProductListOne,
    ProductListTwo
  }
};
</script>
