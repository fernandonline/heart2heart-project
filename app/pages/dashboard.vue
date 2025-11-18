<script setup>
import { AlignCenter } from 'lucide-vue-next'

const { loggedIn } = useUserSession()
if (!loggedIn.value) {
    navigateTo('/')
}

function copiarLink(url) {
  navigator.clipboard.writeText(url)
  alert('Link copiado!')
}

const cards = ref([])
const carregando = ref(true)
const erro = ref('')
const deleting = ref(null)

async function loadingCards () {
  carregando.value = true;
  erro.value = '';

  try {
    cards.value = await $fetch('/api/cards/mycard')
  } catch (error) {
    erro.value = error.data?.message || 'Erro ao carregar cards'
  } finally {
    carregando.value = false
  }
}

async function deleteCard(cardId, cardTitle) {

  if (!confirm(`Tem certeza que deseja deletar "${cardTitle}"?`)) {
    return
  }
  
  deleting.value = cardId
  
  try {
    await $fetch(`/api/cards/${cardId}`, {
      method: 'DELETE'
    })
    cards.value = cards.value.filter(c => c.id !== cardId)
  } catch (error) {
    alert(' Erro ao deletar: ' + (error.data?.message || 'Erro desconhecido'))
  } finally {
    deleting.value = null
  }
}

onMounted(() => {
  loadingCards()
})
</script>

<template>
  <div class="container p-4">
    <h1>Meus Cards</h1>
    
    <div v-if="carregando" class="text-center">
      Carregando...
    </div>
    
    <div v-else-if="erro" class="alert alert-danger">
      {{ erro }}
    </div>
    
    <div v-else-if="cards.length === 0" class="alert alert-info">
      Você ainda não criou nenhum card!
    </div>
    
    <div v-else class="col">
      <div v-for="card in cards" :key="card.id" class="col-md-4 mb-4">
        <div class="card">

          <div class="d-flex flex-row">
            <img v-if="card.imageUrl" :src="card.imageUrl" class="card-img-top">

            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.message }}</p>
              <!--adicionar mais tarde: <small class="text-muted">Data: {{ card.date}}</small> -->
            </div>
          </div>
            
            <div class="">

              <a :href="card.url" target="_blank" class="btn btn-primary btn-sm">
                Ver card
              </a>
              
              <button @click="copiarLink(card.url)" class="btn btn-secondary btn-sm">
                Copiar link
              </button>
              
              <button 
              @click="deleteCard(card.id, card.title)"
              :disabled="deleting === card.id"
              class="btn btn-danger btn-sm"
              >
              Deletar
            </button>
          </div>

        </div>
      </div>
    </div>
    
    <NuxtLink to="/form" class="btn btn-success mt-4">
      Criar novo card
    </NuxtLink>
  </div>
</template>

<style scoped>
.card-img-top {
  max-width: 110px;
  max-height: 110px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
}
</style>