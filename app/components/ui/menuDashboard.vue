<script setup>
import Button from '../ui/Button.vue'
</script>

<template>
    <section class="border d-inline-flex w-100 align-items-center">
        
        <h2>Meus cards</h2>

        <Button class="btn ms-auto">
            <NuxtLink  class="nav-link text-white" to="/form"> Novo card </NuxtLink>
        </Button>

    </section>
</template>
