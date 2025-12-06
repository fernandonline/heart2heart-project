<template>
    <button class="btn overflow-hidden">
        <slot></slot>
    </button>
</template>

<style scoped>
.btn {
  font-weight: 600;
  border-radius: 0.8em;
  color: white;
  border: 1px solid white;
}

.btn:hover {
    background: white;
    color: black;
}
</style>