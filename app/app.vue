<script setup>
  const { user } = useUserSession()
</script>

<template>
  <header class="navbar bg-dark p-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        heart2heart
      </a>

      <div class="d-flex text-center gap-4 ">
        <a class="nav-link text-white" href="">Dashboard</a>
        <a class="nav-link text-white" href="#">Pricing</a>
      </div>

      <div class="d-flex justify-content-centers">
        <a class="btn btn-romantic btn-xl position-relative overflow-hidden" href="/auth/google">
          Criar meu card
          <div class="btn-gradient-overlay"></div>
        </a>
      </div>

      <div>
        <img :src="user.urlPic"/>
      </div>

    </div>
  </header>

  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style scoped>
.btn-romantic {
  color: #720026;
  background-color: #f72585;
  border: none;
  overflow: hidden;
  position: relative;
  transition: color 0.3s ease;
}
.btn-romantic:hover {
  color: #fff;
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