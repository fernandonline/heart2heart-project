<script setup lang="ts">
import { Heart, QrCode } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";
import BackgroundIndex from "@/components/ui/BackgroundIndex.vue";
function loginWithGoogle() {
  window.location.href = '../auth/google'
}
</script>

<template>
  <BackgroundIndex>
    <div class="container-fluid">

      <div class="row align-items-center g-4">
        <div class="col-lg-7 text-lg-start text-start">
          <h2 class="display-5 fw-bold text-dark mb-3">Surpreenda alguém especial</h2>
          
          <p class="lead text-muted mb-4">
            Crie uma carta digital com imagem, titulo, mensagem e compartilhe seu carinho enviando o QR code com
            <span class="text-danger fw-semibold"> uma surpresa inesquecível</span>
          </p>
          
          <Button @click="loginWithGoogle">
            Criar meu card
            <div class="btn-gradient-overlay"></div>
          </Button>

          <!--
          <div class="d-flex align-items-center justify-content-lg-start justify-content-center gap-2 text-muted small">
            <Heart class="text-danger heart-beat" style="width:16px; height:16px" />
            <span>Um presente especial</span>
            <Heart class="text-danger heart-beat" style="width:16px; height:16px" />
          </div>
          -->
        </div>

        <div class="col-lg-5 d-flex justify-content-center">
          <div class="qr-code-box rounded-3 p-3 position-relative">
            <QrCode class="text-purple" style="width:100%; height:100%;" />
            <Heart class="position-absolute top-0 end-0 translate-middle heart-pink text-danger" style="width:24px; height:24px" />
          </div>
        </div>
      </div>
    </div>

    <div class="decorative-circle circle-1"></div>
    <div class="decorative-circle circle-2"></div>
    <div class="background-orb orb-1"></div>
    <div class="background-orb orb-2"></div>
  </BackgroundIndex>
</template>

<style scoped>
.btn-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05));
  transform: translateX(100%);
  transition: transform 0.5s ease;
  border-radius: 0.75rem;
  z-index: 0;
}

.btn-romantic:hover .btn-gradient-overlay {
  transform: translateX(0);
}

.heart-beat {
  animation: heartbeat 1.5s infinite;
}

.qr-code-box {
  width: 180px;
  height: 180px;
  border: 2px dashed rgba(114, 0, 38, 0.5);
  background: rgba(247, 37, 133, 0.1);
  backdrop-filter: blur(5px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: float 6s ease-in-out infinite;
}

/* Mobile */
@media (max-width: 840px) {
  .qr-code-box {
    width: 150px;
    height: 150px;
    margin-top: 2rem;
  }

  section {
    text-align: start !important;
  }

  .text-center {
    text-align: start !important;
  }

  .col-lg-5 {
    display: flex !important;
    justify-content: center !important;
  }

  .d-flex.align-items-center.justify-content-lg-start.justify-content-center {
    justify-content: flex-start !important;
  }
}
</style>