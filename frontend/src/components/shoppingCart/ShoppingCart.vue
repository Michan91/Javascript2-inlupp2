<template>
  <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product._id" :item="item" />
  <div v-if="shoppingCart.length < 1">
    <div class="p-2 d-flex justify-content-center align-items-center">
      Din kundvagn är tom
    </div>
    <div class="dropdown-divider"></div>
  </div>

  <div class="p-2 d-flex justify-content-between align-items-center">
    <div>
      <div>Totalt: {{ shoppingCartTotal }} SEK</div>
      <small class="text-muted">inkl. moms</small>
    </div>
    <button class="btn btn-dark">Gå till kassan</button>
  </div>

</template>

<script>
import ShoppingCartProduct from './ShoppingCartProduct.vue'
import { mapGetters } from 'vuex'
export default {
  components: { ShoppingCartProduct },
  computed: {
    ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
  }
}
</script>

<style>

</style>