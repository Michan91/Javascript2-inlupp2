<template>
  <Navbar />
  <FooterView />
  <div class="container mt-5">
  <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar.vue'
import FooterView from './components/FooterView.vue'
export default {
  components: { Navbar, FooterView },
  methods: {
    ...mapActions(['checkUser'])
  },
  created() {
    this.checkUser()
  }
}
</script>
<style>
.footer {
  margin-top: 50rem;
  position: absolute;
  width: 100%;
}

</style>
