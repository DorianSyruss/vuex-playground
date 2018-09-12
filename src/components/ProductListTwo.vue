<template>
  <div class="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in products" :key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style lang="scss" scoped>
.product-list-two {
  background: #D1E4FF;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;

  ul {
    padding: 0;
    list-style-type: none;

    li {
      margin-right: 10px;
      margin-top: 10px;
      padding: 20px;
      background: rgba(255,255,255,0.7);
    }
  }
}

.price {
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
