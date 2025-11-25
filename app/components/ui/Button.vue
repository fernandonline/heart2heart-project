<template>
    <button class="btn btn-romantic position-relative overflow-hidden">
        <slot></slot>
    </button>
</template>

<style scoped>
.btn-romantic {
  color: var(--white);
  background-color: var(--fuchsia-red);
  border: none;
  overflow: hidden;
  position: relative;
  transition: color 0.3s ease;
}

.btn-romantic:hover {
  color: var(--white);
  background-color: #FF496A;
}

.btn {
  padding: 0.4em 1.2em;
  font-size: 1.2em;
  font-weight: 600;
  border-radius: 0.6em;
}

</style>