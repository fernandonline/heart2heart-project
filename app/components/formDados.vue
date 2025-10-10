<script setup lang="ts">
import {ref} from 'vue';

const emit = defineEmits<{ (e: 'proximo', payload: { title: string; date: string }): void }>()
const title = ref('')
const date = ref('')

function enviar()
{
    emit('proximo', {title: title.value, date: date.value})
}
</script>

<template>
  <div>
    <input v-model="title" placeholder="seu titulo ou seus nomes" />
    <input type="date" v-model="date" />
    <button @click="enviar" :disabled="!title || !date"> Próximo </button>
  </div>
</template>