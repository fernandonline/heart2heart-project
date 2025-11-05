<script setup lang="ts">
const route =useRoute()
const card = ref()
const loading = ref(true)
const error = ref('')

onMounted(async () => {
    try
    {
        const publicId = route.params.publicId;
        card.value = await $fetch(`/api/cards/${publicId}`);
    }
    catch (err: any)
    {
        error.value = err.data?.message || 'Card não encontrado';
    }
    finally
    {
        loading.value = false;
    }
})
</script>

<template>
  <div class="container mt-5">
    <div v-if="loading" class="text-center">
      Carregando...
    </div>
    
    <div v-else-if="error" class="alert alert-danger">
      {{ error }}
    </div>
    
    <div v-else class="card">
      <div v-if="card.imageUrl" class="card-img-top" :style="{ backgroundImage: `url(${card.imageUrl})`, height: '400px', backgroundSize: 'cover' }"></div>
      
      <div class="card-body">
        <h1 class="card-title">{{ card.title }}</h1>
        <p class="card-text lead">{{ card.message }}</p> 
      </div>
    </div>
  </div>
</template>