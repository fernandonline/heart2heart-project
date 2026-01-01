<template>
    <button class="btn overflow-hidden">
        <slot></slot>
    </button>
</template>

<style scoped>
.btn {
  cursor: pointer;
  color: white;
}

.btn:hover {
    background: white;
    color: black;
}
</style>