<template>
  <nav class="navbar navbar-dark bg-dark  navbar-expand-lg" id="nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img src="../public/logo.png" alt="" width="30" height="24">
    </a>
      <a class="navbar-brand" href="/">Products Website</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link active" aria-current="page"
            >Home</router-link
          >
          <router-link to="/product/add" class="nav-link">Add Product</router-link>
          <router-link to="/accounts/editprofile" class="nav-link"
            >Setting</router-link
          >
          <router-link to="/accounts/login" class="nav-link"
            >Login/Register</router-link
          >
          <router-link to="/accounts/logout" class="nav-link"
            >Logout</router-link
          >
        </div>
      </div>
    </div>
  </nav>
  <router-view> </router-view>
</template>
<script>
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.nav-link {
  float: left;
  width: auto;
}
</style>

