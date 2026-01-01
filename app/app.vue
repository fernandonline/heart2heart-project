<script setup>
useHead({
  
});


</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --b-radius: 14px;

  --bg: #1A1A1E;
  --white: #FFF;
  --ruby-red: #8C001D;
  --fuchsia-red: #F52F57;
}

.fuchsia-red {
  color: var(--fuchsia-red);
}

.ruby-red {
  color: var(--ruby-red);
  text-decoration: none;
}

html, body {
    overflow-x: hidden;
    max-width: 100vw;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  scroll-behavior: smooth;
}
</style>