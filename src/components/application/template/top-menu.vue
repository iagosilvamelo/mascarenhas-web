<template>
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    <h1 class="h6 mb-0 text-gray-600" v-if="logedUser.fold == 3">Administrador</h1>
    <h1 class="h6 mb-0 text-gray-600" v-if="logedUser.fold == 2">Palestrante</h1>
    <h1 class="h6 mb-0 text-gray-600" v-if="logedUser.fold == 1">Usuário</h1>

    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">

      <li class="nav-item no-arrow">
        <span class="nav-link" id="userDropdown">
          <span class="mr-2 d-none d-lg-inline small">
            <router-link to="Home">Home</router-link>
          </span>
        </span>
      </li>

      <li class="nav-item no-arrow">
        <span class="nav-link" id="userDropdown">
          <span class="mr-2 d-none d-lg-inline small">
            <router-link to="Eventos">Eventos</router-link>
          </span>
        </span>
      </li>

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item no-arrow">
        <span class="nav-link" id="userDropdown">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ logedUser.name }}</span>
          <img class="img-profile rounded-circle" :src="logedUser.img" />
        </span>
      </li>

    </ul>

  </nav>
  <!-- End of Topbar -->
</template>

<script>
export default {
  name: 'top-menu',

  computed: {
    logedUser() {
      return this.$store.state.user
    }
  }
};
</script>

<style>
  .navbar-card {
    height: 60px
  }

  .nav-link {
    cursor: pointer;
  }
</style>
