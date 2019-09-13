<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <li class="nav-item">
      <router-link :to="{name: 'Dashboard' }" class="nav-link">
        <font-awesome-icon icon="tachometer-alt" />
        <span><b>Dashboard</b></span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Informações
    </div>

    <li class="nav-item">
      <router-link :to="{name: 'Agenda' }" class="nav-link">
        <font-awesome-icon icon="calendar-check" size="xs" />
        <span>Agenda</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Administração
    </div>

    <li class="nav-item">
      <router-link :to="{name: 'Eventos' }" class="nav-link">
        <font-awesome-icon icon="calendar-alt" size="xs" />
        <span>Eventos</span>
      </router-link>
    </li>

    <li class="nav-item">
      <router-link :to="{name: 'Usuarios' }" class="nav-link">
        <font-awesome-icon icon="users" size="xs" />
        <span>Usuários</span>
      </router-link>
    </li>

  </ul>
</template>

<script>
  export default {
    name: "left-menu"
  };
</script>

<style>
.nav-item span {
  margin-left: 4px;
}
</style>
