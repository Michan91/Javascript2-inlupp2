<template>
  <div class="col">
    <div class="card h-100">
      <div>
        <img :src="product.image" class="card-img-top"/>
        <router-link :to="{ name: 'productDetails', params: { id: product._id }}">
          <div class="mask"></div>
        </router-link>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.short }}</p>
        <!-- <router-link type="button" class="btn btn-info ms-auto" :to="{ name: 'productDetails', params: { id: product._id }}">Show product</router-link> -->
      </div>
      <!-- <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
  
}
</script>

<style>

</style>