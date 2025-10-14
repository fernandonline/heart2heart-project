<script setup>
  const { user, loggedIn, clear } = useUserSession();

  async function userLogout() {
  await clear()
  navigateTo('/')
}
</script>

<template>
  <header class="navbar d-flex flex-row header-color p-3">
      <a class="navbar-brand" href="/">
        <img src="" alt="Logo" width="24" height="24" class="d-inline-block align-text-top text-white">
        
      </a>

      <div class="d-flex text-center gap-3 ">
        <NuxtLink class="nav-link text-white" to="/dashboard">dashboard</NuxtLink>
        <NuxtLink class="nav-link text-white" href="#">detalhes</NuxtLink>
      </div>

      <div v-if="!loggedIn" class="d-flex justify-content-centers">
        <a class="btn btn-romantic" href="/auth/google">
          Criar meu card
          <div class="btn-gradient-overlay"></div>
        </a>
      </div>

      <div v-if="loggedIn">
        <span class="text-white">Olá {{user.name}}</span>
        <img :src="user?.urlPic" width="35" style="border-radius:50%; margin:0px 10px;"/>

        <button 
          @click="userLogout"
          type="button"
          class="btn btn-romantic"
        >
          Sair
        </button>
       </div>
  </header>
</template>

<style scoped>
.header-color {
  background: #720026;
}

.btn-romantic {
  color: #720026;
  background-color: #f72585;
  border: none;
  overflow: hidden;
  position: relative;
  transition: color 0.3s ease;
  &:hover {
    color: #fff;
  }
}

.btn-xl {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.75rem;
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