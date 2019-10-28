<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <li class="nav-item">
      <router-link :to="{name: 'Agenda' }" class="nav-link">
        <font-awesome-icon icon="calendar-alt" />
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
      <router-link :to="{name: 'nextEvent', params: {get: 'Proximos'} }" class="nav-link">
        <font-awesome-icon icon="calendar-check" size="xs" />
        <span>Eventos</span>
      </router-link>
    </li>

    <li class="nav-item">
      <router-link :to="{ name: 'getAll', params: { get: 'Todos'} }" class="nav-link">
        <font-awesome-icon icon="users" size="xs" />
        <span>Usuários</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <li class="nav-item">
      <a href="#" class="nav-link" data-toggle="modal" data-target="#logoutModal">
        <font-awesome-icon icon="sign-out-alt" size="xs" />
        <span>Sair</span>
      </a>
    </li>

  </ul>
</template>

<script>
  export default { name: "left-menu" }
</script>

<style>
.nav-item span {
  margin-left: 4px;
}
</style>