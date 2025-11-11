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
  <header class="navbar d-flex flex-row header-color p-3">
    <img src="@/../public/h2h-logo-white.svg" alt="Logo" width="42" height="42" class="navbar-brand p-0" @click="indexPage"/>

      <div class="d-flex text-center gap-3 ">
        <NuxtLink v-if="loggedIn" class="nav-link text-white" to="/dashboard">Dashboard</NuxtLink>
        <NuxtLink class="nav-link text-white" href="#">Como funciona?</NuxtLink>
        <NuxtLink class="nav-link text-white" href="#">F.A.Q</NuxtLink>
      </div>

      <div v-if="!loggedIn" class="d-flex justify-content-centers">
          <Button @click="loginWithGoogle">
              Criar meu card
              <div class="btn-gradient-overlay"></div>
          </Button>
      </div>

      <div v-if="loggedIn">
        <span class="text-white">Olá {{user.name}}</span>
        <img :src="user?.urlPic" width="35" style="border-radius:50%; margin:0px 10px;"/>

        <Button 
          @click="userLogout"
          type="button"
        >
          Sair
        </Button>
      </div>
  </header>
</template>

<style scoped>
.header-color {
  background: #720026;
}

.navbar-brand {
  cursor: pointer;
}

.btn-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(114, 0, 38, 0.2), rgba(247, 37, 133, 0.2));
  transform: translateX(100%);
  transition: transform 0.5s ease;
  border-radius: 0.75rem;
  z-index: 0;
}
.btn-romantic:hover .btn-gradient-overlay {
  transform: translateX(0);
}
</style>