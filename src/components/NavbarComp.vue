<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">FlipKart</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="btn btn-success nav-item">
            <router-link to="/home" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>

          <li class="btn btn-success nav-item">
            <router-link to="/products" class="nav-link active"
              >Products</router-link
            >
          </li>

          <li class="btn btn-success nav-item">
            <router-link to="/cart" class="nav-link active">Cart</router-link>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <button
            class="btn btn-primary"
            v-if="!this.$store.state.isAuthenticated"
          >
            <router-link to="/login" class="nav-link">Login</router-link>
          </button>

          <button
            class="btn btn-primary"
            v-if="this.$store.state.isAuthenticated"
            type="button"
            @click="logout"
          >
            LogOut
          </button>

          <button class="btn btn-success nav-item">
            <router-link to="/signup" class="nav-link active"
              >SignUp</router-link
            >
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      alert("You are successfully logged out");
      this.$store.commit("logout");
      this.$router.push("/home");
    },
  },
};
</script>

<style></style>
