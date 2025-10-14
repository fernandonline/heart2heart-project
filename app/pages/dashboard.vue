<script setup >
function copiarLink(url) {
  navigator.clipboard.writeText(url)
  alert('Link copiado!')
}

const cards = ref([])
const carregando = ref(true)
const erro = ref('')

onMounted(async () => {
  try {
    cards.value = await $fetch('/api/cards/mycard')
  } catch (error) {
    erro.value = error.data?.message || 'Erro ao carregar cards'
  } finally {
    carregando.value = false
  }
})
</script>

<template>
  <div class="container mt-5">
    <h1>Meus Cards</h1>
    
    <div v-if="carregando" class="text-center">
      Carregando...
    </div>
    
    <div v-else-if="erro" class="alert alert-danger">
      {{ erro }}
    </div>
    
    <div v-else-if="cards.length === 0" class="alert alert-info">
      Você ainda não criou nenhum card
    </div>
    
    <div v-else class="row">
      <div v-for="card in cards" :key="card.id" class="col-md-4 mb-4">
        <div class="card">
          <div v-if="card.imageUrl" class="card-img-top" :style="{ backgroundImage: `url(${card.imageUrl})`, height: '200px', backgroundSize: 'cover' }"></div>
          
          <div class="card-body">
            <h5 class="card-title">{{ card.titulo }}</h5>
            <p class="card-text">{{ card.message }}</p>
            <small class="text-muted">Desde: {{ new Date(card.dataInicial).toLocaleDateString('pt-BR') }}</small>
            
            <a :href="card.url" target="_blank" class="btn btn-primary btn-sm">
              Ver card
            </a>
            
            <button @click="copiarLink(card.url)" class="btn btn-secondary btn-sm">
              Copiar link
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <a href="#" class="btn btn-success mt-4">
      Criar novo card
    </a>
  </div>
</template>