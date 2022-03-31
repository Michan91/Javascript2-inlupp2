<template>
  <div v-if="product">
    <div class="row">
      <div class="col-lg-6">
        <img :src="product.image" class="img-fluid">
        <!-- <img data-mdb-toggle="animation" data-mdb-animation-start="onScroll" data-mdb-animation="fade-in" src="https://mdbootstrap.com/img/new/standard/city/041.jpg" class="img-fluid shadow-1-strong rounded"> -->
      </div>
      <div class="col-lg-6 text-center text-lg-start mt-5">
        <h2>{{product.name}}</h2>
        <p class="h3 text-primary">{{product.price}} SEK</p>
        <div class="mt-5">
          <p>{{product.desc}}</p>
        </div>
      </div>
      <div class="cartbutton text-center mb-5">
        <button @click="addToCart({ product, quantity })" class="btn btn-dark"><i class="fa-solid fa-cart-plus"></i> Lägg i kundvagn</button>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['getProductById', 'addToCart'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProductById(this.id)
  }
}
</script>

<style>

.cartbutton {
  margin-top: -7rem;
  margin-left: 6rem;
}

</style>