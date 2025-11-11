<script setup lang="ts">
const emit = defineEmits<{
    proximo: [payload: {imageFile: File}]
}>()

const props = defineProps<{
  dadosIniciais?: any
}>()

const imageFile = ref<File | null>(props.dadosIniciais?.imageFile || null)
const previewUrl = ref('')

function handleFileSelect(e: Event) {
    const target = e.target as HTMLInputElement
    const file = target.files?.[0]
    
    if (file) {
        imageFile.value = file
        previewUrl.value = URL.createObjectURL(file)  
        console.log('Arquivo selecionado:', file.name)
    }
}

function enviar() {
    if (imageFile.value) {
        emit('proximo', { imageFile: imageFile.value })
    }
}
</script>

<template>
  <div class="form-step">
    <h2>Escolha uma imagem</h2>
    
    <input 
      type="file" 
      @change="handleFileSelect" 
      accept="image/*"
      required="true"
    />

    <div v-if="previewUrl" class="preview">
      <img :src="previewUrl" alt="Preview" />
      <p>Imagem selecionada: {{ imageFile?.name }}</p>
    </div>

    <button 
      @click="enviar" 
      :disabled="!imageFile"
      class="btn-proximo"
    >
      Próximo →
    </button>
  </div>
</template>