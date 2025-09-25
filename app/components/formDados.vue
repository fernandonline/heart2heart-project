<script setup lang="ts">
import {ref} from 'vue';

const emit = defineEmits<{ (e: 'proximo', payload: { name: string; date: string }): void }>()
const name = ref('')
const date = ref('')

function enviar()
{
    emit('proximo', {name: name.value, date: date.value})
}
</script>

<template>
  <div>
    <input v-model="name" placeholder="seu titulo ou seus nomes" />
    <input type="date" v-model="date" />
    <button @click="enviar" :disabled="!name || !date"> Próximo </button>
  </div>
</template>