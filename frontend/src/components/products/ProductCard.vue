<template>
  <div class="row row-cols-1 row-cols-md-3 g-4 text-center mb-5">
    <!-- <ProductItem />
    <ProductItem />
    <ProductItem /> -->
    <ProductItem v-for="product in products" :key="product._id" :product="product" />
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './ProductItem.vue'
export default {
  components: { ProductItem },
  computed: {
    ...mapGetters(['products'])
  }

}
</script>

<style>

</style>