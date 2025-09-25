<script setup>
import { ref } from 'vue';

const emit = defineEmits(['proximo']);

// --- Variáveis de estado ---
const imageUrl = ref(''); // Armazenará a URL final do Cloudinary
const isUploading = ref(false); // Para feedback ao usuário (ex: mostrar um spinner)
const uploadError = ref(''); // Para mostrar mensagens de erro

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME; 
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

async function handleUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  // Reseta o estado anterior
  isUploading.value = true;
  uploadError.value = '';
  imageUrl.value = '';

  // Cria o corpo da requisição com o arquivo e o upload preset
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);

  try {
    // Faz a chamada para a API do Cloudinary
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    } );

    if (!response.ok) {
      throw new Error('Falha no upload da imagem.');
    }

    const data = await response.json();
    
    // Armazena a URL segura retornada pelo Cloudinary
    imageUrl.value = data.secure_url; 
    console.log('Upload bem-sucedido! URL:', data.secure_url);

  } catch (error) {
    console.error('Erro ao fazer upload:', error);
    uploadError.value = 'Ocorreu um erro ao enviar a imagem. Tente novamente.';
  } finally {
    isUploading.value = false;
  }
}

function enviar() {
  if (imageUrl.value) {
    emit('proximo', { imageUrl: imageUrl.value });
  }
}
</script>

<template>
  <div>
    <p>Selecione uma imagem para fazer o upload:</p>
    <input type="file" @change="handleUpload" accept="image/*" :disabled="isUploading" />

    <!-- Feedback de Upload -->
    <div v-if="isUploading">
      <p>Enviando imagem, por favor aguarde...</p>
      <!-- Você pode adicionar um componente de spinner aqui -->
    </div>

    <!-- Feedback de Sucesso -->
    <div v-if="imageUrl">
      <p style="color: green;">✅Imagem enviada com sucesso!</p>
      <img :src="imageUrl" alt="Pré-visualização da imagem" width="200" />
    </div>
    
    <!-- Feedback de Erro -->
    <p v-if="uploadError" style="color: red;">{{ uploadError }}</p>

    <button @click="enviar" :disabled="!imageUrl || isUploading">
      {{ isUploading ? 'Enviando...' : 'Próximo' }}
    </button>
  </div>
</template>
