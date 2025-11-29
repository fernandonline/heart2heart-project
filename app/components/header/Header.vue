<script setup>
import Button from '@/components/ui/Button.vue'

const { user, loggedIn, clear } = useUserSession();

async function userLogout() {
  await clear()
  navigateTo('/')
}

function loginWithGoogle() {
  window.location.href = '/auth/google'
}

function indexPage() {
  window.location.href = '/'
}
</script>

<template>
  <header class="navbar navbar-expand-lg header-color">
    <div class="container-fluid">

      <img src="@/../public/h2h-logo-white.svg" alt="Logo" width="42" height="42" class="navbar-brand p-0"
        @click="indexPage" />

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <div class="navbar-nav ms-auto d-flex align-items-center gap-3">
          <NuxtLink v-if="loggedIn" class="nav-link text-white" to="/dashboard">Dashboard</NuxtLink>
          <NuxtLink class="nav-link text-white" href="#">Como funciona?</NuxtLink>
          <NuxtLink class="nav-link text-white" href="#">F.A.Q</NuxtLink>

          <div v-if="!loggedIn">
            <Button @click="loginWithGoogle">Minha conta</Button>
          </div>
          
          <div v-if="loggedIn" class="d-flex align-items-center gap-2">
            <span class="text-white">Olá {{ user.name }}</span>
            <img :src="user?.urlPic" width="35" style="border-radius:50%;" />
            <Button @click="userLogout">Sair</Button>
          </div>
        </div>
      </div>

    </div>
  </header>
</template>

<style scoped>
.header-color {
  background: var(--ruby-red);
}

.navbar {
  padding: .9em 2em;
}

.navbar-brand {
  cursor: pointer;
}
</style>