<template>
  <header class="navbar">
    <div class="container-fluid">

      <div @click="indexPage" class="navbar-brand">
        <img src="@/../public/h2h-logo.svg" alt="Logo" width="48" height="35"/>
        <span> Heart2Heart </span>
      </div>

      <div class="navbar-nav">
        <NuxtLink class="nav-link" v-if="loggedIn" to="/dashboard">Dashboard</NuxtLink>
        <NuxtLink class="nav-link" href="#">Como funciona?</NuxtLink>
        <NuxtLink class="nav-link" href="#">F.A.Q</NuxtLink>

        <div v-if="!loggedIn">
          <Button class="header-button" @click="loginWithGoogle">Minha conta</Button>
        </div>

        <div v-if="loggedIn" class="header-user-info">
          <span>Olá {{ user.name }}</span>
          <img :src="user?.urlPic" width="35" style="border-radius:50%;" />
          <Button class="header-button" @click="userLogout">Sair</Button>
        </div>
      </div>
    </div>

  </header>
</template>

<style scoped>
.navbar {
  padding: .8em 2em;
  background: var(--ruby-red);
  color: var(--white);
}

.container-fluid {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: calc(1.275rem + 0.3vw);
  font-weight: bold;
  gap: .5em;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 1em;
}

.nav-link {
  color: var(--white);
  cursor: pointer;
  text-decoration: none;
  font-size: 1em;
}

.header-button {
  background: transparent;
  border: 2px solid var(--white);
  padding: .5em 1em;
  border-radius: var(--b-radius);
  font-size: 1em;
  margin-left: 1em;
}

.header-user-info {
  display: flex;
  align-items: center;
  gap: .5em;
  font-size: 1em;
}
</style>

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