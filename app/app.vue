<script setup>
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
      defer: true
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    }
  ]
});


</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --radius-card: 14px;
  --radius-img: 12px;

  --bg: #1A1A1E;
  --white: #FFF;
  --ruby-red: #8C001D;
  --fuchsia-red: #F52F57;
}

html, body {
    overflow-x: hidden;
    max-width: 100vw;
}
</style>