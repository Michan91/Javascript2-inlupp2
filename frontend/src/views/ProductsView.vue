<template>
  <div>
      <ProductCard />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductCard from '../components/products/ProductCard.vue'
export default {
  components: { ProductCard },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>

<style>

</style>