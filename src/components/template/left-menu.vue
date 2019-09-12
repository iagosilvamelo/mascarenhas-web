<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div class="sidebar-brand-icon">
        <img src="https://dad.eng.br/site/img/liga.png" alt="" height="65" width="65" class="rounded-circle">
      </div>
      <div class="sidebar-brand-text mx-3"><small>2.0.0</small></div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <li class="nav-item">
      <router-link to="/Dashboard" class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Relatórios
    </div>

    <li class="nav-item">
      <router-link to="/Bilhetagem" class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Bilhetagem</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Administração
    </div>

    <li class="nav-item">
      <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
        <i class="fas fa-fw fa-folder"></i>
        <span>Cadastro</span>
      </a>
      <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link to="/Cadastro/Usiarios" class="collapse-item">Usuários</router-link>
          <router-link to="/Cadastro/Unidades" class="collapse-item">Unidades</router-link>
          <router-link to="/Cadastro/Setores"  class="collapse-item">Setores</router-link>
          <router-link to="/Cadastro/Ramais"   class="collapse-item">Ramais</router-link>
        </div>
      </div>
    </li>

    <li class="nav-item">
      <router-link to="/Email" class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Email</span>
      </router-link>
    </li>

    <li class="nav-item">
      <router-link to="/Monitor" class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Monitor de ramais</span>
      </router-link>
    </li>

    <li class="nav-item">
      <router-link to="/Auditoria" class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Auditoria</span>
      </router-link>
    </li>

    <li class="nav-item">
      <router-link to="/API" class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Teste API</span>
      </router-link>
    </li>


    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

  </ul>
</template>

<script>
  export default {
    name: "left-menu"
  };
</script>

<style>
</style>
