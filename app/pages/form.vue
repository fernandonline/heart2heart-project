<script setup lang="ts">
import FormImage from '@/components/FormImage.vue'
import FormTitle from '@/components/FormTitle.vue'
import FormMessage from '@/components/FormMessage.vue'

const { loggedIn } = useUserSession()
if (!loggedIn.value) {
    navigateTo('/')
}

const config = useRuntimeConfig()

// ========================================
// CONTROLE DE ETAPAS
// ========================================
const etapaAtual = ref(0)
const etapas = [FormImage, FormTitle, FormMessage]
const titulosEtapas = ['Escolha a imagem', 'Dados do card', 'Sua mensagem']

// ========================================
// ARMAZENA DADOS DE CADA ETAPA
// ========================================
const dadosCompletos = ref({
    imageFile: null as File | null,  // Arquivo (não URL ainda!)
    title: '',
    date: '',
    message: ''
})

// ========================================
// ESTADOS
// ========================================
const processando = ref(false)
const erro = ref('')

// ========================================
// AVANÇA PRA PRÓXIMA ETAPA
// ========================================
function irParaProximaEtapa(dadosDaEtapa: any) {
    // Salva os dados dessa etapa
    Object.assign(dadosCompletos.value, dadosDaEtapa)
    
    console.log(`✅ Etapa ${etapaAtual.value + 1} concluída:`, dadosDaEtapa)
    
    // Avança
    etapaAtual.value++
    
    // Se chegou no fim, processa tudo
    if (etapaAtual.value >= etapas.length) {
        processarTudo()
    }
}

// ========================================
// VOLTA PRA ETAPA ANTERIOR
// ========================================
function voltarEtapa() {
    if (etapaAtual.value > 0) {
        etapaAtual.value--
    }
}

// ========================================
// UPLOAD DA IMAGEM PRO CLOUDINARY
// ========================================
async function uploadImage(file: File): Promise<string> {
    console.log('Fazendo upload da imagem...')
    
    const cloudName = config.public.cloudnaryName
    const uploadPreset = config.public.uploadPreset
    
    const formDataUpload = new FormData()
    formDataUpload.append('file', file)
    formDataUpload.append('upload_preset', uploadPreset)

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
            method: 'POST',
            body: formDataUpload
        }
    )

    if (!response.ok) {
        throw new Error('Falha no upload da imagem')
    }

    const data = await response.json()
    console.log('Upload concluído!')
    
    return data.secure_url
}

// ========================================
// PROCESSA TUDO: UPLOAD + SALVAR
// ========================================
async function processarTudo() {
    processando.value = true
    erro.value = ''

    try {
        // PASSO 1: Upload da imagem
        console.log('Passo 1/2: Upload da imagem')
        const imageUrl = await uploadImage(dadosCompletos.value.imageFile!)

        // PASSO 2: Salvar no banco
        console.log('Passo 2/2: Salvando no banco')
        await $fetch('/api/cards/create', {
            method: 'POST',
            body: {
                imageUrl,
                title: dadosCompletos.value.title,
                date: dadosCompletos.value.date,
                message: dadosCompletos.value.message
            }
        })

        // SUCESSO! 🎉
        alert('✅ Card criado com sucesso!')
        navigateTo('/dashboard')

    } catch (error: any) {
        console.error('❌ Erro:', error)
        erro.value = error.message || 'Erro ao criar card'
        alert('❌ ' + erro.value)
        
        // Volta pra primeira etapa pra tentar de novo
        etapaAtual.value = 0
        
    } finally {
        processando.value = false
    }
}
</script>

<template>
  <div class="container">
    <!-- ============ PROGRESSO ============ -->
    <div class="progress-bar">
      <div 
        v-for="(titulo, index) in titulosEtapas" 
        :key="index"
        class="step"
        :class="{ 
          active: index === etapaAtual, 
          completed: index < etapaAtual 
        }"
      >
        <div class="step-number">{{ index + 1 }}</div>
        <div class="step-title">{{ titulo }}</div>
      </div>
    </div>

    <!-- ============ ERRO GERAL ============ -->
    <div v-if="erro" class="error-box">
      {{ erro }}
    </div>

    <!-- ============ ETAPA ATUAL ============ -->
    <div v-if="!processando">
      <component 
        :is="etapas[etapaAtual]" 
        :dados-iniciais="dadosCompletos"
        @proximo="irParaProximaEtapa"
      />
      
      <!-- Botão de voltar (exceto na primeira etapa) -->
      <button 
        v-if="etapaAtual > 0"
        @click="voltarEtapa"
        class="btn-voltar"
      >
        ← Voltar
      </button>
    </div>

    <!-- ============ PROCESSANDO ============ -->
    <div v-else class="processing">
      <p>⏳ Processando seu card...</p>
      <p>Aguarde, estamos enviando a imagem e salvando os dados.</p>
    </div>
  </div>
</template>