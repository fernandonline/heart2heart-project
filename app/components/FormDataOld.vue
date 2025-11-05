<script setup lang="ts">
const emit = defineEmits<{
    submit: [data: {
        imageFile: File
        title: string
        date: string
        message: string
    }]
}>()

const props = defineProps<{
  isLoading?: boolean
  error?: string
}>()

const formData = ref({
    imageFile: null as File | null,
    title: '',
    date: '',
    message: ''
})

const isFormValid = computed(() => {
    return !!(
        formData.value.imageFile &&
        formData.value.title.trim() &&
        formData.value.date &&
        formData.value.message.trim()
    )
})

function handleFileSelect(e: Event) {
    const target = e.target as HTMLInputElement
    const file = target.files?.[0]
    
    if (file) {
        formData.value.imageFile = file;
    }
}

function handleSubmit() {
    if (!isFormValid.value) return;
    emit('submit', {
        imageFile: formData.value.imageFile!,
        title: formData.value.title,
        date: formData.value.date,
        message: formData.value.message
    })
}
</script>

<template>
<div class="form-group d-flex flex-column">
    <p>Selecione uma imagem para fazer o upload:</p>
    <input
        id="image"
        type="file"
        @change="handleFileSelect"
        accept="image/*"
        :disabled="isLoading"
    />

    <label for="title">Insira seu título</label>
    <input
      id="title"
      v-model="formData.title"
      type="text"
      placeholder="ex: João e Maria"
      :disabled="isLoading"
    />

    <label for="date">Data *</label>
    <input
      id="date"
      v-model="formData.date"
      type="date"
      :disabled="isLoading"
    />

    <label for="message">Mensagem *</label>
    <textarea
      id="message"
      v-model="formData.message"
      placeholder="Digite sua mensagem..."
      rows="5"
      :disabled="isLoading"
    />

    <div v-if="error" class="error-box"> {{ error }} </div>

    <button
        type="submit"
        @click="handleSubmit"
        :disabled="!isFormValid || isLoading">
        <span v-if="isLoading">Carregando...</span>
        <span v-else>Criar Card</span>
    </button>
</div>




</template>