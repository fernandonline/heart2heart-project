<script setup>
import { AlignCenter } from 'lucide-vue-next'
import Button from '~/components/ui/Button.vue'

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

  if (!confirm(`Tem certeza que deseja deletar "${cardTitle}"?`)) { return }

  deleting.value = cardId
  
  try
  {
    await $fetch(`/api/cards/${cardId}`, {
      method: 'DELETE'
    })
    cards.value = cards.value.filter(c => c.id !== cardId)
  } 
  catch (error)
  {
    alert('Houve um erro ao deletar: ' + (error.data?.message || 'Erro desconhecido'))
  }
  finally
  {
    deleting.value = null
  }
}

onMounted(() => {
  loadingCards()
})
</script>

<template>
  <UiBackgroundGrid>

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

      <div v-else class="col c">
        <div v-for="card in cards" :key="card.id" class="col-md-4 mb-4">

          <div class="card d-flex flex-row">
            <div class="d-flex flex-row">
              <img v-if="card.imageUrl" :src="card.imageUrl" class="card-img-top">

              <div class="card-body">
                <h5 class="card-title">{{ card.title }}</h5>
                <p class="card-text">{{ card.message }}</p>
                <!--adicionar mais tarde: <small class="text-muted">Data: {{ card.date}}</small> -->
              </div>
            </div>


            <div class="dropdown ms-auto">
              <span class="drop-btn d-flex flex-column" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </span>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" :href="card.url" target="_blank">Ver card </a>
                <a class="dropdown-item" @click="copiarLink(card.url)"> Copiar link</a>
                <a class="dropdown-item" @click="deleteCard(card.id, card.title)" :disabled="deleting === card.id">
                  Remover
                </a>
              </ul>
            </div>

          </div>
        </div>
        
        <Button href="/form" class="btn mt-4">
          Criar novo card
        </Button>
      </div>
    </div>
  </UiBackgroundGrid>
</template>

<style scoped>
.card {
  border-radius: var(--radius-card);
  border: none;
  background: #F3F3F5;
}

.card-img-top {
  max-width: 120px;
  max-height: 120px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: var(--radius-img);
  border-bottom-left-radius: var(--radius-img);
  border-top-right-radius: 0;
}

.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.drop-btn {
  cursor: pointer;
  padding: .8em;
}

.dot {
  width: 3px;
  height: 3px;
  background-color: #232323;
  border-radius: 50%;
  margin: 2px 0;
}

.dropdown-item {
  cursor: pointer;
}

.dropdown-item:hover {
  background: rgba(0, 0, 0, 0.2);
}

.c > .btn {
  margin-left: 20%;
}

@media only screen and (min-width: 768px) {
  .card-text {
    -webkit-line-clamp: 3;
  }
}
</style>