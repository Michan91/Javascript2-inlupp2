<template>
    <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <router-link class="navbar-brand mt-2 mt-lg-0" to="/">
          <i class="fa-solid fa-fire-flame-curved me-2"></i> Mittljus
        </router-link>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Hem</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Produkter</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Kontakt</router-link>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="d-flex align-items-center">


        <!-- Notifications -->
        <div class="dropdown">
          <a
            class="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-shopping-cart"></i>
            <span v-if="cartItemCount" class="badge rounded-pill badge-notification bg-warning">{{cartItemCount}}</span>
          </a>
          <div
            class="dropdown-menu dropdown-menu-end shopping-cart"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <ShoppingCart />
          </div>
        </div>
        <!-- Avatar -->
        <div class="dropdown" v-if="loggedIn">
          <a
            class="text-reset dropdown-toggle"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-user"></i>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <router-link class="dropdown-item" to="/myprofile">Min profil</router-link>
            </li>
            <li>
              <router-link class="dropdown-item" @click="logout" to="/login">Logga ut</router-link>
            </li>
          </ul>
        </div>
        <router-link to="/login" class="nav-link text-light" v-else>Logga in</router-link>
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
<!-- Navbar -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ShoppingCart from './shoppingCart/ShoppingCart.vue'
export default {
  components: { ShoppingCart },
  name: 'PrimaryNavigation',
  computed: {
    ...mapGetters(['cartItemCount', 'loggedIn'])
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style scoped>
.shopping-cart {
    min-width: 450px;
  }


</style>